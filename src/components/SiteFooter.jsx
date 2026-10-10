import { Link } from 'react-router-dom';
import { MaestroMark } from './MaestroMark';
import { PathSim } from './PathSim';
import { NAV } from './SiteHeader';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '../lib/config';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', path: 'M4.98 3.5a2 2 0 1 1-.02 4 2 2 0 0 1 .02-4ZM3.4 9h3.2v11.5H3.4V9Zm5.3 0h3.06v1.57h.05c.43-.8 1.48-1.65 3.05-1.65 3.26 0 3.86 2.15 3.86 4.94v6.64h-3.2v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.52-2.26 3.1v5.98H8.7V9Z' },
  { label: 'X', href: 'https://x.com/', path: 'M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.48l7.06-8.07L2.25 3h6.21l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.81L16.47 19.2Z' },
  { label: 'Instagram', href: 'https://www.instagram.com/', path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36Zm5.48-.42a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z' },
];

export function SiteFooter() {
  return (
    <footer style={{ background: '#0B0B2B', color: '#FAF8F4', padding: '4.5rem clamp(1.5rem, 5vw, 5rem) 2rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -40, opacity: .14, pointerEvents: 'none' }}>
        <PathSim seed={207} gridW={4} gridH={5} width={300} height={380} stroke="#E6E4FF" strokeWidth={2.2} />
      </div>
      <div className="wrap footer-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(280px, 1.4fr) repeat(2, minmax(150px, 0.7fr))', gap: 'clamp(2rem, 5vw, 4rem)', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div style={{ maxWidth: 420 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MaestroMark size={38} stroke="#FAF8F4" />
            <span className="serif" style={{ fontSize: 26 }}>AI <span style={{ fontStyle: 'italic' }}>maestro</span></span>
          </div>
          <div className="serif" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', marginTop: 22, opacity: .82, maxWidth: 360, lineHeight: 1.3 }}>
            AI Maestro. In sync.<br />AI and automation for UK small businesses
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', opacity: .5, marginBottom: 18 }}>NAVIGATE</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[...NAV, { label: 'Security', href: '/security' }, { label: 'FAQ', href: '/faq' }].map((n) => (
              <li key={n.label}><Link to={n.href} className="footer-link" style={{ fontSize: 14 }}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.22em', opacity: .5, marginBottom: 18 }}>CONTACT</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li><a href={`mailto:${CONTACT_EMAIL}`} className="footer-link" style={{ fontSize: 14 }}>{CONTACT_EMAIL}</a></li>
            <li><a href={CONTACT_PHONE_HREF} className="footer-link" style={{ fontSize: 14 }}>{CONTACT_PHONE}</a></li>
            <li style={{ fontSize: 14, opacity: .6 }}>Remote-first · UK</li>
            <li style={{ marginTop: 6 }}><Link to="/contact" className="footer-link" style={{ fontSize: 14, opacity: 1, color: '#E6E4FF' }}>Book a free call →</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap mono" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, gap: 16, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 11, letterSpacing: '.2em', opacity: .45 }}>© 2026 AI MAESTRO LTD · ALL RIGHTS RESERVED</div>
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap' }}>
          <a href="#" className="footer-link mono" style={{ fontSize: 11, letterSpacing: '.2em' }}>PRIVACY</a>
          <a href="#" className="footer-link mono" style={{ fontSize: 11, letterSpacing: '.2em' }}>TERMS</a>
          <a href="#" className="footer-link mono" style={{ fontSize: 11, letterSpacing: '.2em' }}>COOKIES</a>
        </div>
      </div>
    </footer>
  );
}
