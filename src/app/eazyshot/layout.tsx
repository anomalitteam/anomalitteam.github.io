"use client";

import { Navbar, type NavLink } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EazyShotMark } from "@/components/ui/BrandMark";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS } from "@/lib/products";

const product = PRODUCTS.eazyshot;

export default function EazyShotLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { t } = useT();

  // Las anclas cuelgan de la landing del producto, no de la raíz: desde
  // /eazyshot/privacy un "#features" suelto no llevaría a ninguna parte.
  const navLinks: NavLink[] = [
    { label: t.nav.features, href: `${product.slug}#features` },
    { label: t.nav.howItWorks, href: `${product.slug}#how-it-works` },
    { label: t.nav.comparison, href: `${product.slug}#comparison` },
    { label: t.nav.pricing, href: `${product.slug}#pricing` },
    { label: t.nav.faq, href: `${product.slug}#faq` },
  ];

  const footerLinks: NavLink[] = [
    { label: t.footer.features, href: `${product.slug}#features` },
    { label: t.footer.pricing, href: `${product.slug}#pricing` },
    { label: t.footer.faq, href: `${product.slug}#faq` },
    { label: t.footer.support, href: `${product.slug}/support` },
    { label: t.footer.privacy, href: `${product.slug}/privacy` },
  ];

  return (
    <>
      <Navbar
        homeHref={product.slug}
        brand={<EazyShotMark />}
        links={navLinks}
        product={product}
      />
      <main>{children}</main>
      <Footer brand={<EazyShotMark size={28} />} links={footerLinks} />
    </>
  );
}
