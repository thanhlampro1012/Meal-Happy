import { env } from 'cloudflare:workers';
import { EMPTY_NOTEBOOK } from '../../lib/types';
import { normalizeNotebook } from '../../lib/notebook';
import { notebookValidationMessage, notebookWriteSchema } from '../../lib/validation';
import { checkOrigin, error, identify, json, payloadErrorResponse, readJson } from '../_shared';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const user = identify(request);
  if (!user) return error('Đăng nhập để mở sổ hẹn của bạn.', 'AUTH_REQUIRED', 401);
  if (!env.DB) return error('Kho lưu trữ chưa sẵn sàng. Vui lòng thử lại sau.', 'STORAGE_UNAVAILABLE', 503);
  try {
    const row = await env.DB.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?')
      .bind(user.userId).first<{ state_json: string; revision: number }>();
    return json(row ? { state: normalizeNotebook(JSON.parse(row.state_json)), revision: row.revision } : { state: EMPTY_NOTEBOOK, revision: 0 });
  } catch {
    return error('Chưa đọc được sổ hẹn. Vui lòng thử lại.', 'STORAGE_ERROR', 503);
  }
}

export async function PUT(request: Request) {
  const user = identify(request);
  if (!user) return error('Đăng nhập để lưu thay đổi.', 'AUTH_REQUIRED', 401);
  if (!checkOrigin(request)) return error('Yêu cầu không đến từ ứng dụng này.', 'ORIGIN_NOT_ALLOWED', 403);
  if (!env.DB) return error('Kho lưu trữ chưa sẵn sàng. Vui lòng thử lại sau.', 'STORAGE_UNAVAILABLE', 503);
  try {
    const input = await readJson(request);
    const parsed = notebookWriteSchema.safeParse(input);
    if (!parsed.success) return error(notebookValidationMessage(parsed.error.issues[0]), 'INVALID_NOTEBOOK', 400);
    const { state, revision } = parsed.data;
    const stateInput = (input as { state: Record<string, unknown> }).state;
    if (!Object.prototype.hasOwnProperty.call(stateInput, 'favoriteDishes') && revision > 0) {
      const current = await env.DB.prepare('SELECT state_json, revision FROM notebooks WHERE user_id = ?')
        .bind(user.userId).first<{ state_json: string; revision: number }>();
      if (current && current.revision !== revision) {
        return error('Sổ hẹn đã được cập nhật ở cửa sổ khác. Tải lại dữ liệu trước khi lưu tiếp.', 'STALE_REVISION', 409);
      }
      if (current && normalizeNotebook(JSON.parse(current.state_json)).favoriteDishes.length > 0) {
        return error('Ứng dụng vừa có danh sách món yêu thích. Hãy tải lại trang trước khi lưu để giữ nguyên những món đã thêm.', 'UPGRADE_REQUIRED', 409);
      }
    }
    const nextRevision = revision + 1;
    const updatedAt = new Date().toISOString();
    const payload = JSON.stringify(state);
    const result = revision === 0
      ? await env.DB.prepare('INSERT INTO notebooks (user_id, state_json, revision, updated_at) VALUES (?, ?, 1, ?) ON CONFLICT(user_id) DO NOTHING')
        .bind(user.userId, payload, updatedAt).run()
      : await env.DB.prepare('UPDATE notebooks SET state_json = ?, revision = ?, updated_at = ? WHERE user_id = ? AND revision = ?')
        .bind(payload, nextRevision, updatedAt, user.userId, revision).run();
    if (result.meta.changes !== 1) return error('Sổ hẹn đã được cập nhật ở cửa sổ khác. Tải lại dữ liệu trước khi lưu tiếp.', 'STALE_REVISION', 409);
    return json({ state, revision: nextRevision, updatedAt });
  } catch (caught) {
    return payloadErrorResponse(caught) || error('Chưa lưu được thay đổi. Dữ liệu trước đó vẫn được giữ nguyên.', 'STORAGE_ERROR', 503);
  }
}
