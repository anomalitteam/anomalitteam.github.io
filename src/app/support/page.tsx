import type { Metadata } from "next";
import { RedirectBridge } from "@/components/layout/RedirectBridge";

/** Puente hacia /eazyshot/support. Ver la nota en `app/privacy/page.tsx`. */
export const metadata: Metadata = {
  alternates: { canonical: "/eazyshot/support" },
  robots: { index: false, follow: true },
};

export default function SupportRedirect() {
  return <RedirectBridge to="/eazyshot/support" />;
}
