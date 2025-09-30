import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const getDefaultLanguage = () => {
  const systemLang = (navigator.language || navigator.userLanguage || '').split('-')[0];
  return systemLang === 'ru' ? 'ru' : 'en';
};
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('i18nextLng'); 
  return savedLang || getDefaultLanguage(); 
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: getInitialLanguage(),
    fallbackLng: getInitialLanguage(),
    debug: false,
    
    // Загрузка переводов
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    
    // Настройки неймспейсов
    ns: ['header', 'footer','aboutMe','sectionCompany','sectionAbout','sectionProjects','projects','notFound'],
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
    
    
    // Опции загрузки
    load: 'currentOnly',
    
    // Поддержка языков
    supportedLngs: ['ru', 'en'],
    
  })
  

export default i18n;