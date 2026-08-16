"use client";

import { Navbar, type NavLink } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EazyShotMark } from "@/components/ui/BrandMark";
import { useT } from "@/lib/i18n/context";
import { localePath } from "@/lib/i18n/routes";
import { PRODUCTS } from "@/lib/products";

const product = PRODUCTS.eazyshot;

/**
 * Barra y pie de la landing de EazyShot, en cualquiera de los dos idiomas.
 *
 * Las anclas cuelgan de la landing y no de la raíz: desde `/eazyshot/privacy` un
 * `#features` suelto no llevaría a ninguna parte.
 */
export function ProductChrome({ children }: { children: React.ReactNode }) {
  const { t, language } = useT();
  const base = localePath(language, product.slug);

  const navLinks: NavLink[] = [
    { label: t.nav.features, href: `${base}#features` },
    { label: t.nav.howItWorks, href: `${base}#how-it-works` },
    { label: t.nav.comparison, href: `${base}#comparison` },
    { label: t.nav.pricing, href: `${base}#pricing` },
    { label: t.nav.faq, href: `${base}#faq` },
  ];

  const footerLinks: NavLink[] = [
    { label: t.footer.features, href: `${base}#features` },
    { label: t.footer.pricing, href: `${base}#pricing` },
    { label: t.footer.faq, href: `${base}#faq` },
    { label: t.footer.support, href: `${base}/support` },
    { label: t.footer.privacy, href: `${base}/privacy` },
  ];

  return (
    <>
      <Navbar
        homeHref={base}
        brand={<EazyShotMark />}
        links={navLinks}
        product={product}
      />
      <main>{children}</main>
      <Footer brand={<EazyShotMark size={28} />} links={footerLinks} />
    </>
  );
}
