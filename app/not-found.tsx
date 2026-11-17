import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_FAMILIES } from "@/lib/produits";
import { SITE } from "@/lib/constants";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="font-heading text-orange text-7xl lg:text-8xl font-bold">404</p>
        <h1 className="heading-lg text-dark mt-4">Page introuvable</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Vous trouverez peut-être votre bonheur parmi nos
          familles de produits.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {PRODUCT_FAMILIES.map((f) => (
            <Link
              key={f.slug}
              href={`/produits/${f.slug}`}
              className="px-4 py-2 bg-white border border-warm-border rounded font-heading text-sm uppercase tracking-wider text-dark hover:border-orange hover:text-orange transition-colors"
            >
              {f.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil <ArrowIcon className="w-4 h-4" />
          </Link>
          <a href={SITE.phoneHref} className="btn-outline">
            <PhoneIcon className="w-4 h-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
