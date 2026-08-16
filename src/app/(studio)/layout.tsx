"use client";

import { Navbar, type NavLink } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StudioMark } from "@/components/ui/BrandMark";
import { useT } from "@/lib/i18n/context";
import { PRODUCTS, PRODUCT_LIST } from "@/lib/products";

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { t } = useT();

  // Cada producto del registro aparece solo en la navegación del estudio.
  const links: NavLink[] = [
    { label: t.studio.nav.projects, href: "/#projects" },
    ...PRODUCT_LIST.map((product) => ({
      label: product.name,
      href: product.slug,
    })),
    { label: t.studio.nav.support, href: `${PRODUCTS.eazyshot.slug}/support` },
  ];

  return (
    <>
      <Navbar homeHref="/" brand={<StudioMark />} links={links} />
      <main>{children}</main>
      <Footer brand={<StudioMark />} links={links} />
    </>
  );
}
