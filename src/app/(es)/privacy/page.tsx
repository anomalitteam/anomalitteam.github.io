import type { Metadata } from "next";
import { RedirectBridge } from "@/components/layout/RedirectBridge";

/**
 * Puente hacia /eazyshot/privacy.
 *
 * Esta URL está registrada en App Store Connect como la política de privacidad
 * de EazyShot, así que no puede desaparecer aunque el contenido se haya mudado
 * bajo el producto. GitHub Pages sirve archivos estáticos y no admite
 * redirecciones de servidor: el equivalente es un `meta refresh` con el
 * canonical apuntando al destino.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/eazyshot/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyRedirect() {
  return <RedirectBridge to="/eazyshot/privacy" />;
}
