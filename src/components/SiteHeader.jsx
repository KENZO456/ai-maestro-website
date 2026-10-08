import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MaestroMark } from './MaestroMark';
import { BookLink } from './BookLink';

const NAV = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'What we optimise', href: '/#what-we-optimise' },
  { label: 'Who we help', href: '/who-we-help' },
  { label: 'Security', href: '/security' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10m0 0L8 3m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function SiteHeader({ dark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const markColor = dark ? '#FAF8F4' : '#1100D8';
  const wordColor = dark ? '#FAF8F4' : '#1100D8';

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}${dark ? ' on-dark' : ''}`}>
        <div className="site-header-inner">
          <Link to="/" className="brand-lockup" style={{ color: wordColor }}>
            <MaestroMark size={30} stroke={markColor} />
            <span className="serif" style={{ color: wordColor }}>AI <span style={{ fontStyle: 'italic' }}>maestro</span></span>
          </Link>
          <nav className="nav-links">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className={`nav-link${location.pathname === n.href ? ' is-active' : ''}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <BookLink className="btn btn-ink">Get my free audit {ARROW}</BookLink>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{ color: dark ? '#FAF8F4' : '#0B0B2B' }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M3 7h20M3 13h20M3 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          style={{ position: 'absolute', top: 26, right: 24, background: 'none', border: 'none', color: '#FAF8F4', cursor: 'pointer', padding: 8 }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 6l16 16M22 6L6 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        {NAV.map((n, i) => (
          <Link key={n.label} to={n.href} onClick={() => setOpen(false)}>
            <span className="idx">0{i + 1}</span>{n.label}
          </Link>
        ))}
        <BookLink onClick={() => setOpen(false)} style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', color: '#E6E4FF', borderBottom: 'none', marginTop: 12 }}>Get my free audit →</BookLink>
      </div>
    </>
  );
}

export { ARROW, NAV };
