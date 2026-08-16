"use client";

import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";
import { isPublished, type Product } from "@/lib/products";

type DownloadButtonProps = {
  product: Product;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
};

/**
 * CTA de conversión de un producto: lleva a su ficha del App Store.
 *
 * Todos los CTA del sitio pasan por aquí para que el destino de cada producto
 * viva en un único sitio (`PRODUCTS[id].appStoreUrl`). Mientras esa URL esté
 * vacía —producto anunciado pero aún no publicado— el botón se muestra
 * deshabilitado como "Próximamente" en lugar de enlazar a ningún sitio.
 */
export function DownloadButton({
  product,
  size = "md",
  children,
  className = "",
}: DownloadButtonProps) {
  const { t } = useT();

  if (!isPublished(product)) {
    return (
      <Button size={size} className={className} disabled>
        {t.cta.comingSoon}
      </Button>
    );
  }

  return (
    <Button size={size} className={className} href={product.appStoreUrl}>
      {children}
    </Button>
  );
}
