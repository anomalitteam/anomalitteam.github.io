import type { Metadata } from "next";
import { translations } from "@/lib/i18n/translations";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: `${translations.es.privacy.title} — EazyShot`,
  alternates: { canonical: "/eazyshot/privacy" },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
