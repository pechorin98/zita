// src/App.jsx
import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useParams,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';

import i18n from './i18n';
import Home from './pages/home/HomePage';
import About from './pages/About/AboutPage';
import Contact from './pages/Contact/ContactPage';
import Product from './pages/Product/ProductPage';
import Catalog from './pages/Catalog/Catalog';
import Cert from './pages/Cert/Cert';
import Rohs from './pages/Rohs/Rohs';
import Emc from './pages/emc/emc';
import Ptc from './pages/Ptc/Ptc';
import Iso from './pages/Iso9001/Iso9001';
import Policy from './pages/Policy/Policy';

import Navbar from './components/macro/navbar/navbar';
import Footer from './components/macro/footer/footer';
import CookiePopup from './components/micro/cookiePopup/CookiePopup';
import LanguageBtn from './components/micro/languageBtn/languageBtn';
import GA4AnalyticsTracker from './GA4AnalyticsTracker';

// 🔥 Google SEO için Structured Data eklemek
const addStructuredData = () => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zita Aydınlatma",
    "url": "https://www.zitaaydinlatma.com.tr",
    "logo": "https://www.zitaaydinlatma.com.tr/logo.webp",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+90 212 678 37 90",
      "contactType": "customer service",
      "areaServed": [ /* ... */ ],
      "availableLanguage": ["Turkish","English","French","German"]
    }],
    "address": { /* ... */ },
    "sameAs": [
      "https://facebook.com/zitaaydinlatma",
      "https://instagram.com/zitaaydinlatma",
      "https://linkedin.com/company/zitaaydinlatma"
    ]
  });
  document.head.appendChild(script);
};

// Sayfa geçiş animasyonu sarmalayıcısı
const PageWrapper = ({ children }) => {
  const variants = {
    initial: { opacity: 0, x: 100 },
    in:      { opacity: 1, x: 0 },
    out:     { opacity: 0, x: -100 }
  };
  const transition = { type: 'tween', ease: 'easeInOut', duration: 0.5 };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// :lng parametresine göre layout
function LanguageRoutes() {
  const { lng } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Eğer URL parametresi yoksa tarayıcı diline veya 'en' fallback’e yönlendir
    if (!lng) {
      const browserLang = navigator.language.split('-')[0];
      const iso = ['en','fr','de','tr'].includes(browserLang) ? browserLang : 'en';
      navigate(`/${iso}/`, { replace: true });
      return;
    }
    // Geçerli dilde çeviriyi yükle
    const lang = ['en','fr','de','tr'].includes(lng) ? lng : 'en';
    i18n.changeLanguage(lang);
  }, [lng, navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <CookiePopup navigate={navigate} lng={lng} />
      <Footer />
      <LanguageBtn />
    </div>
  );
}

function App() {
  useEffect(() => { addStructuredData(); }, []);
  useEffect(() => { document.documentElement.lang = i18n.language; }, [i18n.language]);

  return (
    // Çeviriler hazır olana dek "Yükleniyor…" mesajı göster
    <Suspense fallback={<div></div>}>
      <Router>
        <Helmet>
          <link rel="alternate" href="https://www.zitaaydinlatma.com.tr/tr/" hreflang="tr" />
          <link rel="alternate" href="https://www.zitaaydinlatma.com.tr/en/" hreflang="en" />
          <link rel="alternate" href="https://www.zitaaydinlatma.com.tr/de/" hreflang="de" />
          <link rel="alternate" href="https://www.zitaaydinlatma.com.tr/fr/" hreflang="fr" />
          <link rel="alternate" href="https://www.zitaaydinlatma.com.tr/" hreflang="x-default" />
        </Helmet>
        <GA4AnalyticsTracker />
        <Routes>
          <Route path="/" element={<Navigate to={`/${i18n.language}/`} replace />} />
          <Route path="/:lng" element={<LanguageRoutes />}>
            <Route index             element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="About"      element={<PageWrapper><About /></PageWrapper>} />
            <Route path="Contact"    element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="Product"    element={<PageWrapper><Product /></PageWrapper>} />
            <Route path="Catalog"    element={<PageWrapper><Catalog /></PageWrapper>} />
            <Route path="Certifications" element={<PageWrapper><Cert /></PageWrapper>} />
            <Route path="Rohs"       element={<PageWrapper><Rohs /></PageWrapper>} />
            <Route path="Emc"        element={<PageWrapper><Emc /></PageWrapper>} />
            <Route path="Ptc"        element={<PageWrapper><Ptc /></PageWrapper>} />
            <Route path="Iso"        element={<PageWrapper><Iso /></PageWrapper>} />
            <Route path="Policy"     element={<Policy />} />
            <Route path="*"          element={<Navigate to={`/${i18n.language}/`} replace />} />
          </Route>
          <Route path="*" element={<Navigate to={`/${i18n.language}/`} replace />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
