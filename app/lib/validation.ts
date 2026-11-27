import { z } from 'zod';
import type { Notebook } from './types';
import { FAVORITE_CATEGORIES } from './types';
import { normalizeFavoriteName } from './notebook';
import { CURATED_PLACES } from './places';
import { CUISINE_IDS } from './cuisines';

const curatedIds = new Set(CURATED_PLACES.map(place => place.id));

const id = z.string().regex(/^[A-Za-z0-9][A-Za-z0-9_-]{0,119}$/, 'Mã dữ liệu không hợp lệ.');
const optionalId = z.union([id, z.literal('')]);
const amount = z.number().finite().int().min(0).max(100_000_000);
const text = (max: number) => z.string().max(max);
const title = (max = 180) => z.string().trim().min(1).max(max);

export function isHttpsUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && !url.port;
  } catch { return false; }
}

export function isGoogleMapsUrl(value: string): boolean {
  if (!isHttpsUrl(value)) return false;
  const url = new URL(value);
  if (url.hostname === 'maps.app.goo.gl') return url.pathname.length > 1;
  if (url.hostname === 'goo.gl') return url.pathname.startsWith('/maps/');
  if (url.hostname === 'maps.google.com') return true;
  if (!['google.com', 'www.google.com', 'google.com.vn', 'www.google.com.vn'].includes(url.hostname)) return false;
  return url.pathname === '/maps' || url.pathname.startsWith('/maps/');
}

const httpsUrl = z.string().max(2048).refine(isHttpsUrl, 'Liên kết phải bắt đầu bằng https://.');
const optionalHttpsUrl = z.union([httpsUrl, z.literal('')]);
const mapsUrl = z.union([z.literal(''), z.string().max(2048).refine(isGoogleMapsUrl, 'Hãy dùng liên kết Google Maps hợp lệ.')]);
const placeId = z.string().regex(/^[A-Za-z0-9_-]{10,250}$/);

function isDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
const date = z.string().refine(isDate, 'Ngày không hợp lệ.');
const optionalDate = z.union([date, z.literal('')]);
const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Giờ không hợp lệ.');

const sourceSchema = z.object({
  label: title(100), url: httpsUrl, kind: z.enum(['official', 'community', 'guide']).optional(),
}).strict();

const customPlaceSchema = z.object({
  id, name: title(), kind: z.enum(['food', 'coffee', 'dessert', 'drinks']),
  area: text(100), address: text(500), addressSource: text(500), mapUrl: mapsUrl,
  placeId: placeId.optional(), description: text(3000),
  dishes: z.array(title(160)).max(40), budgetMin: amount, budgetMax: amount,
  tags: z.array(title(50)).max(16),
  cuisineTags: z.array(z.enum(CUISINE_IDS)).max(12).refine(value=>new Set(value).size===value.length, 'Nhóm món đang bị trùng.').optional(),
  community: z.object({
    provider: title(60).refine(value => !/google/i.test(value), 'Điểm Google Maps chỉ được hiển thị trực tiếp.'),
    score: z.number().finite().min(0).max(5), count: z.number().int().min(0).max(100_000_000),
    url: httpsUrl, checkedAt: date,
  }).strict().optional(),
  sources: z.array(sourceSchema).max(12), image: optionalHttpsUrl.optional(),
  imageSource: optionalHttpsUrl.optional(), curated: z.literal(false),
  checkedAt: optionalDate, booking: optionalHttpsUrl.optional(),
}).strict().refine(value => value.budgetMax >= value.budgetMin, {
  message: 'Khoảng giá tối đa phải lớn hơn hoặc bằng giá tối thiểu.', path: ['budgetMax'],
});

const preferenceSchema = z.object({
  saved: z.boolean(), status: z.enum(['want', 'visited', 'skip']), note: text(5000),
  myRating: z.number().finite().min(0).max(5), partnerRating: z.number().finite().min(0).max(5),
  visitedAt: optionalDate,
}).strict();

export const favoriteDishSchema = z.object({
  id, title: title(), category: z.enum(FAVORITE_CATEGORIES),
  note: text(3000), placeId: optionalId, often: z.boolean(), enabled: z.boolean(),
}).strict();

