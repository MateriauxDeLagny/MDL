# Matériaux de Lagny — Site vitrine

Site vitrine statique pour Matériaux de Lagny, négoce de matériaux à Lagny-sur-Marne (77).

## Stack technique

| Couche | Choix | Raison |
|---|---|---|
| Framework | Next.js 14 App Router | SSG natif, SEO, Vercel Hobby = gratuit |
| Style | Tailwind CSS | Productivité, zero runtime CSS |
| Polices | Oswald + Inter via next/font | Auto-hébergé, pas de CDN externe |
| Carousel | embla-carousel-react | Léger, accessible, sans jQuery |
| Email | Resend (free tier) | 3000 emails/mois gratuits |
| Données produits | TypeScript statique | Pas de CMS, 0 latence, facilement éditable |
| Hébergement | Vercel Hobby | Gratuit, déploiement GitHub automatique |

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
    contact/route.ts  — Envoi email contact via Resend
    devis/route.ts    — Envoi email devis via Resend
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
  resend.ts           — Helper email (mock si pas de clé API)
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
RESEND_API_KEY=re_xxxxxxxxxxxx
```

Sans cette variable, les emails sont loggés dans la console (mode mock — aucune erreur).

---

## Déploiement Vercel

### Première fois

```bash
git init
git add .
git commit -m "init: site vitrine matériaux de lagny"
# Pousser sur GitHub puis connecter le dépôt dans vercel.com
```

### Variables d'environnement Vercel

Dans le dashboard Vercel → Settings → Environment Variables :

| Variable | Valeur |
|---|---|
| `RESEND_API_KEY` | Votre clé Resend (optionnel) |

### Domaine personnalisé

1. Dans Vercel → Settings → Domains → ajouter `materiauxdelagny.com` et `www.materiauxdelagny.com`
2. Chez votre registrar DNS (OVH, Gandi…) :
   - `A` record : `@` → `76.76.21.21`
   - `CNAME` record : `www` → `cname.vercel-dns.com`
3. Vercel délivre le certificat SSL automatiquement (Let's Encrypt)

---

## Activer les emails Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Ajouter le domaine `materiauxdelagny.com` → suivre les instructions DNS
3. Générer une API key
4. Ajouter `RESEND_API_KEY` dans Vercel (Settings → Environment Variables)
5. Redéployer (push sur main)

Les emails partent depuis `noreply@materiauxdelagny.com` et arrivent sur `contact@materiauxdelagny.com`.

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
- [ ] Ajouter `RESEND_API_KEY` dans Vercel (ou noter que les emails seront mockés)
- [ ] Configurer le domaine DNS dans Vercel
- [ ] Vérifier `https://www.materiauxdelagny.com` accessible
- [ ] Tester en mobile (iOS Safari + Android Chrome)
- [ ] Vérifier les formulaires en production
- [ ] Tester `https://www.materiauxdelagny.com/sitemap.xml`
- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Ajouter de vraies photos pour remplacer les placeholders du carousel
