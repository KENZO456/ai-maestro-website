import { useEffect, useRef, useState } from 'react';

// Score line motif: a thin line with small shapes settling onto it.
// One colour, one stroke weight. Static (already settled) under reduced motion.
const SHAPES = [
  [4, 'c', 12, -16], [10, 'r', 9, 14], [17, 'c', 8, -12], [23, 't', 11, 18], [31, 'r', 10, -14],
  [38, 'c', 12, 12], [46, 'c', 8, -18], [53, 'r', 11, 16], [60, 't', 9, -12], [68, 'c', 10, 14],
  [75, 'r', 8, -16], [82, 'c', 12, 12], [89, 't', 10, -14], [95, 'r', 9, 16],
];

export function ScoreLine({ color = 'currentColor', height = 40, settled = false, strokeWidth = 1.5, style, className = '' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(settled);
  useEffect(() => {
    if (settled || !ref.current || typeof IntersectionObserver === 'undefined') { setInView(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [settled]);
  const mid = height / 2;
  return (
    <svg ref={ref} aria-hidden="true" focusable="false" width="100%" height={height} className={`score-line${inView ? ' in' : ''} ${className}`} style={{ display: 'block', overflow: 'visible', ...style }}>
      <line x1="0" x2="100%" y1={mid} y2={mid} stroke={color} strokeWidth={strokeWidth} opacity=".7" />
      {SHAPES.map(([x, kind, s, dy], i) => {
        const common = { fill: 'none', stroke: color, strokeWidth, className: 'sl-shape', style: { '--dy': `${dy}px`, '--d': `${i * 70}ms` } };
        if (kind === 'c') return <circle key={i} cx={`${x}%`} cy={mid - s / 2 - strokeWidth} r={s / 2} {...common} />;
        if (kind === 'r') return <rect key={i} x={`${x}%`} y={mid - s - strokeWidth} width={s} height={s} rx="1.5" {...common} />;
        return (
          <svg key={i} x={`${x}%`} y={mid - s - strokeWidth} width={s} height={s} overflow="visible">
            <path d={`M0 ${s} L${s / 2} 0 L${s} ${s} Z`} {...common} />
          </svg>
        );
      })}
    </svg>
  );
}
