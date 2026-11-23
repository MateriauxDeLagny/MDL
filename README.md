# Matériaux de Lagny — Site vitrine

Site vitrine statique pour Matériaux de Lagny, négoce de matériaux à Lagny-sur-Marne (77).

## Stack technique

| Couche | Choix | Raison |
|---|---|---|
| Framework | Next.js 14 App Router | SSG natif, SEO |
| Style | Tailwind CSS | Productivité, zero runtime CSS |
| Polices | Oswald + Inter via next/font | Auto-hébergé, pas de CDN externe |
| Carousel | embla-carousel-react | Léger, accessible, sans jQuery |
| Email | SMTP OVH (nodemailer) | Boîtes mail déjà incluses chez OVH |
| Données produits | TypeScript statique | Pas de CMS, 0 latence, facilement éditable |
| Hébergement | Netlify | Gratuit, déploiement GitHub automatique |

**Coût mensuel : 0 €**

---

## Structure des fichiers clés

```
app/
  layout.tsx          — Layout racine + fonts + métadonnées globales
  page.tsx            — Page d'accueil
  produits/
    page.tsx          — Catalogue des familles
    [slug]/page.tsx   — Détail d'une famille (génération statique)
  devis/page.tsx      — Formulaire de devis
  fournisseurs/page.tsx
  contact/page.tsx
  mentions-legales/page.tsx
  api/
    contact/route.ts  — Envoi email contact (SMTP OVH)
    devis/route.ts    — Envoi email devis (SMTP OVH)
  sitemap.ts          — Sitemap auto-généré
  robots.ts           — robots.txt

components/
  Header.tsx          — Navigation responsive avec menu mobile
  Footer.tsx          — Footer 4 colonnes
  HeroCarousel.tsx    — Carousel Embla avec autoplay (client component)
  ProductFamilyCard.tsx
  ContactForm.tsx
  DevisForm.tsx

lib/
  constants.ts        — Infos entreprise (adresse, téléphone, horaires…)
  produits.ts         — Données statiques des 6 familles de produits
  email.ts            — Envoi des formulaires par SMTP OVH (mock si non configuré)
```

---

## Démarrage local

```bash
npm install
npm run dev
# → http://localhost:3000
```

Pour activer l'envoi réel d'emails, créer `.env.local` :

```
SMTP_USER=contact@materiauxdelagny.com
SMTP_PASSWORD=mot-de-passe-de-la-boite
```

Sans ces variables, les emails sont affichés dans la console (mode mock).

---

## Hébergement Netlify

Configuration dans `netlify.toml` (build Next.js, redirection du .com vers le .fr).
Chaque push sur `main` est déployé en production.

### Domaines

- Site : `www.materiauxdelagny.fr` (+ `materiauxdelagny.fr`)
- `materiauxdelagny.com` et `www.materiauxdelagny.com` : alias Netlify, redirigés en 301 vers le .fr
- DNS : `A @ → 75.2.60.5`, `CNAME www → <site>.netlify.app`
- Ne jamais toucher aux MX / SPF du .com : ce sont les boîtes mail OVH

### Envoi des formulaires (devis, contact)

Les demandes partent par le serveur SMTP d'OVH (`ssl0.ovh.net`, port 465) depuis une
boîte `@materiauxdelagny.com`, et arrivent sur `SITE.leadsEmail` (`lib/constants.ts`).
Le bouton « Répondre » répond directement au client.

Dans Netlify → Site configuration → Environment variables :

| Variable | Valeur |
|---|---|
| `SMTP_USER` | Adresse complète de la boîte d'envoi |
| `SMTP_PASSWORD` | Mot de passe de cette boîte |

Puis redéployer (Deploys → Trigger deploy).

---

## Mise à jour du contenu

### Modifier les infos de l'entreprise

→ [lib/constants.ts](lib/constants.ts) : téléphone, email, adresse, horaires, Facebook

### Ajouter/modifier les produits

→ [lib/produits.ts](lib/produits.ts) : ajouter une famille ou modifier les sous-catégories

### Modifier les fournisseurs

→ [app/fournisseurs/page.tsx](app/fournisseurs/page.tsx) : tableau `SUPPLIERS`

### Ajouter de vraies photos

Les slides du carousel sont actuellement des dégradés CSS. Pour ajouter des photos :

1. Placer les images dans `public/` (ex. `public/hero-chantier.jpg`)
2. Dans [components/HeroCarousel.tsx](components/HeroCarousel.tsx), remplacer le fond dégradé par une `<Image>` Next.js en position absolue avec `fill`

---

## Checklist de mise en ligne

- [ ] Vérifier les informations dans `lib/constants.ts` (numéro, email, horaires)
- [ ] Tester les formulaires contact et devis en local
- [ ] Ajouter `SMTP_USER` et `SMTP_PASSWORD` dans Netlify
- [ ] Configurer les DNS du .fr et du .com vers Netlify
- [ ] Vérifier `https://www.materiauxdelagny.fr` accessible
- [ ] Tester en mobile (iOS Safari + Android Chrome)
- [ ] Vérifier les formulaires en production
- [ ] Tester `https://www.materiauxdelagny.fr/sitemap.xml`
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Ajouter de vraies photos pour remplacer les placeholders du carousel
