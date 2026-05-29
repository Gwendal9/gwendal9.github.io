import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const TENUP_LOGO = 'https://padelista.fr/img/tenup.png'
const PYTHON_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
const FLASK_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flask_logo.svg'
const PG_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const DOCKER_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg'

/* ─── Layout constants ───────────────────────────────── */
const W = 780
const H = 240
const CY1 = 72    // ligne scraping
const CY2 = 172   // ligne serving

/* Nœuds ligne 1 — Scraping pipeline */
// TenUp API pill
const T1X = 8,  T1Y = CY1 - 22, T1W = 108, T1H = 44
// Scraper panel
const P1X = 132, P1Y = 12, P1W = 300, P1H = 120
const P1R = P1X + P1W
// PostgreSQL
const DB1X = 450, DB1Y = CY1 - 36, DB1W = 120, DB1H = 72
const DB1CX = DB1X + DB1W / 2

/* Nœuds ligne 2 — Serving */
// Cron pill
const C2X = 8,  C2Y = CY2 - 18, C2W = 96, C2H = 36
// Flask API
const F2X = 120, F2Y = CY2 - 36, F2W = 120, F2H = 72
const F2CX = F2X + F2W / 2
// nginx
const N2X = 260, N2Y = CY2 - 22, N2W = 80, N2H = 44
const N2CX = N2X + N2W / 2
// Dashboard
const D2X = 360, D2Y = CY2 - 36, D2W = 140, D2H = 72
const D2CX = D2X + D2W / 2
// Docker badge
const DK2X = 520, DK2Y = CY2 - 28, DK2W = 110, DK2H = 56

/* Connexions */
// Ligne 1
const pTenup  = `M ${T1X + T1W},${CY1} L ${P1X},${CY1}`
const pToDb   = `M ${P1R},${CY1} L ${DB1X},${CY1}`
// DB vers Flask (vertical)
const pDbFlask = `M ${DB1CX},${DB1Y + DB1H} C ${DB1CX},${CY2 + 50} ${F2CX},${CY2 + 50} ${F2CX},${F2Y + F2H}`
// Ligne 2
const pCronFlask = `M ${C2X + C2W},${CY2} L ${F2X},${CY2}`
const pFlaskNginx = `M ${F2X + F2W},${CY2} L ${N2X},${CY2}`
const pNginxDash  = `M ${N2X + N2W},${CY2} L ${D2X},${CY2}`

const QUEUE_STATES = ['pending', 'processing', 'done', 'error']
const QUEUE_COLORS = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444']

