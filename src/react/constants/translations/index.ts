import type { Language } from '../../contexts/LanguageContext';
import { commonTranslations } from './common';
import { homeTranslations } from './home';
import { teamTranslations } from './team';
import { mondesaTranslations } from './mondesa';
import { projectsTranslations } from './projects';
import { contactTranslations } from './contact';
import { privacyTranslations } from './privacy';

interface Translations {
  [key: string]: {
    pt: string;
    en: string;
  };
}

export const translations: Translations = {
  ...commonTranslations,
  ...homeTranslations,
  ...teamTranslations,
  ...mondesaTranslations,
  ...projectsTranslations,
  ...contactTranslations,
  ...privacyTranslations
};

export const getTranslation = (key: string, language: Language, suppressWarning = false): string => {
  const translation = translations[key];
  if (!translation) {
    if (!suppressWarning) {
      console.warn(`Translation key not found: ${key}`);
    }
    return key;
  }
  return translation[language] || translation.en || key;
};

export * from './navigation';
export * from './teamData';
export * from './projectsData';
