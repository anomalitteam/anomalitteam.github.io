import Image from "next/image";
import { PRODUCTS } from "@/lib/products";

type MarkProps = {
  /** 32 en la barra de navegación, 28 en el pie. */
  size?: number;
  className?: string;
};

/**
 * Marca de EazyShot: la E y la Z en el rosa de la app.
 *
 * Vive aquí porque Navbar y Footer la pintan idéntica; antes estaba copiada en
 * los dos y cualquier retoque había que hacerlo dos veces.
 */
export function EazyShotMark({ size = 32, className = "" }: MarkProps) {
  return (
    <span className={`flex items-center gap-2 font-bold ${className}`}>
      <Image
        src={PRODUCTS.eazyshot.icon}
        alt="EazyShot"
        width={size}
        height={size}
        unoptimized
        className="rounded-lg"
      />
      <span>
        <span className="text-ez">E</span>a<span className="text-ez">z</span>
        yShot
      </span>
    </span>
  );
}

/** Marca del estudio, sin icono: es el nombre el que manda en la home. */
export function StudioMark({ className = "" }: MarkProps) {
  return (
    <span className={`font-bold ${className}`}>
      <span className="text-ez">A</span>nomalit{" "}
      <span className="text-ez">T</span>eam
    </span>
  );
}
