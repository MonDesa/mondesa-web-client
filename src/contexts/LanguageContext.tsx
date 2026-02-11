import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTranslation } from '../constants/translations';

export type Language = 'pt' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
};

const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem('mondesa-language') as Language;
    return stored || getBrowserLanguage();
};

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    // Initialize with 'en' to match pre-rendered HTML and avoid hydration mismatch
    const [language, setLanguageState] = useState<Language>('en');

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('mondesa-language', lang);
        }
    };

    const t = (key: string): string => {
        return getTranslation(key, language);
    };

    // After hydration, update to user's preferred language
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLanguageState(getInitialLanguage());
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function UseLanguage(): LanguageContextType {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export function UseTranslation() {
    const { t } = UseLanguage();
    return { t };
}
