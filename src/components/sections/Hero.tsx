"use client";

import Image from "next/image";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS } from "@/lib/products";

/**
 * Tres capas: el mock del Mac a sangre completa, el velo que le da contraste al
 * texto (`.hero-veil`, en globals.css) y el contenido encima.
 *
 * La imagen va con `fill` a propósito: así se recorta sola por los lados en
 * pantallas estrechas, donde un mock apaisado completo se vería diminuto, sin
 * necesidad de una segunda maquetación para móvil.
 */
export function Hero() {
  const { t } = useT();

  return (
    <section className="relative isolate flex min-h-[600px] items-center overflow-hidden sm:min-h-[720px]">
      <div className="absolute inset-0 -z-20">
        <Image
          src={t.hero.image}
          alt={t.hero.imageAlt}
          fill
          sizes="100vw"
          priority
          unoptimized
          // El mock lleva fondo transparente y flota sobre el color de la
          // página. `contain` para que se vea el portátil entero; en móvil
          // `cover`, donde entero se quedaría diminuto y vale más recortarlo.
          className="object-cover object-center sm:object-contain"
        />
      </div>

      <div className="hero-veil absolute inset-0 -z-10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-28 sm:pt-40 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="hero-text text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {t.hero.tagline}
          </h1>
          <p className="hero-text mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <DownloadButton product={PRODUCTS.eazyshot} size="lg">
              {t.hero.cta}
            </DownloadButton>
            <p className="hero-text text-sm text-text-secondary">
              {t.hero.priceNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