function WorkflowSVG({ uid = 'a' }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <style>{`@keyframes pd-flow { to { stroke-dashoffset: -20; } }`}</style>
        <path id={`${uid}-pt`}  d={pTenup}    />
        <path id={`${uid}-pdb`} d={pToDb}     />
        <path id={`${uid}-pdf`} d={pDbFlask}  />
        <path id={`${uid}-pcf`} d={pCronFlask}/>
        <path id={`${uid}-pfn`} d={pFlaskNginx}/>
        <path id={`${uid}-pnd`} d={pNginxDash} />
      </defs>

      {/* ── Track lines ── */}
      {[
        { ref: `${uid}-pt`,  stroke: '#10b981', delay: '0s'    },
        { ref: `${uid}-pdb`, stroke: '#10b981', delay: '0.3s'  },
        { ref: `${uid}-pcf`, stroke: '#a78bfa', delay: '0s'    },
        { ref: `${uid}-pfn`, stroke: '#a78bfa', delay: '0.25s' },
        { ref: `${uid}-pnd`, stroke: '#a78bfa', delay: '0.5s'  },
      ].map(({ ref, stroke, delay }) => (
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
          <use href={`#${ref}`} fill="none" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55"
            strokeDasharray="5 5"
            style={{ animation: `pd-flow 0.85s linear infinite`, animationDelay: delay }}/>
        </g>
      ))}

      {/* DB → Flask vertical — dashed discret */}
      <use href={`#${uid}-pdf`} fill="none" stroke="#34d399" strokeWidth="1.1"
        strokeOpacity="0.35" strokeDasharray="4 6"/>

      {/* ── Dots animés ── */}
      {[
        { href: `${uid}-pt`,  fill: '#10b981', dur: '1.1s', begin: '0s'   },
        { href: `${uid}-pdb`, fill: '#10b981', dur: '1.3s', begin: '0.4s' },
        { href: `${uid}-pcf`, fill: '#a78bfa', dur: '1.0s', begin: '0s'   },
        { href: `${uid}-pfn`, fill: '#a78bfa', dur: '0.9s', begin: '0.3s' },
        { href: `${uid}-pnd`, fill: '#a78bfa', dur: '1.1s', begin: '0.6s' },
      ].map(({ href, fill, dur, begin }) => (
        <circle key={href} r="3.5" fill={fill} opacity="0.9">
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
            <mpath href={`#${href}`}/>
          </animateMotion>
        </circle>
      ))}

      {/* ── Junction dots ── */}
      <circle cx={P1X}      cy={CY1} r="4" fill="#10b981" opacity="0.85"/>
      <circle cx={P1R}      cy={CY1} r="4" fill="#10b981" opacity="0.85"/>
      <circle cx={DB1X}     cy={CY1} r="4" fill="#34d399" opacity="0.85"/>
      <circle cx={DB1CX}    cy={DB1Y + DB1H} r="4" fill="#34d399" opacity="0.7"/>
      <circle cx={F2X}      cy={CY2} r="4" fill="#a78bfa" opacity="0.85"/>
      <circle cx={F2X+F2W}  cy={CY2} r="4" fill="#a78bfa" opacity="0.85"/>
      <circle cx={N2X+N2W}  cy={CY2} r="4" fill="#a78bfa" opacity="0.85"/>

      {/* ═══════════ LIGNE 1 — SCRAPING ═══════════ */}

      {/* TenUp pill */}
      <rect x={T1X} y={T1Y} width={T1W} height={T1H} rx={10}
        fill="#16161f" stroke="rgba(16,185,129,0.25)" strokeWidth="1.2"/>
      <text x={T1X + T1W/2} y={CY1 - 5} textAnchor="middle" fontSize="11" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">TenUp</text>
      <text x={T1X + T1W/2} y={CY1 + 9} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">API non-doc</text>

      {/* Scraper panel */}
      <rect x={P1X} y={P1Y} width={P1W} height={P1H} rx={11}
        fill="#111118" stroke="rgba(16,185,129,0.30)" strokeWidth="1.2" strokeDasharray="8 4"/>

      {/* Panel header */}
      <image href={PYTHON_LOGO} x={P1X + 10} y={P1Y + 9} width={18} height={18}/>
      <text x={P1X + 32} y={P1Y + 22} fontSize="9" fontWeight="700" letterSpacing="2"
        fill="#10b981" fillOpacity="0.9" fontFamily="monospace">SCRAPER HTTP</text>
      <text x={P1R - 10} y={P1Y + 22} fontSize="7" fill="rgba(16,185,129,0.45)"
        fontFamily="monospace" textAnchor="end">15 workers async</text>
      <line x1={P1X+1} y1={P1Y+34} x2={P1R-1} y2={P1Y+34}
        stroke="rgba(16,185,129,0.12)" strokeWidth="1"/>

      {/* Queue states */}
      {QUEUE_STATES.map((state, i) => {
        const col = P1W / QUEUE_STATES.length
        const cx = P1X + i * col + col / 2
        const cy = P1Y + 34 + (P1H - 34) / 2
        return (
          <g key={state}>
            <circle cx={cx} cy={cy - 14} r="5" fill={QUEUE_COLORS[i]} opacity="0.85"/>
            <text x={cx} y={cy + 2} textAnchor="middle" fontSize="8.5" fontWeight="700"
              fill="#ddd9f2" fontFamily="monospace">{state}</text>
          </g>
        )
      })}

      {/* Sous-label scraper */}
      <text x={P1X + P1W/2} y={P1Y + P1H - 6} textAnchor="middle" fontSize="7"
        fill="rgba(148,143,178,0.45)" fontFamily="monospace">
        reverse engineered · cookies rotatifs
      </text>

      {/* PostgreSQL */}
      <rect x={DB1X} y={DB1Y} width={DB1W} height={DB1H} rx={10}
        fill="#16161f" stroke="rgba(52,211,153,0.28)" strokeWidth="1.2"/>
      <image href={PG_LOGO} x={DB1CX - 13} y={DB1Y + 6} width={26} height={26}/>
      <text x={DB1CX} y={DB1Y + 44} textAnchor="middle" fontSize="9.5" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">PostgreSQL</text>
      <text x={DB1CX} y={DB1Y + 57} textAnchor="middle" fontSize="7"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">156k joueurs</text>

      {/* Label ligne 1 */}
      <text x={W - 10} y={CY1 + 4} textAnchor="end" fontSize="8"
        fill="rgba(16,185,129,0.45)" fontFamily="monospace">scraping pipeline</text>

      {/* ═══════════ LIGNE 2 — SERVING ═══════════ */}

      {/* Cron pill */}
      <rect x={C2X} y={C2Y} width={C2W} height={C2H} rx={9}
        fill="#16161f" stroke="rgba(167,139,250,0.22)" strokeWidth="1.2"/>
      <text x={C2X + C2W/2} y={CY2 - 3} textAnchor="middle" fontSize="13">📅</text>
      <text x={C2X + C2W/2} y={CY2 + 12} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">1er mardi/mois</text>

      {/* Flask */}
      <rect x={F2X} y={F2Y} width={F2W} height={F2H} rx={10}
        fill="#16161f" stroke="rgba(167,139,250,0.28)" strokeWidth="1.2"/>
      <image href={FLASK_LOGO} x={F2CX - 12} y={F2Y + 6} width={24} height={24}/>
      <text x={F2CX} y={F2Y + 42} textAnchor="middle" fontSize="9.5" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">Flask API</text>
      <text x={F2CX} y={F2Y + 55} textAnchor="middle" fontSize="7"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">REST · séparation H/F</text>

      {/* nginx pill */}
      <rect x={N2X} y={N2Y} width={N2W} height={N2H} rx={9}
        fill="#16161f" stroke="rgba(167,139,250,0.20)" strokeWidth="1.2"/>
      <text x={N2CX} y={CY2 - 2} textAnchor="middle" fontSize="10" fontWeight="700"
        fill="#ddd9f2" fontFamily="monospace">nginx</text>
      <text x={N2CX} y={CY2 + 11} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.5)" fontFamily="monospace">reverse proxy</text>

      {/* Dashboard */}
      <rect x={D2X} y={D2Y} width={D2W} height={D2H} rx={10}
        fill="#16161f" stroke="rgba(167,139,250,0.28)" strokeWidth="1.2"/>
      <text x={D2CX} y={D2Y + 22} textAnchor="middle" fontSize="14">🎾</text>
      <text x={D2CX} y={D2Y + 42} textAnchor="middle" fontSize="9.5" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">Dashboard</text>
      <text x={D2CX} y={D2Y + 55} textAnchor="middle" fontSize="7"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">HTML/JS vanilla</text>

      {/* Docker badge */}
      <rect x={DK2X} y={DK2Y} width={DK2W} height={DK2H} rx={9}
        fill="#111118" stroke="rgba(52,211,153,0.18)" strokeWidth="1" strokeDasharray="5 4"/>
      <image href={DOCKER_LOGO} x={DK2X + 8} y={DK2Y + 8} width={20} height={20}/>
      <text x={DK2X + 32} y={DK2Y + 21} fontSize="8.5" fontWeight="700"
        fill="rgba(167,139,250,0.7)" fontFamily="monospace">Docker</text>
      <text x={DK2X + 32} y={DK2Y + 34} fontSize="7"
        fill="rgba(148,143,178,0.45)" fontFamily="monospace">+ nginx · Render</text>

      {/* Label ligne 2 */}
      <text x={W - 10} y={CY2 + 4} textAnchor="end" fontSize="8"
        fill="rgba(167,139,250,0.45)" fontFamily="monospace">serving stack</text>

      {/* ── Séparateur entre les deux lignes ── */}
      <line x1={8} y1={(CY1 + CY2)/2} x2={W - 8} y2={(CY1 + CY2)/2}
        stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8"/>
    </svg>
  )
}

