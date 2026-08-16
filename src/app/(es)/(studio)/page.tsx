import type { Metadata } from "next";
import { StudioHome } from "@/components/pages/StudioHome";
import { localeAlternates } from "@/lib/i18n/routes";

export const metadata: Metadata = {
  alternates: localeAlternates("es"),
};

export default function Home() {
  return <StudioHome />;
}
