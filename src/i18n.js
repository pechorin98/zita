import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  order: ['navigator', 'path', 'cookie', 'localStorage', 'htmlTag'], // Tarayıcı dilini ilk sırada kontrol et
  lookupFromPathIndex: 0,
  caches: ['cookie'], // Dil tercihini çerezlerde sakla
  checkWhitelist: true, // Sadece desteklenen dilleri kontrol et
};


i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    supportedLngs: ['en', 'de', 'fr',"tr"],
    fallbackLng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
