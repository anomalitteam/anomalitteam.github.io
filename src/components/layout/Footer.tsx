import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white text-xs font-extrabold">
              EZ
            </span>
            <span className="text-sm font-semibold text-text-primary">
              {SITE.name}
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <a href="#features" className="hover:text-text-primary transition-colors">
              Funciones
            </a>
            <a href="#pricing" className="hover:text-text-primary transition-colors">
              Precio
            </a>
            <a href="#faq" className="hover:text-text-primary transition-colors">
              FAQ
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Soporte
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Privacidad
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} {SITE.name}. Hecho para macOS.
          </p>
          <p className="text-xs text-text-secondary">
            Pago único. Sin suscripciones.
          </p>
        </div>
      </div>
    </footer>
  );
}
