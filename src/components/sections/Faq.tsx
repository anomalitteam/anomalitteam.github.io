import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Preguntas frecuentes"
          description="Respuestas directas a las dudas más comunes sobre EZShot."
        />

        <ScrollReveal className="mt-16 mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-bg-primary px-6">
            {faqs.map((faq) => (
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
