import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  useParams,
  useLocation
} from 'react-router-dom';
import ReactGA from "react-ga4";
import { AnimatePresence, motion } from 'framer-motion';
import i18n from './i18n';
import Home from './pages/home/HomePage';
import About from './pages/About/AboutPage';
import Contact from './pages/Contact/ContactPage';
import Product from './pages/Product/ProductPage';
import Navbar from './components/macro/navbar/navbar';
import Footer from './components/macro/footer/footer';
import Catalog from './pages/Catalog/Catalog';
import Cert from './pages/Cert/Cert';
import Rohs from './pages/Rohs/Rohs';
import Emc from './pages/emc/emc';
import Ptc from './pages/Ptc/Ptc';
import Iso from './pages/Iso9001/Iso9001';
import GA4AnalyticsTracker from './GA4AnalyticsTracker';
import LanguageBtn from './components/micro/languageBtn/languageBtn';
import { Helmet } from 'react-helmet';

// 🔥 Inject Structured Data for Google SEO
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
      "areaServed": [
        "TR", "DE", "FR", "ES", "IT", "NL", "BE", "UK", "SE", "NO", "FI", "DK", "PL",
        "CZ", "HU", "SK", "RO", "BG", "GR", "PT", "IE", "CH", "AT", "HR", "SI", "MT", "CY",
        "EG", "DZ", "MA", "TN", "LY", "SD", "SS", "MR", "SN", "GN", "ML", "BF", "NE", "TD", "ER", "DJ",
        "IL", "SA", "AE", "KW", "QA", "BH", "OM", "YE", "JO", "SY", "LB", "IQ", "IR", "PK"
      ],

      "availableLanguage": ["Turkish", "English", "French", "German"]
    }],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yarımburgaz Mah. Ülkü Sk. No: 37/A Giriş Kat Altınşehir",
      "addressLocality": "Küçükçekmece",
      "addressRegion": "İstanbul",
      "postalCode": "34306",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://facebook.com/zitaaydinlatma",
      "https://instagram.com/zitaaydinlatma",
      "https://linkedin.com/company/zitaaydinlatma"
    ]
  });

  document.head.appendChild(script);
};

// Animate edilecek sayfa wrapper'ı
const PageWrapper = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 }
  };
  const pageTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

// Üst route altında render edilecek layout
function LanguageRoutes() {
  const { lng } = useParams();
  const location = useLocation();

  useEffect(() => {
    const preferredLanguage = lng || navigator.language.split('-')[0];
    if (['en', 'fr', 'de', 'tr'].includes(preferredLanguage)) {
      i18n.changeLanguage(preferredLanguage);
    } else {
      i18n.changeLanguage('en');
    }
  }, [lng]);



  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/* İçerik alanı: AnimatePresence ile geçiş animasyonu */}
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
      <LanguageBtn />
    </div>
  );
}

function App() {
  useEffect(() => {
    addStructuredData();
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language; // Set <html lang="currentLanguage">
  }, [i18n.language]);
  return (
    <Router>
      <GA4AnalyticsTracker />
      <Routes>
        {/* Eğer URL’de dil parametresi yoksa mevcut i18n dili ile yönlendir */}
        <Route path="/" element={<Navigate to={`/${i18n.language}/`} replace />} />
        {/* Dil parametresi ile başlayan route */}
        <Route path="/:lng" element={<LanguageRoutes />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="About" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="Contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="Product" element={<PageWrapper><Product /></PageWrapper>} />
          <Route path="Catalog" element={<PageWrapper><Catalog /></PageWrapper>} />
          <Route path="Certifications" element={<PageWrapper><Cert /></PageWrapper>} />
          <Route path="Rohs" element={<PageWrapper><Rohs /></PageWrapper>} />
          <Route path="Emc" element={<PageWrapper><Emc /></PageWrapper>} />
          <Route path="Ptc" element={<PageWrapper><Ptc /></PageWrapper>} />
          <Route path="Iso" element={<PageWrapper><Iso /></PageWrapper>} />
          <Route path="*" element={<Navigate to={`/${i18n.language}/`} replace />} />
        </Route>
        <Route path="*" element={<Navigate to={`/${i18n.language}/`} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
