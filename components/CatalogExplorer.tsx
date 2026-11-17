"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CATALOG, PRODUCT_FAMILIES, getCatalogItem, type CatalogItem } from "@/lib/produits";
import { getFournisseur } from "@/lib/fournisseurs";
import SupplierLogo from "@/components/SupplierLogo";
import { ArrowIcon, CloseIcon, SearchIcon } from "@/components/Icons";

const norm = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/œ/g, "oe").trim();

const haystack = (i: CatalogItem) =>
  norm(
    [
      i.name,
      i.description,
      i.family.name,
      ...(i.keywords ?? []),
      ...(i.brands ?? []).map((b) => getFournisseur(b)?.name ?? ""),
    ].join(" ")
  );

const SUGGESTIONS = ["BA13", "parpaing", "laine de verre", "ciment", "vis", "ragréage"];

/** Visuel ou photo d'une catégorie. */
function Visual({ item, sizes, priority }: { item: CatalogItem; sizes: string; priority?: boolean }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.imageAlt ?? item.name}
        fill
        sizes={sizes}
        priority={priority}
        className={`transition-transform duration-500 group-hover:scale-105 ${item.packshot ? "object-contain p-6 bg-white" : "object-cover"}`}
      />
    );
  }
  return (
    <div
      className="absolute inset-0 flex items-end p-5"
      style={{
        backgroundColor: item.family.color,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgb(255 255 255 / 0.07) 0 14px, transparent 14px 28px), linear-gradient(160deg, transparent 30%, rgb(0 0 0 / 0.35))",
      }}
      aria-hidden="true"
    >
      <span className="font-heading text-white/90 text-2xl lg:text-3xl uppercase font-semibold leading-tight">
        {item.name}
      </span>
    </div>
  );
}

type Props = {
  /** Limite le catalogue à une famille (pages /produits/[slug]). */
  family?: string;
};

