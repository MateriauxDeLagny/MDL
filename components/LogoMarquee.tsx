import Link from "next/link";
import type { Fournisseur } from "@/lib/fournisseurs";
import SupplierLogo from "@/components/SupplierLogo";

type Props = {
  items: Fournisseur[];
  reverse?: boolean;
  /** Durée d'un tour complet, en secondes. */
  duration?: number;
  /** Mode bouton (ouvre une fiche) ; sinon lien vers la page fournisseurs. */
  onSelect?: (slug: string) => void;
};

const tileCls =
  "group flex-shrink-0 flex items-center justify-center w-48 h-24 mx-2 px-5 bg-white border border-warm-border rounded hover:border-orange hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange transition";

/**
 * Bandeau de logos qui défile en continu. La liste est dupliquée pour une boucle
 * sans couture ; la copie est masquée aux lecteurs d'écran et au clavier.
 * Pause au survol / focus ; défilement désactivé si l'utilisateur réduit les animations.
 */
export default function LogoMarquee({ items, reverse = false, duration = 40, onSelect }: Props) {
  const renderTile = (f: Fournisseur, copy: boolean) => {
    const common = {
      className: tileCls,
      "aria-hidden": copy || undefined,
      tabIndex: copy ? -1 : undefined,
      title: `${f.name} — ${f.category}`,
    };
    const inner = (
      <span className="transition-transform group-hover:scale-105">
        <SupplierLogo f={f} />
      </span>
    );
    return onSelect ? (
      <button key={`${f.slug}-${copy}`} type="button" onClick={() => onSelect(f.slug)} {...common}>
        {inner}
        <span className="sr-only">Voir la fiche {f.name}</span>
      </button>
    ) : (
      <Link key={`${f.slug}-${copy}`} href={`/fournisseurs#${f.slug}`} {...common}>
        {inner}
        <span className="sr-only">Fiche {f.name}</span>
      </Link>
    );
  };

  return (
    <div className="marquee group/marquee relative overflow-hidden py-2">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((f) => renderTile(f, false))}
        {items.map((f) => renderTile(f, true))}
      </div>
    </div>
  );
}
