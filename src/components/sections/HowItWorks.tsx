"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";
import Image from "next/image";

export function HowItWorks() {
  const { t } = useT();
  const section = t.howItWorks;

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        <div className="mt-16 space-y-16 sm:space-y-20">
          {section.items.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <ScrollReveal key={step.step}>
                <div
                  className={`flex flex-col gap-8 ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center`}
                >
                  <div className="flex-1 flex gap-5 sm:gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent-surface text-on-accent text-lg font-bold shadow-sm">
                      {step.step}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-text-secondary leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={560}
                      height={350}
                      unoptimized
                      className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 max-w-full h-auto"
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
