import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CatalogExplorer from "@/components/CatalogExplorer";
import { PRODUCT_FAMILIES, getFamilyBySlug } from "@/lib/produits";
import { getFournisseur } from "@/lib/fournisseurs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCT_FAMILIES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) return {};
  return {
    title: family.name,
    description: `${family.name} — ${family.description} Disponible au dépôt Matériaux de Lagny, Lagny-sur-Marne (77).`,
  };
}

export default async function FamilyPage({ params }: Props) {
  const { slug } = await params;
  const family = getFamilyBySlug(slug);
  if (!family) notFound();

  const currentIndex = PRODUCT_FAMILIES.findIndex((f) => f.slug === slug);
  const prev = currentIndex > 0 ? PRODUCT_FAMILIES[currentIndex - 1] : null;
  const next = currentIndex < PRODUCT_FAMILIES.length - 1 ? PRODUCT_FAMILIES[currentIndex + 1] : null;

  const brands = [...new Set(family.subcategories.flatMap((s) => s.brands ?? []))]
    .map((b) => getFournisseur(b))
    .filter((f) => f !== undefined);

  return (
    <>
      <section className="relative bg-dark text-white overflow-hidden">
        <Image src={family.image} alt="" fill priority className="object-cover opacity-30" sizes="100vw" />
        <div className="absolute inset-x-0 bottom-0 h-1.5" style={{ backgroundColor: family.color }} />
        <div className="relative container mx-auto py-14 lg:py-20">
          <nav className="text-xs text-gray-400 mb-4 font-heading uppercase tracking-wider flex items-center gap-2 flex-wrap" aria-label="Fil d'Ariane">
            <Link href="/" className="hover:text-orange-300 transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/produits" className="hover:text-orange-300 transition-colors">Produits</Link>
            <span>/</span>
            <span className="text-gray-300">{family.name}</span>
          </nav>
          <h1 className="heading-xl text-white">{family.name}</h1>
          <p className="text-gray-200 mt-4 max-w-2xl leading-relaxed">{family.description}</p>
          {brands.length > 0 && (
            <p className="mt-6 text-sm text-gray-300">
              <span className="font-heading uppercase tracking-wider text-orange-300 mr-2">Marques</span>
              {brands.map((b, i) => (
                <span key={b.slug}>
                  {i > 0 && " · "}
                  <Link href={`/fournisseurs#${b.slug}`} className="hover:text-white underline-offset-2 hover:underline">
                    {b.name}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </div>
      </section>

      <CatalogExplorer family={family.slug} />

      {/* Navigation inter-familles */}
      <nav className="py-8 bg-white border-t border-warm-border" aria-label="Autres familles">
        <div className="container mx-auto flex justify-between gap-4">
          {prev ? (
            <Link href={`/produits/${prev.slug}`} className="group text-sm">
              <div className="text-xs text-gray-400 font-heading uppercase tracking-wider mb-0.5">← Précédent</div>
              <div className="font-heading text-dark group-hover:text-orange uppercase font-medium">{prev.shortName}</div>
            </Link>
          ) : (
            <span />
          )}
          <Link href="/produits" className="self-center font-heading text-xs uppercase tracking-wider text-orange hover:underline">
            Tout le catalogue
          </Link>
          {next ? (
            <Link href={`/produits/${next.slug}`} className="group text-sm text-right">
              <div className="text-xs text-gray-400 font-heading uppercase tracking-wider mb-0.5">Suivant →</div>
              <div className="font-heading text-dark group-hover:text-orange uppercase font-medium">{next.shortName}</div>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </>
  );
}
