"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { useT } from "@/lib/i18n/context";
import type { Product } from "@/lib/products";

export type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  /** Destino del logo: "/" en el escaparate, la landing en una página de producto. */
  homeHref: string;
  brand: React.ReactNode;
  links: NavLink[];
  /** Si se pasa, la barra muestra el CTA de descarga de ese producto. */
  product?: Product;
};

export function Navbar({ homeHref, brand, links, product }: NavbarProps) {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link
          href={homeHref}
          className="flex items-center gap-2 text-lg text-text-primary"
        >
          {brand}
        </Link>

        <div className="hidden md:flex md:items-center md:gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex md:items-center md:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          {product && (
            <DownloadButton product={product} size="sm">
              {t.nav.download}
            </DownloadButton>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-bg-primary px-6 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-base font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {product && (
            <div className="mt-3">
              <DownloadButton product={product} size="sm" className="w-full">
                {t.nav.download}
              </DownloadButton>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
