import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Восстановление темы из sessionStorage при инициализации
    const saved = sessionStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Применяем текущую тему
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Сохраняем тему
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');

    const handleSystemThemeChange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [isDark]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return { isDark, toggleTheme };
};