export const notebookSchema: z.ZodType<Notebook, z.ZodTypeDef, unknown> = z.object({
  customPlaces: z.array(customPlaceSchema).max(500),
  placePrefs: z.record(id, preferenceSchema).refine(value => Object.keys(value).length <= 1500)
    .refine(value => !Object.keys(value).some(key => ['__proto__', 'constructor', 'prototype'].includes(key))),
  dishes: z.array(z.object({
    id, title: title(), placeId: optionalId, price: amount, note: text(3000), done: z.boolean(),
  }).strict()).max(1000),
  favoriteDishes: z.array(favoriteDishSchema).max(500).default([]),
  plans: z.array(z.object({
    id, title: title(), date, time, budget: amount, notes: text(5000),
    stops: z.array(z.object({ placeId: id, time, note: text(1000) }).strict())
      .min(1, 'Cuộc hẹn cần ít nhất một địa điểm.').max(5, 'Mỗi cuộc hẹn chỉ gồm tối đa 5 địa điểm.'),
    status: z.enum(['planned', 'done']),
  }).strict().refine(value => value.stops.every((stop, index) => index ? stop.time > value.stops[index - 1].time : stop.time >= value.time), {
    message: 'Giờ dừng chân cần theo thứ tự, sau giờ bắt đầu cuộc hẹn.', path: ['stops'],
  })).max(500),
  settings: z.object({ coupleName: title(80), defaultBudget: amount }).strict(),
}).strict().superRefine((value, context) => {
  for (const field of ['customPlaces', 'dishes', 'favoriteDishes', 'plans'] as const) {
    const values = value[field];
    if (new Set(values.map(item => item.id)).size !== values.length) {
      context.addIssue({ code: z.ZodIssueCode.custom, path: [field], message: 'Có mã dữ liệu bị trùng.' });
    }
  }
  value.customPlaces.forEach((place, index) => {
    if (curatedIds.has(place.id)) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['customPlaces', index, 'id'],
      message: 'Mã quán tự thêm bị trùng với quán trong danh sách gợi ý.',
    });
  });
  const availableIds = new Set([...curatedIds, ...value.customPlaces.map(place => place.id)]);
  value.dishes.forEach((dish, index) => {
    if (dish.placeId && !availableIds.has(dish.placeId)) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['dishes', index, 'placeId'],
      message: 'Một món ăn đang liên kết với quán không còn tồn tại. Hãy chọn lại quán hoặc bỏ liên kết.',
    });
  });
  const favoriteNames = new Set<string>();
  value.favoriteDishes.forEach((dish, index) => {
    const name = normalizeFavoriteName(dish.title);
    if (favoriteNames.has(name)) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['favoriteDishes', index, 'title'],
      message: 'Món này đã có trong danh sách yêu thích. Hãy sửa món hiện có hoặc đặt tên để phân biệt.',
    });
    favoriteNames.add(name);
    if (dish.placeId && !availableIds.has(dish.placeId)) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['favoriteDishes', index, 'placeId'],
      message: 'Một món yêu thích đang liên kết với quán không còn tồn tại. Hãy chọn lại quán hoặc bỏ liên kết.',
    });
  });
  value.plans.forEach((plan, planIndex) => {
    if (new Set(plan.stops.map(stop => stop.placeId)).size !== plan.stops.length) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['plans', planIndex, 'stops'],
      message: 'Một quán chỉ được xuất hiện một lần trong mỗi cuộc hẹn.',
    });
    plan.stops.forEach((stop, stopIndex) => {
      if (!availableIds.has(stop.placeId)) context.addIssue({
        code: z.ZodIssueCode.custom, path: ['plans', planIndex, 'stops', stopIndex, 'placeId'],
        message: 'Một điểm dừng trong cuộc hẹn không còn tồn tại. Hãy chọn lại địa điểm.',
      });
    });
  });
  Object.keys(value.placePrefs).forEach(placeId => {
    if (!availableIds.has(placeId)) context.addIssue({
      code: z.ZodIssueCode.custom, path: ['placePrefs', placeId],
      message: 'Ghi chú hoặc đánh giá đang liên kết với quán không còn tồn tại.',
    });
  });
});

export const notebookWriteSchema = z.object({
  state: notebookSchema, revision: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER - 1),
}).strict();

export const mapsRequestSchema = z.union([
  z.object({ query: z.string().trim().min(2).max(180) }).strict(),
  z.object({ placeId }).strict(),
]);

export function notebookValidationMessage(issue: z.ZodIssue): string {
  if (/[À-ỹĐđ]/.test(issue.message)) return issue.message;
  const labels: Record<string, string> = {
    customPlaces: 'Danh sách quán', placePrefs: 'Ghi chú địa điểm', dishes: 'Danh sách món ăn',
    favoriteDishes: 'Danh sách món yêu thích', category: 'Nhóm món', often: 'Món hay ăn', enabled: 'Tham gia vòng quay',
    plans: 'Danh sách cuộc hẹn', settings: 'Cài đặt', name: 'Tên quán', title: 'Tên',
    coupleName: 'Tên sổ hẹn', defaultBudget: 'Ngân sách mặc định', budget: 'Ngân sách',
    budgetMin: 'Giá tối thiểu', budgetMax: 'Giá tối đa', price: 'Giá món',
    date: 'Ngày hẹn', time: 'Giờ hẹn', visitedAt: 'Ngày đã đi', stops: 'Danh sách điểm dừng',
    mapUrl: 'Liên kết Google Maps', placeId: 'Mã địa điểm', id: 'Mã dữ liệu',
    note: 'Ghi chú', notes: 'Ghi chú', description: 'Mô tả', tags: 'Nhãn',
    address: 'Địa chỉ', area: 'Khu vực', myRating: 'Điểm của bạn', partnerRating: 'Điểm của người ấy',
    cuisineTags: 'Nhóm món', sources: 'Nguồn tham khảo', checkedAt: 'Ngày kiểm chứng', revision: 'Phiên bản sổ hẹn',
  };
  const field = [...issue.path].reverse().find(part => typeof part === 'string' && labels[part]) as string | undefined;
  const label = field ? labels[field] : 'Dữ liệu';
  if (issue.code === z.ZodIssueCode.too_small) {
    if (issue.type === 'string' && issue.minimum === 1) return `${label} không được để trống.`;
    if (issue.type === 'number') return `${label} phải từ ${issue.minimum.toLocaleString('vi-VN')} trở lên.`;
    return `${label} chưa đủ nội dung. Vui lòng kiểm tra lại.`;
  }
  if (issue.code === z.ZodIssueCode.too_big) return `${label} vượt giới hạn cho phép (${issue.maximum.toLocaleString('vi-VN')}).`;
  if (issue.code === z.ZodIssueCode.unrecognized_keys) return 'Bản sao lưu có trường dữ liệu chưa được hỗ trợ. Hãy dùng tệp xuất từ ứng dụng này.';
  if (issue.code === z.ZodIssueCode.invalid_enum_value || issue.code === z.ZodIssueCode.invalid_literal) return `${label} có lựa chọn không hợp lệ.`;
  return `${label} chưa đúng định dạng. Vui lòng kiểm tra lại.`;
}
