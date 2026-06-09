// Official "m" mark geometry — taken verbatim from Curve.svg
const MARK_W = 641;
const MARK_H = 549;
const MARK_VB = `0 0 ${MARK_W} ${MARK_H}`;
const MARK_P1 = "M461.07,152.64 C576.76,172.84 557.19,236.62 557.10,432.91 C557.09,458.47 522.92,457.26 522.74,432.91 C521.66,285.95 544.54,183.09 451.23,187.29 C437.10,187.93 397.26,204.94 396.72,246.30 C395.11,370.22 415.65,398.58 375.61,390.89 C325.24,381.22 407.49,233.74 318.90,146.42 C256.09,84.51 98.51,103.86 95.44,251.27 C91.91,421.32 102.93,508.81 94.73,515.47 C70.72,534.97 50.82,509.88 54.29,493.80 C80.84,370.45 0.00,96.92 208.84,74.54 C299.28,64.84 336.62,122.70 349.48,113.98 C517.79,0.00 624.91,141.67 627.99,246.25 C630.64,335.83 621.74,449.64 634.17,493.12 C641.35,518.23 574.21,548.60 591.99,478.26 C592.61,475.79 595.45,247.73 590.03,221.45 C556.92,60.62 355.44,118.53 371.39,155.00 C381.39,177.84 387.01,181.76 407.01,167.73 C428.89,152.38 430.62,158.04 461.07,152.64 Z";
const MARK_P2 = "M229.05,152.62 C328.48,166.50 326.00,227.84 326.32,281.58 C326.83,372.00 339.51,381.73 314.35,390.57 C248.68,413.66 345.88,204.83 238.85,187.50 C113.81,167.26 187.24,439.46 158.67,448.70 C136.44,455.90 131.27,450.92 131.24,427.88 C130.98,237.92 111.06,171.34 229.05,152.62 Z";

export function MaestroMark({ size = 280, stroke = '#FAF8F4', color, style = {}, ...rest }) {
  const fill = color || stroke;
  return (
    <svg viewBox={MARK_VB} width={size} height={(size * MARK_H) / MARK_W} fill={fill} style={style} {...rest}>
      <path fillRule="evenodd" d={MARK_P1} />
      <path fillRule="evenodd" d={MARK_P2} />
    </svg>
  );
}

export function MaestroMarkAnimated({ size = 280, stroke = '#FAF8F4' }) {
  const id = Math.random().toString(36).slice(2);
  return (
    <svg viewBox={MARK_VB} width={size} height={(size * MARK_H) / MARK_W} style={{ overflow: 'visible' }}>
      <style>{`
        .ma-${id} path {
          fill: ${stroke}; stroke: ${stroke}; stroke-width: 3;
          stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 1; stroke-dashoffset: 1; fill-opacity: 0; opacity: 0;
          animation: madraw-${id} 5s cubic-bezier(.65,.05,.25,1) infinite;
        }
        .ma-${id} path:nth-child(2) { animation-delay: .12s; }
        @keyframes madraw-${id} {
          0%   { stroke-dashoffset: 1; fill-opacity: 0; opacity: 0; }
          6%   { opacity: 1; }
          42%  { stroke-dashoffset: 0; fill-opacity: 0; opacity: 1; }
          60%  { stroke-dashoffset: 0; fill-opacity: 1; opacity: 1; }
          86%  { stroke-dashoffset: 0; fill-opacity: 1; opacity: 1; }
          96%  { fill-opacity: 1; opacity: 0; }
          100% { stroke-dashoffset: 1; fill-opacity: 0; opacity: 0; }
        }
      `}</style>
      <g className={`ma-${id}`}>
        <path pathLength="1" fillRule="evenodd" d={MARK_P1} />
        <path pathLength="1" fillRule="evenodd" d={MARK_P2} />
      </g>
    </svg>
  );
}

export function MaestroMark3D({ size = 280, faceColor = '#FAF8F4', sideColor = '#C9C5FF', depth = 32, spin = false }) {
  const layers = [];
  for (let i = 0; i < depth; i++) {
    const isFace = i === depth - 1;
    layers.push(
      <div key={i} style={{ position: 'absolute', inset: 0, transform: `translateZ(${i * 1.6}px)`, transformStyle: 'preserve-3d' }}>
        <MaestroMark size={size} stroke={isFace ? faceColor : sideColor} />
      </div>
    );
  }
  return (
    <div style={{ perspective: '1400px', width: size, height: (size * MARK_H) / MARK_W, position: 'relative' }}>
      <div style={{
        width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d',
        animation: spin ? 'maestro-spin 9s linear infinite' : 'none',
      }}>
        {layers}
      </div>
      <style>{`
        @keyframes maestro-spin {
          0%   { transform: rotateX(-12deg) rotateY(-25deg); }
          50%  { transform: rotateX(-12deg) rotateY(25deg); }
          100% { transform: rotateX(-12deg) rotateY(-25deg); }
        }
      `}</style>
    </div>
  );
}
