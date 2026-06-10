import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { createPortal } from 'react-dom'

const N8N    = 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4'
const APEC   = '/logos/Logo_Apec.jpg'
const OPENAI = 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg'
const SHEETS = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg'
const REACT  = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

// ─────────────────────────────────────────────────────────────
// Layout  viewBox="0 0 1000 256"   Flux Y=86
//
//  APEC avatar  : cx=46  r=22  → conn x=72
//  S1 gap       : 72 → 96   (24px)
//  n8n pill     : x=96   w=192 h=96  cx=192  → right=288
//  S2 gap       : 288 → 328  (40px)
//  GPT pill     : x=328  w=152 h=80  cx=404  → right=480
//  S3 gap       : 480 → 520  (40px)
//  Sheets pill  : x=520  w=144 h=80  cx=592  → right=664
//  S4 gap       : 664 → 700  (36px)
//  Dashboard    : x=700  w=188 h=80  cx=794  → right=888
//
//  Webhook sep y=158
//  Card centré sous Sheets : x=490 w=240 y=170
//  Flèche : Dashboard cx=794,y=158 → Sheets cx=592,y=126
// ─────────────────────────────────────────────────────────────

const FY = 86
const CY = '6s'
const k  = t => (t / 6).toFixed(4)

function DiagramSVG({ uid }) {
  const { lang } = useLanguage()
  const f = `${uid}f`
  return (
    <svg viewBox="0 0 1000 256" width="100%"
      style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <style>{`
          @keyframes ${f} { to { stroke-dashoffset: -20; } }
          .${f}s { animation: ${f} 2.4s linear infinite; }
          .${f}m { animation: ${f} 1.7s linear infinite; }
          .${f}w { animation: ${f} 3.2s linear infinite; }
        `}</style>
        {/* Clip-path pour le logo n8n (fond rouge → arrondi propre) */}
        <clipPath id={`${uid}n8n`}>
          <rect x="110" y="56" width="40" height="40" rx="8"/>
        </clipPath>
        <marker id={`${uid}ap`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="var(--lilas)" opacity="0.5"/>
        </marker>
        <marker id={`${uid}ag`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#10b981" opacity="0.5"/>
        </marker>
        <marker id={`${uid}aw`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#d97706" opacity="0.5"/>
        </marker>
      </defs>

      {/* ── Section labels ── */}
      <text x="26"  y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">SOURCE</text>
      <text x="96"  y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">ORCHESTRATION</text>
      <text x="520" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#10b981" fontFamily="monospace" opacity="0.5">STOCKAGE</text>
      <text x="700" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">INTERFACE</text>

      {/* ══ CONNEXIONS ══ */}

      {/* S1 : APEC → n8n   72→96 */}
      <line x1="72" y1={FY} x2="96" y2={FY}
        stroke="var(--lilas)" strokeWidth="1" strokeOpacity="0.35"
        strokeDasharray="4 4" className={`${f}s`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="72" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>
      <circle cx="96" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>

      {/* S2 : n8n → GPT   288→328 */}
      <line x1="288" y1={FY} x2="328" y2={FY}
        stroke="var(--lilas)" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="288" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>
      <circle cx="328" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>

      {/* S3 : GPT → Sheets   480→520 */}
      <line x1="480" y1={FY} x2="520" y2={FY}
        stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ag)`}/>
      <circle cx="480" cy={FY} r="2.5" fill="#10b981" opacity="0.5"/>
      <circle cx="520" cy={FY} r="2.5" fill="#10b981" opacity="0.5"/>

      {/* S4 : Sheets → Dashboard   664→700 */}
      <line x1="664" y1={FY} x2="700" y2={FY}
        stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ag)`}/>
      <circle cx="664" cy={FY} r="2.5" fill="#10b981" opacity="0.5"/>
      <circle cx="700" cy={FY} r="2.5" fill="#10b981" opacity="0.5"/>

      {/* ── Dots voyageurs séquentiels (cycle 6s) ── */}
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;1;1;1" keyTimes={`0;${k(1)};${k(1)};1`} path={`M72,${FY} L96,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0.8;0.8;0;0" keyTimes={`0;${k(0.02)};${k(1)};${k(1.02)};1`}/>
      </circle>
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(1.5)};${k(2.5)};${k(2.5)};1`} path={`M288,${FY} L328,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(1.48)};${k(1.5)};${k(2.5)};${k(2.52)};1`}/>
      </circle>
      <circle r="4" fill="#10b981" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(3)};${k(4)};${k(4)};1`} path={`M480,${FY} L520,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(2.98)};${k(3)};${k(4)};${k(4.02)};1`}/>
      </circle>
      <circle r="4" fill="#10b981" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(4.5)};${k(5.5)};${k(5.5)};1`} path={`M664,${FY} L700,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(4.48)};${k(4.5)};${k(5.5)};${k(5.52)};1`}/>
      </circle>

      {/* ══ NŒUD 1 — APEC (logo no-box) ══ */}
      <image href={APEC} x="18" y="54" width="56" height="32" preserveAspectRatio="xMidYMid meet"/>
      <text x="46" y="110" textAnchor="middle" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">APEC API</text>

      {/* ══ NŒUD 2 — n8n  x=96 w=192 h=96 ══ */}
      <rect x="96" y="38" width="192" height="96" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1.5"/>
      <image href={N8N} x="110" y="56" width="40" height="40" clipPath={`url(#${uid}n8n)`}/>
      <text x="164" y="65" fontSize="11.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">n8n · VPS</text>
      <text x="164" y="81" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">{lang === 'en' ? 'Orchestration' : 'Orchestration'}</text>
      <text x="164" y="95" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Filter + dedup' : 'Filtre + dedup'}</text>
      <line x1="108" y1="104" x2="276" y2="104" stroke="var(--border)" strokeWidth="0.8"/>
      <rect x="108" y="108" width="20" height="16" rx="4" fill="#fef3c7"/>
      <text x="118" y="119.5" textAnchor="middle" fontSize="9">☀</text>
      <text x="132" y="120" fontSize="7.5" fill="var(--low)" fontFamily="monospace">{lang === 'en' ? 'Mon-Fri · 8am' : 'Lun-Ven · 8h00'}</text>

      {/* ══ NŒUD 3 — GPT-4o-mini  x=328 w=152 h=80 ══ */}
      <rect x="328" y="46" width="152" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={OPENAI} x="338" y="52" width="44" height="44"/>
      <text x="390" y="67" fontSize="11" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">GPT-4o-mini</text>
      <text x="390" y="83" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">{lang === 'en' ? 'Score 0-100' : 'Score 0-100'}</text>
      <text x="390" y="98" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? '2-sentence summary' : 'Résumé 2 phrases'}</text>

      {/* ══ NŒUD 4 — Google Sheets  x=520 w=144 h=80 ══ */}
      <rect x="520" y="46" width="144" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={SHEETS} x="530" y="52" width="40" height="40"/>
      <text x="576" y="68" fontSize="11" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Google</text>
      <text x="576" y="82" fontSize="11" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Sheets</text>
      <text x="576" y="98" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Upsert by URL' : 'Upsert par URL'}</text>

      {/* ══ NŒUD 5 — Dashboard React  x=700 w=188 h=80 ══ */}
      <rect x="700" y="46" width="188" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={REACT} x="712" y="52" width="48" height="48"/>
      <text x="768" y="68" fontSize="11" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Dashboard</text>
      <text x="768" y="83" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">{lang === 'en' ? 'Job kanban' : 'Kanban offres'}</text>
      <text x="768" y="98" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">GitHub Pages</text>

      {/* ── Labels connexions (après les nœuds → par-dessus les fonds blancs) ── */}
      <text x="308" y={FY - 9} textAnchor="middle" fontSize="7"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.55">filtrées</text>
      <text x="500" y={FY - 9} textAnchor="middle" fontSize="7"
        fill="#10b981" fontFamily="monospace" opacity="0.55">résumé</text>

      {/* ══ WEBHOOK RETOUR ══ */}
      <line x1="26" y1="158" x2="974" y2="158"
        stroke="var(--border)" strokeWidth="1"/>
      <text x="26" y="172" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#d97706" fontFamily="monospace" opacity="0.7">WEBHOOK · RETOUR STATUT</text>

      {/* Card webhook centrée entre Sheets (cx=592) et Dashboard (cx=794) → cx=693
          x = 693 - 120 = 573, w = 240 */}
      <rect x="573" y="174" width="240" height="56" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <rect x="583" y="184" width="36" height="36" rx="9" fill="#fef3c7" stroke="#fde68a" strokeWidth="1"/>
      <text x="601" y="209" textAnchor="middle" fontSize="20">🔔</text>
      <text x="627" y="197" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">{lang === 'en' ? 'Status change' : 'Changement de statut'}</text>
      <text x="627" y="211" fontSize="8" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Kanban → Webhook → Sheets' : 'Kanban → Webhook → Sheets'}</text>
      <text x="627" y="223" fontSize="7" fill="var(--low)"
        fontFamily="monospace" opacity="0.6">à chaque déplacement</text>

      {/* Flèche gauche : card cx=693 → Sheets cx=592,y=126 */}
      <path d="M693,174 C693,162 592,152 592,126"
        fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4"
        strokeDasharray="4 6" className={`${f}w`} markerEnd={`url(#${uid}aw)`}/>
      <circle cx="592" cy="126" r="2.5" fill="#d97706" opacity="0.5"/>
      <circle r="3" fill="#d97706" opacity="0">
        <animateMotion dur="3.2s" repeatCount="indefinite"
          path="M693,174 C693,162 592,152 592,126"/>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="3.2s" repeatCount="indefinite"/>
      </circle>

      {/* Flèche droite : Dashboard cx=794,y=126 → card cx=693 */}
      <path d="M794,126 C794,152 693,162 693,174"
        fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4"
        strokeDasharray="4 6" className={`${f}w`}/>
      <circle cx="794" cy="126" r="2.5" fill="#d97706" opacity="0.5"/>
      <circle r="3" fill="#d97706" opacity="0">
        <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.6s"
          path="M794,126 C794,152 693,162 693,174"/>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="3.2s" repeatCount="indefinite" begin="1.6s"/>
      </circle>
    </svg>
  )
}

