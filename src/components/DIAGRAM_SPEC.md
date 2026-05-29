# Spec — Diagrammes style ngrok

Référence pour créer de nouveaux diagrammes de workflow dans le portfolio.
Modèle existant : `DiagramJobHunter.jsx`

---

## Principe visuel

- Toujours **fond sombre** (`#0d0d14`) quel que soit le thème du portfolio
- Flux **horizontal gauche → droite** sur une ligne centrale (CY = H/2)
- Tous les nœuds alignés sur cette ligne centrale
- Couleurs vives sur fond sombre (rose/vert/violet/bleu)
- Typo : `system-ui` pour les labels, `monospace` pour les détails techniques
- Bouton **⤢ agrandir** → modal plein écran via `createPortal` (contourne le stacking context du drawer)

---

## Structure SVG

```
viewBox: 0 0 W (H + 44)   ← +44 pour la courbe webhook en bas
W = 780, H = 210, CY = 105
```

### Éléments types

| Élément | Usage |
|---|---|
| `<path id>` dans `<defs>` | Définit les chemins de connexion (réutilisés par `<use>` et `<mpath>`) |
| `<use href>` | Trace la ligne de fond + la ligne animée dash |
| `<animateMotion>` + `<mpath>` | Dot qui glisse le long d'un chemin |
| `<circle>` junction dot | Point de jonction entre deux segments |
| `<rect>` + contenu | Nœud (pill, panel, card) |
| `<image>` | Logo externe (URL) |

### Prop `uid`

Chaque `WorkflowSVG` reçoit un `uid` unique (`"inline"` / `"modal"`) pour préfixer les IDs des paths dans `<defs>`. Évite les conflits DOM quand les deux instances coexistent.

---

## Connexions animées

```jsx
// 1. Déclarer le chemin dans <defs>
<path id={`${uid}-monpath`} d="M x1,cy L x2,cy" />

// 2. Ligne de fond (quasi invisible) + ligne dash animée
<use href={`#${uid}-monpath`} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
<use href={`#${uid}-monpath`} fill="none" stroke="#couleur" strokeWidth="1.5"
  strokeOpacity="0.55" strokeDasharray="5 5"
  style={{ animation: 'jh5-flow 0.85s linear infinite', animationDelay: '0s' }}/>

// 3. Dot animé
<circle r="3.5" fill="#couleur" opacity="0.9">
  <animateMotion dur="1.1s" repeatCount="indefinite" begin="0s">
    <mpath href={`#${uid}-monpath`}/>
  </animateMotion>
</circle>

// 4. Points de jonction
<circle cx={x} cy={CY} r="4" fill="#couleur" opacity="0.85"/>
```

### Keyframe CSS (à mettre dans `<defs><style>`)
```css
@keyframes jh5-flow { to { stroke-dashoffset: -20; } }
```

---

## Palette de couleurs

| Rôle | Couleur |
|---|---|
| Trigger / entrée | `#ea4b71` (rose) |
| Sortie / write | `#34d399` (vert) |
| Dashboard / UI | `#a78bfa` (violet) |
| API externe | `#3b82f6` (bleu) |
| Filtre / logique | `#f59e0b` (ambre) |
| IA / LLM | `#10b981` (vert émeraude) |

---

## Panel central (ex. n8n)

Pour un bloc qui contient plusieurs étapes :

```
PX, PY, PW, PH   ← position et taille du panel
PHDR = 40         ← hauteur du header
stepH = (PH - PHDR) / STEPS.length
stepCY(i) = PY + PHDR + i * stepH + stepH / 2
```

Chaque étape a : dot coloré + logo/emoji + label bold + detail monospace

---

## Nœuds simples (pill / card)

```jsx
<rect x={X} y={CY - H/2} width={W} height={H} rx={10}
  fill="#16161f" stroke="rgba(couleur, 0.28)" strokeWidth="1.2"/>
// + image logo centré + texte label + texte detail
```

---

## Courbe webhook (retour)

Pour représenter un callback/webhook qui revient en arrière :

```jsx
const pWebhook = `M ${endX},${endY} C ${endX},${H+28} ${midX},${H+28} ${startX},${startY}`
// Courbe de Bézier qui passe sous le diagramme
// strokeDasharray="4 7" strokeOpacity="0.3" (discret, pas animé)
```

---

## Composants React

```
WorkflowSVG({ uid })     ← le SVG pur, uid préfixe les IDs
DiagramCard({ uid, onExpand })  ← wrapper dark + bouton agrandir
DiagramXxx()             ← export default, gère useState(expanded) + createPortal
```

Le modal utilise `createPortal(…, document.body)` à `zIndex: 9999` pour échapper au stacking context du drawer (qui a une animation CSS = nouveau stacking context).

---

## Checklist nouveau diagramme

- [ ] Copier `DiagramJobHunter.jsx` comme base
- [ ] Renommer `DiagramXxx` et `WorkflowSVG` (ou garder le nom générique)
- [ ] Redéfinir `STEPS`, `W`, `H`, `CY` selon le nombre de nœuds
- [ ] Recalculer les positions X de chaque nœud pour qu'ils tiennent dans `W=780`
- [ ] Adapter les couleurs selon la palette ci-dessus
- [ ] Penser `uid` prop si deux instances peuvent coexister
- [ ] Dans `ProjectDrawer.jsx` : ajouter `{project.title === 'Titre du projet' && <DiagramXxx />}`
- [ ] Vérifier le rendu mobile (le SVG est responsive via `width="100%"`)
