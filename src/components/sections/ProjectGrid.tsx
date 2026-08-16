"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { useT } from "@/lib/i18n/context";
import { PRODUCT_LIST } from "@/lib/products";

export function ProjectGrid() {
  const { t } = useT();
  const section = t.studio.projects;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={section.label}
          title={section.title}
          description={section.description}
        />

        {/*
          Con un solo producto, una rejilla de tres columnas deja dos huecos y la
          sección se ve a medio hacer: hasta que haya varios, la tarjeta va
          centrada y con ancho acotado.
        */}
        <div
          className={`mt-16 grid gap-6 ${
            PRODUCT_LIST.length === 1
              ? "mx-auto max-w-md"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {PRODUCT_LIST.map((product) => (
            <ScrollReveal key={product.id}>
              <ProjectCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
