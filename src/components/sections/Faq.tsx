"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";

export function Faq() {
  const { t } = useT();
  const section = t.faq;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        <ScrollReveal className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-bg-primary px-6">
            {section.items.map((faq) => (
              <Accordion
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
