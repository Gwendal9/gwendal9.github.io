export const content = {

    hero: {
        firstName: "Gwendal",
        lastName: "Rolland",
        status: "Disponible · Île-de-France",
        roles: ["Data & BI Analyst", "Supply Chain", "Orange"],
        description: "Je pilote la qualité de données et la réconciliation de facturation. Power BI, DAX, Python — et j'automatise ce qui peut l'être.",
        chips: ["Power BI", "DAX / M", "Supply Chain", "Python", "SQL", "n8n"],
        cvUrl: "/cv-gwendal-rolland.pdf",
    },

    counters: [
        { value: 3, suffix: "+", label: "Ans d'expérience" },
        { value: 12, suffix: "+", label: "Projets livrés" },
        { value: 8, suffix: "", label: "Dashboards Power BI" },
    ],

    experience: [
        {
            date: "2023 — Aujourd'hui",
            title: "Data & BI Analyst — Supply Chain",
            company: "Orange",
            badge: "CDD",
            current: true,
            description: "Qualité de données sur les chaînes commande-livraison-facturation Mobile & Internet. Réconciliation billing, détection d'anomalies, projet TARTOPOM.",
            tags: ["Power BI", "DAX", "Power Query", "Excel", "Supply Chain"],
        },
        {
            date: "À compléter",
            title: "Poste précédent",
            company: "Entreprise",
            badge: null,
            current: false,
            description: "Décris ton expérience précédente ici.",
            tags: ["Excel", "SQL", "Python"],
        },
        {
            date: "Formation",
            title: "Formation Data / BI",
            company: "À compléter",
            badge: null,
            current: false,
            description: "Parcours académique et certifications.",
            tags: ["Data", "BI"],
        },
    ],

    projects: [
        {
            color: "blue",
            category: "📊 Power BI",
            title: "TARTOPOM",
            description: "Analyse des coûts de reconditionnement chez Orange. Dashboard avec hiérarchie de facturation multi-niveaux en DAX.",
            tags: ["Power BI", "DAX", "M"],
            link: null,
            label: "Voir →",
        },
        {
            color: "lilas",
            category: "🤖 Automatisation",
            title: "Job Hunter n8n",
            description: "Workflow n8n d'agrégation d'offres depuis Adzuna, France Travail et WTTJ. Output vers Google Sheets avec filtrage auto.",
            tags: ["n8n", "API", "Google Sheets"],
            link: null,
            label: "Voir →",
        },
        {
            color: "green",
            category: "🎾 Data Sport",
            title: "Padel Stats — TC Les Lilas",
            description: "Dashboard interclub Hommes R3 Île-de-France. Classements, stats joueurs, analyse des matchs saison 2026.",
            tags: ["Excel", "Power BI", "Scraping"],
            link: null,
            label: "Voir →",
        },
        {
            color: "amber",
            category: "🕷️ Scraping",
            title: "Tenup Scraper",
            description: "Scraper de la plateforme Tenup/FFT. Flask + Playwright + SQLite pour extraire données tournois et joueurs.",
            tags: ["Python", "Flask", "Playwright"],
            link: "https://github.com/Gwendal9",
            label: "GitHub →",
        },
    ],

    stack: [
        { slug: null, name: 'Power BI & DAX',  level: 92, color: '#F2C811', customSvg: 'powerbi' },
        { slug: null, name: 'Excel Avancé',    level: 88, color: '#217346', customSvg: 'excel'   },
        { slug: 'postgresql',     name: 'SQL',              level: 75, color: '#4169E1' },
        { slug: 'python',         name: 'Python & Pandas',  level: 65, color: '#3776AB' },
        { slug: 'n8n',            name: 'n8n',              level: 60, color: '#EA4B71' },
        { slug: 'selenium',       name: 'Web Scraping',     level: 55, color: '#43B02A' },
        { slug: 'react',          name: 'React / JS',       level: 50, color: '#61DAFB' },
        { slug: 'git',            name: 'Git & CLI',        level: 45, color: '#F05032' },
        ],

    contact: [
  {
    icon: 'email',
    label: "Email",
    value: "ton@email.com",
    href: "mailto:ton@email.com",
  },
  {
    icon: 'linkedin',
    label: "LinkedIn",
    value: "Gwendal Rolland",
    href: "https://linkedin.com/in/XXXX",
  },
  {
    icon: 'github',
    label: "GitHub",
    value: "Gwendal9",
    href: "https://github.com/Gwendal9",
  },
],

}