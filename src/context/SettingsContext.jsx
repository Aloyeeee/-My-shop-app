import { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('myshop-language');
    return savedLanguage ? savedLanguage : 'ua'; 
  });

  
  useEffect(() => {
    localStorage.setItem('myshop-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ua' ? 'en' : 'ua'));
  };

  return (
    <SettingsContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);