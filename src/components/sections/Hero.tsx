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
          La captura es el elemento LCP de la landing: va con `priority` para que
          no espere al resto, y con `sizes` para que el navegador sepa que nunca
          se muestra a más de 1152 px (max-w-6xl) aunque el archivo sea mayor.
        */}
        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border shadow-2xl">
            <Image
              src={t.hero.image}
              alt={t.hero.imageAlt}
              width={1920}
              height={1247}
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
