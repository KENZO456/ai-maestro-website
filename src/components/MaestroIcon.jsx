const BLUE = '#1100D8';

export function MaestroIcon({ name, size = 64, color = BLUE, strokeWidth = 5 }) {
  const s = { fill: 'none', stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const dot = (cx, cy, r = 4) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={color} stroke="none" />;

  const icons = {
    assess: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 16 56 V 36 A 14 14 0 0 1 44 36 V 56" />
        <path d="M 30 56 V 44 A 8 8 0 0 1 46 44 V 56" />
        {dot(16, 56)}{dot(46, 56)}{dot(30, 56)}
        <circle cx="58" cy="22" r="6" />
        <path d="M 62 26 L 70 34" />
      </svg>
    ),
    build: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 14 60 V 38 A 12 12 0 0 1 38 38 V 60" />
        <path d="M 42 60 V 26 A 14 14 0 0 1 70 26 V 60" />
        {dot(14, 60)}{dot(38, 60)}{dot(42, 60)}{dot(70, 60)}
      </svg>
    ),
    upskill: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 12 64 H 26 V 50 H 40 V 36 H 54 V 22 H 68" />
        {dot(12, 64)}{dot(68, 22)}
      </svg>
    ),
    orchestrate: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <circle cx="40" cy="40" r="5" fill={color} stroke="none" />
        <path d="M 40 20 A 20 20 0 0 1 60 40" />
        <path d="M 40 60 A 20 20 0 0 1 20 40" />
        {dot(40, 20)}{dot(60, 40)}{dot(40, 60)}{dot(20, 40)}
      </svg>
    ),
    automate: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 22 50 A 18 18 0 1 1 58 50" />
        <path d="M 22 50 L 16 56 M 22 50 L 28 56" />
        {dot(60, 30, 5)}
      </svg>
    ),
    integrate: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 14 58 V 40 A 12 12 0 0 1 38 40 V 58" />
        <path d="M 42 58 V 40 A 12 12 0 0 1 66 40 V 58" />
        {dot(14, 58)}{dot(38, 58)}{dot(42, 58)}{dot(66, 58)}
        <line x1="38" y1="50" x2="42" y2="50" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 40 14 L 44 36 L 66 40 L 44 44 L 40 66 L 36 44 L 14 40 L 36 36 Z" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 16 22 H 64 A 6 6 0 0 1 70 28 V 50 A 6 6 0 0 1 64 56 H 40 L 28 66 V 56 H 16 A 6 6 0 0 1 10 50 V 28 A 6 6 0 0 1 16 22 Z" />
        {dot(28, 40)}{dot(40, 40)}{dot(52, 40)}
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 22 56 A 12 12 0 0 1 28 34 A 14 14 0 0 1 56 34 A 10 10 0 0 1 58 56 Z" />
        {dot(28, 56)}{dot(58, 56)}
      </svg>
    ),
    data: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <ellipse cx="40" cy="22" rx="22" ry="8" />
        <path d="M 18 22 V 42 A 22 8 0 0 0 62 42 V 22" />
        <path d="M 18 42 V 58 A 22 8 0 0 0 62 58 V 42" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 14 64 H 66" />
        <path d="M 14 64 V 16" />
        <path d="M 20 56 L 32 42 L 44 50 L 60 24" />
        {dot(60, 24)}{dot(20, 56)}
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 40 12 L 64 22 V 42 Q 64 60 40 68 Q 16 60 16 42 V 22 Z" />
        <path d="M 30 40 L 38 48 L 52 32" />
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 42 12 L 24 44 H 38 L 34 68 L 56 36 H 42 Z" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <circle cx="40" cy="20" r="5" fill={color} stroke="none" />
        <circle cx="20" cy="56" r="5" fill={color} stroke="none" />
        <circle cx="60" cy="56" r="5" fill={color} stroke="none" />
        <path d="M 40 25 L 22 51" />
        <path d="M 40 25 L 58 51" />
        <path d="M 25 56 H 55" />
      </svg>
    ),
    gear: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <circle cx="40" cy="40" r="14" />
        <circle cx="40" cy="40" r="5" fill={color} stroke="none" />
        {[0,45,90,135,180,225,270,315].map((a) => {
          const r1 = 16, r2 = 22;
          const rad = (a * Math.PI) / 180;
          return <line key={a} x1={40 + Math.cos(rad)*r1} y1={40 + Math.sin(rad)*r1} x2={40 + Math.cos(rad)*r2} y2={40 + Math.sin(rad)*r2} />;
        })}
      </svg>
    ),
    target: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <circle cx="40" cy="40" r="22" />
        <circle cx="40" cy="40" r="12" />
        <circle cx="40" cy="40" r="4" fill={color} stroke="none" />
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 18 56 V 32 A 14 14 0 0 1 40 32 V 56" />
        <path d="M 40 56 V 32 A 14 14 0 0 1 62 32 V 56" />
        {dot(18, 56)}{dot(62, 56)}{dot(40, 56)}
        <path d="M 26 42 H 34" />
        <path d="M 46 42 H 54" />
      </svg>
    ),
    flow: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 12 40 H 22 A 8 8 0 0 1 30 48 V 52 A 8 8 0 0 0 38 60 H 42 A 8 8 0 0 0 50 52 V 28 A 8 8 0 0 1 58 20 H 68" />
        {dot(12, 40)}{dot(68, 20)}
      </svg>
    ),
    headset: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <path d="M 14 50 V 40 A 26 26 0 0 1 66 40 V 50" />
        <rect x="10" y="48" width="14" height="20" rx="4" />
        <rect x="56" y="48" width="14" height="20" rx="4" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 80 80" width={size} height={size} {...s}>
        <circle cx="40" cy="42" r="24" />
        <path d="M 40 28 V 42 L 50 50" />
        <path d="M 40 12 V 18" />
      </svg>
    ),
  };
  return icons[name] || null;
}
