"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Language, Translations } from "./types";
import { translations } from "./translations";

const STORAGE_KEY = "eazyshot-language";

function detectLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "es" || stored === "en") return stored;
  const browser = navigator.language.toLowerCase();
  return browser.startsWith("en") ? "en" : "es";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguageState(detectLanguage());
    setMounted(true);
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{
          language: "es",
          setLanguage: () => {},
          t: translations.es,
        }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
