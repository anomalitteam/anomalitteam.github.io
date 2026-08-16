"use client";

import { useT } from "@/lib/i18n/context";

export function StudioHero() {
  const { t } = useT();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {t.studio.hero.tagline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
            {t.studio.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}
