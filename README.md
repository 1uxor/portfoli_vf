# Portfolio — Saad Filali

Portfolio professionnel de Saad Filali, Ingénieur Data & Intelligence Artificielle. Le site présente les expertises IA/Data, trois projets principaux, les expériences, le projet de recherche EulCat, la formation, les certifications et les coordonnées.

## Stack

- Next.js 15 (App Router, export statique)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React et React Icons
- Geist

Le projet est configuré avec `output: "export"`. La commande de build génère un site statique dans `out/`, déployable sur Vercel ou tout hébergement statique.

## Installation

Prérequis : Node.js 20 ou version ultérieure.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000).

## Commandes

```bash
npm run dev        # serveur de développement
npm run lint       # contrôle ESLint
npm run typecheck  # contrôle TypeScript
npm run build      # build de production dans out/
```

## Architecture

```text
app/
├── projects/[slug]/page.tsx  # études de cas dynamiques
├── globals.css               # design system et responsive
├── layout.tsx                # metadata globale et layout
├── page.tsx                  # page d'accueil
├── robots.ts                 # robots.txt généré
└── sitemap.ts                # sitemap généré
components/                   # composants réutilisables
data/                         # tout le contenu éditable
lib/                          # utilitaires
public/                       # favicon, photo, CV et captures
```

Le contenu professionnel est séparé des composants :

- `data/profile.ts` : identité, coordonnées, liens sociaux, navigation et texte À propos.
- `data/experience.ts` : expériences et responsabilités.
- `data/projects.ts` : projets, études de cas, architectures, captures et liens.
- `data/skills.ts` : expertises, compétences et bandeau technologique.
- `data/education.ts` : formation.
- `data/certifications.ts` : certifications.

## Modifier les informations personnelles

Éditez `data/profile.ts`. Le lien GitHub est volontairement configuré à `null` pour ne pas publier une URL inventée :

```ts
github: "https://github.com/votre-identifiant",
```

Définissez aussi l'URL canonique du site dans `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

Copiez `.env.example` pour voir les variables prévues.

## Ajouter ou modifier une expérience

Ajoutez un objet dans le tableau `experiences` de `data/experience.ts`. Chaque expérience accepte :

- `company`, `location`, `role`, `type`, `period` et `year` ;
- un `project` optionnel ;
- `description`, `responsibilities` et `stack`.

Les années de la frise sont actuellement regroupées dans `components/ExperienceTimeline.tsx`. Ajoutez une année au tableau `years` si nécessaire.

## Ajouter un projet

Ajoutez un objet dans `data/projects.ts`, puis renseignez un `slug` unique. La route `/projects/[slug]` sera générée automatiquement au build.

Les liens non disponibles doivent rester à `null` :

```ts
github: null,
demo: null,
```

Les sections `results`, `challenges` et `learnings` sont masquées lorsqu'elles sont vides. N'ajoutez que des informations vérifiables.

Deux visualisations d'architecture sont disponibles :

- `type: "linear"` pour un pipeline séquentiel ;
- `type: "multimodal"` pour plusieurs branches fusionnées vers une sortie.

## Ajouter des captures de projet

1. Placez les fichiers dans `public/images/projects/<slug>/`.
2. Ajoutez leurs chemins dans `screenshots` dans `data/projects.ts` :

```ts
screenshots: [
  "/images/projects/mon-projet/dashboard.webp",
  "/images/projects/mon-projet/pipeline.webp",
],
```

Privilégiez WebP ou AVIF et compressez les images avant de les ajouter.

## Remplacer le visuel de profil

Ajoutez la photo professionnelle ici :

```text
public/images/profile.jpg
```

Le build détecte automatiquement le fichier. Tant qu'il est absent, le hero utilise un monogramme technique neutre — aucune fausse photo n'est générée.

## Ajouter le CV

Ajoutez le PDF ici :

```text
public/cv/Saad-Filali-CV.pdf
```

Le bouton de téléchargement est activé automatiquement quand le fichier existe. Sans fichier, l'interface affiche un état non cliquable et ne génère pas de lien cassé.

## Configurer le formulaire de contact

Le formulaire n'envoie volontairement rien tant qu'aucun service n'est configuré. Il affiche alors un message clair qui redirige vers l'adresse email.

### Option EmailJS

Pour conserver l'export statique :

1. installez le SDK EmailJS ;
2. ajoutez les variables `NEXT_PUBLIC_EMAILJS_*` listées dans `.env.example` ;
3. passez `provider` à `"emailjs"` dans `data/profile.ts` ;
4. branchez l'appel EmailJS dans `components/Contact.tsx`.

### Option Resend

Resend nécessite une fonction serveur. Retirez `output: "export"` de `next.config.mjs`, ajoutez une route `app/api/contact/route.ts`, puis stockez `RESEND_API_KEY` et `CONTACT_TO_EMAIL` dans les variables d'environnement Vercel. Ne placez jamais une clé secrète dans une variable `NEXT_PUBLIC_*`.

## Déploiement sur Vercel

1. Poussez le projet dans un dépôt Git.
2. Importez le dépôt dans Vercel.
3. Gardez le preset Next.js et la commande `npm run build`.
4. Ajoutez `NEXT_PUBLIC_SITE_URL` avec l'URL finale.
5. Déployez, puis relancez un build après tout changement d'URL canonique.

Vous pouvez également utiliser la CLI :

```bash
npx vercel
npx vercel --prod
```

## SEO et accessibilité

- metadata Next.js, Open Graph et Twitter ;
- sitemap et robots.txt générés ;
- structure HTML sémantique et lien d'évitement ;
- navigation clavier et états de focus visibles ;
- contrastes sombres lisibles ;
- animations désactivées via `prefers-reduced-motion` ;
- favicon SVG temporaire dans `public/favicon.svg`.

## Vérification avant publication

```bash
npm run lint
npm run typecheck
npm run build
```

Vérifiez ensuite les vues 375, 430, 768, 1024, 1440 et 1920 px, les trois routes de projets, les liens externes, la présence du CV et l'absence d'erreur dans la console du navigateur.
