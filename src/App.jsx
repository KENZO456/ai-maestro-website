import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FreeAuditPage from './pages/FreeAuditPage';
import SecurityPage from './pages/SecurityPage';
import WhoWeHelpPage from './pages/WhoWeHelpPage';
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
        <Route path="/free-audit" element={<FreeAuditPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/who-we-help" element={<WhoWeHelpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        {/* Retired pages keep working for old links */}
        <Route path="/contact" element={<Navigate to="/free-audit" replace />} />
        <Route path="/pricing" element={<Navigate to="/free-audit" replace />} />
        <Route path="/services" element={<Navigate to="/#what-we-optimise" replace />} />
        <Route path="/blog" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <StickyBar />
      <CookieBanner />
    </>
  );
}
