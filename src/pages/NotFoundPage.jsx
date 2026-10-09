import { Link } from 'react-router-dom';
import { SiteHeader, ARROW } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { PageHero } from '../components/PageHero';
import { useMeta } from '../hooks/useMeta';

export default function NotFoundPage() {
  useMeta('Page not found | AI Maestro', 'This page could not be found.');
  return (
    <>
      <SiteHeader dark />
      <PageHero eyebrow="404" title="This page is out of sync." minH="70vh" />
      <div style={{ background: '#FAF8F4', padding: '3rem clamp(1.5rem, 5vw, 5rem)' }}>
        <div className="wrap"><Link to="/" className="btn btn-blue">Back to home {ARROW}</Link></div>
      </div>
      <SiteFooter />
    </>
  );
}