/* ─── Wrapper card ───────────────────────────────────── */
function DiagramCard({ uid, onExpand }) {
  return (
    <div style={{
      background: '#0d0d14',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 14,
      padding: '14px 18px 20px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 14,
      }}>
        <div style={{
          fontSize: 8, letterSpacing: 3, textTransform: 'uppercase',
          color: 'rgba(16,185,129,0.7)', fontWeight: 700, fontFamily: 'monospace',
        }}>
          Architecture du système
        </div>
        {onExpand && (
          <button
            onClick={onExpand}
            style={{
              fontSize: 9, color: 'rgba(200,196,224,0.55)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 6, padding: '3px 9px',
              cursor: 'pointer', fontFamily: 'monospace', letterSpacing: 1,
            }}
          >
            ⤢ agrandir
          </button>
        )}
      </div>
      <WorkflowSVG uid={uid}/>
    </div>
  )
}

/* ─── Export ─────────────────────────────────────────── */
export default function DiagramPadel() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return
    const fn = (e) => { if (e.key === 'Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])

  return (
    <>
      <div style={{ marginBottom: 28 }}>
        <DiagramCard uid="padel-inline" onExpand={() => setExpanded(true)}/>
      </div>

      {expanded && createPortal(
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.78)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '5vw',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: 1020,
              background: '#0d0d14',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: '20px 28px 28px',
              boxShadow: '0 32px 100px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              marginBottom: 20,
            }}>
              <div style={{
                fontSize: 8, letterSpacing: 3, textTransform: 'uppercase',
                color: 'rgba(16,185,129,0.7)', fontWeight: 700, fontFamily: 'monospace',
              }}>
                Architecture — FFT Padel Rankings Explorer
              </div>
              <button
                onClick={() => setExpanded(false)}
                style={{
                  width: 30, height: 30, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  cursor: 'pointer', fontSize: 14, color: 'rgba(200,196,224,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >✕</button>
            </div>
            <WorkflowSVG uid="padel-modal"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
