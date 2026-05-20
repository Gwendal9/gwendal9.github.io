export const content = {

  hero: {
    firstName:   "Gwendal",
    lastName:    "Rolland",
    status:      "Disponible · Paris",
    roles:       ["Data Analyst", "IA & Big Data", "Supply Chain"],
    description: "Diplômé ingénieur IA & Big Data (eiCNAM), je transforme des données complexes en décisions actionnables. Curieux et rigoureux, je m'adapte rapidement aux outils et aux environnements.",
    chips:       ["Power BI", "Python", "SQL", "GCP", "n8n", "Machine Learning"],
    cvUrl:       "/cv-gwendal-rolland.pdf",
    phone:       "06 51 93 76 72",
    email:       "gwendal.rolland@yahoo.fr",
    location:    "Paris — Véhiculé",
    disponibility: "Disponible immédiatement",
    contract:    "CDI / Mission",
  },

  counters: [
    { value: 3,  suffix: "+", label: "Ans d'expérience"    },
    { value: 40, suffix: "M€", label: "Portefeuille géré"  },
    { value: 8,  suffix: "M",  label: "Produits analysés"  },
  ],

  experience: [
    {
      date:        "2025 — 2026",
      title:       "Data Analyst — Supply Chain",
      company:     "Orange France",
      badge:       "CDD",
      current:     true,
      description: "Modernisation des données SAP/Qlik vers GCP et Power BI. Conception d'un système automatisé de contrôle de facturation sur un portefeuille de 40M€. Dashboard sur les processus de reconditionnement (8M produits).",
      tags:        ["Power BI", "GCP", "SQL", "Power Query", "SAP"],
    },
    {
      date:        "2021 — 2024",
      title:       "Apprenti Data Scientist",
      company:     "URSSAF",
      badge:       "Alternance",
      current:     false,
      description: "Déploiement de tableaux de bord pour le pilotage des directions métiers (+25M lignes). Automatisation des traitements récurrents — gains de 6 JA/mois. Fiabilisation des indicateurs et contrôles qualité.",
      tags:        ["Python", "SQL", "Power BI", "Excel", "Agile"],
    },
    {
      date:        "2023",
      title:       "Ingénieur IA Junior",
      company:     "Skalup (start-up IA)",
      badge:       "Stage",
      current:     false,
      description: "Benchmark de solutions pour détecter murs, plafonds et sols (IA et approches algorithmiques). Mise en œuvre de prototypes et recommandations techniques.",
      tags:        ["Python", "OpenCV", "YOLO", "Machine Learning"],
    },
    {
      date:        "2022",
      title:       "Projet VisioNER",
      company:     "eiCNAM",
      badge:       "Projet",
      current:     false,
      description: "Pipeline OCR → NER pour documents hétérogènes. Constitution et annotation du jeu de données, entraînement d'un modèle de détection de documents.",
      tags:        ["NLP", "SpaCy", "Hugging Face", "OCR", "Python"],
    },
  ],

  formation: [
    {
      date:    "2024",
      title:   "Diplôme d'ingénieur — IA & Big Data",
      school:  "eiCNAM",
      current: false,
    },
    {
      date:    "2021",
      title:   "DUT STID — Statistique et Informatique Décisionnelle",
      school:  "IUT Paris Descartes",
      current: false,
    },
    {
      date:    "2019",
      title:   "BAC ES — option Mathématiques",
      school:  "Lycée Paul Robert",
      current: false,
    },
  ],

  projects: {
    pro: [
      {
        color:       "blue",
        category:    "📊 Power BI",
        title:       "TARTOPOM — Orange",
        description: "Dashboard de reconditionnement sur 8M de produits. Hiérarchie de facturation multi-niveaux, migration SAP/Qlik vers GCP + Power BI.",
        tags:        ["Power BI", "DAX", "GCP", "SAP"],
        link:        null,
        label:       "Voir →",
      },
      {
        color:       "blue",
        category:    "💰 Facturation",
        title:       "Contrôle facturation 40M€",
        description: "Système automatisé de contrôle de facturation Supply Chain chez Orange. Détection d'anomalies et réconciliation sur un portefeuille de 40M€.",
        tags:        ["Power BI", "SQL", "Power Query"],
        link:        null,
        label:       "Voir →",
      },
      {
        color:       "green",
        category:    "📈 URSSAF",
        title:       "Tableaux de bord pilotage",
        description: "Déploiement de dashboards pour les directions métiers sur +25M lignes. Automatisation des reportings — gains de 6 JA/mois.",
        tags:        ["Power BI", "SQL", "Python", "ETL"],
        link:        null,
        label:       "Voir →",
      },
    ],
    perso: [
      {
        color:       "lilas",
        category:    "🤖 Automatisation",
        title:       "Job Hunter n8n",
        description: "Workflow n8n d'agrégation d'offres depuis Adzuna, France Travail et WTTJ. Output vers Google Sheets avec filtrage automatique.",
        tags:        ["n8n", "API", "Google Sheets"],
        link:        null,
        label:       "Voir →",
      },
      {
        color:       "green",
        category:    "🎾 Sport & Data",
        title:       "Padel Stats — TC Les Lilas",
        description: "Dashboard interclub Hommes R3 Île-de-France. Classements, stats joueurs, analyse des matchs saison 2026.",
        tags:        ["Excel", "Power BI", "Scraping"],
        link:        null,
        label:       "Voir →",
      },
      {
        color:       "amber",
        category:    "🕷️ Scraping",
        title:       "Tenup Scraper",
        description: "Scraper de la plateforme Tenup/FFT. Flask + Playwright + SQLite pour extraire données tournois et joueurs de padel.",
        tags:        ["Python", "Flask", "Playwright", "SQLite"],
        link:        "https://github.com/Gwendal9",
        label:       "GitHub →",
      },
      {
        color:       "amber",
        category:    "📱 Dev",
        title:       "Application mobile",
        description: "Application mobile développée à deux, disponible sur les stores.",
        tags:        ["Mobile", "Dev"],
        link:        null,
        label:       "Voir →",
      },
    ],
  },

  hobbies: [
    { icon: "🎾", title: "Padel", desc: "Licencié TC Les Lilas · Tournois FFT réguliers · Interclub R3" },
    { icon: "🎮", title: "Gaming", desc: "Wakfu et autres univers en ligne" },
    { icon: "🌍", title: "Veille", desc: "Géopolitique & économique — lecture quotidienne" },
    { icon: "📱", title: "Dev perso", desc: "Application mobile sortie sur les stores" },
  ],

  stack: [
    { name: 'Power BI & DAX',   img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
    { name: 'Python',           img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'SQL / DBeaver',    img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
    { name: 'GCP',              img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'n8n',              img: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
    { name: 'Spark / Hive',     img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
    { name: 'React / JS',       img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Git',              img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  ],

  contact: [
    { icon: 'email',    label: "Email",    value: "gwendal.rolland@yahoo.fr",  href: "mailto:gwendal.rolland@yahoo.fr" },
    { icon: 'linkedin', label: "LinkedIn", value: "/gwendal-rolland",          href: "https://linkedin.com/in/gwendal-rolland" },
    { icon: 'github',   label: "GitHub",   value: "Gwendal9",                  href: "https://github.com/Gwendal9" },
  ],

}