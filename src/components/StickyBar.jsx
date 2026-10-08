import { useLocation } from 'react-router-dom';
import { BookLink } from './BookLink';

// Mobile-only bar; hidden on the audit form page itself.
export function StickyBar() {
  const { pathname } = useLocation();
  if (pathname === '/free-audit') return null;
  return (
    <div className="sticky-bar">
      <span>Free audit for UK small businesses</span>
      <BookLink className="btn btn-primary">Get mine</BookLink>
    </div>
  );
}
