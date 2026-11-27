export const MAX_NOTEBOOK_BYTES = 250 * 1024;

export type UserIdentity = { userId: string; email: string; displayName: string };

export function identify(request: Request): UserIdentity | null {
  const userId = request.headers.get('oai-authenticated-user-id');
  const email = request.headers.get('oai-authenticated-user-email');
  if (!userId || !email || userId.length > 300 || email.length > 320) return null;
  let displayName = email;
  const fullName = request.headers.get('oai-authenticated-user-full-name');
  if (fullName && request.headers.get('oai-authenticated-user-full-name-encoding') === 'percent-encoded-utf-8') {
    try { displayName = decodeURIComponent(fullName).slice(0, 150) || email; } catch { /* email fallback */ }
  }
  return { userId, email, displayName };
}

export function json(value: unknown, status = 200, extraHeaders?: Record<string, string>) {
  return Response.json(value, {
    status,
    headers: { 'Cache-Control': 'private, no-store', 'Vary': 'Cookie', ...extraHeaders },
  });
}

export function error(message: string, code: string, status: number, extraHeaders?: Record<string, string>) {
  return json({ error: message, code }, status, extraHeaders);
}

export function checkOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const site = request.headers.get('sec-fetch-site');
  if (site === 'cross-site') return false;
  if (!origin) return true;
  try { return new URL(origin).origin === new URL(request.url).origin; } catch { return false; }
}

export class PayloadError extends Error {
  constructor(public code: 'TOO_LARGE' | 'INVALID_JSON' | 'INVALID_CONTENT_TYPE') { super(code); }
}

export async function readJson(request: Request, limit = MAX_NOTEBOOK_BYTES): Promise<unknown> {
  if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/json')) {
    throw new PayloadError('INVALID_CONTENT_TYPE');
  }
  const statedSize = Number(request.headers.get('content-length'));
  if (Number.isFinite(statedSize) && statedSize > limit) throw new PayloadError('TOO_LARGE');
  if (!request.body) throw new PayloadError('INVALID_JSON');
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let bytes = 0;
  let body = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > limit) {
        await reader.cancel();
        throw new PayloadError('TOO_LARGE');
      }
      body += decoder.decode(value, { stream: true });
    }
    body += decoder.decode();
    try { return JSON.parse(body); } catch { throw new PayloadError('INVALID_JSON'); }
  } finally { reader.releaseLock(); }
}

export function payloadErrorResponse(caught: unknown): Response | null {
  if (!(caught instanceof PayloadError)) return null;
  if (caught.code === 'TOO_LARGE') return error('Dữ liệu vượt giới hạn cho phép. Hãy giảm bớt nội dung và thử lại.', caught.code, 413);
  if (caught.code === 'INVALID_CONTENT_TYPE') return error('Định dạng gửi lên không được hỗ trợ.', caught.code, 415);
  return error('Nội dung gửi lên không hợp lệ.', caught.code, 400);
}
