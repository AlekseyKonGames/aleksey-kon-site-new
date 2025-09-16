import React from "react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation('footer');
  return (
    <>
    <footer className="bg-[#fdf6e3] dark:bg-[#14171e] [box-shadow:0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-1px_rgba(0,0,0,0.06)] rounded-t-3xl z-10 p-4 md:p-8">
      <div className="container mx-auto ">
        <p className="text-gray-700 dark:text-white text-center font-medium !mb-0">&copy; 2024-{new Date().getFullYear()} {t('FooterText')}</p>
      </div>
    </footer>
    </>
  );
}