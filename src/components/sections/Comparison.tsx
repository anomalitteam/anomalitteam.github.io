"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useT } from "@/lib/i18n/context";
import { Check, Minus, Zap } from "lucide-react";

function renderCell(value: string | boolean) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-text-secondary" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-muted" />;
  }
  return <span className="text-xs text-text-secondary">{value}</span>;
}

function renderEazyCell(value: string | boolean) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-accent" />;
  }
  return <span className="text-accent font-medium text-xs">{value}</span>;
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
              <thead>
                <tr className="border-b border-border text-sm font-semibold">
                  <th className="px-6 py-4 text-left text-text-primary">
                    {section.headers.functionality}
                  </th>
                  <th className="px-6 py-4 text-center text-text-secondary w-[100px]">
                    {section.headers.macOS}
                  </th>
                  <th className="px-6 py-4 text-center text-accent w-[120px]">
                    {section.headers.eazyShot}
                  </th>
                  <th className="px-6 py-4 text-center text-text-secondary w-[120px]">
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
                    <td className="px-6 py-3.5 text-text-primary">
                      <span className="flex items-center gap-2">
                        {row.highlight && (
                          <Zap className="h-3.5 w-3.5 text-ez flex-shrink-0" />
                        )}
                        {row.feature}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {renderCell(row.native)}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {renderEazyCell(row.eazyshot)}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {renderCell(row.competition)}
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
