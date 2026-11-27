export const MAX_WHEEL_ITEMS = 500;
const UINT32_RANGE = 0x1_0000_0000;

function checkCount(count: number) {
  if (!Number.isSafeInteger(count) || count < 1 || count > UINT32_RANGE) {
    throw new RangeError('Số món phải là số nguyên dương hợp lệ.');
  }
}

function secureUint32(): number {
  if (!globalThis.crypto?.getRandomValues) {
    throw new Error('Trình duyệt chưa hỗ trợ chọn ngẫu nhiên an toàn. Hãy mở app bằng HTTPS.');
  }
  const values = new Uint32Array(1);
  globalThis.crypto.getRandomValues(values);
  return values[0];
}

/** Rejection sampling avoids giving any dish a larger chance through modulo bias. */
export function randomWheelIndex(count: number, nextUint32: () => number = secureUint32): number {
  checkCount(count);
  if (count === 1) return 0;
  const limit = Math.floor(UINT32_RANGE / count) * count;
  for (let tries = 0; tries < 128; tries++) {
    const value = nextUint32();
    if (!Number.isInteger(value) || value < 0 || value >= UINT32_RANGE) {
      throw new RangeError('Nguồn ngẫu nhiên không hợp lệ.');
    }
    if (value < limit) return value % count;
  }
  throw new Error('Chưa chọn được món. Hãy bấm quay lại.');
}

export function normalizeAngle(degrees: number): number {
  if (!Number.isFinite(degrees)) throw new RangeError('Góc quay không hợp lệ.');
  return ((degrees % 360) + 360) % 360;
}

/** Sector zero starts at 12 o'clock; CSS positive rotation is clockwise. */
export function indexAtPointer(rotation: number, count: number): number {
  checkCount(count);
  const localAngle = normalizeAngle(-rotation);
  return Math.min(count - 1, Math.floor(localAngle / (360 / count)));
}

/** The pointer lands in the selected sector's center, never on a boundary. */
export function landingRotation(current: number, count: number, selectedIndex: number, turns = 5): number {
  checkCount(count);
  if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= count) {
    throw new RangeError('Món được chọn không thuộc vòng quay.');
  }
  if (!Number.isInteger(turns) || turns < 0 || turns > 100) throw new RangeError('Số vòng quay không hợp lệ.');
  const target = normalizeAngle(-((selectedIndex + 0.5) * 360 / count));
  const distance = normalizeAngle(target - normalizeAngle(current));
  return current + turns * 360 + distance;
}

export function shortWheelLabel(value: string, limit = 20): string {
  const characters = Array.from(value.normalize('NFC'));
  return characters.length <= limit ? value.normalize('NFC') : characters.slice(0, Math.max(1, limit - 1)).join('') + '…';
}
