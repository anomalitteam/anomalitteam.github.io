import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Cómo funciona"
          title="Cuatro pasos. Sin complicaciones."
          description="EZShot está diseñado para ser rápido e intuitivo. Así es como funciona."
        />

        <div className="mt-16 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <ScrollReveal key={step.step}>
                <div className="relative flex gap-6 sm:gap-10">
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-accent text-white text-xl font-bold shadow-sm">
                    {step.step}
                  </div>

                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-secondary leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
