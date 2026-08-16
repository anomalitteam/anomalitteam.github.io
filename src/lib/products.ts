/**
 * Registro de los productos del estudio.
 *
 * Aquí van solo los datos estructurales: lo que se traduce (tagline, descripción)
 * vive en `i18n/translations.ts`, bajo `studio.products[id]`. Añadir un producto
 * es una entrada aquí, sus textos allí y una carpeta en `src/app/<slug>`.
 */

export type ProductId = "eazyshot";

export interface Product {
  id: ProductId;
  /** Nombre comercial. No se traduce. */
  name: string;
  /** Ruta de su landing dentro del sitio. */
  slug: string;
  icon: string;
  /** Requisito de sistema tal y como lo declara su ficha del App Store. */
  platform: string;
  /** Ficha en el App Store. Vacía ⇒ el producto se muestra como "Próximamente". */
  appStoreUrl: string;
}

export const PRODUCTS: Record<ProductId, Product> = {
  eazyshot: {
    id: "eazyshot",
    name: "EazyShot",
    slug: "/eazyshot",
    icon: "/images/eazyshot/app-icon.png",
    platform: "macOS 15.2+",
    appStoreUrl: "https://apps.apple.com/app/id6795760394",
  },
};

/** Orden en que aparecen en el escaparate. */
export const PRODUCT_LIST: Product[] = [PRODUCTS.eazyshot];

export function isPublished(product: Product): boolean {
  return product.appStoreUrl !== "";
}
