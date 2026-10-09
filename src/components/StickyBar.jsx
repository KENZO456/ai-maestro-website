import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BookLink } from './BookLink';

// Mobile-only bar; appears after the first scroll and is hidden on the booking page itself.
export function StickyBar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (pathname === '/contact' || !scrolled) return null;
  return (
    <div className="sticky-bar">
      <span>Free 20-minute call. Top three wins on one page.</span>
      <BookLink className="btn btn-primary">Book</BookLink>
    </div>
  );
}
