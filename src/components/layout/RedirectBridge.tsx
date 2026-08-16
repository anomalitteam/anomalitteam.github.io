import Link from "next/link";

/**
 * Página de un solo uso que reenvía a `to`.
 *
 * El `meta refresh` se renderiza en el HTML estático (React lo eleva al `<head>`),
 * así que el reenvío funciona sin JavaScript. El enlace visible es el respaldo
 * para quien tenga el refresh bloqueado.
 */
export function RedirectBridge({ to }: { to: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <div className="flex min-h-screen items-center justify-center px-6">
        <p className="text-center text-text-secondary">
          <Link href={to} className="text-accent hover:underline">
            {to}
          </Link>
        </p>
      </div>
    </>
  );
}
