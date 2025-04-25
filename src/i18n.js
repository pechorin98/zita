// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const detectionOptions = {
  order: ['navigator', 'path', 'cookie', 'localStorage', 'htmlTag'], // Dil tespiti önceliği
  lookupFromPathIndex: 0,                                         // path'ten dil kodu alacak segment
  caches: ['cookie'],                                            // tercihleri cookie'de sakla
  checkWhitelist: true,                                          // sadece supportedLngs içindekileri kabul et
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    supportedLngs: ['en', 'de', 'fr', 'tr'],
    fallbackLng: 'en',      // Geçersiz/eksik dilde 'en' kullan
    debug: false,           // Üretimde kapalı tut
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,    // Çeviri yüklenene dek Suspense fallback göster
    },
  });

export default i18n;
