export const SITE = {
  name: "Matériaux de Lagny",
  tagline: "Négoce de matériaux de construction",
  address: "17 rue Freycinet, 77400 Lagny-sur-Marne",
  phone: "01.85.42.12.34",
  phoneHref: "tel:+33185421234",
  email: "contact@materiauxdelagny.com",
  /** Adresse qui reçoit les demandes de devis et de contact du site. */
  leadsEmail: "nicolas@materiauxdelagny.com",
  facebook: "https://facebook.com/materiauxdelagny",
  url: "https://www.materiauxdelagny.com",
  // Position (OpenStreetMap / Nominatim : rue Freycinet, ZAE Marne et Gondoire).
  geo: { lat: 48.87637, lon: 2.67997 },
  hours: [
    { days: "Lundi – Vendredi", time: "7h30 – 17h30" },
    { days: "Samedi", time: "8h00 – 12h00" },
    { days: "Dimanche", time: "Fermé" },
  ],
  hoursShort: "Lun–Ven 7h30–17h30 · Sam 8h–12h",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Matériaux de Lagny, 17 rue Freycinet, 77400 Lagny-sur-Marne"),
  audience: "Professionnels et particuliers",
};

/** Lien unique vers le formulaire de devis (ancre sur le formulaire lui-même). */
export const DEVIS_URL = "/devis#formulaire";

/** Lien vers le formulaire prérempli (famille et/ou produit du catalogue). */
export function devisUrl(params: { famille?: string; produit?: string } = {}) {
  const q = new URLSearchParams();
  if (params.famille) q.set("famille", params.famille);
  if (params.produit) q.set("produit", params.produit);
  const qs = q.toString();
  return `/devis${qs ? `?${qs}` : ""}#formulaire`;
}

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Produits", href: "/produits" },
  { label: "Services", href: "/services" },
  { label: "Fournisseurs", href: "/fournisseurs" },
  { label: "Contact", href: "/contact" },
];
