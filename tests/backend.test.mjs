import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFile, readdir } from 'node:fs/promises';
import { build } from 'esbuild';

const db = new DatabaseSync(':memory:');
for (const migration of (await readdir(new URL('../drizzle/', import.meta.url))).filter(name => name.endsWith('.sql')).sort()) {
  db.exec(await readFile(new URL(`../drizzle/${migration}`, import.meta.url), 'utf8'));
}

globalThis.__backendTestEnv = {
  DB: {
    prepare(sql) {
      return { bind(...params) {
        return {
          first() { return db.prepare(sql).get(...params) ?? null; },
          run() { return { meta: { changes: Number(db.prepare(sql).run(...params).changes) } }; },
        };
      } };
    },
  },
};

const bundle = await build({
  stdin: {
    contents: `import * as notebook from './app/api/notebook/route';
      import * as config from './app/api/config/route';
      import * as maps from './app/api/maps/route';
      import * as validation from './app/lib/validation';
      import { normalizeNotebook, normalizeFavoriteName } from './app/lib/notebook';
      import { EMPTY_NOTEBOOK } from './app/lib/types';
      import { CURATED_PLACES } from './app/lib/places';
      export {notebook,config,maps,validation,EMPTY_NOTEBOOK,CURATED_PLACES,normalizeNotebook,normalizeFavoriteName};`,
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, platform: 'node', format: 'esm', write: false,
  plugins: [{ name: 'test-cloudflare-env', setup(builder) {
    builder.onResolve({ filter: /^cloudflare:workers$/ }, () => ({ path: 'cloudflare-env', namespace: 'test' }));
    builder.onLoad({ filter: /.*/, namespace: 'test' }, () => ({ contents: 'export const env = globalThis.__backendTestEnv;', loader: 'js' }));
  } }],
});
const api = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString('base64')}`);
const { notebook, config, maps, validation, EMPTY_NOTEBOOK, CURATED_PLACES, normalizeNotebook, normalizeFavoriteName } = api;
const clean = () => structuredClone(EMPTY_NOTEBOOK);
const req = (method = 'GET', body, user = 'alice', extras = {}) => new Request('https://app.test/api/notebook', {
  method,
  headers: { ...(user ? { 'oai-authenticated-user-id': user, 'oai-authenticated-user-email': `${user}@example.test` } : {}),
    ...(body !== undefined ? { 'Content-Type': 'application/json', Origin: 'https://app.test' } : {}), ...extras },
  ...(body !== undefined ? { body: typeof body === 'string' ? body : JSON.stringify(body) } : {}),
});
let passed = 0;
async function check(label, run) { await run(); passed++; console.log(`PASS ${label}`); }

await check('authentication protects all notebook and Maps routes', async () => {
  assert.equal((await notebook.GET(req('GET', undefined, null))).status, 401);
  assert.equal((await notebook.PUT(req('PUT', { state: clean(), revision: 0 }, null))).status, 401);
  assert.equal((await maps.POST(req('POST', { query: 'Pizza' }, null))).status, 401);
  const oneHeader = req('GET', undefined, null, { 'oai-authenticated-user-id': 'alice' });
  assert.equal((await notebook.GET(oneHeader)).status, 401);
});

await check('configuration is no-store and reveals no secret', async () => {
  const response = await config.GET(req('GET', undefined, null));
  assert.match(response.headers.get('cache-control'), /no-store/);
  assert.deepEqual(await response.json(), { authenticated: false, googleMapsConfigured: false, storage: 'cloud' });
});

await check('new notebook is empty and first save is durable', async () => {
  assert.deepEqual(await (await notebook.GET(req())).json(), { state: clean(), revision: 0 });
  const state = clean(); state.settings.coupleName = 'Hai đứa';
  const response = await notebook.PUT(req('PUT', { state, revision: 0 }));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).revision, 1);
  const stored = await (await notebook.GET(req())).json();
  assert.equal(stored.state.settings.coupleName, 'Hai đứa');
  assert.equal(stored.revision, 1);
});

await check('one user cannot read another user notebook', async () => {
  assert.equal((await (await notebook.GET(req('GET', undefined, 'bob'))).json()).revision, 0);
});

await check('overlapping writes accept exactly one revision', async () => {
  const responses = await Promise.all([
    notebook.PUT(req('PUT', { state: clean(), revision: 1 })),
    notebook.PUT(req('PUT', { state: clean(), revision: 1 })),
  ]);
  assert.deepEqual(responses.map(response => response.status).sort(), [200, 409]);
  assert.equal((await (await notebook.GET(req())).json()).revision, 2);
  assert.equal((await notebook.PUT(req('PUT', { state: clean(), revision: 0 }))).status, 409);
});

await check('cross-origin writes fail without changing state', async () => {
  assert.equal((await notebook.PUT(req('PUT', { state: clean(), revision: 2 }, 'alice', { Origin: 'https://evil.test' }))).status, 403);
  assert.equal((await notebook.PUT(req('PUT', { state: clean(), revision: 2 }, 'alice', { 'Sec-Fetch-Site': 'cross-site' }))).status, 403);
  assert.equal((await (await notebook.GET(req())).json()).revision, 2);
});

await check('invalid budgets, dates, unknown Google fields and duplicate IDs fail', async () => {
  const state = clean(); state.settings.defaultBudget = -1;
  assert.equal((await notebook.PUT(req('PUT', { state, revision: 2 }))).status, 400);
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), formattedAddress: 'copied' }).success, false);
  const dish = { id: 'dish1', title: 'Bánh', placeId: '', price: 100, note: '', done: false };
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), dishes: [dish, dish] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [{ id: 'plan1', title: 'Hẹn', date: '2026-02-31', time: '25:00', budget: 0, notes: '', stops: [], status: 'planned' }] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [{ id: 'plan1', title: 'Hẹn', date: '2026-12-01', time: '18:00', budget: 0, notes: '', stops: [{ placeId: 'one', time: '20:00', note: '' }, { placeId: 'two', time: '19:00', note: '' }], status: 'planned' }] }).success, false);
});

await check('restore accepts coherent curated/custom references and unlinked dishes', async () => {
  const custom = { id: 'custom-place-1', name: 'Quán của mình', kind: 'coffee', area: '', address: '', addressSource: '', mapUrl: '', description: '', dishes: [], budgetMin: 0, budgetMax: 0, tags: [], sources: [], curated: false, checkedAt: '' };
  const pref = { saved: true, status: 'want', note: '', myRating: 0, partnerRating: 0, visitedAt: '' };
  const state = { ...clean(), customPlaces: [custom], placePrefs: { [custom.id]: pref, [CURATED_PLACES[0].id]: pref },
    dishes: [{ id: 'dish1', title: 'Món ngon', placeId: custom.id, price: 0, note: '', done: false }, { id: 'dish2', title: 'Món chưa chọn quán', placeId: '', price: 0, note: '', done: false }],
    plans: [{ id: 'plan1', title: 'Cuối tuần', date: '2026-12-01', time: '18:00', budget: 500000, notes: '', status: 'planned', stops: [{ placeId: CURATED_PLACES[0].id, time: '18:00', note: '' }, { placeId: custom.id, time: '20:00', note: '' }] }],
  };
  assert.equal(validation.notebookSchema.safeParse(state).success, true);
  assert.equal(validation.notebookSchema.safeParse({ ...state, customPlaces: [{ ...custom, id: CURATED_PLACES[0].id }] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, dishes: [{ ...state.dishes[0], placeId: 'removed-place' }] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, placePrefs: { 'removed-place': pref } }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, plans: [{ ...state.plans[0], stops: [{ placeId: 'removed-place', time: '18:00', note: '' }] }] }).success, false);
});

const cuisinePlace = (overrides = {}) => ({
  id: 'custom-cuisine-place', name: 'Quán gia đình', kind: 'food', area: 'Quận 3',
  address: '', addressSource: '', mapUrl: '', description: '', dishes: ['Cơm tấm', 'Bún bò'],
  budgetMin: 30000, budgetMax: 50000, tags: [], sources: [], curated: false, checkedAt: '', ...overrides,
});

await check('legacy custom venues without cuisine tags remain readable and can be saved unchanged', async () => {
  const state = { ...clean(), customPlaces: [cuisinePlace()] };
  db.prepare('INSERT INTO notebooks (user_id, state_json, revision, updated_at) VALUES (?, ?, ?, ?)')
    .run('legacy-cuisines', JSON.stringify(state), 4, '2026-11-27T00:00:00Z');
  const before = db.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?').get('legacy-cuisines');
  const restored = await (await notebook.GET(req('GET', undefined, 'legacy-cuisines'))).json();
  assert.equal(restored.revision, 4);
  assert.deepEqual(restored.state, state);
  assert.equal(Object.hasOwn(restored.state.customPlaces[0], 'cuisineTags'), false);
  assert.deepEqual(db.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?').get('legacy-cuisines'), before);
  const saved = await notebook.PUT(req('PUT', { state: restored.state, revision: 4 }, 'legacy-cuisines'));
  assert.equal(saved.status, 200);
  assert.deepEqual((await saved.json()).state, state);
});

await check('custom cuisine tags survive creation, editing, reload and explicit clearing', async () => {
  const state = { ...clean(), customPlaces: [cuisinePlace({ cuisineTags: ['com-tam', 'bun-bo'] })] };
  const created = await notebook.PUT(req('PUT', { state, revision: 0 }, 'cuisine-owner'));
  assert.equal(created.status, 200);
  const canonical = await created.json();
  assert.deepEqual(canonical.state.customPlaces[0].cuisineTags, ['com-tam', 'bun-bo']);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'cuisine-owner'))).json()).state, state);
  const edited = { ...state, customPlaces: [cuisinePlace({ cuisineTags: ['pho', 'chay'] })] };
  assert.equal((await notebook.PUT(req('PUT', { state: edited, revision: 1 }, 'cuisine-owner'))).status, 200);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'cuisine-owner'))).json()).state.customPlaces[0].cuisineTags, ['pho', 'chay']);
  const cleared = { ...edited, customPlaces: [cuisinePlace({ cuisineTags: [] })] };
  assert.equal((await notebook.PUT(req('PUT', { state: cleared, revision: 2 }, 'cuisine-owner'))).status, 200);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'cuisine-owner'))).json()).state.customPlaces[0].cuisineTags, []);
});

await check('unknown, duplicate and malformed cuisine tags are rejected without changing saved data', async () => {
  const stored = await (await notebook.GET(req('GET', undefined, 'cuisine-owner'))).json();
  for (const cuisineTags of [
    ['com-tam', 'made-up-cuisine'], ['pho', 'pho'], ['Phở'], 'pho', null,
    ['com-tam', 'com', 'bun', 'bun-bo', 'pho', 'hu-tieu', 'banh-mi', 'banh-cuon', 'banh-xeo', 'mi', 'banh-canh', 'chao-sup', 'lau'],
  ]) {
    const state = { ...stored.state, customPlaces: [cuisinePlace({ cuisineTags })] };
    const response = await notebook.PUT(req('PUT', { state, revision: stored.revision }, 'cuisine-owner'));
    assert.equal(response.status, 400, JSON.stringify(cuisineTags));
    assert.equal((await response.json()).code, 'INVALID_NOTEBOOK');
  }
  assert.deepEqual(await (await notebook.GET(req('GET', undefined, 'cuisine-owner'))).json(), stored);
});

await check('distinct plan stops cannot share a time and valid consecutive minutes still save', async () => {
  const plan = { id: 'strict-time-plan', title: 'Buổi hẹn', date: '2026-12-01', time: '18:00', budget: 100000, notes: '', status: 'planned',
    stops: [{ placeId: CURATED_PLACES[0].id, time: '18:00', note: '' }, { placeId: CURATED_PLACES[1].id, time: '18:00', note: '' }],
  };
  const state = { ...clean(), plans: [plan] };
  const rejected = await notebook.PUT(req('PUT', { state, revision: 0 }, 'strict-time-owner'));
  assert.equal(rejected.status, 400);
  assert.match((await rejected.json()).error, /Giờ dừng chân/);
  assert.equal((await (await notebook.GET(req('GET', undefined, 'strict-time-owner'))).json()).revision, 0);
  const valid = { ...state, plans: [{ ...plan, stops: [plan.stops[0], { ...plan.stops[1], time: '18:01' }] }] };
  const saved = await notebook.PUT(req('PUT', { state: valid, revision: 0 }, 'strict-time-owner'));
  assert.equal(saved.status, 200);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'strict-time-owner'))).json()).state.plans, valid.plans);
});

await check('imported plans require one to five unique existing stops', async () => {
  const plan = { id: 'plan1', title: 'Cuối tuần', date: '2026-12-01', time: '18:00', budget: 500000, notes: '', status: 'planned', stops: [] };
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [plan] }).success, false);
  const stop = { placeId: CURATED_PLACES[0].id, time: '18:00', note: '' };
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [{ ...plan, stops: [stop] }] }).success, true);
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [{ ...plan, stops: [stop, { ...stop, time: '20:00' }] }] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...clean(), plans: [{ ...plan, stops: CURATED_PLACES.slice(0, 6).map(place => ({ ...stop, placeId: place.id })) }] }).success, false);
});

await check('invalid saves report a specific Vietnamese correction', async () => {
  const state = clean(); state.settings.defaultBudget = -1;
  const response = await notebook.PUT(req('PUT', { state, revision: 2 }));
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /Ngân sách mặc định/);
  const emptyPlan = { id: 'plan1', title: 'Hẹn', date: '2026-12-01', time: '18:00', budget: 0, notes: '', status: 'planned', stops: [] };
  const planResponse = await notebook.PUT(req('PUT', { state: { ...clean(), plans: [emptyPlan] }, revision: 2 }));
  assert.equal((await planResponse.json()).error, 'Cuộc hẹn cần ít nhất một địa điểm.');
});

const favorite = (overrides = {}) => ({
  id: 'favorite-bun-bo', title: 'Bún bò', category: 'Món chính', note: 'Ít cay',
  placeId: '', often: true, enabled: true, ...overrides,
});

await check('legacy notebooks normalize without changing saved records or revision', async () => {
  const legacy = clean(); delete legacy.favoriteDishes;
  legacy.settings.coupleName = 'Sổ cũ của hai đứa';
  legacy.dishes = [{ id: 'old-dish', title: 'Bánh flan', placeId: '', price: 25000, note: 'Ít ngọt', done: true }];
  db.prepare('INSERT INTO notebooks (user_id, state_json, revision, updated_at) VALUES (?, ?, ?, ?)')
    .run('legacy-reader', JSON.stringify(legacy), 7, '2026-11-27T00:00:00Z');
  const before = db.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?').get('legacy-reader');
  const read = await (await notebook.GET(req('GET', undefined, 'legacy-reader'))).json();
  assert.equal(read.revision, 7);
  assert.deepEqual(read.state, { ...legacy, favoriteDishes: [] });
  assert.deepEqual(db.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?').get('legacy-reader'), before);
  assert.deepEqual(normalizeNotebook(legacy), read.state);
  assert.equal(validation.notebookSchema.safeParse(legacy).success, true);
  const saved = await notebook.PUT(req('PUT', { state: legacy, revision: 7 }, 'legacy-reader'));
  assert.equal(saved.status, 200);
  assert.deepEqual((await saved.json()).state, read.state);
});

await check('favorite dish creation, editing, wheel inclusion and deletion persist', async () => {
  const state = clean();
  state.favoriteDishes = [favorite({ title: '  Bún bò  ', placeId: CURATED_PLACES[0].id })];
  const created = await notebook.PUT(req('PUT', { state, revision: 0 }, 'favorite-owner'));
  assert.equal(created.status, 200);
  const canonical = await created.json();
  assert.equal(canonical.state.favoriteDishes[0].title, 'Bún bò');
  assert.equal(canonical.revision, 1);
  const edited = structuredClone(canonical.state);
  edited.favoriteDishes[0] = { ...edited.favoriteDishes[0], often: false, enabled: false, note: 'Không cay, nhiều rau' };
  assert.equal((await notebook.PUT(req('PUT', { state: edited, revision: 1 }, 'favorite-owner'))).status, 200);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'favorite-owner'))).json()).state.favoriteDishes, edited.favoriteDishes);
  const removed = { ...edited, favoriteDishes: [] };
  assert.equal((await notebook.PUT(req('PUT', { state: removed, revision: 2 }, 'favorite-owner'))).status, 200);
  assert.deepEqual((await (await notebook.GET(req('GET', undefined, 'favorite-owner'))).json()).state.favoriteDishes, []);
});

await check('valid long wishlist dishes retain full titles and notes when added to favorites', async () => {
  const dish = { id: 'long-wishlist-dish', title: 'Món '.padEnd(180, 'đ'), placeId: '', price: 50000, note: 'Ghi chú đầy đủ: '.padEnd(3000, 'ấ'), done: true };
  const original = { ...clean(), dishes: [dish] };
  const sourceSaved = await notebook.PUT(req('PUT', { state: original, revision: 0 }, 'long-dish-owner'));
  assert.equal(sourceSaved.status, 200);
  const source = await sourceSaved.json();
  assert.deepEqual(source.state.dishes[0], dish);
  const copied = favorite({ id: 'long-favorite-dish', title: dish.title, note: dish.note, placeId: dish.placeId });
  const saved = await notebook.PUT(req('PUT', { state: { ...source.state, favoriteDishes: [copied] }, revision: source.revision }, 'long-dish-owner'));
  assert.equal(saved.status, 200);
  const canonical = await saved.json();
  assert.deepEqual(canonical.state.favoriteDishes[0], copied);
  const restored = (await (await notebook.GET(req('GET', undefined, 'long-dish-owner'))).json()).state;
  assert.deepEqual(restored.dishes[0], dish);
  assert.deepEqual(restored.favoriteDishes[0], copied);
  assert.equal(restored.favoriteDishes[0].title.length, 180);
  assert.equal(restored.favoriteDishes[0].note.length, 3000);
});

await check('favorites reject duplicate names, identifiers, invalid references and oversized fields', async () => {
  assert.equal(normalizeFavoriteName('  BÚN   BÒ '), 'bun bo');
  const state = { ...clean(), favoriteDishes: [favorite()] };
  assert.equal(validation.notebookSchema.safeParse(state).success, true);
  assert.equal(validation.notebookSchema.safeParse({ ...state, favoriteDishes: [favorite(), favorite({ title: 'Phở' })] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, favoriteDishes: [favorite(), favorite({ id: 'another-id', title: '  BUN    BO  ' })] }).success, false);
  for (const change of [
    { title: '' }, { title: 'x'.repeat(181) }, { note: 'x'.repeat(3001) },
    { category: 'Invalid' }, { enabled: 'yes' }, { often: 1 },
    { placeId: 'deleted-place' }, { formattedAddress: 'copied Google data' },
  ]) assert.equal(validation.notebookSchema.safeParse({ ...state, favoriteDishes: [favorite(change)] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, favoriteDishes: Array.from({ length: 501 }, (_, i) => favorite({ id: `favorite-${i}`, title: `Món ${i}` })) }).success, false);
  const normalized = normalizeNotebook({ ...clean(), favoriteDishes: null });
  assert.equal(normalized.favoriteDishes, null);
  assert.equal(validation.notebookSchema.safeParse(normalized).success, false);
});

await check('legacy clients cannot erase favorites even with the current revision', async () => {
  const state = { ...clean(), favoriteDishes: [favorite()] };
  assert.equal((await notebook.PUT(req('PUT', { state, revision: 0 }, 'protected-favorites'))).status, 200);
  const legacy = { ...state }; delete legacy.favoriteDishes;
  legacy.settings = { ...legacy.settings, coupleName: 'A legacy tab changed this' };
  const rejected = await notebook.PUT(req('PUT', { state: legacy, revision: 1 }, 'protected-favorites'));
  assert.equal(rejected.status, 409);
  assert.equal((await rejected.json()).code, 'UPGRADE_REQUIRED');
  const after = await (await notebook.GET(req('GET', undefined, 'protected-favorites'))).json();
  assert.equal(after.revision, 1);
  assert.deepEqual(after.state, state);
  // Explicitly normalized legacy restore is intentional and may clear favorites.
  const restored = await notebook.PUT(req('PUT', { state: normalizeNotebook(legacy), revision: 1 }, 'protected-favorites'));
  assert.equal(restored.status, 200);
  assert.deepEqual((await restored.json()).state.favoriteDishes, []);
});

await check('favorite references can be safely detached when a custom venue is deleted', async () => {
  const custom = { id: 'favorite-custom-place', name: 'Quán mình hay ăn', kind: 'food', area: '', address: '', addressSource: '', mapUrl: '', description: '', dishes: [], budgetMin: 0, budgetMax: 0, tags: [], sources: [], curated: false, checkedAt: '' };
  const state = { ...clean(), customPlaces: [custom], favoriteDishes: [favorite({ placeId: custom.id })] };
  assert.equal(validation.notebookSchema.safeParse(state).success, true);
  assert.equal(validation.notebookSchema.safeParse({ ...state, customPlaces: [] }).success, false);
  assert.equal(validation.notebookSchema.safeParse({ ...state, customPlaces: [], favoriteDishes: state.favoriteDishes.map(dish => ({ ...dish, placeId: '' })) }).success, true);
});

await check('Maps links reject executable URLs and lookalike domains', async () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,hi', 'https://google.com.evil.test/maps', 'https://www.google.com@evil.test/maps', 'https://evil.test/?q=maps.google.com', 'https://google.com/search?q=hello']) {
    assert.equal(validation.isGoogleMapsUrl(url), false, url);
  }
  for (const url of ['https://www.google.com/maps/search/?api=1&query=Pizza', 'https://maps.app.goo.gl/abcdef', 'https://goo.gl/maps/abcdef', 'https://maps.google.com/?q=Pizza']) {
    assert.equal(validation.isGoogleMapsUrl(url), true, url);
  }
});

await check('payload bounds and content types fail before save', async () => {
  assert.equal((await notebook.PUT(req('PUT', JSON.stringify({ value: 'x'.repeat(260 * 1024) })))).status, 413);
  assert.equal((await notebook.PUT(req('PUT', '{bad json'))).status, 400);
  assert.equal((await notebook.PUT(req('PUT', '{}', 'alice', { 'Content-Type': 'text/plain' }))).status, 415);
});

await check('no-key Maps state is explicit', async () => {
  const response = await maps.POST(req('POST', { query: 'Pizza' }));
  assert.equal(response.status, 503);
  assert.equal((await response.json()).code, 'GOOGLE_MAPS_NOT_CONFIGURED');
});

await check('Google proxy uses fixed upstream and bounded quota with no key leakage', async () => {
  globalThis.__backendTestEnv.GOOGLE_MAPS_API_KEY = 'test-secret';
  globalThis.__backendTestEnv.GOOGLE_MAPS_HOURLY_LIMIT = '2';
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url, options });
    return Response.json(url.includes('searchText') ? { places: [{ id: 'ChIJtestplace123', formattedAddress: 'Ephemeral address' }] } : { id: 'ChIJtestplace123', rating: 4.5, userRatingCount: 100 });
  };
  try {
    const result = await maps.POST(req('POST', { query: 'Pizza' }));
    assert.equal(result.status, 200);
    const output = await result.text();
    assert.match(output, /Ephemeral address/); assert.doesNotMatch(output, /test-secret/);
    assert.equal(calls[0].url, 'https://places.googleapis.com/v1/places:searchText');
    assert.equal(calls[0].options.headers['X-Goog-Api-Key'], 'test-secret');
    assert.equal(calls[0].options.redirect, 'error');
    assert.doesNotMatch(calls[0].options.headers['X-Goog-FieldMask'], /rating/);
    const detail = await maps.POST(req('POST', { placeId: 'ChIJtestplace123' }));
    assert.equal(detail.status, 200);
    assert.match(calls[1].options.headers['X-Goog-FieldMask'], /rating/);
    const limit = await maps.POST(req('POST', { query: 'Pizza' }));
    assert.equal(limit.status, 429); assert.ok(Number(limit.headers.get('retry-after')) > 0);
    assert.equal(calls.length, 2);
    assert.equal(db.prepare('SELECT request_count FROM maps_rate_limits WHERE user_id = ?').get('alice').request_count, 2);
    assert.doesNotMatch(db.prepare('SELECT state_json FROM notebooks WHERE user_id = ?').get('alice').state_json, /Ephemeral address|userRatingCount|test-secret/);
  } finally { globalThis.fetch = originalFetch; }
});

await check('Google request schema does not allow arbitrary endpoints or mixed requests', async () => {
  assert.equal(validation.mapsRequestSchema.safeParse({ query: 'Pizza', url: 'https://evil.test' }).success, false);
  assert.equal(validation.mapsRequestSchema.safeParse({ query: 'Pizza', placeId: 'ChIJtestplace123' }).success, false);
  assert.equal(validation.mapsRequestSchema.safeParse({ placeId: '../../admin' }).success, false);
});

db.close();
console.log(`\n${passed} backend checks passed.`);
