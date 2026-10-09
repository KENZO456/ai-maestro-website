import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';

const KEY = 'aim-cookie-consent';
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };

// Essential cookies only; analytics load only after the visitor accepts.
export function CookieBanner() {
  const [choice, setChoice] = useState(read);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const pick = (v) => {
    try { localStorage.setItem(KEY, v); } catch { /* storage blocked: the choice lasts this visit */ }
    setChoice(v);
  };
  return (
    <>
      {choice === 'all' && <Analytics />}
      {mounted && !choice && (
        <div role="region" aria-label="Cookie notice" className="cookie-banner">
          <p>We use essential cookies to run this site and, with your permission, analytics to improve it.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={() => pick('all')}>Accept</button>
            <button type="button" className="btn btn-ghost" onClick={() => pick('essential')}>Essential only</button>
          </div>
        </div>
      )}
    </>
  );
}
