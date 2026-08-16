"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";
import { isPublished, type Product } from "@/lib/products";

/**
 * Insignia oficial «Download on the Mac App Store».
 *
 * Los SVG de `public/badges/` son los que publica Apple en su Marketing Tools,
 * uno por idioma y color; no son una recreación. Hay dos colores porque el negro
 * desaparece sobre el fondo oscuro del sitio: se cambia por CSS según el tema,
 * no por JavaScript, para que no parpadee al hidratar.
 *
 * Un producto sin `appStoreUrl` cae al botón de "Próximamente": la insignia de
 * Apple solo puede acompañar a un enlace real a la tienda.
 */
export function AppStoreBadge({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  const { t, language } = useT();

  if (!isPublished(product)) {
    return (
      <Button size="lg" className={className} disabled>
        {t.cta.comingSoon}
      </Button>
    );
  }

  const alt =
    language === "es"
      ? "Descargar en el Mac App Store"
      : "Download on the Mac App Store";
  const size = { width: 156, height: 40 };

  return (
    <a
      href={product.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${className}`}
    >
      <span className="dark:hidden">
        <Image
          src={`/badges/mac-app-store-${language}-black.svg`}
          alt={alt}
          {...size}
          unoptimized
          className="h-11 w-auto"
        />
      </span>
      <span className="hidden dark:inline-block">
        <Image
          src={`/badges/mac-app-store-${language}-white.svg`}
          alt=""
          {...size}
          unoptimized
          className="h-11 w-auto"
        />
      </span>
    </a>
  );
}
