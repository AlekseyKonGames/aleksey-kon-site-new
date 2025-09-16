import i18n from 'i18next';
export const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
    
    i18n.changeLanguage(newLanguage).then(() => {
      localStorage.setItem('i18nextLng', newLanguage);
    });
  }