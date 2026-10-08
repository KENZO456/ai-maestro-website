import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShaderBG } from './ShaderBG';
import { SectionLabel } from './SectionLabel';
import { ARROW } from './SiteHeader';
import { BookLink } from './BookLink';

export const C = { blue: '#1100D8', blueLite: '#E6E4FF', white: '#FAF8F4', ink: '#0B0B2B', cream: '#F0EEE9' };

const TONES = {
  light: { bg: C.white, fg: C.ink },
  cream: { bg: C.cream, fg: C.ink },
  lite: { bg: C.blueLite, fg: C.ink },
  ink: { bg: C.ink, fg: C.white },
};

// Page section with a tone, optional shader background, eyebrow, heading and intro.
export function Section({ id, tone = 'light', shader = false, eyebrow, title, intro, children }) {
  const t = TONES[tone];
  const dark = tone === 'ink';
  return (
    <section id={id} style={{ background: t.bg, color: t.fg, padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)', position: 'relative', overflow: 'hidden', scrollMarginTop: 70 }}>
      {shader && <>
        <ShaderBG intensity={1.0} opacity={0.85} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,11,43,.6), rgba(11,11,43,.82))', pointerEvents: 'none', zIndex: 1 }} />
      </>}
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        {eyebrow && <SectionLabel color={dark ? C.blueLite : undefined}>{eyebrow}</SectionLabel>}
        {title && <h2 data-reveal className="display" style={{ fontSize: 'clamp(2rem, 5.2vw, 3.5rem)', fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1.02, margin: '20px 0 0', maxWidth: 900 }}>{title}</h2>}
        {intro && <p data-reveal style={{ fontSize: 'clamp(1.02rem, 1.5vw, 1.2rem)', lineHeight: 1.6, opacity: .85, marginTop: 20, maxWidth: 680 }}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}

// Tick list. Items are strings, or [bold lead, rest].
export function Bullets({ items, dark, style }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0', display: 'flex', flexDirection: 'column', gap: 14, ...style }}>
      {items.map((it) => (
        <li key={typeof it === 'string' ? it : it[0]} data-reveal style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontSize: '1.05rem', lineHeight: 1.55 }}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 4, color: dark ? C.blueLite : C.blue }}><path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          {typeof it === 'string' ? <span>{it}</span> : <span><strong style={{ fontWeight: 600 }}>{it[0]}</strong> {it[1]}</span>}
        </li>
      ))}
    </ul>
  );
}

// Accordion; every answer is open on first load.
export function Accordion({ items }) {
  const [closed, setClosed] = useState(() => new Set());
  const toggle = (i) => setClosed((p) => { const n = new Set(p); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div>
      {items.map((f, i) => {
        const open = !closed.has(i);
        const id = `acc-${i}-${f.q.length}`;
        return (
          <div key={f.q} className={`acc-item${open ? ' open' : ''}`}>
            <h3 style={{ margin: 0 }}>
              <button type="button" className="acc-head" onClick={() => toggle(i)} aria-expanded={open} aria-controls={id}>
                <span className="acc-q">{f.q}</span>
                <span className="acc-icon"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M7.5 2v11M2 7.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></span>
              </button>
            </h3>
            <div className="acc-body" id={id}><p>{f.a}</p></div>
          </div>
        );
      })}
    </div>
  );
}

// Closing call to action: every page ends on the same button.
export function FinalCTA({ title = 'Find out what your business could run like.', body = 'One free audit. Every inefficiency found. Everything that can run better, will.', button = 'Get my free audit' }) {
  return (
    <section data-section="cta" className="cta-gradient" style={{ color: C.white, padding: 'clamp(5rem, 11vw, 9rem) clamp(1.5rem, 5vw, 5rem)', textAlign: 'center' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 data-reveal className="display" style={{ fontSize: 'clamp(2.3rem, 7.5vw, 5rem)', fontWeight: 700, letterSpacing: '-.045em', lineHeight: .98, margin: 0, maxWidth: 900 }}>{title}</h2>
        <p data-reveal style={{ fontSize: 'clamp(1rem, 1.7vw, 1.25rem)', marginTop: 26, opacity: .92, maxWidth: 560 }}>{body}</p>
        <div data-reveal style={{ marginTop: 40 }}>
          <BookLink className="btn btn-primary" style={{ padding: '20px 32px', fontSize: 16 }}>{button} {ARROW}</BookLink>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ to, children }) {
  return <Link to={to} data-reveal className="text-link">{children} <span aria-hidden="true">→</span></Link>;
}
