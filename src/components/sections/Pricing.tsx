import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";
import { pricingFeatures } from "@/lib/content";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Precio"
          title="Pago único. Sin vueltas."
          description="Sin suscripciones. Sin pagos recurrentes. Lo compras una vez y es tuyo."
        />

        <ScrollReveal className="mt-16 mx-auto max-w-md">
          <div className="relative rounded-3xl border-2 border-accent bg-bg-primary p-8 sm:p-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
              Pago único
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-text-primary">
                EZShot Pro
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-text-primary">
                  {SITE.price.replace(" USD", "")}
                </span>
                <span className="text-lg text-text-secondary">USD</span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                Pago único. Sin suscripción.
              </p>

              <div className="mt-8">
                <Button size="lg" className="w-full">
                  Descargar prueba gratis
                </Button>
              </div>

              <p className="mt-3 text-xs text-text-secondary">
                {SITE.trialDays} días de prueba gratuita con todas las funciones
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-4">
                Todo incluido
              </p>
              <ul className="space-y-3">
                {pricingFeatures.map((feature) => (
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
