import type { Metadata } from "next";
import { EazyShotLanding } from "@/components/pages/EazyShotLanding";
import { translations } from "@/lib/i18n/translations";
import { localeAlternates, localePath } from "@/lib/i18n/routes";
import { PRODUCTS } from "@/lib/products";

const meta = translations.es.meta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "screenshot",
    "macOS",
    "captura de pantalla",
    "EazyShot",
    "anotaciones",
    "editor",
    "annotation",
  ],
  alternates: localeAlternates("es", PRODUCTS.eazyshot.slug),
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "es_ES",
    url: localePath("es", PRODUCTS.eazyshot.slug),
  },
};

export default function EazyShotPage() {
  return <EazyShotLanding />;
}
