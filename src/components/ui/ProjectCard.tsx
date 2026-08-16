"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n/context";
import { isPublished, type Product } from "@/lib/products";

/**
 * Tarjeta de un producto en el escaparate.
 *
 * Un producto sin `appStoreUrl` sigue teniendo su landing, así que la tarjeta
 * enlaza igual; lo que cambia es que se anuncia como "Próximamente" en lugar de
 * invitar a verlo.
 */
export function ProjectCard({ product }: { product: Product }) {
  const { t } = useT();
  const copy = t.studio.products[product.id];
  const published = isPublished(product);

  return (
    <Link
      href={product.slug}
      className="group relative flex flex-col rounded-2xl border border-border bg-bg-primary p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <Image
          src={product.icon}
          alt=""
          width={56}
          height={56}
          unoptimized
          className="rounded-xl"
        />
        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary">
          {published ? product.platform : t.studio.comingSoon}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-text-primary">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{copy.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {copy.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary">
        {t.studio.viewProject}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
