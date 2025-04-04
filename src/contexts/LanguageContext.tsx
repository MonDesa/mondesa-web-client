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
    if (typeof window === 'undefined') return 'en';

    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'pt' ? 'pt' : 'en';
};

const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'en';

    const stored = localStorage.getItem('mondesa-language') as Language;
    return stored || getBrowserLanguage();
};

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('mondesa-language', lang);
    };

    const t = (key: string): string => {
        return getTranslation(key, language);
    };

    useEffect(() => {
        setLanguageState(getInitialLanguage());
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
