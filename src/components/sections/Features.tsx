"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";
import { MousePointer2, Zap, Monitor, Palette, Pencil } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MousePointer2,
  Zap,
  Monitor,
  Palette,
  Pencil,
};

export function Features() {
  const { t } = useT();
  const section = t.features;

  return (
    <section id="features" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title}>
                <div className="group relative rounded-2xl border border-border bg-bg-primary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    {feature.ez && <Badge />}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
