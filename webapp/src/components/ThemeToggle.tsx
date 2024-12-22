import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('theme');
    return storedPreference ? storedPreference === 'dark' : true;
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center space-x-2 px-4 py-2 bg-background text-primary rounded-lg hover:bg-secondary transition-colors"
    >
      {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
      {/* <span>Toggle {isDarkMode ? 'Light' : 'Dark'} Mode</span> */}
    </button>
  );
};

export default ThemeToggle;
