import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes, 
  Navigate, 
  useParams, 
  useLocation 
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import i18n from './i18n';
import Home from './pages/home/HomePage';
import About from './pages/About/AboutPage';
import Contact from './pages/ContactPage';
import Product from './pages/Product/ProductPage';
import Navbar from './components/macro/navbar/navbar';
import Footer from './components/macro/footer/footer';

// Updated PageWrapper without absolute positioning
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
      style={{ width: '100%' }}  // Removed absolute positioning
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* If the URL does not include a language parameter, redirect based on i18n's current language */}
        <Route path="/:lng/*" element={<LanguageRoutes />} />
        <Route path="/" element={<Navigate to={`/${i18n.language}/`} replace />} />
        <Route path="*" element={<Navigate to={`/${i18n.language}/`} replace />} />
      </Routes>
    </Router>
  );
}

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
    // Flex container for full height layout: Navbar on top, growing content area, and Footer at the bottom
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/* The main content area */}
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route 
              path="/" 
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              } 
            />
            <Route 
              path="/About" 
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              } 
            />
            <Route 
              path="/Contact" 
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              } 
            />
            <Route 
              path="/Product" 
              element={
                <PageWrapper>
                  <Product />
                </PageWrapper>
              } 
            />
            <Route path="*" element={<Navigate to={`/${lng}/`} replace />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
