export const content = {

    hero: {
        firstName: "Gwendal",
        lastName: "Rolland",
        status: "Disponible · Paris",
        roles: ["Data Analyst", "Ingénieur IA & Big Data"],
        description: "Conception et optimisation de pipelines data. Modélisation statistique, machine learning, dashboards, automatisation. Architecture de données, développement SQL/Python.",
        aboutParagraphs: [
            "J'ai grandi avec les maths, pas pour les formules en elles-mêmes, mais pour la logique qu'elles imposent. Au moment de choisir une orientation, la data et l'IA émergeaient à peine, et c'est exactement ce qui m'a attiré : un domaine en construction, où tout restait à inventer.",
            "Depuis, j'ai travaillé sur des sujets très différents : des dashboards métier à l'URSSAF, de la computer vision chez Skalup, et aujourd'hui l'industrialisation de processus chez Orange. Ce qui revient à chaque fois, c'est de prendre le temps de comprendre le vrai besoin avant de toucher au code.",
            "Ce qui me motive, c'est de voir une solution changer quelque chose pour les gens qui l'utilisent. Je reste curieux de ce qui sort, nouveaux outils et nouvelles approches, mais toujours avec un filtre : est-ce que ça résout un vrai problème ?",
        ],
        cvUrl: "/cv-gwendal-rolland.pdf",
        email: "gwendal.rolland@yahoo.fr",
        location: "Paris — Permis B",
        disponibility: "Disponible immédiatement",
        contract: "CDI / CDD / Mission",
    },

    keywords: [
        "IA & Big Data",
        "Analyse et modélisation des données",
        "Automatisation",
        "Data visualisation",
        "Machine learning",
        "Data Engineering",
        "Modèles statistiques",
        "Impact métier",
        "Communication",
        "Rapidité d'exécution",
        "Rigueur + pragmatisme",
    ],

    experience: [
        {
            date: "2025 — 2026",
            title: "Data Analyst — Supply Chain",
            company: "Orange France",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
            companyColor: '#FF6600',
            badge: "CDD",
            current: true,
            description: "Modernisation des données Qlik vers GCP pour Power BI. Industrialisation d'un système automatisé de contrôle de facturation sur un portefeuille de 40M€. Dashboard sur les processus de reconditionnement (8M produits). Mise en place d'une solution pour le reporting des activités de l'équipe + dashboard pour la direction",
            logos: [
                { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg?uselang=fr' },
                { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            ],
        },
        {
            date: "2021 — 2024",
            title: "Apprenti Data Scientist",
            company: "Urssaf Caisse nationale",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
            companyColor: '#003189',
            badge: "Alternance",
            current: false,
            description: "Déploiement de tableaux de bord pour le pilotage des directions métiers (+25M lignes). Requête SQL pour construction et fiabilisation des indicateurs + contrôles qualité. Étude sur les commentaires textuels des usagers (NLP, Embedding, Regex).",
            logos: [
                { name: 'SQL - Dbeaver', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg' },
                { name: 'Tibco Spotfire', img: null },
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg?uselang=fr' },
                { name: 'R Studio', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg' },
            ],
        },
        {
            date: "2023",
            title: "Ingénieur IA Junior",
            company: "Skalup",
            companyLogo: 'https://www.skalup.com/wp-content/uploads/2016/04/cropped-logo_small-270x270.png',
            companyColor: '#1A5276',
            badge: "Stage",
            current: false,
            description: "Benchmark de solutions pour détecter murs, plafonds et sols dans une image puis une vidéo (IA et approches algorithmiques). Mise en œuvre de prototypes et recommandations techniques.",
            logos: [
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'OpenCV', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg' },
                { name: 'YOLO', img: 'https://images.g2crowd.com/uploads/product/image/2e1d25e4ac8ebd8d5bb1cf26e508446c/ultralytics.png' },
                { name: 'Blender', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' },
            ],
        },
        {
            date: "2022",
            title: "Projet VisioNER",
            company: "eiCNAM",
            companyLogo: '/logos/CNAM_Logo.svg.png',
            companyColor: '#1B3A7A',
            badge: "Projet d'école",
            current: false,
            description: "Pipeline OCR → NER pour documents hétérogènes. Constitution et annotation du jeu de données, entraînement d'un modèle de détection de documents.",
            logos: [
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'SpaCy', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg' },
                { name: 'Hugging Face', img: '/logos/hf-logo-1.png' },
                { name: 'OCR', img: null },
            ],
        },
    ],

    formation: [
        {
            date: "2024",
            title: "Diplôme d'ingénieur — IA & Big Data",
            school: "eiCNAM",
            current: false,
        },
        {
            date: "2021",
            title: "DUT STID — Statistique et Informatique Décisionnelle",
            school: "IUT Paris Descartes",
            current: false,
        },
        {
            date: "2019",
            title: "BAC ES — option Mathématiques",
            school: "Lycée Paul Robert",
            current: false,
        },
    ],

    projects: {
        pro: [
            {
                color: 'amber',
                category: 'Orange France',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
                companyColor: '#FF6600',
                title: 'Modernisation contrôle facturation',
                description: 'Adapter et industrialiser les sources de données pour moderniser le suivi de la facturation du refurbish de terminaux. SQL, Power BI, collaboration métiers.',
                tags: ['Power BI', 'DAX', 'Power Query', 'GCP', 'SAP', 'BigQuery'],
                link: null,
                label: 'Voir →',
                longDescription: `Contexte : Supply Chain devait moderniser le suivi de la facturation sur le recyclage des terminaux. Les sources de données provenaient de systèmes disparates (SAP, fichiers métier...) et n'étaient pas industrialisables.
Approche : Collaboration avec les métiers et fournisseurs pour identifier les sources et les adapter. Extraction via SQL/DBeaver, transformation des données, modélisation dans Power BI (Excel, DAX, Power Query) en fonction des besoins des décideurs.
Résultat : Pipeline de données stabilisé et reproductible. Dashboard temps réel sur les reconditionnements et la facturation.`,
                context: 'Orange France — Supply Chain — 2025/2026',
                stack: ['Power BI', 'DAX', 'Power Query', 'GCP', 'SAP', 'BigQuery'],
                github: null,
                demo: null,
                screenshot: null,
            },
            {
                color: 'amber',
                category: 'Orange France',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
                companyColor: '#FF6600',
                title: 'Dashboard reporting équipe ',
                description: 'Application front-end (HTML/CSS) pour générer automatiquement le reporting hebdomadaire de l\'équipe vibe codé car délais très court et amélioration continue via feedback en direct',
                tags: ['Power BI', 'HTML', 'Claude'],
                link: null,
                label: 'Voir →',
                longDescription: `Application front-end (HTML/CSS) interfacée avec l'IA intégrée d'Orange pour générer automatiquement un reporting hebdomadaire. Affichage des tâches, avancements et métriques de l'équipe Supply Chain pour le directeur.`,
                context: 'Orange France — Supply Chain — 2025/2026',
                stack: ['Power BI', 'HTML', 'Claude'],
                github: null,
                demo: null,
                screenshot: null,
            },
            {
                color: 'blue',
                category: 'Urssaf',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
                companyColor: '#003189',
                title: 'Tableaux de bord cotisants',
                description: "Extraction SQL et intégration Tibco Spotfire pour suivre les indicateurs de demandes et réitérations cotisants. Travail en méthode scrum agile.",
                tags: ['Tibco Spotfire', 'SQL', 'Excel', 'Jira'],
                link: null,
                label: 'Voir →',
                longDescription: `Contexte : Les cotisants contactent l'URSSAF par différents canaux (téléphone, mail, guichet...). Besoin de traçabilité et visibilité sur ces demandes.
Approche : Extraction des données via SQL (DBeaver) depuis les systèmes métier. Intégration et modélisation dans Tibco Spotfire. Adaptation du dashboard pour les décideurs (KPIs, tendances, segmentations).
Contexte de travail : Équipe pluridisciplinaire, méthode agile, tests approfondis du dashboard et des données.`,
                context: 'URSSAF — 2021/2024',
                stack: ['Tibco Spotfire', 'SQL', 'Excel', 'Jira'],
                github: null,
                demo: null,
                screenshot: null,
            },
            {
                color: 'blue',
                category: 'Urssaf',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
                companyColor: '#003189',
                title: 'Étude NLP commentaires agent',
                description: 'Analyse autonome en Python et R Studio des commentaires d\'appels cotisants. NLP, classification, prédictions temporelles pour détecter problèmes et anticiper les flux.',
                tags: ['Rstudio', 'Python', 'NLP', 'Classification', 'Prédiction temporelle'],
                link: null,
                label: 'Voir →',
                longDescription: `Contexte : Les agents saississaient des commentaires libres lors des appels cotisants. Objectif : extraire des patterns pour améliorer les processus.
Approche : Pipeline NLP complet en Python et R Studio. Nettoyage et structuration du texte, extraction de features, classifications (clustering d'appels). Prédictions temporelles pour anticiper les flux. Détection d'anomalies et problèmes récurrents.
Résultat : Insights sur les problèmes de processus, données pour les futures améliorations (ex: callback automatique)
Contexte : Projet en autonomie complète.`,
                context: 'Urssaf — 2021/2024',
                stack: ['R Studio', 'Python', 'NLP', 'Classification', 'Prédiction temporelle'],
                github: null,
                demo: null,
                screenshot: null,
            },
            {
                color: 'green',
                category: 'Skalup',
                companyLogo: 'https://www.skalup.com/wp-content/uploads/2016/04/cropped-logo_small-270x270.png',
                companyColor: '#1A5276',
                title: 'Exploration Computer Vision',
                description: 'Tests et entraînement de modèles YOLO pour détecter coins/rainures dans les pièces. Outil d\'aperçu produit pour acheteurs.',
                tags: ['Python', 'OpenCV', 'YOLO', 'Blender'],
                link: null,
                label: 'Voir →',
                longDescription: `Contexte : Développer un outil montrant aux acheteurs l'aperçu d'un produit dans leur environnement (moulure, mobilier...).
Approche : Veille technologique sur la détection d'objets et la géométrie. Tests et entraînement de modèles YOLO pour détecter les éléments structurels clés (rainures, coins) dans les pièces.
Résultat : Prototypes fonctionnels en Python. Approche itérative, évaluation des performances.`,
                context: 'Skalup — 2023',
                stack: ['Python', 'OpenCV', 'YOLO', 'Blender'],
                github: null,
                demo: null,
                screenshot: null,
            },
        ],
        perso: [
            {
                color: 'lilas',
                companyLogo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
                companyColor: '#ea4b71',
                category: 'Automatisation',
                title: 'Job Hunter — Veille auto',
                description: "Workflow n8n sur VPS qui scrape ~1 250 offres APEC chaque matin, filtre et score chacune via GPT-4o-mini, puis alimente un dashboard React public pour piloter sa recherche d'emploi.",
                tags: ['n8n', 'VPS', 'OpenAI API', 'React', 'Google Sheets'],
                link: null,
                label: 'Voir le dashboard →',
                longDescription: `Deux systèmes liés pour automatiser complètement la veille offres d'emploi.

Le workflow n8n tourne sur VPS et se déclenche chaque matin en semaine à 8h. Il interroge l'API APEC sur 5 mots-clés (data analyst, BI analyst Power BI, supply chain analyst, data engineer, ingénieur IA) × 5 pages × 50 résultats, soit jusqu'à 1 250 offres brutes par exécution.

Chaque offre passe un double filtre :
— Règles (instantané) : exclusion des alternances, stages, freelances, postes direction, et localisations DOM-TOM. Dédoublonnage par titre + entreprise.
— Dédup LLM : les offres déjà présentes dans Sheets avec un score sont renvoyées directement sans rappel OpenAI (économie d'API). Seules les nouvelles passent par GPT-4o-mini (score 0-10, résumé 2 phrases, température 0.2, JSON strict).

Les résultats sont écrits dans Google Sheets via Service Account, avec upsert sur l'URL pour éviter les doublons entre exécutions.

Le dashboard React (GitHub Pages) lit le sheet en direct et affiche les offres en kanban (nouveau → à postuler → postulé → relancé → ignoré). Chaque changement de statut déclenche un webhook vers n8n sur le VPS, qui met à jour Sheets en temps réel.`,
                context: 'Projet personnel — 2026',
                stack: ['n8n', 'VPS', 'APEC API', 'GPT-4o-mini', 'Google Sheets', 'React', 'Vite'],
                github: 'https://github.com/Gwendal9',
                demo: 'https://gwendal9.github.io/offres-emploi/',
                screenshot: null,
            },
            {
                color: 'green',
                companyLogo: '/logos/tenup.png',
                companyColor: '#16a34a',
                category: 'Sport & Data',
                title: 'Padel — Classements joueurs FFT',
                description: "Reverse engineering de l'API non-documentée TenUp/FFT pour collecter 156k joueurs et 273k participations. Scraper async 15 workers, API Flask, dashboard HTML/JS interactif.",
                tags: ['Python', 'asyncio', 'Flask', 'PostgreSQL', 'Docker'],
                link: null,
                label: 'Voir le dashboard →',
                longDescription: `La FFT publie les classements padel (~156k joueurs) sur TenUp sans aucun export ni API publique. L'objectif : collecter, stocker et visualiser ces données pour des analyses impossibles sur le site officiel — historique, progression, stats par club/ville, parcours tournoi.

Reverse engineering d'abord : analyse des requêtes réseau, identification des endpoints non-documentés, gestion de l'authentification par cookies rotatifs.

Le scraper v1 (Playwright headless) a été remplacé par une version HTTP pure 10× plus rapide — 15 workers asyncio en parallèle, avec une table de queue SQLite (pending / processing / done / error). Résultat : 156k joueurs et 273k participations sur 12 mois glissants collectés en avril 2026.

Le data pipeline normalise les données (villes, clubs, partenaires) et gère les snapshots mensuels : chaque 1er mardi du mois correspond à une mise à jour FFT, backfillée dans une table classements_historique.

Le backend Flask expose une API REST avec séparation stricte des pools H/F. Le dashboard HTML/JS vanilla permet la recherche par joueur, le classement filtré par ville ou club, la visualisation des tournois et l'évolution du classement dans le temps.

Déployé avec Docker + nginx sur Render, migration prévue vers Hetzner VPS.`,
                context: 'Projet personnel — 2025/2026',
                stack: ['Python', 'asyncio', 'aiohttp', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'nginx', 'HTML/JS'],
                github: 'https://github.com/Gwendal9',
                demo: 'https://padel.gwendev.eu/',
                screenshot: null,
            },
            {
                color: 'amber',
                companyLogo: '/logos/oprono.png',
                companyColor: '#6C63C7',
                category: 'Dev mobile',
                title: "O'PRONO",
                description: "App mobile de pronostics sportifs publiée sur iOS & Android. ~300 utilisateurs sans aucune pub, uniquement bouche-à-oreille. Projet en binôme : concept + frontend (moi), backend (mon ami).",
                tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS', 'Azure'],
                link: null,
                label: 'Voir →',
                longDescription: `Application mobile de pronostics sportifs développée en binôme : j'ai porté l'idée, le design et le frontend, mon ami a développé le backend.

Le principe : une app par compétition (Euro 2024, Coupe du Monde, Tournoi des 6 Nations…). Les utilisateurs posent leurs pronostics avant chaque match, l'app les score en live. À la fin de la compétition, l'app est retirée — éphémère par nature.

~300 utilisateurs inscrits pour l'Euro 2024, sans aucune pub — uniquement le bouche-à-oreille auprès de nos proches.

Fonctionnalités principales :
— Créer son compte avec gestion sécurisée des mots de passe chiffrés
— Placer et modifier ses pronostics, activer des bonus pour doubler les gains
— Profil avec stats personnalisées, équipes favorites et classement
— Créer une ligue privée pour défier ses amis

Stack :
— Frontend : React Native + Expo, TypeScript, Axios, Expo Router, React Navigation
— Backend : Node.js + Express (TypeScript), Prisma ORM
— Base de données : PostgreSQL sur AWS RDS
— Hébergement backend : Azure App Service
— APIs externes : Soccer API + Sportradar Football API, sync automatique chaque nuit
— Local : Docker (BDD), VS Code, Expo pour tester sur téléphone`,
                context: 'Projet personnel — 2024/2025',
                stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS RDS', 'Azure', 'Docker'],
                github: null,
                demo: null,
                screenshot: null,
            },
        ],
    },

    hobbies: [
        { icon: "🎾", title: "Padel", desc: "Licencié TC Les Lilas · Tournois FFT réguliers · Interclub R3" },
        { icon: "🎮", title: "Gaming", desc: "Age of empire, Dofus, Football manager, Rematch, Valorant" },
        { icon: "🌍", title: "Veille", desc: "Géopolitique & économique — Nouveautés dans le domaine de l'IA/data" },
        { icon: "📱", title: "Dev perso", desc: "Application mobile sortie sur les stores" },
    ],

    stack: [
        { name: 'Power BI & DAX', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'SQL / DBeaver', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
        { name: 'GCP', img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
        { name: 'n8n', img: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
        { name: 'Spark / Hive', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
        { name: 'React / JS', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
        { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
        { name: 'Docker', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
        { name: 'Flask', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg' },
    ],

    // Librairies Python — affichées en tooltip au survol de Python dans la stack
    pythonLibs: [
        // Data & ML
        { name: 'pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
        { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
        { name: 'scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
        { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
        // NLP (projet VisioNER, étude URSSAF)
        { name: 'Hugging Face', img: '/logos/hf-logo-1.png' },
        { name: 'spaCy', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg' },
        { name: 'NLTK', img: null },
        // Viz
        { name: 'matplotlib', img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'seaborn', img: null },
        // Scraping (projet Tenup)
        { name: 'BeautifulSoup', img: null },
        { name: 'Playwright', img: 'https://playwright.dev/img/playwright-logo.svg' },
    ],

    contact: [
        { icon: 'email', label: "Email", value: "gwendal.rolland@yahoo.fr", href: "mailto:gwendal.rolland@yahoo.fr" },
        { icon: 'linkedin', label: "LinkedIn", value: "linkedin.com/in/gwendal-rolland", href: "https://linkedin.com/in/gwendal-rolland" },
        { icon: 'github', label: "GitHub", value: "Gwendal9", href: "https://github.com/Gwendal9" },
    ],

    references: [
        {
            name: "Matthieu Moreira",
            role: "Data analyst",
            company: "Orange",
            email: "matthieu.moreira@orange.com",
            linkedin: "linkedin.com/in/moreira-m",
            photo: "/references/matthieu_photo.jpg",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        },
        {
            name: "Stephane Rondeau",
            role: "Responsable pôle data",
            company: "Unedic",
            email: "stephane.rondeau@outlook.fr",
            linkedin: "linkedin.com/in/stéphane-rondeau-9aa385140",
            photo: "/references/stephane_photo.jpg",
            companyLogo: "/logos/Unédic.svg.png",
        },
    ],

    timeline: [
        { year: '2019', label: 'Debut', tools: ['Excel', 'Stats'], description: 'Bac ES option maths — premiers outils analytiques' },
        { year: '2021', label: 'IUT & URSSAF', tools: ['SQL', 'Power BI', 'Python', 'Excel avancé'], description: 'DUT STID + alternance URSSAF — dashboards sur 25M lignes' },
        { year: '2023', label: 'IA & Vision', tools: ['NLP', 'OpenCV', 'YOLO', 'Hugging Face', 'OCR'], description: 'eiCNAM + Skalup — Machine Learning et Computer Vision' },
        { year: '2024', label: 'Ingenieur IA', tools: ['Spark', 'Hive', 'GCP', 'Databricks'], description: 'Diplome ingenieur IA & Big Data eiCNAM' },
        { year: '2025', label: 'Orange', tools: ['Power BI', 'GCP', 'SAP', 'n8n', 'Automatisation'], description: 'Supply Chain Orange — facturation 40M, 8M produits' },
    ],

    toolLogos: {
        // BI & Data
        'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'DAX': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Power Query': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Tibco Spotfire': 'https://www.vectorlogo.zone/logos/tibcosoftware/tibcosoftware-icon.svg',
        // Languages
        'Python': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'SQL': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg',
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'R Studio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        'Rstudio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        // Cloud & Infra
        'GCP': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
        'BigQuery': 'https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-icon.svg',
        'SAP': 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
        'Docker': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
        'VPS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        // Dev & Web
        'React': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Flask': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg',
        'Git': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
        // Data tools
        'n8n': 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
        'Excel': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg',
        'Google Sheets': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg',
        'Jira': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
        // DB
        'SQLite': 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg',
        // Scraping
        'Playwright': 'https://playwright.dev/img/playwright-logo.svg',
        // AI/LLM
        'OpenAI API': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'GPT-4o-mini': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'Claude': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg',
        // Infra
        'Render': 'https://images.ctfassets.net/qf4deux3kp2c/6A6bFBDimOnpJCQ8lZQXcT/79b40ccb5c2af2ac1bd45d3e9fc2cc37/Render_square.png',
        'Vite': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
        // ML/CV
        'OpenCV': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg',
        'YOLO': 'https://images.g2crowd.com/uploads/product/image/2e1d25e4ac8ebd8d5bb1cf26e508446c/ultralytics.png',
        'Blender': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
        'SpaCy': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg',
        'Hugging Face': '/logos/hf-logo-1.png',
        // Misc
        'ETL': null,
        'NLP': null,
        'Classification': null,
        'Prédiction temporelle': null,
        'Claude': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg',
        'API': null,
        'Scraping': null,
        'Mobile': null,
        'Dev': null,
        'React Native': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'Express': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        'PostgreSQL': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        'AWS RDS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'Azure': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
    }
}