"use client";

import { createContext, useContext } from "react";
import type { Language, Translations } from "./types";
import { translations } from "./translations";

type LanguageContextValue = {
  language: Language;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * El idioma lo fija la ruta, no el cliente.
 *
 * Antes se detectaba en un `useEffect` con `localStorage` y `navigator.language`,
 * y eso tenía dos costes: el HTML exportado salía siempre en español —así que la
 * mitad traducida del contenido no la indexaba nadie— y los visitantes con
 * navegador en inglés veían un parpadeo al hidratar. Ahora cada árbol de rutas
 * monta el proveedor con su idioma ya resuelto, y el conmutador navega.
 */
export function LanguageProvider({
  language,
  children,
}: {
  language: Language;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ language, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
