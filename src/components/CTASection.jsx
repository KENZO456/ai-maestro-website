import { Link } from 'react-router-dom';
import { PathSim } from './PathSim';
import { ARROW } from './SiteHeader';

export function CTASection({
  kicker = 'Start the conversation',
  title,
  sub,
  button = 'Book a Free 20-Minute Discovery Call',
  href = '/contact',
}) {
  return (
    <section data-section="cta" data-screen-label="CTA" style={{ background: '#1100D8', color: '#FAF8F4', padding: 'clamp(5rem, 11vw, 9rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 50, right: 70, opacity: .4, pointerEvents: 'none', zIndex: 0 }}>
        <PathSim seed={101} gridW={4} gridH={4} width={300} height={300} stroke="#FAF8F4" strokeWidth={2.5} />
      </div>
      <div style={{ position: 'absolute', bottom: -40, left: 50, opacity: .3, pointerEvents: 'none', zIndex: 0 }}>
        <PathSim seed={144} gridW={6} gridH={3} width={520} height={260} stroke="#FAF8F4" strokeWidth={2.2} />
      </div>
      <div className="wrap" style={{ position: 'relative', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div data-reveal className="mono" style={{ fontSize: 12, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .75, marginBottom: 26 }}>◯, {kicker}</div>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .92, margin: 0 }}>{title}</h2>
        {sub && <p data-reveal style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', marginTop: 26, opacity: .9, maxWidth: 620 }}>{sub}</p>}
        <div data-reveal style={{ marginTop: 42 }}>
          <Link to={href} className="btn btn-primary" style={{ padding: '20px 32px', fontSize: 16 }}>{button} {ARROW}</Link>
        </div>
      </div>
    </section>
  );
}
