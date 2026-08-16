"use client";

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

  return (
    <>
      <Navbar
        homeHref={localePath(language)}
        brand={<StudioMark />}
        links={links}
      />
      <main>{children}</main>
      <Footer brand={<StudioMark />} links={links} />
    </>
  );
}
