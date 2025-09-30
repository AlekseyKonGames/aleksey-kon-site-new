import React from "react";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../script/Theme.js';
import { toggleLanguage } from '../script/Language.js';

function Header() {
  const { t, i18n } = useTranslation('header');
  const { isDark, toggleTheme } = useTheme();
  return (
    <>
    <header className="bg-[#fdf6e3] dark:bg-[#14171e] shadow-md rounded-b-3xl z-10  top-0 left-0 p-8 absolute w-full">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center icon-text">
        <h1 className="hidden lg:block text-2xl font-extrabold ">{t('companyName')}</h1>
        <img className="icon-site" src="/images/icons/icon.webp" alt="Logo" />
        </a>
        <nav href="/" className="flex items-center space-x-6">
          <button onClick={toggleTheme}>
            <img src="/images/icons/sunicon.webp" alt="Light Mode" className="dark:hidden dark-button w-7 h-7 md:w-10 md:h-10"/>
          
            <img src="/images/icons/moonicon.webp" alt="Dark Mode" className="hidden dark:block dark-button w-7 h-7 md:w-10 md:h-10"/>
          </button>
          <button onClick={toggleLanguage}  className="dark:text-white text-gray-700 group flex items-center gap-3 font-medium transition-transform hover:scale-110 duration-300">
              <a className="dark-button">
              <svg className="w-7 h-7 md:w-10 md:h-10 text-orange-400 font-extrabold dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>  
              </a>
              <span className="block">{t('lang')}</span>
          </button>
          <a
            href="/projects"
            className="dark:text-white text-gray-700  flex items-center gap-3 font-medium transition-transform hover:scale-110 duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth="1.5"
     stroke="currentColor"
     className="w-7 h-7 md:w-10 md:h-10 text-orange-400 font-extrabold dark:text-white">
  <path strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
            <span className="hidden sm:block">{t('textProject')}</span>
          </a>
        </nav>
      </div>
    </header>
    <div className="mb-29 p-1"></div>
    </>
  );
}

export default Header;
