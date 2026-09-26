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
 *
 * La etiqueta visible es el idioma **de destino** ("EN" en la rama española) y la
 * accesible va en el idioma **de la página** ("Cambiar a inglés"): quien lee la
 * etiqueta todavía no ha cambiado de idioma. Estaba al revés —una página en
 * español ofrecía "Switch to English"— y un lector de pantalla en español lo
 * pronunciaba con fonética española.
 */
export function LanguageToggle() {
  const { t, language } = useT();
  const pathname = usePathname();
  const other = language === "es" ? "en" : "es";

  return (
    <Link
      href={alternatePath(pathname, other)}
      hrefLang={other}
      className="inline-flex h-9 items-center justify-center rounded-lg px-2.5 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
      aria-label={t.nav.switchLanguage}
    >
      {other.toUpperCase()}
    </Link>
  );
}
