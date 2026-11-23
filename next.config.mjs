/**
 * Anciennes adresses du site Wix (encore dans Google) → pages équivalentes.
 * Redirections permanentes : Google remplace l'ancien résultat par la nouvelle page.
 * Les fiches produits Wix (/product-page/<nom-du-produit>) sont envoyées vers la
 * famille du catalogue selon des mots du nom ; la première règle qui correspond gagne.
 */
const produitWix = [
  // Colles, ragréages, produits techniques PRB (avant le plâtre : « planISOL »)
  ["planidur|planisol|planimur|ragreage|col-|colle", "/produits/colles-produits"],
  // Plâtre & isolation : plaques BA13, enduits Semin, plâtre Salsi
  ["plaque|ba13|semin|platre|salsi|isol", "/produits/platre-isolation"],
  // Façade : enduits monocouches (Tradiclair…)
  ["tradiclair|monocouche|facade|ravalement", "/produits/revetement-ite"],
  // Gros œuvre : béton, blocs, briques, fers, armatures, agrégats
  [
    "beton|bloc|parpaing|porotherm|brique|fer-|longrine|chainage|poteau|treillis|gravillon|sable|big-bag|ciment",
    "/produits/gros-oeuvre",
  ],
  ["bois|chevron|madrier|osb|contreplaque", "/produits/bois"],
];

const anciennesPagesWix = [
  ["/services-4", "/services"],
  ["/a-propos", "/"],
  ["/about", "/"],
  ["/produits-phares", "/produits"],
  ["/search-results", "/produits"],
  ["/resultats-de-recherche", "/produits"],
  ["/product-page", "/produits"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  async redirects() {
    return [
      ...anciennesPagesWix.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...produitWix.map(([motif, destination]) => ({
        source: `/product-page/:produit(.*(?:${motif}).*)`,
        destination,
        permanent: true,
      })),
      // Tout autre produit Wix : catalogue complet
      { source: "/product-page/:produit*", destination: "/produits", permanent: true },
    ];
  },
};

export default nextConfig;
