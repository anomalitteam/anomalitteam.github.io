"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import { Check } from "lucide-react";

export function Pricing() {
  const { t } = useT();
  const section = t.pricing;

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        <ScrollReveal className="mt-16 mx-auto max-w-md">
          <div className="relative rounded-3xl border-2 border-accent bg-bg-primary p-8 sm:p-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent-surface px-4 py-1 text-xs font-semibold text-on-accent">
              {section.badge}
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary">
                {section.planName}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-text-primary">
                  {section.price}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                {SITE.trialDays} {section.trial}
              </p>

              <div className="mt-8">
                <DownloadButton
                  product={PRODUCTS.eazyshot}
                  size="lg"
                  className="w-full"
                >
                  {section.cta}
                </DownloadButton>
              </div>

              <p className="mt-3 text-xs text-text-secondary">
                {section.trial}
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                {section.includesTitle}
              </p>
              <ul className="space-y-3">
                {section.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
