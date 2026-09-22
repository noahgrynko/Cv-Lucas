# Lucas Arnoult — Portfolio

Portfolio personnel de Lucas Arnoult, élève en seconde MTNE, à la recherche
d'un stage en cybersécurité. Expérience "Cyber Lab" sombre, éditoriale et
premium, construite avec React, TypeScript, Vite, Tailwind CSS v4 et Framer
Motion.

Toutes les informations affichées (identité, formation, coordonnées, centres
d'intérêt) sont réelles et fournies par Lucas — aucune compétence, expérience,
certification ou technologie n'est inventée. Cybersécurité, programmation et
codage y sont présentés comme des centres d'intérêt et une première
sensibilisation, pas comme une expertise professionnelle.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (reveals au scroll, transition d'entrée)
- Canvas 2D natif pour le réseau de particules du hero (pas de dépendance 3D,
  pour rester très léger et performant)

## Structure

```
src/
  components/   Navbar, Cursor, Glow, GridBackground, NeuralField,
                IdentityCard, InterestVisual, SectionLabel, Reveal, Footer...
  sections/     Hero, Profile, Interests, Mindset, Mission, Objective,
                WhyCyber, CTA, Contact
  lib/          constants.ts (données réelles), hooks (pointer, reduced motion)
```

## Démarrer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview   # pour vérifier le build localement
```

Le build utilise une base relative (`base: './'` dans `vite.config.ts`), donc
il fonctionne tel quel sur GitHub Pages, quel que soit le nom du dépôt
(`https://<user>.github.io/<repo>/`) — aucune configuration supplémentaire
n'est nécessaire.

## Déploiement sur GitHub Pages (pour ton ami)

Le dépôt contient déjà un workflow GitHub Actions
(`.github/workflows/deploy.yml`) qui build et déploie automatiquement le site
à chaque push sur la branche `main`.

Étapes pour que ton ami déploie ce portfolio sur **son propre compte
GitHub** :

1. **Créer le dépôt** : sur son compte GitHub, créer un nouveau dépôt (public
   ou privé, peu importe pour Pages), par exemple `cv-lucas`.
2. **Pousser le code** :
   ```bash
   git remote set-url origin https://github.com/<son-pseudo>/<son-repo>.git
   # ou git remote add origin ... si le remote n'existe pas encore
   git push -u origin main
   ```
   (Si son dépôt utilise `master` comme branche par défaut, soit renommer la
   branche locale en `main`, soit adapter `on.push.branches` dans
   `.github/workflows/deploy.yml`.)
3. **Activer GitHub Pages avec Actions** : dans le dépôt GitHub →
   `Settings` → `Pages` → section "Build and deployment" → choisir
   **Source: GitHub Actions**.
4. **Attendre le déploiement** : à chaque push sur `main`, l'onglet
   `Actions` du dépôt montre le workflow "Deploy to GitHub Pages" s'exécuter.
   Une fois terminé (icône verte), le site est en ligne à l'adresse indiquée
   dans `Settings → Pages` (généralement
   `https://<son-pseudo>.github.io/<son-repo>/`).
5. **Mises à jour futures** : il suffit de pousser sur `main`, le site se
   redéploie automatiquement.

Aucune configuration manuelle du `base` Vite n'est nécessaire même si le nom
du dépôt change, grâce à la base relative.

## CV en PDF

Le bouton "DOWNLOAD CV" pointe vers `public/assets/CV-Lucas-Arnoult.pdf`.
Ce fichier n'existe pas dans le dépôt (aucun faux PDF n'a été fabriqué) : il
faut y déposer le vrai CV de Lucas, nommé exactement
`CV-Lucas-Arnoult.pdf`, avant de déployer si ce bouton doit fonctionner.

## Accessibilité & performance

- HTML sémantique, `aria-label` sur chaque section, focus visible au clavier.
- `prefers-reduced-motion` respecté : transition d'entrée, reveals au scroll,
  curseur personnalisé et animations du réseau de particules se désactivent
  ou se réduisent automatiquement.
- Curseur personnalisé uniquement sur pointeur fin (desktop) ; désactivé sur
  tactile/mobile.
- Animations basées sur `transform`/`opacity`, canvas 2D léger avec limite de
  devicePixelRatio, pas de librairie 3D pour garder le bundle et le coût CPU
  minimes.
