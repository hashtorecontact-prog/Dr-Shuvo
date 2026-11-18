import React, { createContext, useContext, useEffect, useState } from 'react';
import type { BilingualList, BilingualText, Language } from '../types/content';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (text: BilingualText) => string;
  tn: (text: BilingualText) => React.ReactNode;
  formatNum: (value: string) => React.ReactNode;
  tList: (list: BilingualList) => readonly string[];
}

const STORAGE_KEY = 'ashik_ortho_lang';
const DIGIT_SEGMENT_REGEX = /([0-9০-৯]+(?:[.,:/–-][0-9০-৯]+)*)/g;
const DIGIT_TEST_REGEX = /^[0-9০-৯]/;

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function splitNumericSegments(text: string): React.ReactNode {
  if (!/[0-9০-৯]/.test(text)) {
    return text;
  }

  const parts = text.split(DIGIT_SEGMENT_REGEX);
  return parts.map((part, index) => {
    if (part && DIGIT_TEST_REGEX.test(part)) {
      return (
        <span key={index} className="font-num">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'bn' || saved === 'en') {
        return saved;
      }
    }
    return 'bn';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const t = (text: BilingualText) => text[lang];
  const tn = (text: BilingualText) =>
    lang === 'bn' ? splitNumericSegments(text.bn) : text.en;
  const formatNum = (value: string) =>
    lang === 'bn' ? splitNumericSegments(value) : value;
  const tList = (list: BilingualList) => list[lang];

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggleLang, t, tn, formatNum, tList }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
