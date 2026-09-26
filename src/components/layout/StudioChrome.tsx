"use client";

import { MotionConfig } from "framer-motion";

import { Navbar, type NavLink } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StudioMark } from "@/components/ui/BrandMark";
import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/routes";
import { PRODUCTS, PRODUCT_LIST } from "@/lib/products";

/**
 * Barra y pie del escaparate. Lo usan los dos idiomas: los enlaces se arman con
 * `localePath`, así que en inglés salen con el prefijo `/en` sin duplicar nada.
 */
export function StudioChrome({ children }: { children: React.ReactNode }) {
  const { t, language } = useT();

  const links: NavLink[] = [
    { label: t.studio.nav.projects, href: `${localePath(language)}#projects` },
    ...PRODUCT_LIST.map((product) => ({
      label: product.name,
      href: localePath(language, product.slug),
    })),
    {
      label: t.studio.nav.support,
      href: localePath(language, `${PRODUCTS.eazyshot.slug}/support`),
    },
  ];

  // framer-motion anima con estilos en línea, así que la media query de
  // `globals.css` no le llega: `reducedMotion="user"` es lo que le hace mirar la
  // preferencia del sistema y dejar quietas las revelaciones al hacer scroll.
  return (
    <MotionConfig reducedMotion="user">
      <Navbar
        homeHref={localePath(language)}
        brand={<StudioMark />}
        links={links}
      />
      <main>{children}</main>
      <Footer brand={<StudioMark />} links={links} />
    </MotionConfig>
  );
}
