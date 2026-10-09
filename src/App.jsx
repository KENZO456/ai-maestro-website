import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SecurityPage from './pages/SecurityPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import GroupPage from './pages/GroupPage';
import { GROUPS } from './lib/groups';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';
import { CookieBanner } from './components/CookieBanner';
import { StickyBar } from './components/StickyBar';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a moment so the target section has mounted.
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {GROUPS.map((g) => <Route key={g.slug} path={`/${g.slug}`} element={<GroupPage group={g} />} />)}
        {/* Retired pages keep working for old links */}
        <Route path="/free-audit" element={<Navigate to="/contact" replace />} />
        <Route path="/who-we-help" element={<Navigate to="/services#who" replace />} />
        <Route path="/blog" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <StickyBar />
      <CookieBanner />
    </>
  );
}
