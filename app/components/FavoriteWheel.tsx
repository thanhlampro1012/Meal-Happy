'use client';

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { RotateCw, Utensils } from 'lucide-react';
import { indexAtPointer, landingRotation, MAX_WHEEL_ITEMS, randomWheelIndex, shortWheelLabel } from '../lib/wheel';

export type WheelItem = { id: string; title: string };
export type FavoriteWheelProps = {
  items: WheelItem[];
  onResult?: (item: WheelItem) => void;
  onSpinningChange?: (value: boolean) => void;
  resetKey?: string;
};

const COLORS = [
  { fill: '#315947', text: '#ffffff' },
  { fill: '#e3c18f', text: '#263e30' },
  { fill: '#7b9a80', text: '#102b1a' },
  { fill: '#ad5b43', text: '#ffffff' },
  { fill: '#45676b', text: '#ffffff' },
  { fill: '#e2dbc7', text: '#263e30' },
];
const CENTER = 200;
const RADIUS = 183;
const SPIN_DURATION = 4200;

function sectorPath(index: number, count: number) {
  const from = (index * 360 / count - 90) * Math.PI / 180;
  const to = ((index + 1) * 360 / count - 90) * Math.PI / 180;
  const x1 = CENTER + RADIUS * Math.cos(from), y1 = CENTER + RADIUS * Math.sin(from);
  const x2 = CENTER + RADIUS * Math.cos(to), y2 = CENTER + RADIUS * Math.sin(to);
  return `M ${CENTER} ${CENTER} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${360 / count > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
}

export default function FavoriteWheel({ items, onResult, onSpinningChange, resetKey = '' }: FavoriteWheelProps) {
  const descriptionId = useId();
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [duration, setDuration] = useState(SPIN_DURATION);
  const [result, setResult] = useState<WheelItem | null>(null);
  const [notice, setNotice] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [snapshot, setSnapshot] = useState<WheelItem[]>([]);
  const timer = useRef<number | null>(null);
  const turnToken = useRef(0);
  const isSpinning = useRef(false);
  const resultCallback = useRef(onResult);
  const spinningCallback = useRef(onSpinningChange);
  const signature = JSON.stringify([resetKey, items.map(item => [item.id, item.title])]);
  const latestSignature = useRef(signature);
  const previousSignature = useRef(signature);

  // Timer callbacks must use the latest committed props, never values from an
  // interrupted render. Update before a pending timer can announce its result.
  useLayoutEffect(() => {
    resultCallback.current = onResult;
    spinningCallback.current = onSpinningChange;
    latestSignature.current = signature;
  }, [onResult, onSpinningChange, signature]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (signature === previousSignature.current) return;
    previousSignature.current = signature;
    const wasSpinning = isSpinning.current;
    turnToken.current++;
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = null;
    isSpinning.current = false;
    setSpinning(false);
    setRotation(0);
    setResult(null);
    setNotice(wasSpinning ? 'Danh sách vừa thay đổi. Bấm quay để chọn từ danh sách mới.' : '');
    if (wasSpinning) spinningCallback.current?.(false);
  }, [signature]);

  useEffect(() => () => {
    turnToken.current++;
    if (timer.current !== null) window.clearTimeout(timer.current);
    if (isSpinning.current) spinningCallback.current?.(false);
    isSpinning.current = false;
  }, []);

  const tooMany = items.length > MAX_WHEEL_ITEMS;
  const duplicateIds = new Set(items.map(item => item.id)).size !== items.length;
  const canSpin = items.length > 0 && !tooMany && !duplicateIds;
  const visibleItems = tooMany ? [] : spinning ? snapshot : items;

  function spin() {
    if (isSpinning.current || !canSpin) return;
    setNotice('');
    setResult(null);
    const pool = items.map(item => ({ id: item.id, title: item.title }));
    const startSignature = signature;
    let selectedIndex: number;
    try { selectedIndex = randomWheelIndex(pool.length); }
    catch (error) {
      setNotice(error instanceof Error ? error.message : 'Chưa quay được. Bạn thử lại nhé.');
      return;
    }
    const shouldReduce = reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = landingRotation(rotation, pool.length, selectedIndex, shouldReduce || pool.length === 1 ? 0 : 5);
    // This also protects the visual result if the drawing convention is changed later.
    if (indexAtPointer(target, pool.length) !== selectedIndex) {
      setNotice('Vòng quay chưa sẵn sàng. Bạn tải lại trang rồi thử nhé.');
      return;
    }
    setSnapshot(pool);
    const currentToken = ++turnToken.current;
    const milliseconds = shouldReduce || pool.length === 1 ? 0 : SPIN_DURATION;
    setDuration(milliseconds);
    isSpinning.current = true;
    setSpinning(true);
    spinningCallback.current?.(true);
    setRotation(target);

    const complete = () => {
      timer.current = null;
      if (currentToken !== turnToken.current || startSignature !== latestSignature.current) return;
      const chosen = pool[selectedIndex];
      isSpinning.current = false;
      setSpinning(false);
      setResult(chosen);
      spinningCallback.current?.(false);
      resultCallback.current?.(chosen);
    };
    // The small margin prevents announcing the result before the CSS transition has ended.
    timer.current = window.setTimeout(complete, milliseconds ? milliseconds + 80 : 0);
  }

  const helper = !items.length
    ? 'Bật ít nhất một món yêu thích để bắt đầu.'
    : tooMany
      ? `Vòng quay hỗ trợ tối đa ${MAX_WHEEL_ITEMS} món. Hãy tắt bớt món trong danh sách.`
      : duplicateIds
        ? 'Danh sách có mã món bị trùng. Tải lại sổ hẹn rồi thử lại.'
        : items.length === 1
          ? 'Đang có một món tham gia. Bấm chọn để chốt món này.'
          : `${items.length} món đang tham gia · Mỗi món có cơ hội như nhau.`;

  return <section className="favorite-wheel" aria-label="Vòng quay món yêu thích">
    <div className="wheel-stage">
      <div className="wheel-pointer" aria-hidden="true"><svg viewBox="0 0 28 34"><path d="M3 3H25L14 29Z" /></svg></div>
      <div className="wheel-disc" style={{ transform: `rotate(${rotation}deg)`, transition: spinning && duration ? `transform ${duration}ms cubic-bezier(.12,.72,.16,1)` : 'none' }}>
        <svg viewBox="0 0 400 400" className="wheel-svg" aria-hidden="true">
          {visibleItems.length === 0 ? <circle cx={CENTER} cy={CENTER} r={RADIUS} className="wheel-empty-circle" /> : visibleItems.map((item, index) => {
            const color = COLORS[index % COLORS.length];
            const angle = (index + 0.5) * 360 / visibleItems.length - 90;
            const label = visibleItems.length <= 12 ? shortWheelLabel(item.title, 16) : String(index + 1);
            return <g key={item.id}>
              {visibleItems.length === 1
                ? <circle cx={CENTER} cy={CENTER} r={RADIUS} fill={color.fill} />
                : <path d={sectorPath(index, visibleItems.length)} fill={color.fill} className="wheel-sector" />}
              <title>{item.title}</title>
              {visibleItems.length <= 36 && <g transform={`translate(${CENTER} ${CENTER}) rotate(${angle})`}>
                <text x={RADIUS * .92} y="0" textAnchor="end" dominantBaseline="middle" fill={color.text} className={visibleItems.length <= 12 ? 'wheel-label' : 'wheel-label wheel-number'}>{label}</text>
              </g>}
            </g>;
          })}
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" className="wheel-outline" />
        </svg>
      </div>
      <div className="wheel-center" aria-hidden="true"><Utensils size={26} strokeWidth={1.6}/><span>Hai đứa</span></div>
    </div>
    <p className="wheel-help" id={descriptionId}>{helper}</p>
    {items.length > 12 && !tooMany && <p className="wheel-density-note">Vòng quay rút gọn nhãn khi có nhiều món; kết quả luôn hiển thị tên đầy đủ.</p>}
    <button type="button" className="button primary wheel-spin-button" onClick={spin} disabled={!canSpin || spinning} aria-describedby={descriptionId}>
      <RotateCw size={18} aria-hidden="true"/>{spinning ? 'Đang quay…' : items.length === 1 ? 'Chọn món này' : result ? 'Quay lần nữa' : 'Quay chọn món'}
    </button>
    {reducedMotion && items.length > 1 && <span className="wheel-motion-note">Đang giảm chuyển động theo cài đặt thiết bị.</span>}
    <div className={'wheel-result' + (result ? ' has-result' : '')}>
      <div role="status" aria-live="polite" aria-atomic="true">{result ? <><span>Hôm nay ăn món này nhé</span><strong>{result.title}</strong></> : notice ? <p className="wheel-error">{notice}</p> : null}</div>
      {!result && !notice && <p aria-hidden="true">{spinning ? 'Chờ một chút để vòng quay dừng lại.' : 'Món được chọn sẽ hiện ở đây.'}</p>}
    </div>
  </section>;
}
