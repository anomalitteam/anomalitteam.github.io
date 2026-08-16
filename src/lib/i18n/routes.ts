import type { Language } from "./types";

export const LANGUAGES: Language[] = ["es", "en"];

/**
 * El español vive en la raíz (`/eazyshot`) y el inglés cuelga de `/en`
 * (`/en/eazyshot`).
 *
 * Se eligió así para no mover las URLs que ya existían: las de privacidad y
 * soporte están registradas en App Store Connect, y prefijar el español las
 * habría roto todas.
 */
export function localePath(language: Language, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (language === "en") return `/en${clean}`;
  return clean || "/";
}

/** Quita el prefijo de idioma de una ruta: `/en/eazyshot` → `/eazyshot`. */
export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

/** El idioma que corresponde a una ruta, leído del propio path. */
export function localeFromPath(pathname: string): Language {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

/** La misma página en el otro idioma, para el conmutador. */
export function alternatePath(pathname: string, to: Language): string {
  return localePath(to, stripLocale(pathname));
}

/**
 * Bloque `alternates` para la metadata de una página.
 *
 * El `canonical` apunta a la propia versión y `languages` declara las dos, que es
 * lo que hace que un buscador entienda que son traducciones y no duplicados.
 * `x-default` va al español, que es el idioma de la raíz.
 */
export function localeAlternates(language: Language, path = "/") {
  return {
    canonical: localePath(language, path),
    languages: {
      es: localePath("es", path),
      en: localePath("en", path),
      "x-default": localePath("es", path),
    },
  };
}
