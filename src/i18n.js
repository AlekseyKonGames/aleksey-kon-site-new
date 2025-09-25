import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const getDefaultLanguage = () => {
  const systemLang = (navigator.language || navigator.userLanguage || '').split('-')[0];
  return systemLang === 'ru' ? 'ru' : 'en';
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: getDefaultLanguage(),
    debug: true,
    
    // Загрузка переводов
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Настройки неймспейсов
    ns: ['header', 'footer','aboutMe','sectionCompany','sectionAbout','sectionProjects','projects'],
    defaultNS: 'header',
    
    // Автоопределение языка
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    
    // ⭐️ ДОБАВЬТЕ ЭТИ НАСТРОЙКИ:
    interpolation: {
      escapeValue: false, // React уже экранирует HTML
    },
    
    // Обработка отсутствующих ключей
    saveMissing: true,
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation: ${key} in ${lng}/${ns}`);
    },
    
    // Опции загрузки
    load: 'currentOnly',
    
    // Поддержка языков
    supportedLngs: ['ru', 'en'],
    
  })
  .then(() => {
    console.log('i18n initialized successfully');
    console.log('System language:', getSystemLanguage());
    console.log('Default language:', getDefaultLanguage());
    console.log('Current language:', i18n.language);
  })
  .catch((error) => {
    console.error('i18n initialization failed:', error);
  });

export default i18n;