export default function CatalogExplorer({ family }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>(family ?? "all");
  const [current, setCurrent] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const scope = useMemo(() => (family ? CATALOG.filter((i) => i.family.slug === family) : CATALOG), [family]);

  const results = useMemo(() => {
    const words = norm(query).split(/\s+/).filter(Boolean);
    return scope.filter(
      (i) => (active === "all" || i.family.slug === active) && words.every((w) => haystack(i).includes(w))
    );
  }, [scope, active, query]);

  const countFor = (slug: string) => scope.filter((i) => i.family.slug === slug).length;

  const open = useCallback((slug: string) => {
    if (!getCatalogItem(slug)) return;
    setCurrent(slug);
    history.replaceState(null, "", `#${slug}`);
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(location.hash.slice(1));
      const item = getCatalogItem(slug);
      if (item && (!family || item.family.slug === family)) setCurrent(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [family]);

  useEffect(() => {
    const d = dialogRef.current;
    if (current && d && !d.open) d.showModal();
  }, [current]);

  const item = current ? getCatalogItem(current) : undefined;
  // Navigation dans la sélection affichée (ou dans tout le périmètre si la fiche n'y est pas).
  const list = item && results.includes(item) ? results : scope;
  const idx = item ? list.indexOf(item) : -1;
  const prev = idx >= 0 && list.length > 1 ? list[(idx - 1 + list.length) % list.length] : undefined;
  const next = idx >= 0 && list.length > 1 ? list[(idx + 1) % list.length] : undefined;

  return (
    <>
      {/* Barre de recherche et filtres */}
      <div className="sticky top-[72px] lg:top-20 z-30 bg-white/95 backdrop-blur border-b border-warm-border">
        <div className="container mx-auto py-3 flex flex-col lg:flex-row lg:items-center gap-3">
          <label className="relative flex-shrink-0 lg:w-80">
            <span className="sr-only">Rechercher un produit</span>
            <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher : BA13, parpaing, vis…"
              className="w-full pl-10 pr-4 py-2.5 border border-warm-border rounded bg-warm-white text-sm text-dark placeholder-gray-400 focus:outline-none focus:border-orange focus:bg-white"
            />
          </label>

          {!family && (
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0" role="group" aria-label="Familles">
              {[{ slug: "all", name: "Tout", n: scope.length }, ...PRODUCT_FAMILIES.map((f) => ({ slug: f.slug, name: f.shortName, n: countFor(f.slug) }))].map(
                (f) => (
                  <button
                    key={f.slug}
                    type="button"
                    onClick={() => setActive(f.slug)}
                    aria-pressed={active === f.slug}
                    className={`flex-shrink-0 px-3.5 py-2 rounded-full font-heading text-xs uppercase tracking-wider border transition-colors ${
                      active === f.slug
                        ? "bg-dark text-white border-dark"
                        : "bg-white text-dark border-warm-border hover:border-dark"
                    }`}
                  >
                    {f.name} <span className={active === f.slug ? "text-orange-300" : "text-gray-400"}>{f.n}</span>
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <section className="py-5 lg:py-6 bg-warm-white min-h-[50vh]">
        <div className="container mx-auto">
          <p className="text-sm text-gray-500 mb-4" aria-live="polite">
            {results.length} catégorie{results.length > 1 ? "s" : ""}
            {query && <> pour « {query} »</>}
          </p>

          {results.length === 0 ? (
            <div className="text-center py-16 bg-white border border-warm-border rounded">
              <p className="font-heading text-dark text-2xl uppercase">Pas trouvé ce que vous cherchez ?</p>
              <p className="text-gray-600 mt-2">Notre gamme est plus large que ce catalogue, et nous pouvons commander pour vous.</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setQuery(s);
                      setActive(family ?? "all");
                    }}
                    className="px-3 py-1.5 rounded-full border border-warm-border text-sm hover:border-orange hover:text-orange"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <Link href={`/devis?produit=${encodeURIComponent(query)}`} className="btn-primary mt-6">
                Demander ce produit
              </Link>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {results.map((i, n) => (
                <li key={i.slug}>
                  <button
                    type="button"
                    onClick={() => open(i.slug)}
                    className="group w-full h-full text-left flex flex-col bg-white border border-warm-border rounded overflow-hidden hover:border-orange hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange transition"
                  >
                    <span className="relative block aspect-[4/3] overflow-hidden bg-warm-100">
                      <Visual item={i} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" priority={n < 3} />
                      {!family && (
                        <span
                          className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-heading uppercase tracking-wider text-white shadow"
                          style={{ backgroundColor: i.family.color }}
                        >
                          {i.family.shortName}
                        </span>
                      )}
                    </span>
                    <span className="p-5 flex flex-col flex-1">
                      <span className="font-heading text-dark text-lg uppercase font-semibold leading-snug group-hover:text-orange transition-colors">
                        {i.name}
                      </span>
                      <span className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2 flex-1">{i.description}</span>
                      <span className="mt-4 flex items-center justify-between gap-3">
                        <span className="flex items-center gap-1.5 min-w-0">
                          {(i.brands ?? []).slice(0, 3).map((b) => {
                            const f = getFournisseur(b);
                            return f ? (
                              <span key={b} className="text-[11px] px-2 py-0.5 rounded bg-warm-white border border-warm-border text-gray-600 truncate">
                                {f.name}
                              </span>
                            ) : null;
                          })}
                        </span>
                        <span className="flex-shrink-0 inline-flex items-center gap-1 font-heading text-xs uppercase tracking-wider text-orange">
                          Voir <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Fiche catégorie */}
      <dialog
        ref={dialogRef}
        className="fiche w-[min(880px,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] p-0 rounded-lg shadow-2xl bg-white text-dark"
        aria-labelledby="fiche-produit-titre"
        onClose={() => {
          setCurrent(null);
          history.replaceState(null, "", location.pathname + location.search);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
      >
        {item && (
          <div className="flex flex-col max-h-[calc(100dvh-2rem)]">
            <div className="grid md:grid-cols-2 overflow-y-auto">
              <div className="group relative aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-warm-100">
                <Visual item={item} sizes="(max-width: 768px) 100vw, 440px" />
                {item.illustration && (
                  <p className="absolute bottom-0 inset-x-0 px-3 py-1.5 bg-black/60 text-[11px] leading-snug text-white/90">
                    Photo d&apos;illustration :{" "}
                    <a href={item.illustration.source} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                      {item.illustration.author}
                    </a>
                    ,{" "}
                    <a href={item.illustration.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                      {item.illustration.license}
                    </a>
                  </p>
                )}
              </div>

              <div className="p-6 lg:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="px-2.5 py-1 rounded text-[11px] font-heading uppercase tracking-wider text-white"
                    style={{ backgroundColor: item.family.color }}
                  >
                    {item.family.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => dialogRef.current?.close()}
                    aria-label="Fermer la fiche"
                    className="-mt-2 -mr-2 p-2 rounded-full border border-warm-border hover:text-orange hover:border-orange transition-colors"
                  >
                    <CloseIcon className="w-5 h-5" />
                  </button>
                </div>

                <h2 id="fiche-produit-titre" className="font-heading text-3xl uppercase font-semibold leading-tight mt-3">
                  {item.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mt-3">{item.description}</p>

                {(item.brands ?? []).length > 0 && (
                  <>
                    <h3 className="font-heading text-sm uppercase tracking-wider mt-6 mb-3">Marques disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {(item.brands ?? []).map((b) => {
                        const f = getFournisseur(b);
                        return f ? (
                          <Link
                            key={b}
                            href={`/fournisseurs#${b}`}
                            className="flex items-center justify-center w-36 h-16 px-3 bg-white border border-warm-border rounded hover:border-orange hover:shadow transition"
                            title={`Fiche ${f.name}`}
                          >
                            <SupplierLogo f={f} />
                          </Link>
                        ) : null;
                      })}
                    </div>
                  </>
                )}

                <p className="text-sm text-gray-500 mt-6">
                  Disponibilités, références exactes et prix : demandez un devis ou appelez le dépôt.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 md:mt-auto md:pt-6">
                  <Link
                    href={`/devis?famille=${item.family.slug}&produit=${encodeURIComponent(item.name)}`}
                    className="btn-primary"
                  >
                    Demander un prix
                  </Link>
                  {!family && (
                    <Link href={`/produits/${item.family.slug}`} className="btn-outline">
                      {item.family.shortName} <ArrowIcon className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {prev && next && (
              <div className="flex justify-between border-t border-warm-border text-sm">
                <button type="button" onClick={() => open(prev.slug)} className="px-5 py-3 text-gray-600 hover:text-orange transition-colors truncate max-w-[50%] text-left">
                  ← {prev.name}
                </button>
                <button type="button" onClick={() => open(next.slug)} className="px-5 py-3 text-gray-600 hover:text-orange transition-colors truncate max-w-[50%] text-right">
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
