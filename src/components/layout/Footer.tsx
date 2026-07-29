"use client";

import { useT } from "@/lib/i18n/context";
import Link from "next/link";

export function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white text-xs font-extrabold">
              EZ
            </span>
            <span className="text-sm font-semibold text-text-primary">
              EazyShot
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <Link href="/#features" className="hover:text-text-primary transition-colors">
              {t.footer.features}
            </Link>
            <Link href="/#pricing" className="hover:text-text-primary transition-colors">
              {t.footer.pricing}
            </Link>
            <Link href="/#faq" className="hover:text-text-primary transition-colors">
              {t.footer.faq}
            </Link>
            <a href="#" className="hover:text-text-primary transition-colors">
              {t.footer.support}
            </a>
            <Link href="/privacy" className="hover:text-text-primary transition-colors">
              {t.footer.privacy}
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} EazyShot. {t.footer.copyright}
          </p>
          <p className="text-xs text-text-secondary">{t.footer.oneTime}</p>
        </div>
      </div>
    </footer>
  );
}
