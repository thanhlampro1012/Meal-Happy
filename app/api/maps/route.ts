import { env } from 'cloudflare:workers';
import { mapsRequestSchema } from '../../lib/validation';
import { checkOrigin, error, identify, json, payloadErrorResponse, readJson } from '../_shared';

export const dynamic = 'force-dynamic';

const SEARCH_FIELDS = ['id', 'displayName', 'formattedAddress', 'googleMapsUri', 'attributions'].map(field => `places.${field}`).join(',');
const DETAIL_FIELDS = 'id,displayName,formattedAddress,location,rating,userRatingCount,googleMapsUri,businessStatus,attributions';

export async function POST(request: Request) {
  const user = identify(request);
  if (!user) return error('Đăng nhập để tra cứu Google Maps.', 'AUTH_REQUIRED', 401);
  if (!checkOrigin(request)) return error('Yêu cầu không đến từ ứng dụng này.', 'ORIGIN_NOT_ALLOWED', 403);
  const apiKey = env.GOOGLE_MAPS_API_KEY?.trim();
  if (!apiKey) return error('Chưa kết nối Google Places. Bạn vẫn có thể lưu quán và mở liên kết Google Maps.', 'GOOGLE_MAPS_NOT_CONFIGURED', 503);
  if (!env.DB) return error('Bộ đếm tra cứu chưa sẵn sàng. Vui lòng thử lại sau.', 'STORAGE_UNAVAILABLE', 503);
  try {
    const parsed = mapsRequestSchema.safeParse(await readJson(request, 4096));
    if (!parsed.success) return error('Nhập tên quán từ 2 đến 180 ký tự hoặc chọn một địa điểm hợp lệ.', 'INVALID_MAPS_REQUEST', 400);
    const windowStart = Math.floor(Date.now() / 3_600_000);
    const configuredLimit = Number(env.GOOGLE_MAPS_HOURLY_LIMIT);
    const limit = Number.isInteger(configuredLimit) && configuredLimit >= 1 && configuredLimit <= 100 ? configuredLimit : 20;
    const rateResult = await env.DB.prepare(`INSERT INTO maps_rate_limits (user_id, window_start, request_count)
      VALUES (?, ?, 1) ON CONFLICT(user_id) DO UPDATE SET
      request_count = CASE WHEN maps_rate_limits.window_start = excluded.window_start THEN maps_rate_limits.request_count + 1 ELSE 1 END,
      window_start = excluded.window_start
      WHERE maps_rate_limits.window_start != excluded.window_start OR maps_rate_limits.request_count < ?`)
      .bind(user.userId, windowStart, limit).run();
    if (rateResult.meta.changes !== 1) {
      const retryAfter = String(Math.max(1, Math.ceil(((windowStart + 1) * 3_600_000 - Date.now()) / 1000)));
      return error(`Bạn đã dùng hết ${limit} lượt tra cứu trong giờ này. Có thể mở Google Maps trực tiếp hoặc thử lại sau.`, 'MAPS_RATE_LIMIT', 429, { 'Retry-After': retryAfter });
    }
    const body = 'query' in parsed.data ? {
      textQuery: `${parsed.data.query}, Thành phố Hồ Chí Minh, Việt Nam`,
      languageCode: 'vi', regionCode: 'VN', pageSize: 8,
      locationBias: { circle: { center: { latitude: 10.7769, longitude: 106.7009 }, radius: 25000 } },
    } : undefined;
    const path = 'placeId' in parsed.data
      ? `places/${encodeURIComponent(parsed.data.placeId)}?languageCode=vi&regionCode=VN`
      : 'places:searchText';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    try {
      const upstream = await fetch(`https://places.googleapis.com/v1/${path}`, {
        method: body ? 'POST' : 'GET',
        headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': body ? SEARCH_FIELDS : DETAIL_FIELDS },
        ...(body ? { body: JSON.stringify(body) } : {}),
        signal: controller.signal, redirect: 'error', cache: 'no-store',
      });
      if (!upstream.ok) {
        if (upstream.status === 429) return error('Google Maps đang giới hạn lượt tra cứu. Vui lòng thử lại sau.', 'GOOGLE_QUOTA', 429);
        return error('Chưa lấy được thông tin Google Maps. Kiểm tra kết nối Places API hoặc mở bản đồ trực tiếp.', 'GOOGLE_UNAVAILABLE', 502);
      }
      const data = await upstream.json() as Record<string, unknown>;
      const fetchedAt = new Date().toISOString();
      return json(body ? { places: Array.isArray(data.places) ? data.places : [], fetchedAt } : { place: data, fetchedAt });
    } finally { clearTimeout(timer); }
  } catch (caught) {
    if (caught instanceof Error && caught.name === 'AbortError') return error('Google Maps phản hồi chậm. Vui lòng thử lại.', 'GOOGLE_TIMEOUT', 504);
    return payloadErrorResponse(caught) || error('Tra cứu chưa thành công. Vui lòng thử lại sau.', 'MAPS_ERROR', 503);
  }
}
