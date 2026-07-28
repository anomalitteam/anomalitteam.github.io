import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { comparison } from "@/lib/content";
import { Check, Minus, Zap } from "lucide-react";

export function Comparison() {
  return (
    <section id="comparison" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Comparativa"
          title="EZShot vs Captura nativa de macOS"
          description="No tienes que creer en nuestra palabra. Aquí están las diferencias."
        />

        <ScrollReveal className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-primary">
            <div className="grid grid-cols-[1fr,auto,auto] gap-0 divide-y divide-border">
              <div className="contents text-sm font-semibold">
                <div className="px-6 py-4 text-text-primary">Funcionalidad</div>
                <div className="px-6 py-4 text-text-secondary text-center">
                  macOS
                </div>
                <div className="px-6 py-4 text-accent text-center">
                  EZShot
                </div>
              </div>

              {comparison.map((row) => (
                <div
                  key={row.feature}
                  className={`contents text-sm ${
                    row.highlight ? "bg-accent/5" : ""
                  }`}
                >
                  <div className="px-6 py-3.5 text-text-primary flex items-center gap-2">
                    {row.highlight && (
                      <Zap className="h-3.5 w-3.5 text-ez flex-shrink-0" />
                    )}
                    {row.feature}
                  </div>
                  <div className="px-6 py-3.5 text-center">
                    {row.native === true ? (
                      <Check className="mx-auto h-4 w-4 text-text-secondary" />
                    ) : row.native === false ? (
                      <Minus className="mx-auto h-4 w-4 text-border" />
                    ) : (
                      <span className="text-text-secondary">{row.native}</span>
                    )}
                  </div>
                  <div className="px-6 py-3.5 text-center">
                    {row.ezshot === true ? (
                      <Check className="mx-auto h-4 w-4 text-accent" />
                    ) : (
                      <span className="text-accent font-medium">{row.ezshot}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
