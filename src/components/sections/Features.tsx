import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { features } from "@/lib/content";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Funciones"
          title="Todo lo que necesitas para tus capturas"
          description="Cinco modos de captura más un editor de anotaciones completo. Todo integrado en la barra de menú de tu Mac."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <ScrollReveal key={feature.title}>
              <div className="group relative rounded-2xl border border-border bg-bg-primary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
