import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ILLUSTRATIONS } from "@/lib/illustrations";
import { getCatalogItem } from "@/lib/produits";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Matériaux de Lagny.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-dark text-white py-12">
        <div className="container mx-auto">
          <nav className="text-xs text-gray-500 mb-4 font-heading uppercase tracking-wider flex items-center gap-2">
            <Link href="/" className="hover:text-orange transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-gray-400">Mentions légales</span>
          </nav>
          <h1 className="heading-xl text-white">Mentions légales</h1>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white border border-warm-border rounded p-6 lg:p-10 prose prose-sm max-w-none">
            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Éditeur du site</h2>
            <p className="text-gray-600 text-sm mb-6">
              <strong className="text-dark">Matériaux de Lagny</strong><br />
              {SITE.address}<br />
              Tél. : {SITE.phone}<br />
              Email : {SITE.email}
            </p>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Hébergeur</h2>
            <p className="text-gray-600 text-sm mb-6">
              Ce site est hébergé par <strong className="text-dark">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">vercel.com</a>
            </p>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Propriété intellectuelle</h2>
            <p className="text-gray-600 text-sm mb-6">
              L'ensemble du contenu de ce site (textes, images, graphismes) est la propriété de Matériaux de Lagny ou de ses partenaires. Toute reproduction sans autorisation préalable est interdite.
            </p>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Données personnelles</h2>
            <p className="text-gray-600 text-sm mb-6">
              Les informations collectées via les formulaires de contact et de devis sont utilisées uniquement pour traiter votre demande. Elles ne sont pas cédées à des tiers. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression en nous contactant à l'adresse {SITE.email}.
            </p>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Cookies</h2>
            <p className="text-gray-600 text-sm mb-6">
              Ce site n'utilise pas de cookies de traçage ou de publicité. Des cookies techniques peuvent être déposés pour assurer le bon fonctionnement du site. La carte de la page Contact est fournie par OpenStreetMap, qui ne dépose pas de cookie de traçage ; le lien « Itinéraire » ouvre Google Maps dans un nouvel onglet.
            </p>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Crédits photos</h2>
            <p className="text-gray-600 text-sm mb-3">
              Les photos du dépôt et des produits en stock sont la propriété de Matériaux de Lagny. Certaines catégories du
              catalogue sont illustrées par des photos sous licence Creative Commons, redimensionnées et recadrées :
            </p>
            <ul className="text-gray-600 text-sm mb-6 space-y-1 list-disc pl-5">
              {Object.entries(ILLUSTRATIONS).map(([slug, c]) => (
                <li key={slug}>
                  <span className="text-dark">{getCatalogItem(slug)?.name ?? slug}</span> : «&nbsp;{c.title}&nbsp;» par{" "}
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">{c.author}</a>,{" "}
                  <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">{c.license}</a>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-dark text-lg uppercase font-semibold mb-3">Responsabilité</h2>
            <p className="text-gray-600 text-sm">
              Matériaux de Lagny s'efforce de maintenir les informations de ce site à jour. Cependant, aucune garantie n'est donnée quant à l'exactitude, l'exhaustivité ou l'actualité des informations présentées.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
