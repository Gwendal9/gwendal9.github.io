import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { createPortal } from 'react-dom'

const RN   = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
const NODE = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
const PG   = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const AZ   = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'

// ─────────────────────────────────────────────────────────────
// Layout  viewBox="0 0 1000 256"   Flux Y=86
//
//  User avatar  : cx=68  r=22  → conn-right=93
//  S1 gap       : 96 → 180   (84px)
//  RN pill      : x=180  w=194  h=80  cx=277  → right=374
//  S2 gap       : 377 → 447  (70px)
//  Node pill    : x=447  w=214  h=100  cx=554  → right=661
//  S3 gap       : 664 → 736  (72px)
//  PG pill      : x=736  w=210  h=80  cx=841  → right=946
//
//  API sep y=158  cards y=170 h=56
//  Symmetric ±100 around Node cx=554
//    Soccer cx=454  x=364 w=180
//    Sprtadr cx=654  x=564 w=180
// ─────────────────────────────────────────────────────────────

const FY = 86
const CY = '4.5s'
const k  = t => (t / 4.5).toFixed(4)

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
          .${f}a { animation: ${f} 2.8s linear infinite; }
        `}</style>
        <marker id={`${uid}ap`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="var(--lilas)" opacity="0.5"/>
        </marker>
        <marker id={`${uid}ag`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#059669" opacity="0.5"/>
        </marker>
      </defs>

      {/* ── Section labels ── */}
      <text x="26"  y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">CLIENT</text>
      <text x="447" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">SERVICES</text>
      <text x="736" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#059669" fontFamily="monospace" opacity="0.5">STOCKAGE</text>

      {/* ══ CONNEXIONS ══ */}

      {/* S1 : User → RN   96→180 */}
      <line x1="96" y1={FY} x2="180" y2={FY}
        stroke="var(--lilas)" strokeWidth="1" strokeOpacity="0.35"
        strokeDasharray="5 5" className={`${f}s`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="96"  cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>
      <circle cx="180" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>
      <text x="138" y={FY - 8} textAnchor="middle" fontSize="7"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.45">HTTP</text>

      {/* S2 : RN → Node   377→447 */}
      <line x1="377" y1={FY} x2="447" y2={FY}
        stroke="var(--lilas)" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="377" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>
      <circle cx="447" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>
      <text x="412" y={FY - 8} textAnchor="middle" fontSize="7"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.45">JWT · Prisma</text>

      {/* S3 : Node → PG   664→736 */}
      <line x1="664" y1={FY} x2="736" y2={FY}
        stroke="#059669" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ag)`}/>
      <circle cx="664" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <circle cx="736" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <text x="700" y={FY - 8} textAnchor="middle" fontSize="7"
        fill="#059669" fontFamily="monospace" opacity="0.45">SQL</text>

      {/* ── Dots voyageurs (démarrent opacity=0) ── */}
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;1;1;1" keyTimes={`0;${k(1)};${k(1)};1`} path={`M96,${FY} L180,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0.8;0.8;0;0" keyTimes={`0;${k(0.02)};${k(1)};${k(1.02)};1`}/>
      </circle>
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(1.5)};${k(2.5)};${k(2.5)};1`} path={`M377,${FY} L447,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(1.48)};${k(1.5)};${k(2.5)};${k(2.52)};1`}/>
      </circle>
      <circle r="4" fill="#059669" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(3)};${k(4)};${k(4)};1`} path={`M664,${FY} L736,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(2.98)};${k(3)};${k(4)};${k(4.02)};1`}/>
      </circle>

      {/* ══ NŒUD 1 — Utilisateur (sans cadre, cx=68 cy=68) ══ */}
      <circle cx="68" cy="66" r="22" fill="none" stroke="var(--border)" strokeWidth="1.5"/>
      <circle cx="68" cy="59" r="9"  fill="var(--lilas)" opacity="0.7"/>
      <path d="M50,80 Q50,71 68,71 Q86,71 86,80" fill="var(--lilas)" opacity="0.7"/>
      <text x="68" y="107" textAnchor="middle" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">{lang === 'en' ? 'User' : 'Utilisateur'}</text>
      <text x="68" y="121" textAnchor="middle" fontSize="8" fill="var(--low)"
        fontFamily="monospace">iOS · Android</text>

      {/* ══ NŒUD 2 — React Native  x=180 w=194 h=80 cy=86 ══ */}
      <rect x="180" y="46" width="194" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={RN} x="193" y="52" width="56" height="56"/>
      <text x="261" y="73" fontSize="12" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">React Native</text>
      <text x="261" y="90" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">Expo · TypeScript</text>
      <text x="261" y="105" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Mobile app' : 'Application mobile'}</text>

      {/* ══ NŒUD 3 — Node + Express  x=447 w=214 h=100 cy=86 ══ */}
      <rect x="447" y="36" width="214" height="100" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1.5"/>
      <image href={NODE} x="459" y="46" width="88" height="56"/>
      <text x="557" y="65" fontSize="12" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Node + Express</text>
      <text x="557" y="81" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">{lang === 'en' ? 'API & business logic' : 'API & logique métier'}</text>
      {/* Séparateur interne */}
      <line x1="459" y1="102" x2="651" y2="102"
        stroke="var(--border)" strokeWidth="0.8"/>
      {/* Badge Azure : icône + texte sur la même ligne, dans la zone basse */}
      <image href={AZ} x="464" y="109" width="18" height="18"/>
      <text x="488" y="122" fontSize="8" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Hosted on Azure' : 'Hébergé sur Azure'}</text>

      {/* ══ NŒUD 4 — PostgreSQL  x=736 w=210 h=80 cy=86 ══ */}
      <rect x="736" y="46" width="210" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={PG} x="750" y="52" width="56" height="56"/>
      <text x="818" y="72" fontSize="12" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">PostgreSQL</text>
      <text x="818" y="88" fontSize="8.5" fill="#059669"
        fontFamily="monospace">AWS RDS</text>
      <text x="818" y="104" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Database' : 'Base de données'}</text>

      {/* ══ SYNC NOCTURNE ══ */}
      <line x1="26" y1="156" x2="974" y2="156"
        stroke="var(--border)" strokeWidth="1"/>
      <text x="26" y="170" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#d97706" fontFamily="monospace" opacity="0.7">SYNC NOCTURNE</text>

      {/* Connexions API → Node, symétriques autour de cx=554
          Soccer  cx=454  Sportradar cx=654                    */}
      <path d="M454,183 C454,166 554,156 554,136"
        fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4"
        strokeDasharray="4 6" className={`${f}a`}/>
      <path d="M654,183 C654,166 554,156 554,136"
        fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4"
        strokeDasharray="4 6" className={`${f}a`} style={{ animationDelay: '1.4s' }}/>
      <circle cx="554" cy="136" r="2.5" fill="#d97706" opacity="0.5"/>
      <circle r="3" fill="#d97706" opacity="0">
        <animateMotion dur="2.8s" repeatCount="indefinite" begin="0s"
          path="M454,183 C454,166 554,156 554,136"/>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      <circle r="3" fill="#d97706" opacity="0">
        <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s"
          path="M654,183 C654,166 554,156 554,136"/>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="2.8s" repeatCount="indefinite" begin="1.4s"/>
      </circle>

      {/* Card Soccer  x=364 w=180 h=56 cx=454 */}
      <rect x="364" y="174" width="180" height="56" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      {/* Icône Soccer API — carré arrondi vert + emoji */}
      <rect x="374" y="184" width="36" height="36" rx="9" fill="#dcfce7" stroke="#86efac" strokeWidth="1"/>
      <text x="392" y="209" textAnchor="middle" fontSize="20">⚽</text>
      <text x="418" y="197" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Soccer API</text>
      <text x="418" y="211" fontSize="8" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Results & stats' : 'Résultats & stats'}</text>
      <text x="418" y="223" fontSize="7" fill="var(--low)"
        fontFamily="monospace" opacity="0.6">chaque nuit</text>

      {/* Card Sportradar  x=564 w=180 h=56 cx=654 */}
      <rect x="564" y="174" width="180" height="56" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      {/* Icône Sportradar — carré arrondi ambre + emoji */}
      <rect x="574" y="184" width="36" height="36" rx="9" fill="#fef3c7" stroke="#fcd34d" strokeWidth="1"/>
      <text x="592" y="209" textAnchor="middle" fontSize="20">🏆</text>
      <text x="618" y="197" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Sportradar</text>
      <text x="618" y="211" fontSize="8" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Match data' : 'Données de match'}</text>
      <text x="618" y="223" fontSize="7" fill="var(--low)"
        fontFamily="monospace" opacity="0.6">chaque nuit</text>
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

export default function DiagramOprono() {
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
      <DiagramCard uid="op-i" onExpand={() => setExpanded(true)} />
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vw' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 1300, background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 40px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture — O'PRONO</span>
              <button onClick={() => setExpanded(false)} style={{ all: 'unset', width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', color: 'var(--mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
            <DiagramSVG uid="op-m" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
