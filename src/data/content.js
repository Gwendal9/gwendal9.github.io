const contentFR = {

    hero: {
        firstName: "Gwendal",
        lastName: "Rolland",
        status: "Disponible · Paris",
        roles: ["Data Analyst", "Ingénieur IA & Big Data"],
        description: "Je transforme des données brutes en décisions concrètes — pipelines automatisés, dashboards métier, modèles ML. Du besoin utilisateur au déploiement.",
        aboutParagraphs: [
            "J'ai grandi avec les maths, pas pour les formules en elles-mêmes, mais pour la logique qu'elles imposent. Au moment de choisir une orientation, la data et l'IA émergeaient à peine, et c'est exactement ce qui m'a attiré : un domaine en construction, où tout restait à inventer.",
            "Depuis, j'ai travaillé sur des sujets très différents : des dashboards métier à l'URSSAF, de la computer vision chez Skalup, et aujourd'hui l'industrialisation de processus chez Orange. Ce qui revient à chaque fois, c'est de prendre le temps de comprendre le vrai besoin avant de toucher au code.",
            "Ce qui me motive, c'est de voir une solution changer quelque chose pour les gens qui l'utilisent. Je reste curieux de ce qui sort, nouveaux outils et nouvelles approches, mais toujours avec un filtre : est-ce que ça résout un vrai problème ?",
        ],
        cvUrl: "/cv-gwendal-rolland.pdf",
        email: atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy'),
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
            description: "Industrialisation du contrôle de facturation (40M€) : de fichiers Excel manuels à un pipeline Power BI reproductible, en collaboration avec les métiers et les fournisseurs. Dashboard sur les processus de reconditionnement (8M produits). Reporting équipe + dashboard direction.",
            logos: [
                { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg?uselang=fr' },
                { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'Claude', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg' },
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
                description: 'Industrialisation du contrôle de facturation : de fichiers Excel manuels à un pipeline Power BI reproductible, en collaboration avec les métiers et les fournisseurs.',
                tags: ['Power BI', 'DAX', 'Power Query', 'Excel'],
                link: null,
                label: 'Voir →',
                longDescription: `Contexte : Le contrôle de facturation du recyclage de terminaux (40M€) reposait entièrement sur des fichiers Excel maintenus à la main — un par fournisseur, sans format commun, sans automatisation.
Approche : Échanges avec les équipes métier pour comprendre leurs besoins de suivi, et avec les fournisseurs pour standardiser le format des données transmises. Transformation et modélisation dans Power BI (Power Query, DAX) en fonction des besoins des décideurs.
Résultat : Pipeline reproductible et automatisé. Dashboard temps réel sur les reconditionnements et la facturation, utilisé par l'équipe de contrôle.`,
                context: 'Orange France — Supply Chain — 2025/2026',
                stack: ['Power BI', 'DAX', 'Power Query', 'Excel'],
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
                description: "App mobile de pronostics sportifs publiée sur iOS & Android. ~300 utilisateurs sans aucune pub, uniquement bouche-à-oreille. Projet développé en binôme.",
                tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS', 'Azure'],
                link: null,
                label: 'Voir →',
                demo: 'https://apps.apple.com/fr/app/oprono/id6503480965?l=en-GB',
                longDescription: `Application mobile de pronostics sportifs développée en binôme.

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

    pythonLibs: [
        { name: 'pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
        { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
        { name: 'scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
        { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
        { name: 'Hugging Face', img: '/logos/hf-logo-1.png' },
        { name: 'spaCy', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg' },
        { name: 'NLTK', img: null },
        { name: 'matplotlib', img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'seaborn', img: null },
        { name: 'BeautifulSoup', img: null },
        { name: 'Playwright', img: 'https://playwright.dev/img/playwright-logo.svg' },
    ],

    contact: [
        { icon: 'email', label: "Email", value: atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy'), href: `mailto:${atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy')}` },
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
        { year: '2019', label: 'Début', tools: ['Excel', 'Stats'], description: 'Bac ES option maths — premiers outils analytiques' },
        { year: '2021', label: 'IUT & URSSAF', tools: ['SQL', 'Power BI', 'Python', 'Excel avancé'], description: 'DUT STID + alternance URSSAF — dashboards sur 25M lignes' },
        { year: '2023', label: 'IA & Vision', tools: ['NLP', 'OpenCV', 'YOLO', 'Hugging Face', 'OCR'], description: 'eiCNAM + Skalup — Machine Learning et Computer Vision' },
        { year: '2024', label: 'Ingénieur IA', tools: ['Spark', 'Hive', 'GCP', 'Databricks'], description: 'Diplôme ingénieur IA & Big Data eiCNAM' },
        { year: '2025', label: 'Orange', tools: ['Power BI', 'GCP', 'n8n', 'Automatisation'], description: 'Supply Chain Orange — facturation 40M, 8M produits' },
    ],

    ui: {
        nav: {
            profil: 'Profil',
            about: 'À propos',
            experience: 'Expérience',
            projets: 'Projets',
            contact: 'Contact',
            cv: 'Mon CV',
        },
        available: 'Disponible',
        proProjects: 'Projets Pro',
        persoProjects: 'Projets Perso',
        seeMore: 'Voir →',
        close: 'Fermer',
        stack: 'Stack technique',
        formation: 'Formation',
        hobbies: 'Centres d\'intérêt',
        references: 'Références',
        downloadCV: 'Télécharger le CV',
        contactTitle: 'Contact',
        contactIntro: 'Disponible pour des opportunités en Data et BI en Île-de-France. N\'hésite pas à me contacter directement.',
        emailCopied: 'Copié !',
        copy: 'Copier',
        experienceTitle: 'Expérience',
        projectsTitle: 'Projets',
        aboutTitle: 'À propos',
        timeline: 'Parcours',
        context: 'Contexte',
        techStack: 'Stack',
        github: 'Code',
        demo: 'Demo',
        references: 'Références',
    },

    toolLogos: {
        'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'DAX': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Power Query': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Tibco Spotfire': 'https://www.vectorlogo.zone/logos/tibcosoftware/tibcosoftware-icon.svg',
        'Python': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'SQL': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg',
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'R Studio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        'Rstudio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        'GCP': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
        'BigQuery': 'https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-icon.svg',
'Docker': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
        'VPS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        'React': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Flask': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg',
        'Git': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
        'n8n': 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
        'Excel': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg',
        'Google Sheets': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg',
        'Jira': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
        'SQLite': 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg',
        'Playwright': 'https://playwright.dev/img/playwright-logo.svg',
        'OpenAI API': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'GPT-4o-mini': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'Claude': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg',
        'Render': 'https://images.ctfassets.net/qf4deux3kp2c/6A6bFBDimOnpJCQ8lZQXcT/79b40ccb5c2af2ac1bd45d3e9fc2cc37/Render_square.png',
        'Vite': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
        'OpenCV': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg',
        'YOLO': 'https://images.g2crowd.com/uploads/product/image/2e1d25e4ac8ebd8d5bb1cf26e508446c/ultralytics.png',
        'Blender': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
        'SpaCy': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg',
        'Hugging Face': '/logos/hf-logo-1.png',
        'ETL': null,
        'NLP': null,
        'Classification': null,
        'Prédiction temporelle': null,
        'API': null,
        'Scraping': null,
        'Mobile': null,
        'Dev': null,
        'React Native': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'Express': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        'PostgreSQL': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        'AWS RDS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'Azure': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
    }
}

const contentEN = {

    hero: {
        firstName: "Gwendal",
        lastName: "Rolland",
        status: "Available · Paris",
        roles: ["Data Analyst", "AI & Big Data Engineer"],
        description: "I turn raw data into concrete decisions — automated pipelines, business dashboards, ML models. From user need to deployment.",
        aboutParagraphs: [
            "I grew up with math — not for the formulas themselves, but for the logic they impose. When it came to choosing a path, data and AI were barely emerging, and that's exactly what drew me in: a field under construction, where everything was still to be invented.",
            "Since then, I've worked on very different subjects: business dashboards at URSSAF, computer vision at Skalup, and now process industrialization at Orange. What comes up every time is taking the time to understand the real need before touching any code.",
            "What motivates me is seeing a solution actually change something for the people who use it. I stay curious about what's new — tools, approaches — but always with a filter: does it solve a real problem?",
        ],
        cvUrl: "/cv-gwendal-rolland.pdf",
        email: atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy'),
        location: "Paris — Driver's license",
        disponibility: "Immediately available",
        contract: "Permanent / Fixed-term / Freelance",
    },

    keywords: [
        "AI & Big Data",
        "Data analysis & modeling",
        "Automation",
        "Data visualisation",
        "Machine learning",
        "Data Engineering",
        "Statistical models",
        "Business impact",
        "Communication",
    ],

    experience: [
        {
            date: "2025 — 2026",
            title: "Data Analyst — Supply Chain",
            company: "Orange France",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
            companyColor: '#FF6600',
            badge: "Fixed-term",
            current: true,
            description: "Industrialization of billing control (€40M): from manual Excel files to a reproducible Power BI pipeline, in collaboration with business teams and suppliers. Dashboard on refurbishment processes (8M products). Team reporting + executive dashboard.",
            logos: [
                { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg?uselang=fr' },
                { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'Claude', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg' },
            ],
        },
        {
            date: "2021 — 2024",
            title: "Apprentice Data Scientist",
            company: "Urssaf Caisse nationale",
            companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
            companyColor: '#003189',
            badge: "Apprenticeship",
            current: false,
            description: "Deployment of dashboards to monitor business direction KPIs (+25M rows). SQL queries for building and validating indicators + quality checks. Study on user text comments (NLP, Embedding, Regex).",
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
            title: "Junior AI Engineer",
            company: "Skalup",
            companyLogo: 'https://www.skalup.com/wp-content/uploads/2016/04/cropped-logo_small-270x270.png',
            companyColor: '#1A5276',
            badge: "Internship",
            current: false,
            description: "Benchmark of solutions to detect walls, ceilings and floors in images and video (AI and algorithmic approaches). Prototype implementation and technical recommendations.",
            logos: [
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'OpenCV', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg' },
                { name: 'YOLO', img: 'https://images.g2crowd.com/uploads/product/image/2e1d25e4ac8ebd8d5bb1cf26e508446c/ultralytics.png' },
                { name: 'Blender', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' },
            ],
        },
        {
            date: "2022",
            title: "VisioNER Project",
            company: "eiCNAM",
            companyLogo: '/logos/CNAM_Logo.svg.png',
            companyColor: '#1B3A7A',
            badge: "School project",
            current: false,
            description: "OCR → NER pipeline for heterogeneous documents. Dataset creation and annotation, training a document detection model.",
            logos: [
                { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
                { name: 'SpaCy', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg' },
                { name: 'Hugging Face', img: '/logos/hf-logo-1.png' },
                { name: 'OCR', img: null },
            ],
        },
    ],

    formation: [
        { date: "2024", title: "Engineering degree — AI & Big Data", school: "eiCNAM", current: false },
        { date: "2021", title: "2-year degree — Statistics & Decision-making IT", school: "IUT Paris Descartes", current: false },
        { date: "2019", title: "High school diploma — Mathematics track", school: "Lycée Paul Robert", current: false },
    ],

    projects: {
        pro: [
            {
                color: 'amber', category: 'Orange France',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
                companyColor: '#FF6600',
                title: 'Billing control modernization',
                description: 'Industrialization of billing control: from manual Excel files to a reproducible Power BI pipeline, in collaboration with business teams and suppliers.',
                tags: ['Power BI', 'DAX', 'Power Query', 'Excel'],
                link: null, label: 'View →',
                longDescription: `Context: Billing control for handset recycling (€40M) relied entirely on manually maintained Excel files — one per supplier, no common format, no automation.
Approach: Discussions with business teams to understand their tracking needs, and with suppliers to standardize data formats. Transformation and modeling in Power BI (Power Query, DAX) based on decision-makers needs.
Result: Reproducible and automated pipeline. Real-time dashboard on refurbishments and billing, used by the control team.`,
                context: 'Orange France — Supply Chain — 2025/2026',
                stack: ['Power BI', 'DAX', 'Power Query', 'Excel'],
                github: null, demo: null, screenshot: null,
            },
            {
                color: 'amber', category: 'Orange France',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg',
                companyColor: '#FF6600',
                title: 'Team reporting dashboard',
                description: "Front-end app (HTML/CSS) to automatically generate the team's weekly report — vibe-coded due to tight deadlines, continuously improved via live feedback.",
                tags: ['Power BI', 'HTML', 'Claude'],
                link: null, label: 'View →',
                longDescription: `Front-end app (HTML/CSS) interfaced with Orange's built-in AI to automatically generate a weekly report. Displays tasks, progress and metrics for the Supply Chain team for the director.`,
                context: 'Orange France — Supply Chain — 2025/2026',
                stack: ['Power BI', 'HTML', 'Claude'],
                github: null, demo: null, screenshot: null,
            },
            {
                color: 'blue', category: 'Urssaf',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
                companyColor: '#003189',
                title: 'Contributors dashboards',
                description: "SQL extraction and Tibco Spotfire integration to track contributor requests and follow-up indicators. Agile scrum methodology.",
                tags: ['Tibco Spotfire', 'SQL', 'Excel', 'Jira'],
                link: null, label: 'View →',
                longDescription: `Context: Contributors contact URSSAF through different channels (phone, email, counter...). Need for traceability and visibility on these requests.
Approach: Data extraction via SQL (DBeaver) from business systems. Integration and modeling in Tibco Spotfire. Dashboard adapted for decision-makers (KPIs, trends, segmentation).
Work context: Multidisciplinary team, agile methodology, thorough dashboard and data testing.`,
                context: 'URSSAF — 2021/2024',
                stack: ['Tibco Spotfire', 'SQL', 'Excel', 'Jira'],
                github: null, demo: null, screenshot: null,
            },
            {
                color: 'blue', category: 'Urssaf',
                companyLogo: 'https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg',
                companyColor: '#003189',
                title: 'NLP study on agent comments',
                description: 'Autonomous analysis in Python and R Studio of contributor call comments. NLP, classification, time predictions to detect issues and anticipate flows.',
                tags: ['Rstudio', 'Python', 'NLP', 'Classification', 'Time prediction'],
                link: null, label: 'View →',
                longDescription: `Context: Agents entered free-text comments during contributor calls. Goal: extract patterns to improve processes.
Approach: Full NLP pipeline in Python and R Studio. Text cleaning and structuring, feature extraction, classifications (call clustering). Time predictions to anticipate flows. Anomaly and recurring issue detection.
Result: Insights on process issues, data for future improvements (e.g. automatic callback).
Context: Fully autonomous project.`,
                context: 'Urssaf — 2021/2024',
                stack: ['R Studio', 'Python', 'NLP', 'Classification', 'Time prediction'],
                github: null, demo: null, screenshot: null,
            },
            {
                color: 'green', category: 'Skalup',
                companyLogo: 'https://www.skalup.com/wp-content/uploads/2016/04/cropped-logo_small-270x270.png',
                companyColor: '#1A5276',
                title: 'Computer Vision exploration',
                description: "Testing and training YOLO models to detect corners/grooves in rooms. Product preview tool for buyers.",
                tags: ['Python', 'OpenCV', 'YOLO', 'Blender'],
                link: null, label: 'View →',
                longDescription: `Context: Develop a tool showing buyers a preview of a product in their environment (molding, furniture...).
Approach: Technology watch on object detection and geometry. Testing and training YOLO models to detect key structural elements (grooves, corners) in rooms.
Result: Functional prototypes in Python. Iterative approach, performance evaluation.`,
                context: 'Skalup — 2023',
                stack: ['Python', 'OpenCV', 'YOLO', 'Blender'],
                github: null, demo: null, screenshot: null,
            },
        ],
        perso: [
            {
                color: 'lilas',
                companyLogo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
                companyColor: '#ea4b71',
                category: 'Automation',
                title: 'Job Hunter — Auto monitoring',
                description: "n8n workflow on VPS scraping ~1,250 APEC job listings every morning, filtering and scoring each via GPT-4o-mini, then feeding a public React dashboard to manage job search.",
                tags: ['n8n', 'VPS', 'OpenAI API', 'React', 'Google Sheets'],
                link: null, label: 'View dashboard →',
                longDescription: `Two linked systems to fully automate job listing monitoring.

The n8n workflow runs on VPS and triggers every weekday morning at 8am. It queries the APEC API on 5 keywords (data analyst, BI analyst Power BI, supply chain analyst, data engineer, AI engineer) x 5 pages x 50 results, up to 1,250 raw listings per run.

Each listing goes through a double filter:
— Rules (instant): exclusion of apprenticeships, internships, freelance, management positions, and overseas locations. Deduplication by title + company.
— LLM dedup: listings already in Sheets with a score are returned directly without an OpenAI call (API savings). Only new ones go through GPT-4o-mini (score 0-10, 2-sentence summary, temperature 0.2, strict JSON).

Results are written to Google Sheets via Service Account, with upsert on URL to avoid duplicates between runs.

The React dashboard (GitHub Pages) reads the sheet live and displays listings in a kanban (new to apply applied followed up ignored). Each status change triggers a webhook to n8n on the VPS, which updates Sheets in real time.`,
                context: 'Personal project — 2026',
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
                title: 'Padel — FFT player rankings',
                description: "Reverse engineering of the undocumented TenUp/FFT API to collect 156k players and 273k participations. Async scraper with 15 workers, Flask API, interactive HTML/JS dashboard.",
                tags: ['Python', 'asyncio', 'Flask', 'PostgreSQL', 'Docker'],
                link: null, label: 'View dashboard →',
                longDescription: `The FFT publishes padel rankings (~156k players) on TenUp with no export or public API. The goal: collect, store and visualize this data for analyses impossible on the official site — history, progression, stats by club/city, tournament journeys.

Reverse engineering first: network request analysis, undocumented endpoint identification, rotating cookie authentication.

The v1 scraper (headless Playwright) was replaced by a pure HTTP version 10x faster — 15 asyncio workers in parallel, with a SQLite queue table (pending / processing / done / error). Result: 156k players and 273k participations over 12 rolling months collected in April 2026.

The data pipeline normalizes data (cities, clubs, partners) and manages monthly snapshots: each first Tuesday of the month corresponds to an FFT update, backfilled into a classements_historique table.

The Flask backend exposes a REST API with strict M/F pool separation. The vanilla HTML/JS dashboard allows player search, rankings filtered by city or club, tournament visualization and ranking evolution over time.

Deployed with Docker + nginx on Render, planned migration to Hetzner VPS.`,
                context: 'Personal project — 2025/2026',
                stack: ['Python', 'asyncio', 'aiohttp', 'Flask', 'PostgreSQL', 'SQLite', 'Docker', 'nginx', 'HTML/JS'],
                github: 'https://github.com/Gwendal9',
                demo: 'https://padel.gwendev.eu/',
                screenshot: null,
            },
            {
                color: 'amber',
                companyLogo: '/logos/oprono.png',
                companyColor: '#6C63C7',
                category: 'Mobile dev',
                title: "O'PRONO",
                description: "Sports prediction mobile app published on iOS & Android. ~300 users with zero advertising, purely word of mouth. Developed as a pair project.",
                tags: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS', 'Azure'],
                link: null, label: 'View →',
                demo: 'https://apps.apple.com/fr/app/oprono/id6503480965?l=en-GB',
                longDescription: `Sports prediction mobile app developed in a pair.

The concept: one app per competition (Euro 2024, World Cup, Six Nations...). Users place predictions before each match, the app scores them live. At the end of the competition, the app is taken down — ephemeral by design.

~300 registered users for Euro 2024, with zero advertising — purely word of mouth among friends and family.

Main features:
— Create an account with secure encrypted password management
— Place and modify predictions, activate bonuses to double earnings
— Profile with personalized stats, favorite teams and leaderboard
— Create a private league to challenge friends

Stack:
— Frontend: React Native + Expo, TypeScript, Axios, Expo Router, React Navigation
— Backend: Node.js + Express (TypeScript), Prisma ORM
— Database: PostgreSQL on AWS RDS
— Backend hosting: Azure App Service
— External APIs: Soccer API + Sportradar Football API, automatic nightly sync
— Local: Docker (DB), VS Code, Expo for phone testing`,
                context: 'Personal project — 2024/2025',
                stack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'AWS RDS', 'Azure', 'Docker'],
                github: null, demo: null, screenshot: null,
            },
        ],
    },

    hobbies: [
        { icon: "🎾", title: "Padel", desc: "Licensed at TC Les Lilas · Regular FFT tournaments · R3 interclub" },
        { icon: "🎮", title: "Gaming", desc: "Age of Empires, Dofus, Football Manager, Rematch, Valorant" },
        { icon: "🌍", title: "News", desc: "Geopolitics & economics — AI/data field developments" },
        { icon: "📱", title: "Side projects", desc: "Mobile app published on the stores" },
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

    pythonLibs: [
        { name: 'pandas', img: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg' },
        { name: 'NumPy', img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg' },
        { name: 'scikit-learn', img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
        { name: 'TensorFlow', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
        { name: 'Hugging Face', img: '/logos/hf-logo-1.png' },
        { name: 'spaCy', img: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg' },
        { name: 'NLTK', img: null },
        { name: 'matplotlib', img: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'seaborn', img: null },
        { name: 'BeautifulSoup', img: null },
        { name: 'Playwright', img: 'https://playwright.dev/img/playwright-logo.svg' },
    ],

    contact: [
        { icon: 'email', label: "Email", value: atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy'), href: `mailto:${atob('Z3dlbmRhbC5yb2xsYW5kQHlhaG9vLmZy')}` },
        { icon: 'linkedin', label: "LinkedIn", value: "linkedin.com/in/gwendal-rolland", href: "https://linkedin.com/in/gwendal-rolland" },
        { icon: 'github', label: "GitHub", value: "Gwendal9", href: "https://github.com/Gwendal9" },
    ],

    references: [
        {
            name: "Matthieu Moreira", role: "Data analyst", company: "Orange",
            email: "matthieu.moreira@orange.com", linkedin: "linkedin.com/in/moreira-m",
            photo: "/references/matthieu_photo.jpg",
            companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
        },
        {
            name: "Stephane Rondeau", role: "Head of data division", company: "Unedic",
            email: "stephane.rondeau@outlook.fr", linkedin: "linkedin.com/in/stéphane-rondeau-9aa385140",
            photo: "/references/stephane_photo.jpg",
            companyLogo: "/logos/Unédic.svg.png",
        },
    ],

    timeline: [
        { year: '2019', label: 'Start', tools: ['Excel', 'Stats'], description: 'High school diploma, math track — first analytical tools' },
        { year: '2021', label: 'IUT & URSSAF', tools: ['SQL', 'Power BI', 'Python', 'Advanced Excel'], description: '2-year degree + URSSAF apprenticeship — dashboards on 25M rows' },
        { year: '2023', label: 'AI & Vision', tools: ['NLP', 'OpenCV', 'YOLO', 'Hugging Face', 'OCR'], description: 'eiCNAM + Skalup — Machine Learning and Computer Vision' },
        { year: '2024', label: 'AI Engineer', tools: ['Spark', 'Hive', 'GCP', 'Databricks'], description: 'AI & Big Data engineering degree — eiCNAM' },
        { year: '2025', label: 'Orange', tools: ['Power BI', 'GCP', 'n8n', 'Automation'], description: 'Orange Supply Chain — €40M billing, 8M products' },
    ],

    ui: {
        nav: {
            profil: 'Profile',
            about: 'About',
            experience: 'Experience',
            projets: 'Projects',
            contact: 'Contact',
            cv: 'My CV',
        },
        available: 'Available',
        proProjects: 'Pro Projects',
        persoProjects: 'Personal Projects',
        seeMore: 'View →',
        close: 'Close',
        stack: 'Tech stack',
        formation: 'Education',
        hobbies: 'Interests',
        references: 'References',
        downloadCV: 'Download CV',
        contactTitle: 'Contact',
        contactIntro: 'Available for Data & BI opportunities in the Paris area. Feel free to reach out directly.',
        emailCopied: 'Copied!',
        copy: 'Copy',
        experienceTitle: 'Experience',
        projectsTitle: 'Projects',
        aboutTitle: 'About',
        timeline: 'Journey',
        context: 'Context',
        techStack: 'Stack',
        github: 'Code',
        demo: 'Demo',
    },

    toolLogos: {
        'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'DAX': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Power Query': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Tibco Spotfire': 'https://www.vectorlogo.zone/logos/tibcosoftware/tibcosoftware-icon.svg',
        'Python': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'SQL': 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg',
        'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        'R Studio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        'Rstudio': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/RStudio_logo_flat.svg',
        'GCP': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
        'Docker': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
        'VPS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        'React': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Flask': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg',
        'Git': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
        'n8n': 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4',
        'Excel': 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg',
        'Google Sheets': 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg',
        'Jira': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
        'SQLite': 'https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg',
        'Playwright': 'https://playwright.dev/img/playwright-logo.svg',
        'OpenAI API': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'GPT-4o-mini': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        'Claude': 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg',
        'OpenCV': 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg',
        'YOLO': 'https://images.g2crowd.com/uploads/product/image/2e1d25e4ac8ebd8d5bb1cf26e508446c/ultralytics.png',
        'Blender': 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
        'SpaCy': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/SpaCy_logo.svg',
        'Hugging Face': '/logos/hf-logo-1.png',
        'NLP': null, 'Classification': null, 'Time prediction': null,
        'React Native': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        'Expo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg',
        'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        'Express': 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
        'Prisma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
        'PostgreSQL': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        'AWS RDS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
        'Azure': 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg',
        'Vite': 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
        'Render': 'https://images.ctfassets.net/qf4deux3kp2c/6A6bFBDimOnpJCQ8lZQXcT/79b40ccb5c2af2ac1bd45d3e9fc2cc37/Render_square.png',
    }
}

export const getContent = (lang) => lang === 'en' ? contentEN : contentFR

// Backward compat
export const content = contentFR
