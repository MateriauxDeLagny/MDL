import Image from "next/image";
import type { Fournisseur } from "@/lib/fournisseurs";

type Props = { f: Fournisseur; size?: "sm" | "lg" };

/** Logo officiel du fournisseur, ou son nom en logotype texte s'il n'est pas disponible. */
export default function SupplierLogo({ f, size = "sm" }: Props) {
  const box = size === "lg" ? "h-24 w-64" : "h-12 w-36";
  const tall = size === "lg" ? "h-24 w-40" : "h-14 w-28";

  if (!f.logo) {
    return (
      <span
        className={`${box} flex items-center justify-center font-heading font-bold uppercase tracking-wider text-dark text-center leading-none ${
          size === "lg" ? "text-4xl" : "text-xl"
        }`}
      >
        {f.name}
      </span>
    );
  }

  return (
    <span className={`relative block ${f.logoTall ? tall : box}`}>
      <Image src={f.logo} alt={`Logo ${f.name}`} fill unoptimized className="object-contain" sizes="256px" />
    </span>
  );
}
