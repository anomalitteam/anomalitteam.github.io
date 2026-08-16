import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCT_LIST } from "@/lib/products";
import { LANGUAGES, localePath } from "@/lib/i18n/routes";

// Obligatorio con `output: "export"`, igual que en las imágenes Open Graph.
export const dynamic = "force-static";

/**
 * Se arma desde el registro de productos y la lista de idiomas, así que una app
 * nueva —o un idioma nuevo— entra sola.
 *
 * Cada URL declara sus traducciones en `alternates.languages`; es la forma de
 * decirle a un buscador que `/eazyshot` y `/en/eazyshot` son la misma página en
 * dos idiomas y no contenido duplicado.
 *
 * Los puentes `/privacy` y `/support` quedan fuera a propósito: son `noindex` y
 * solo existen para las URLs viejas registradas en App Store Connect.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "/", priority: 1 },
    ...PRODUCT_LIST.flatMap((product) => [
      { path: product.slug, priority: 0.9 },
      { path: `${product.slug}/privacy`, priority: 0.3 },
      { path: `${product.slug}/support`, priority: 0.3 },
    ]),
  ];

  return paths.flatMap(({ path, priority }) =>
    LANGUAGES.map((language) => ({
      url: `${SITE.url}${localePath(language, path)}`,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LANGUAGES.map((l) => [l, `${SITE.url}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
