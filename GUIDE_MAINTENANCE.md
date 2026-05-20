# Guide de maintenance — Portfolio Gwendal Rolland

## Ajouter une expérience

Dans `src/data/content.js`, tableau `experience`, ajoute un objet :

```js
{
  date:        "2026 — Aujourd'hui",
  title:       "Titre du poste",
  company:     "Nom entreprise",
  badge:       "CDI",          // ou "CDD", "Stage", "Alternance", null
  current:     true,           // true = point lilas, false = point gris
  description: "Description du poste...",
  tags:        ["Outil1", "Outil2"],
  logos: [
    { name: "Power BI", img: "/logos/powerbi.png" },  // logo local
    { name: "SAP",      img: null },                   // pas de logo = initiales
  ],
},
```

### Trouver un logo
1. Google "NomOutil logo PNG transparent"
2. Ou chercher sur worldvectorlogo.com / seeklogo.com
3. Télécharger en PNG ou SVG
4. Placer dans `public/logos/nomoutil.png`
5. Référencer avec `img: "/logos/nomoutil.png"`

---

## Ajouter un projet

Dans `src/data/content.js`, tableau `projects.pro` ou `projects.perso` :

```js
{
  color:           "blue",    // blue / lilas / green / amber
  category:        "📊 Power BI",
  title:           "Nom du projet",
  description:     "Description courte (visible sur la card)",
  tags:            ["Outil1", "Outil2"],
  link:            null,      // ou "https://github.com/..."
  label:           "Voir →",
  // Champs pour le drawer (clic sur la card)
  longDescription: "Description longue et détaillée...",
  context:         "Entreprise — Année",
  stack:           ["Outil1", "Outil2", "Outil3"],
  github:          null,      // ou "https://github.com/..."
  demo:            null,      // ou "https://monsite.com"
  screenshot:      null,      // ou "/screenshots/projet.png"
},
```

### Ajouter un screenshot
1. Faire une capture d'écran du projet
2. Placer dans `public/screenshots/nomprojet.png`
3. Référencer avec `screenshot: "/screenshots/nomprojet.png"`

---

## Ajouter un logo dans les tags projets

Dans `src/data/content.js`, tableau `toolLogos` :

```js
toolLogos: {
  'NomOutil': '/logos/nomoutil.png',
  ...
}
```

---

## Modifier les infos de contact

Dans `src/data/content.js`, tableau `contact` :

```js
{ icon: 'email',    label: "Email",    value: "ton@email.com",   href: "mailto:ton@email.com" },
{ icon: 'linkedin', label: "LinkedIn", value: "Ton Nom",          href: "https://linkedin.com/in/xxx" },
{ icon: 'github',   label: "GitHub",   value: "TonPseudo",        href: "https://github.com/xxx" },
```

---

## Modifier les références

Dans `src/data/content.js`, tableau `references` :

```js
{
  name:    "Prénom Nom",
  role:    "Titre du poste",
  company: "Entreprise",
  email:   "email@entreprise.com",
  linkedin: "https://linkedin.com/in/xxx",
  photo:   "/references/prenom.jpg",      // photo LinkedIn téléchargée
  companyLogo: "/logos/entreprise.png",
},
```

### Récupérer une photo LinkedIn
1. Aller sur le profil LinkedIn de la personne
2. Clic droit sur la photo → "Enregistrer l'image sous"
3. Placer dans `public/references/prenom.jpg`

---

## Déployer les changements

```powershell
git add .
git commit -m "update: description de ce que tu as changé"
git push origin main
```

Le site se met à jour automatiquement en 1-2 minutes sur `gwendal9.github.io`.

---

## Structure des dossiers

```
public/
├── CV_GWENDAL_ROLLAND-Data_analyst.pdf   ← ton CV
├── CV_photo.jpg                           ← ta photo
├── favicon.svg                            ← icône onglet
├── logos/                                 ← logos outils
│   ├── powerbi.png
│   ├── python.png
│   └── ...
├── references/                            ← photos référents
│   ├── matthieu.jpg
│   └── stephane.jpg
└── screenshots/                           ← captures projets
    └── ...

src/
├── data/
│   └── content.js    ← TOUT le contenu à modifier ici
├── components/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── CV.jsx
│   ├── ProjectDrawer.jsx
│   ├── Footer.jsx
│   └── Particles.jsx
├── styles/
│   └── global.css
└── App.jsx
```
