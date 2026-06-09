export function SectionLabel({ children, color, style = {} }) {
  return (
    <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: color || '#1100D8', display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      <span style={{ fontSize: 13 }}>◯</span> {children}
    </div>
  );
}
