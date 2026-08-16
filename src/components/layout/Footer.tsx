"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import type { NavLink } from "@/components/layout/Navbar";

type FooterProps = {
  brand: React.ReactNode;
  links: NavLink[];
};

export function Footer({ brand, links }: FooterProps) {
  const { t } = useT();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-sm text-text-primary">{brand}</div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE.name}. {t.footer.copyright}
          </p>
          <p className="text-xs text-text-secondary">{t.footer.oneTime}</p>
        </div>
      </div>
    </footer>
  );
}
