"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n/context";
import { alternatePath } from "@/lib/i18n/routes";

/**
 * Cambiar de idioma es navegar, no mutar estado: cada idioma tiene su URL.
 *
 * Va como `<a>` y no como botón para que sea un enlace de verdad — se puede
 * abrir en otra pestaña y los rastreadores lo siguen hasta la versión traducida.
 */
export function LanguageToggle() {
  const { language } = useT();
  const pathname = usePathname();
  const other = language === "es" ? "en" : "es";

  return (
    <Link
      href={alternatePath(pathname, other)}
      hrefLang={other}
      className="inline-flex h-9 items-center justify-center rounded-lg px-2.5 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
      aria-label={other === "en" ? "Switch to English" : "Cambiar a español"}
    >
      {other.toUpperCase()}
    </Link>
  );
}
