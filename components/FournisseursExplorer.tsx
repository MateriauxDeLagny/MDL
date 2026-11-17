"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FOURNISSEURS, getFournisseur } from "@/lib/fournisseurs";
import { DEVIS_URL } from "@/lib/constants";
import { getFamilyBySlug } from "@/lib/produits";
import LogoMarquee from "@/components/LogoMarquee";
import SupplierLogo from "@/components/SupplierLogo";
import { ArrowIcon, CheckIcon, CloseIcon } from "@/components/Icons";

// Bandeau 1 : structure, gros œuvre et isolation ; bandeau 2 : finitions, fixations, outillage.
const ROW_1 = ["wienerberger", "heidelberg-materials", "cimalux", "fimurex", "slm", "ursa", "actis", "isolava", "semin"];

export default function FournisseursExplorer() {
  const [current, setCurrent] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback((slug: string) => {
    if (!getFournisseur(slug)) return;
    setCurrent(slug);
    history.replaceState(null, "", `#${slug}`);
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  // Ouvre la fiche demandée dans l'URL (ex. lien depuis l'accueil : /fournisseurs#prb).
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(location.hash.slice(1));
      if (getFournisseur(slug)) setCurrent(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (current && d && !d.open) d.showModal();
  }, [current]);

  const onDialogClose = () => {
    setCurrent(null);
    history.replaceState(null, "", location.pathname + location.search);
  };

  const row1 = ROW_1.map((s) => getFournisseur(s)!).filter(Boolean);
  const row2 = FOURNISSEURS.filter((f) => !ROW_1.includes(f.slug));

  const f = current ? getFournisseur(current) : undefined;
  const idx = f ? FOURNISSEURS.indexOf(f) : -1;
  const prev = idx >= 0 ? FOURNISSEURS[(idx - 1 + FOURNISSEURS.length) % FOURNISSEURS.length] : undefined;
  const next = idx >= 0 ? FOURNISSEURS[(idx + 1) % FOURNISSEURS.length] : undefined;

  return (
    <>
      {/* Bandeaux déroulants */}
      <section className="py-10 lg:py-14 bg-white border-b border-warm-border" aria-label="Logos de nos fournisseurs">
        <div className="container mx-auto mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="eyebrow">{FOURNISSEURS.length} marques partenaires</p>
            <h2 className="heading-md text-dark">Cliquez sur un logo pour découvrir la fiche</h2>
          </div>
          <p className="text-xs text-gray-500">Survolez un bandeau pour le mettre en pause.</p>
        </div>
        <div className="space-y-3">
          <LogoMarquee items={row1} duration={45} onSelect={open} />
          <LogoMarquee items={row2} duration={40} reverse onSelect={open} />
        </div>
      </section>

      {/* Toutes les fiches (accès direct, clavier et référencement) */}
      <section className="section-padding bg-warm-white">
        <div className="container mx-auto">
          <h2 className="heading-lg text-dark mb-8">Toutes nos marques</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FOURNISSEURS.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => open(s.slug)}
                  className="group w-full h-full text-left flex flex-col bg-white border border-warm-border rounded overflow-hidden hover:border-orange hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange transition"
                >
                  <span className="flex items-center justify-center h-28 border-b border-warm-border bg-white px-6">
                    <SupplierLogo f={s} />
                  </span>
                  <span className="p-5 flex flex-col flex-1">
                    <span className="font-heading text-dark text-lg uppercase font-semibold group-hover:text-orange transition-colors">
                      {s.name}
                    </span>
                    <span className="text-xs text-orange font-medium uppercase tracking-wider mt-0.5">{s.category}</span>
                    <span className="text-sm text-gray-600 leading-relaxed mt-3 line-clamp-3 flex-1">{s.description}</span>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-xs uppercase tracking-wider text-orange">
                      Voir la fiche <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fiche fournisseur */}
      <dialog
        ref={dialogRef}
        className="fiche w-[min(640px,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] p-0 rounded-lg shadow-2xl bg-white text-dark"
        aria-labelledby="fiche-titre"
        onClose={onDialogClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {f && (
          <div className="flex flex-col max-h-[calc(100dvh-2rem)]">
            <div className="relative flex items-center justify-center h-40 bg-warm-white border-b border-warm-border px-10">
              <SupplierLogo f={f} size="lg" />
              <button
                type="button"
                onClick={close}
                aria-label="Fermer la fiche"
                className="absolute top-3 right-3 p-2 rounded-full bg-white border border-warm-border text-dark hover:text-orange hover:border-orange transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 lg:p-8 overflow-y-auto">
              <p className="text-xs text-orange font-medium uppercase tracking-wider">{f.category}</p>
              <h2 id="fiche-titre" className="font-heading text-3xl uppercase font-semibold mt-1">
                {f.name}
              </h2>
              {f.origine && <p className="text-sm text-gray-500 mt-1">{f.origine}</p>}

              <p className="text-gray-700 leading-relaxed mt-4">{f.description}</p>

              <h3 className="font-heading text-sm uppercase tracking-wider mt-6 mb-2">Au dépôt</h3>
              <ul className="space-y-1.5">
                {f.specialites.map((sp) => (
                  <li key={sp} className="flex items-start gap-2 text-sm">
                    <CheckIcon className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                    {sp}
                  </li>
                ))}
              </ul>

              {f.familles.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {f.familles.map((slug) => {
                    const fam = getFamilyBySlug(slug);
                    return fam ? (
                      <Link
                        key={slug}
                        href={`/produits/${slug}`}
                        className="px-3 py-1.5 bg-warm-white border border-warm-border rounded text-xs font-heading uppercase tracking-wider hover:border-orange hover:text-orange transition-colors"
                      >
                        {fam.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={DEVIS_URL} className="btn-primary">
                  Demander un devis
                </Link>
                {f.site && (
                  <a href={f.site} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Site officiel <ArrowIcon className="w-4 h-4 -rotate-45" />
                  </a>
                )}
              </div>
            </div>

            {prev && next && (
              <div className="flex justify-between border-t border-warm-border text-sm">
                <button type="button" onClick={() => open(prev.slug)} className="px-5 py-3 text-gray-600 hover:text-orange transition-colors">
                  ← {prev.name}
                </button>
                <button type="button" onClick={() => open(next.slug)} className="px-5 py-3 text-gray-600 hover:text-orange transition-colors">
                  {next.name} →
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
