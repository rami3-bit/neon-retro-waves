import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, getLanguageFromCountry } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Detect language on mount
  useEffect(() => {
    const detectLanguage = async () => {
      // Check localStorage first for user preference
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && ['sv', 'es', 'en'].includes(savedLanguage)) {
        setLanguageState(savedLanguage);
        setIsLoading(false);
        return;
      }

      // Try to detect from IP geolocation
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(3000), // 3 second timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          const detectedLanguage = getLanguageFromCountry(data.country_code);
          setLanguageState(detectedLanguage);
          localStorage.setItem('preferred-language', detectedLanguage);
        }
      } catch (error) {
        // Fallback to browser language
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'sv') {
          setLanguageState('sv');
        } else if (browserLang === 'es') {
          setLanguageState('es');
        }
        console.log('Using browser language fallback:', browserLang);
      }
      
      setIsLoading(false);
    };

    detectLanguage();
  }, []);

  // Set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const langTranslations = translations[language];
    return (langTranslations as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