function DiagramCard({ uid, onExpand }) {
  const { lang } = useLanguage()
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 20px 20px', marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture</span>
        {onExpand && (
          <button onClick={onExpand} style={{
              all: 'unset', display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '5px 10px', borderRadius: 6,
              border: '1px solid var(--lilas-b)',
              background: 'var(--lilas-d)',
              fontSize: 11, color: 'var(--lilas)',
              cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600,
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--lilas-b)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--lilas-d)' }}
          >
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M7.5 1.5H10.5V4.5M10.5 1.5L6.5 5.5M4.5 10.5H1.5V7.5M1.5 10.5L5.5 6.5"/>
            </svg>
            {lang === 'en' ? 'Expand' : 'Agrandir'}
          </button>
        )}
      </div>
      <DiagramSVG uid={uid} />
    </div>
  )
}

export default function DiagramJobHunter() {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  useEffect(() => {
    if (!expanded) return
    const fn = e => { if (e.key === 'Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])

  return (
    <>
      <DiagramCard uid="jh-i" onExpand={() => setExpanded(true)} />
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vw' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 1300, background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 40px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture — Job Hunter</span>
              <button onClick={() => setExpanded(false)} style={{ all: 'unset', width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', color: 'var(--mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
            <DiagramSVG uid="jh-m" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
