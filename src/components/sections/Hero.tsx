"use client";

import Image from "next/image";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS } from "@/lib/products";

export function Hero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {t.hero.tagline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <DownloadButton product={PRODUCTS.eazyshot} size="lg">
              {t.hero.cta}
            </DownloadButton>
            <p className="text-sm text-text-secondary">{t.hero.priceNote}</p>
          </div>
        </div>

        {/*
          El mock va suelto, sin marco ni sombra de contenedor: la imagen ya trae
          el portátil recortado sobre fondo transparente, así que un borde
          rectangular alrededor delataría el recorte.

          Lleva `priority` porque es el elemento LCP de la landing, y `width` y
          `height` reales para que no haya salto de maquetación al cargar.
        */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <Image
            src={t.hero.image}
            alt={t.hero.imageAlt}
            width={2000}
            height={1300}
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
