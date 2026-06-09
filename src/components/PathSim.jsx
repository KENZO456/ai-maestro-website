import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateRoute(seed, gridW, gridH) {
  const rnd = mulberry32(seed);
  const route = [];
  let x = 0, y = 0;
  route.push([x, y]);
  let steps = Math.floor(gridW * gridH * 0.55) + 8;
  while (steps-- > 0 && (x !== gridW - 1 || y !== gridH - 1)) {
    const horizBias = (gridW - 1 - x) > (gridH - 1 - y) ? 0.65 : 0.35;
    const goHoriz = rnd() < horizBias;
    if (goHoriz && x < gridW - 1) {
      const run = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < run && x < gridW - 1; i++) { x++; route.push([x, y]); }
    } else if (y < gridH - 1) {
      const run = 1 + Math.floor(rnd() * 3);
      for (let i = 0; i < run && y < gridH - 1; i++) { y++; route.push([x, y]); }
    } else if (x < gridW - 1) {
      x++; route.push([x, y]);
    } else break;
  }
  while (x < gridW - 1) { x++; route.push([x, y]); }
  while (y < gridH - 1) { y++; route.push([x, y]); }
  return route;
}

function roundedPath(pts, radius) {
  if (!pts.length) return '';
  if (pts.length === 1) return `M ${pts[0][0]} ${pts[0][1]}`;
  const trimmed = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1];
    const [cx2, cy2] = pts[i];
    const [nx, ny] = pts[i + 1];
    const cross = (cx2 - px) * (ny - cy2) - (cy2 - py) * (nx - cx2);
    if (Math.abs(cross) > 0.001) trimmed.push([cx2, cy2]);
  }
  trimmed.push(pts[pts.length - 1]);
  let d = `M ${trimmed[0][0]} ${trimmed[0][1]}`;
  for (let i = 1; i < trimmed.length - 1; i++) {
    const [x0, y0] = trimmed[i - 1];
    const [x1, y1] = trimmed[i];
    const [x2, y2] = trimmed[i + 1];
    const dx1 = x1 - x0, dy1 = y1 - y0;
    const len1 = Math.hypot(dx1, dy1) || 1;
    const ux1 = dx1 / len1, uy1 = dy1 / len1;
    const dx2 = x2 - x1, dy2 = y2 - y1;
    const len2 = Math.hypot(dx2, dy2) || 1;
    const ux2 = dx2 / len2, uy2 = dy2 / len2;
    const ri = Math.min(radius, len1 / 2, len2 / 2);
    d += ` L ${x1 - ux1 * ri} ${y1 - uy1 * ri} Q ${x1} ${y1} ${x1 + ux2 * ri} ${y1 + uy2 * ri}`;
  }
  const last = trimmed[trimmed.length - 1];
  d += ` L ${last[0]} ${last[1]}`;
  return d;
}

export function PathSim({
  seed = 1, gridW = 6, gridH = 6, width = 320, height = 320,
  stroke = '#1100D8', strokeWidth = 2, showDot = true, showDots = true, scrub = 0.6, style = {},
}) {
  const wrapRef = useRef(null);
  const pathRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  const PAD = strokeWidth * 4;
  const cw = (width - PAD * 2) / (gridW - 1);
  const ch = (height - PAD * 2) / (gridH - 1);
  const pts = generateRoute(seed, gridW, gridH).map(([gx, gy]) => [PAD + gx * cw, PAD + gy * ch]);
  const radius = Math.min(cw, ch) * 0.45;
  const d = roundedPath(pts, radius);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    const dot = dotRef.current;
    const glow = glowRef.current;

    const trig = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top bottom',
      end: 'bottom top',
      scrub,
      onUpdate: (self) => {
        const p = self.progress;
        path.style.strokeDashoffset = len * (1 - p);
        if (showDot && dot) {
          try {
            const pt = path.getPointAtLength(Math.max(0, Math.min(len, len * p)));
            dot.setAttribute('cx', pt.x);
            dot.setAttribute('cy', pt.y);
            if (glow) {
              glow.setAttribute('cx', pt.x);
              glow.setAttribute('cy', pt.y);
              glow.setAttribute('opacity', p > 0.005 && p < 0.995 ? 0.5 : 0);
            }
            dot.setAttribute('opacity', p > 0.005 && p < 0.995 ? 1 : 0);
          } catch (_) {}
        }
      },
    });

    return () => trig.kill();
  }, [d, scrub, showDot]);

  const first = pts[0];
  const last = pts[pts.length - 1];

  return (
    <div ref={wrapRef} style={{ width, height, pointerEvents: 'none', ...style }}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} style={{ overflow: 'visible' }}>
        <path d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" opacity="0.18" strokeDasharray="2 8" />
        <path ref={pathRef} d={d} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        {showDots && (
          <>
            <circle cx={first[0]} cy={first[1]} r={strokeWidth * 1.8} fill={stroke} />
            <circle cx={last[0]} cy={last[1]} r={strokeWidth * 1.8} fill={stroke} />
          </>
        )}
        {showDot && (
          <>
            <circle ref={glowRef} r={strokeWidth * 5} fill={stroke} opacity="0" />
            <circle ref={dotRef} r={strokeWidth * 1.6} fill={stroke} stroke="#FAF8F4" strokeWidth={strokeWidth * 0.5} opacity="0" />
          </>
        )}
      </svg>
    </div>
  );
}
