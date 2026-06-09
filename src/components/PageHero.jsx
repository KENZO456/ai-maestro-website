import { ShaderBG } from './ShaderBG';

const SITE = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B' };

export function PageHero({ eyebrow, title, sub, align = 'left', minH = '70vh' }) {
  return (
    <section data-section="page-hero" data-screen-label="Hero" style={{
      minHeight: minH, position: 'relative', background: SITE.ink, color: SITE.white, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(8rem, 16vh, 11rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 8vh, 6rem)',
      textAlign: align,
    }}>
      <ShaderBG intensity={1.0} opacity={0.92} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(11,11,43,.5), rgba(11,11,43,.78))' }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start' }}>
        <div className="mono" data-reveal style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', color: SITE.blueLite, marginBottom: 26, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="glow" style={{ width: 8, height: 8, borderRadius: '50%', background: SITE.blueLite, display: 'inline-block' }} /> {eyebrow}
        </div>
        <h1 data-reveal className="display" style={{ fontSize: 'clamp(2.5rem, 7.5vw, 5.5rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .95, margin: 0, maxWidth: 1020 }}>{title}</h1>
        {sub && <p data-reveal style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.4rem)', lineHeight: 1.5, marginTop: 28, maxWidth: 720, opacity: .82 }}>{sub}</p>}
      </div>
    </section>
  );
}
