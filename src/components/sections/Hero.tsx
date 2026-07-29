"use client";

import { Button } from "@/components/ui/Button";
import { useT } from "@/lib/i18n/context";

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
            <Button size="lg">{t.hero.cta}</Button>
            <p className="text-sm text-text-secondary">{t.hero.priceNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
