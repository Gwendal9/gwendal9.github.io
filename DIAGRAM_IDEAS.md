# Idées diagrammes — à faire

## Style cible
Même style que DiagramOprono (MinimalSVG) :
- Nœuds avec fond léger + icône + texte simplifié
- Boules animées séquentielles (une par segment, cycle commun)
- Pills protocoles sur les flèches
- Section "sync nocturne" pour les crons
- Adaptatif light/dark via useDark()

---

## DiagramPadel — idées

Architecture : TenUp (API non-doc) → Scraper Python → Queue SQLite → PostgreSQL → Flask API → nginx → Dashboard HTML/JS

**Nœuds à représenter :**
- TenUp (logo FFT) — source de données
- Scraper Python (15 workers asyncio) — moteur de collecte
- Queue SQLite (pending/processing/done/error) — file de travail
- PostgreSQL — stockage 156k joueurs
- Flask API REST — séparer H/F
- nginx — proxy
- Dashboard HTML/JS — rendu final

**Particularités visuelles :**
- 2 lignes de flux (scraping en haut, lecture/API en bas)
- Badge "1er mardi/mois" sur la flèche cron
- Pills : "HTTP async", "SQL", "REST"
- Section cron nocturne pour la sync mensuelle FFT

---

## DiagramJobHunter — idées

Architecture : APEC API → n8n workflow → filtre règles → filtre LLM (GPT-4o-mini) → Google Sheets → Dashboard React (webhook retour)

**Nœuds à représenter :**
- APEC API (5 mots-clés × 5 pages) — source
- n8n VPS (cron 8h semaine) — orchestrateur
- Filtre règles (exclusions rapides) — traitement
- GPT-4o-mini (score 0-10, résumé) — scoring IA
- Google Sheets (upsert URL) — stockage
- Dashboard React (kanban) — interface
- Webhook → n8n (mise à jour statut) — retour

**Particularités visuelles :**
- Flux principal horizontal : APEC → n8n → LLM → Sheets → Dashboard
- Flèche retour : Dashboard → Webhook → n8n → Sheets (loop)
- Badge "~1250 offres/matin" sur la flèche APEC
- Badge "GPT-4o-mini" avec couleur OpenAI (#10a37f)
- Section cron : "Lun-Ven 8h"

