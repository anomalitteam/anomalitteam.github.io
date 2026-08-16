import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/products";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  title: `404 — ${SITE.name}`,
  robots: { index: false, follow: true },
};

/**
 * La 404 trae su propio `<html>` porque no cuelga de ninguno de los dos root
 * layouts: una URL inexistente no tiene idioma, así que tampoco puede heredar el
 * proveedor de traducciones. De ahí que los textos vayan en los dos idiomas y
 * escritos a mano — es la única página del sitio donde eso es correcto.
 */
export default function NotFound() {
  return (
    <html lang="es" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Error 404
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
            Esta página no existe
          </h1>
          <p className="mt-2 text-lg text-text-secondary" lang="en">
            This page doesn&apos;t exist
          </p>

          <p className="mt-6 max-w-md text-text-secondary">
            Puede que el enlace esté roto o que la página se haya movido.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium">
            <Link href="/" className="text-accent hover:underline">
              Inicio
            </Link>
            <Link
              href={PRODUCTS.eazyshot.slug}
              className="text-accent hover:underline"
            >
              EazyShot
            </Link>
            <Link
              href={`${PRODUCTS.eazyshot.slug}/support`}
              className="text-accent hover:underline"
            >
              Soporte
            </Link>
            <Link href="/en" className="text-accent hover:underline" hrefLang="en">
              English
            </Link>
          </div>

          <p className="mt-16 text-sm font-bold text-text-secondary">
            <span className="text-ez">A</span>nomalit{" "}
            <span className="text-ez">T</span>eam
          </p>
        </main>
      </body>
    </html>
  );
}
