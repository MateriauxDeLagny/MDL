import Link from "next/link";
import Image from "next/image";
import { ProductFamily } from "@/lib/produits";

type Props = {
  family: ProductFamily;
  variant?: "grid" | "list";
};

export default function ProductFamilyCard({ family, variant = "grid" }: Props) {
  if (variant === "list") {
    return (
      <Link
        href={`/produits/${family.slug}`}
        className="group flex items-center gap-4 p-4 border border-warm-border bg-white rounded hover:border-orange hover:shadow-sm transition-all"
      >
        <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
          <Image
            src={family.image}
            alt={family.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-dark text-base uppercase font-medium group-hover:text-orange transition-colors">
            {family.name}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{family.description}</p>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-orange transition-colors flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  return (
    <Link
      href={`/produits/${family.slug}`}
      className="group flex flex-col bg-white border border-warm-border rounded hover:shadow-md hover:border-orange transition-all overflow-hidden"
    >
      {/* Photo header */}
      <div className="relative h-44 overflow-hidden bg-gray-200">
        <Image
          src={family.image}
          alt={family.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent" />
        <span className="absolute bottom-2 left-3 text-2xl drop-shadow-lg">{family.emoji}</span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-dark text-xl uppercase font-semibold mb-2 group-hover:text-orange transition-colors">
          {family.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{family.description}</p>
        <div className="flex items-center gap-1 text-orange font-heading text-sm uppercase tracking-wide">
          Voir les produits
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
