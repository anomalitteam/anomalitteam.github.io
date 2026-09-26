"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";
import { Check, Minus, Zap } from "lucide-react";

/**
 * Celda de sí/no.
 *
 * El icono es decorativo —`aria-hidden`— y el valor va en un `sr-only` invisible
 * que lo precede: una tabla de iconos sin texto se anuncia como once filas de
 * celdas vacías, y es la sección que más información condensa de la landing.
 */
function Cell({
  value,
  cells,
  accent = false,
}: {
  value: string | boolean;
  cells: { yes: string; no: string };
  accent?: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span className={accent ? "text-accent font-medium text-xs" : "text-xs text-text-secondary"}>
        {value}
      </span>
    );
  }

  const Icon = value ? Check : Minus;
  const color = value
    ? accent
      ? "text-accent"
      : "text-text-secondary"
    : "text-muted";

  return (
    <>
      <span className="sr-only">{value ? cells.yes : cells.no}</span>
      <Icon aria-hidden="true" className={`mx-auto h-4 w-4 ${color}`} />
    </>
  );
}

export function Comparison() {
  const { t } = useT();
  const section = t.comparison;

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        <ScrollReveal className="mt-16">
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-primary">
            <table className="w-full min-w-[640px]">
              <caption className="sr-only">{section.title}</caption>
              <thead>
                <tr className="border-b border-border text-sm font-semibold">
                  <th scope="col" className="px-6 py-4 text-left text-text-primary">
                    {section.headers.functionality}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-text-secondary w-[100px]"
                  >
                    {section.headers.macOS}
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-accent w-[120px]">
                    {section.headers.eazyShot}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center text-text-secondary w-[120px]"
                  >
                    {section.headers.competition}
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-b-0 text-sm ${
                      row.highlight ? "bg-accent/5" : ""
                    }`}
                  >
                    {/*
                      La primera columna es el encabezado de su fila: con
                      `scope="row"` un lector anuncia "Modo rápido al
                      portapapeles, EazyShot, Sí" en lugar de un "Sí" suelto.
                      Va en `font-normal` para que se siga viendo como celda.
                    */}
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-left font-normal text-text-primary"
                    >
                      <span className="flex items-center gap-2">
                        {row.highlight && (
                          <Zap
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-ez flex-shrink-0"
                          />
                        )}
                        {row.feature}
                      </span>
                    </th>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={row.native} cells={section.cells} />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={row.eazyshot} cells={section.cells} accent />
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <Cell value={row.competition} cells={section.cells} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
