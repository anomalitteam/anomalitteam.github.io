"use client";

import { useT } from "@/lib/i18n/context";

export function LanguageToggle() {
  const { language, setLanguage } = useT();

  return (
    <button
      type="button"
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="inline-flex h-9 items-center justify-center rounded-lg px-2.5 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
      aria-label="Change language"
    >
      {language === "es" ? "EN" : "ES"}
    </button>
  );
}
