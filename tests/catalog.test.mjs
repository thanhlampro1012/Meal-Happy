import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// Stable identifiers from the original catalog: saved places, dish links and
// plans must continue resolving after the discovery list grows or is reordered.
const ORIGINAL_IDS = [
  "pizza-4ps-ben-thanh",
  "cuc-gach-quan",
  "chay-garden-vo-van-tan",
  "bep-me-in",
  "anan-saigon",
  "quan-bui-original",
  "the-workshop",
  "okkio-le-loi",
  "lusine-le-thanh-ton",
  "banh-xeo-46a",
  "pho-mien-ga-ky-dong",
  "maison-marou-calmette"
];
const KINDS = ['food', 'coffee', 'dessert', 'drinks'];
const canonical = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[đĐ]/g, 'd').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const validDate = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
};
const nonempty = value => typeof value === 'string' && value.trim().length > 0;
let passed = 0;
const check = (label, run) => { run(); passed++; console.log(`PASS ${label}`); };
const directory = await mkdtemp(join(tmpdir(), 'meal-happy-catalog-'));

try {
  const bundled = await build({
    stdin: {
      contents: `export { CURATED_PLACES } from './app/lib/places';
        export { CUISINE_IDS, getCuisineIds } from './app/lib/cuisines';
        export { isHttpsUrl, isGoogleMapsUrl } from './app/lib/validation';`,
      resolveDir: process.cwd(), loader: 'ts',
    },
    bundle: true, format: 'esm', platform: 'node', write: false,
  });
  const file = join(directory, 'catalog.mjs');
  await writeFile(file, bundled.outputFiles[0].contents);
  const { CURATED_PLACES: places, CUISINE_IDS, getCuisineIds, isHttpsUrl, isGoogleMapsUrl } = await import(file);
  const safeHttps = (value, location) => {
    assert.ok(nonempty(value), `${location}: missing URL`);
    assert.equal(value, value.trim(), `${location}: surrounding whitespace`);
    assert.doesNotMatch(value, /[\u0000-\u0020\u007f]/, `${location}: unescaped whitespace/control character`);
    assert.ok(isHttpsUrl(value), `${location}: URL must use HTTPS without credentials or a custom port`);
  };

  check('catalog has 110+ places exclusively in the chosen five districts', () => {
    assert.ok(places.length >= 110, `Expected 110 venues; found ${places.length}`);
    const areas = [...new Set(places.map(p => p.area))].sort();
    assert.deepEqual(areas, ['Quận 1','Quận 3','Quận 5','Gò Vấp','Tân Bình'].sort());
    for (const id of ORIGINAL_IDS) {
      assert.equal(places.filter(place => place.id === id).length, 1, `Original venue ${id} must occur exactly once`);
    }
  });

  check('venue identifiers and normalized name/address pairs are unique', () => {
    const ids = new Set();
    const branches = new Map();
    for (const place of places) {
      assert.match(place.id, /^[A-Za-z0-9][A-Za-z0-9_-]{0,119}$/, `Invalid ID: ${place.id}`);
      assert.equal(ids.has(place.id), false, `Duplicate ID: ${place.id}`);
      ids.add(place.id);
      for (const field of ['name', 'address', 'area']) assert.ok(nonempty(place[field]), `${place.id}: missing ${field}`);
      const key = `${canonical(place.name)}|${canonical(place.address)}`;
      assert.equal(branches.has(key), false, `Duplicate branch: ${place.id} and ${branches.get(key)}`);
      branches.set(key, place.id);
      assert.equal(place.curated, true, `${place.id}: curated flag`);
      assert.ok(KINDS.includes(place.kind), `${place.id}: unknown venue kind ${place.kind}`);
    }
  });

  check('every venue has a positive finite integer budget in the correct order', () => {
    for (const place of places) {
      for (const field of ['budgetMin', 'budgetMax']) {
        assert.ok(Number.isSafeInteger(place[field]) && place[field] > 0, `${place.id}: ${field} must be a positive VND amount`);
      }
      assert.ok(place.budgetMin <= place.budgetMax, `${place.id}: minimum budget exceeds maximum`);
    }
  });

  check('venue descriptions, menus, sources and review dates are present and valid', () => {
    for (const place of places) {
      for (const field of ['description', 'addressSource']) assert.ok(nonempty(place[field]), `${place.id}: missing ${field}`);
      assert.ok(validDate(place.checkedAt), `${place.id}: invalid checkedAt date`);
      assert.ok(Array.isArray(place.dishes) && place.dishes.length > 0 && place.dishes.every(nonempty), `${place.id}: missing dish suggestions`);
      assert.ok(Array.isArray(place.tags) && place.tags.every(nonempty), `${place.id}: invalid venue tags`);
      assert.ok(Array.isArray(place.sources) && place.sources.length > 0, `${place.id}: missing sources`);
      for (const [index, source] of place.sources.entries()) {
        assert.ok(nonempty(source.label), `${place.id}: source ${index + 1} needs a label`);
        safeHttps(source.url, `${place.id}.sources[${index}].url`);
        if (source.kind !== undefined) assert.ok(['official', 'community', 'guide'].includes(source.kind), `${place.id}: unknown source kind`);
      }
    }
  });

  check('structured cuisine tags are nonempty, recognized and not duplicated', () => {
    for (const place of places) {
      assert.ok(Array.isArray(place.cuisineTags) && place.cuisineTags.length > 0, `${place.id}: missing cuisine tags`);
      assert.equal(new Set(place.cuisineTags).size, place.cuisineTags.length, `${place.id}: duplicate cuisine tags`);
      assert.ok(place.cuisineTags.every(tag => CUISINE_IDS.includes(tag)), `${place.id}: unknown cuisine tag`);
      const effective = getCuisineIds(place);
      assert.ok(effective.length > 0 && effective.every(tag => CUISINE_IDS.includes(tag)), `${place.id}: invalid effective cuisine filter`);
    }
  });

  check('every Maps link uses an approved Google Maps URL and a nonempty location', () => {
    for (const place of places) {
      safeHttps(place.mapUrl, `${place.id}.mapUrl`);
      assert.ok(isGoogleMapsUrl(place.mapUrl), `${place.id}: not a supported Google Maps URL`);
      const url = new URL(place.mapUrl);
      if (url.pathname.startsWith('/maps/search')) assert.ok(nonempty(url.searchParams.get('query')), `${place.id}: empty Maps search query`);
      if (url.pathname.startsWith('/maps/dir')) assert.ok(nonempty(url.searchParams.get('destination')), `${place.id}: empty Maps destination`);
    }
  });

  check('optional ratings, booking links and image references have safe valid metadata', () => {
    for (const place of places) {
      for (const field of ['booking', 'imageSource']) {
        if (place[field] !== undefined && place[field] !== '') safeHttps(place[field], `${place.id}.${field}`);
      }
      if (place.image) {
        if (place.image.startsWith('/')) {
          assert.match(place.image, /^\/venues\/[A-Za-z0-9_-]+\.(?:jpg|jpeg|png|webp|avif|svg)$/i, `${place.id}: unsafe local image path`);
        } else safeHttps(place.image, `${place.id}.image`);
      }
      if (place.community) {
        assert.ok(nonempty(place.community.provider), `${place.id}: community provider missing`);
        assert.ok(Number.isFinite(place.community.score) && place.community.score >= 0 && place.community.score <= 5, `${place.id}: invalid community score`);
        assert.ok(Number.isSafeInteger(place.community.count) && place.community.count >= 0, `${place.id}: invalid community review count`);
        assert.ok(validDate(place.community.checkedAt), `${place.id}: invalid community check date`);
        safeHttps(place.community.url, `${place.id}.community.url`);
      }
    }
  });

  const countKinds = list => Object.fromEntries(KINDS.map(kind => [kind, list.filter(place => place.kind === kind).length]));
  const budgets = Object.fromEntries([30000, 50000, 70000, 100000].map(limit => {
    const matching = places.filter(place => place.budgetMax <= limit);
    return [limit, { total: matching.length, ...countKinds(matching) }];
  }));
  const areas = Object.fromEntries([...new Set(places.map(place => place.area))]
    .sort((a, b) => a.localeCompare(b, 'vi', { numeric: true }))
    .map(area => [area, places.filter(place => place.area === area).length]));
  console.log(`\n${passed} catalog checks passed.`);
  console.log(`Catalog statistics (budgetMax in VND/person; thresholds are cumulative):\n${JSON.stringify({
    total: places.length,
    addedSinceOriginal: places.length - ORIGINAL_IDS.length,
    kind: countKinds(places),
    foodAndDrink: {
      food: places.filter(place => place.kind === 'food').length,
      coffeeAndDrinks: places.filter(place => ['coffee', 'drinks'].includes(place.kind)).length,
      dessert: places.filter(place => place.kind === 'dessert').length,
    },
    budgetMaxAtMost: budgets,
    area: areas,
  }, null, 2)}`);
} finally {
  await rm(directory, { recursive: true, force: true });
}
