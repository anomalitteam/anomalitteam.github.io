import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCT_LIST } from "@/lib/products";

/**
 * Se arma desde el registro de productos, así que una app nueva entra sola.
 *
 * Los puentes `/privacy` y `/support` quedan fuera a propósito: son `noindex` y
 * solo existen para las URLs viejas registradas en App Store Connect.
 */
// Obligatorio con `output: "export"`, igual que en las imágenes Open Graph.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = PRODUCT_LIST.flatMap((product) => [
    { path: product.slug, priority: 0.9 },
    { path: `${product.slug}/privacy`, priority: 0.3 },
    { path: `${product.slug}/support`, priority: 0.3 },
  ]);

  return [
    { url: SITE.url, priority: 1 },
    ...productRoutes.map(({ path, priority }) => ({
      url: `${SITE.url}${path}`,
      priority,
    })),
  ];
}
