import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { createPortal } from 'react-dom'

const TENUP  = '/logos/tenup.png'
const PYTHON = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
const PG     = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const FLASK  = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/flask/flask-original.svg'
const JS     = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/javascript/javascript-original.svg'

// ─────────────────────────────────────────────────────────────
// Layout  viewBox="0 0 1000 256"   Flux Y=86
//
//  TenUp logo   : x=10 w=60 h=28  cx=40  → conn x=76
//  S1 gap       : 76 → 110  (34px)
//  Scraper pill : x=110  w=182 h=96  cx=201  → right=292
//  S2 gap       : 292 → 330  (38px)
//  PG pill      : x=330  w=166 h=80  cx=413  → right=496
//  S3 gap       : 496 → 534  (38px)
//  Flask pill   : x=534  w=170 h=80  cx=619  → right=704
//  S4 gap       : 704 → 742  (38px)
//  Dashboard    : x=742  w=182 h=80  cx=833  → right=924
//
//  Cron sep y=158  label y=170  card y=176 h=56
//  Flèche : card y=189 → Scraper cx=201 y=134
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
          .${f}c { animation: ${f} 3s   linear infinite; }
        `}</style>
        <marker id={`${uid}ap`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="var(--lilas)" opacity="0.5"/>
        </marker>
        <marker id={`${uid}ag`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#059669" opacity="0.5"/>
        </marker>
        <marker id={`${uid}ac`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,1 L5,3 L0,5 Z" fill="#d97706" opacity="0.5"/>
        </marker>
      </defs>

      {/* ── Section labels ── */}
      <text x="26"  y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">SOURCE</text>
      <text x="110" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">COLLECTE</text>
      <text x="330" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#059669" fontFamily="monospace" opacity="0.5">STOCKAGE</text>
      <text x="534" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#059669" fontFamily="monospace" opacity="0.5">EXPOSITION</text>
      <text x="742" y="24" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.5">INTERFACE</text>

      {/* ══ CONNEXIONS ══ */}

      {/* S1 : TenUp → Scraper   76→110  (34px) */}
      <line x1="76" y1={FY} x2="110" y2={FY}
        stroke="var(--lilas)" strokeWidth="1" strokeOpacity="0.35"
        strokeDasharray="4 4" className={`${f}s`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="76"  cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>
      <circle cx="110" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.4"/>

      {/* S2 : Scraper → PG   292→330  (38px) */}
      <line x1="292" y1={FY} x2="330" y2={FY}
        stroke="var(--lilas)" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ap)`}/>
      <circle cx="292" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>
      <circle cx="330" cy={FY} r="2.5" fill="var(--lilas)" opacity="0.5"/>
      <text x="311" y={FY - 9} textAnchor="middle" fontSize="7"
        fill="var(--lilas)" fontFamily="monospace" opacity="0.45">SQL</text>

      {/* S3 : PG → Flask   496→534  (38px) */}
      <line x1="496" y1={FY} x2="534" y2={FY}
        stroke="#059669" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ag)`}/>
      <circle cx="496" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <circle cx="534" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <text x="515" y={FY - 9} textAnchor="middle" fontSize="7"
        fill="#059669" fontFamily="monospace" opacity="0.45">SQL</text>

      {/* S4 : Flask → Dashboard   704→742  (38px) */}
      <line x1="704" y1={FY} x2="742" y2={FY}
        stroke="#059669" strokeWidth="1.5" strokeOpacity="0.45"
        strokeDasharray="6 4" className={`${f}m`} markerEnd={`url(#${uid}ag)`}/>
      <circle cx="704" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <circle cx="742" cy={FY} r="2.5" fill="#059669" opacity="0.5"/>
      <text x="723" y={FY - 9} textAnchor="middle" fontSize="7"
        fill="#059669" fontFamily="monospace" opacity="0.45">REST</text>

      {/* ── Dots voyageurs séquentiels ── */}
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;1;1;1" keyTimes={`0;${k(1)};${k(1)};1`} path={`M76,${FY} L110,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0.8;0.8;0;0" keyTimes={`0;${k(0.02)};${k(1)};${k(1.02)};1`}/>
      </circle>
      <circle r="4" fill="var(--lilas)" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(1.5)};${k(2.5)};${k(2.5)};1`} path={`M292,${FY} L330,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(1.48)};${k(1.5)};${k(2.5)};${k(2.52)};1`}/>
      </circle>
      <circle r="4" fill="#059669" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(3)};${k(4)};${k(4)};1`} path={`M496,${FY} L534,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(2.98)};${k(3)};${k(4)};${k(4.02)};1`}/>
      </circle>
      <circle r="4" fill="#059669" opacity="0">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(4.5)};${k(5.5)};${k(5.5)};1`} path={`M704,${FY} L742,${FY}`}/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;0.8;0.8;0;0" keyTimes={`0;${k(4.48)};${k(4.5)};${k(5.5)};${k(5.52)};1`}/>
      </circle>

      {/* ══ NŒUD 1 — TenUp / FFT (no-box) ══ */}
      <image href={TENUP} x="10" y="60" width="60" height="28" preserveAspectRatio="xMidYMid meet"/>
      <text x="40" y="106" textAnchor="middle" fontSize="10" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">TenUp / FFT</text>
      <text x="40" y="120" textAnchor="middle" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Undocumented API' : 'API non-documentée'}</text>

      {/* ══ NŒUD 2 — Scraper Python  x=110 w=182 h=96 ══ */}
      <rect x="110" y="38" width="182" height="96" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1.5"/>
      <image href={PYTHON} x="122" y="48" width="46" height="46"/>
      <text x="178" y="63" fontSize="11.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Scraper</text>
      <text x="178" y="79" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">15 workers asyncio</text>
      <line x1="122" y1="102" x2="280" y2="102" stroke="var(--border)" strokeWidth="0.8"/>
      <text x="201" y="118" textAnchor="middle" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Built-in SQLite queue' : 'Queue SQLite intégrée'}</text>

      {/* ══ NŒUD 3 — PostgreSQL  x=330 w=166 h=80 ══ */}
      <rect x="330" y="46" width="166" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={PG} x="340" y="52" width="46" height="46"/>
      <text x="394" y="68" fontSize="11.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">PostgreSQL</text>
      <text x="394" y="84" fontSize="8.5" fill="#059669"
        fontFamily="monospace">{lang === 'en' ? '156k players' : '156k joueurs'}</text>
      <text x="394" y="99" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? '273k participations' : '273k participations'}</text>

      {/* ══ NŒUD 4 — Flask + nginx  x=534 w=170 h=80 ══ */}
      <rect x="534" y="46" width="170" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={FLASK} x="544" y="54" width="38" height="38"/>
      <text x="590" y="66" fontSize="11.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Flask API</text>
      <text x="590" y="82" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">{lang === 'en' ? 'REST · M/F split' : 'REST · H/F séparés'}</text>
      <text x="590" y="97" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">Proxy nginx</text>

      {/* ══ NŒUD 5 — Dashboard JS  x=742 w=182 h=80 ══ */}
      <rect x="742" y="46" width="182" height="80" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <image href={JS} x="752" y="54" width="40" height="40"/>
      <text x="800" y="68" fontSize="11.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">Dashboard</text>
      <text x="800" y="84" fontSize="8.5" fill="var(--lilas)"
        fontFamily="monospace">HTML · JS vanilla</text>
      <text x="800" y="99" fontSize="7.5" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Rankings & stats' : 'Classements & stats'}</text>

      {/* ══ MISE À JOUR MENSUELLE ══ */}
      <line x1="26" y1="158" x2="974" y2="158"
        stroke="var(--border)" strokeWidth="1"/>
      {/* Label entre séparateur (y=158) et card (y=176) */}
      <text x="26" y="170" fontSize="8" fontWeight="700" letterSpacing="2"
        fill="#d97706" fontFamily="monospace" opacity="0.7">MISE À JOUR MENSUELLE</text>

      {/* Flèche : depuis l'intérieur de la card (y=189) → Scraper cx=201, y=134 */}
      <path d="M201,189 C201,172 201,155 201,134"
        fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.4"
        strokeDasharray="4 6" className={`${f}c`} markerEnd={`url(#${uid}ac)`}/>
      <circle cx="201" cy="134" r="2.5" fill="#d97706" opacity="0.5"/>
      <circle r="3" fill="#d97706" opacity="0">
        <animateMotion dur="3s" repeatCount="indefinite"
          path="M201,189 C201,172 201,155 201,134"/>
        <animate attributeName="opacity" values="0;0.7;0.7;0" keyTimes="0;0.05;0.9;1" dur="3s" repeatCount="indefinite"/>
      </circle>

      {/* Card cron  x=80 y=176 w=220 h=56 */}
      <rect x="80" y="176" width="220" height="56" rx="10"
        fill="var(--white)" stroke="var(--border)" strokeWidth="1"/>
      <rect x="90" y="186" width="36" height="36" rx="9" fill="#fef3c7" stroke="#fde68a" strokeWidth="1"/>
      <text x="108" y="211" textAnchor="middle" fontSize="20">📅</text>
      <text x="134" y="199" fontSize="10.5" fontWeight="700"
        fill="var(--ink)" fontFamily="monospace">{lang === 'en' ? '1st Tuesday / month' : '1er mardi / mois'}</text>
      <text x="134" y="213" fontSize="8" fill="var(--low)"
        fontFamily="monospace">{lang === 'en' ? 'Update · 156k players' : 'Mise à jour · 156k joueurs'}</text>
      <text x="134" y="225" fontSize="7" fill="var(--low)"
        fontFamily="monospace" opacity="0.6">déclenchement automatique</text>
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
          <button onClick={onExpand} style={{ all: 'unset', fontSize: 11, color: 'var(--low)', cursor: 'pointer', fontFamily: 'monospace', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            {lang === 'en' ? 'Expand' : 'Agrandir'}
          </button>
        )}
      </div>
      <DiagramSVG uid={uid} />
    </div>
  )
}

export default function DiagramPadel() {
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
      <DiagramCard uid="pd-i" onExpand={() => setExpanded(true)} />
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vw' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 1300, background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 40px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture — Padel Rankings FFT</span>
              <button onClick={() => setExpanded(false)} style={{ all: 'unset', width: 28, height: 28, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', color: 'var(--mid)', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
            <DiagramSVG uid="pd-m" />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
