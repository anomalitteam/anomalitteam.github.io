import type { Metadata } from "next";
import { translations } from "@/lib/i18n/translations";
import { SupportContent } from "./SupportContent";

export const metadata: Metadata = {
  title: `${translations.es.support.title} — EazyShot`,
  alternates: { canonical: "/eazyshot/support" },
};

export default function SupportPage() {
  return <SupportContent />;
}
