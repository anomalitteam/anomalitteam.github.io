import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Los puentes no se bloquean aquí a propósito: si un rastreador no puede
  // leerlos, tampoco ve su `noindex` ni su canonical, y no traslada al destino
  // la señal de las URLs antiguas.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
