import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const N8N_LOGO    = 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4'
const OPENAI_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
const SHEETS_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg'
const REACT_LOGO  = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'

const STEPS = [
  { color: '#3b82f6', label: 'APEC API',     detail: '5 mots-clés · 5p × 50 → ~1 250 offres/jour', emoji: '🔗', logo: null        },
  { color: '#f59e0b', label: 'Filtre',        detail: 'exclusions · dédup titre / entreprise',       emoji: '⚡', logo: null        },
  { color: '#10b981', label: 'GPT-4o-mini',   detail: 'score 0→10 · résumé · si non scoré',          emoji: null, logo: OPENAI_LOGO },
  { color: '#34d399', label: 'Sheets write',  detail: 'upsert par URL · Service Account',            emoji: null, logo: SHEETS_LOGO },
]

/* ─── SVG layout (all nodes aligned on CY = H/2 = 105) ─── */
const W   = 780
const H   = 210
const CY  = H / 2   // 105 — the main horizontal flow line

// Schedule pill
const SX = 8, SY = CY - 22, SW = 110, SH = 44
// n8n panel
const PX = 136, PY = 8, PW = 328, PH = H - 16   // right edge: 464
const PR  = PX + PW
const PHDR = 40
const stepH = (PH - PHDR) / STEPS.length          // ≈ 38.5
const stepCY = (i) => PY + PHDR + i * stepH + stepH / 2
// stepCY(0)≈67  (1)≈106  (2)≈144  (3)≈183
// Sheets node
const SHX = 484, SHY = CY - 37, SHW = 130, SHH = 74
const SHCX = SHX + SHW / 2   // 549
// Dashboard node
const DX = 634, DY = CY - 37, DW = 138, DH = 74
const DCX = DX + DW / 2       // 703

// Connection paths (all at y = CY for the main flow)
const pSched    = `M ${SX + SW},${CY} L ${PX},${CY}`
const pToSheets = `M ${PR},${CY} L ${SHX},${CY}`
const pToDash   = `M ${SHX + SHW},${CY} L ${DX},${CY}`
// Webhook: Dashboard bottom → Panel bottom, curved below
const pWebhook  = `M ${DCX},${DY + DH} C ${DCX},${H + 28} ${PX + PW / 2},${H + 28} ${PX + 20},${PY + PH - 8}`

/* ─── The actual SVG ─────────────────────────────────────── */
function WorkflowSVG({ uid = 'a' }) {
  return (
    <svg viewBox={`0 0 ${W} ${H + 44}`} width="100%" style={{ display: 'block', overflow: 'visible' }}>
      <defs>
        <style>{`
          @keyframes jh5-flow { to { stroke-dashoffset: -20; } }
        `}</style>
        <path id={`${uid}-ps`}  d={pSched}   />
        <path id={`${uid}-psh`} d={pToSheets}/>
        <path id={`${uid}-pd`}  d={pToDash}  />
        <path id={`${uid}-pw`}  d={pWebhook} />
      </defs>

      {/* ── Track lines ── */}
      {[
        { ref: `${uid}-ps`,  stroke: '#ea4b71', delay: '0s'    },
        { ref: `${uid}-psh`, stroke: '#34d399', delay: '0.35s' },
        { ref: `${uid}-pd`,  stroke: '#a78bfa', delay: '0.65s' },
      ].map(({ ref, stroke, delay }) => (
        <g key={ref}>
          <use href={`#${ref}`} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5"/>
          <use href={`#${ref}`} fill="none" stroke={stroke} strokeWidth="1.5" strokeOpacity="0.55"
            strokeDasharray="5 5"
            style={{ animation: 'jh5-flow 0.85s linear infinite', animationDelay: delay }}/>
        </g>
      ))}

      {/* Webhook dashed */}
      <use href={`#${uid}-pw`} fill="none" stroke="#a78bfa" strokeWidth="1.1"
        strokeOpacity="0.3" strokeDasharray="4 7"/>

      {/* ── Animated motion dots ── */}
      {[
        { href: `${uid}-ps`,  fill: '#ea4b71', dur: '1.1s', begin: '0s'    },
        { href: `${uid}-psh`, fill: '#34d399', dur: '1.3s', begin: '0.4s'  },
        { href: `${uid}-pd`,  fill: '#a78bfa', dur: '1.0s', begin: '0.75s' },
      ].map(({ href, fill, dur, begin }) => (
        <circle key={href} r="3.5" fill={fill} opacity="0.9">
          <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
            <mpath href={`#${href}`}/>
          </animateMotion>
        </circle>
      ))}

      {/* ── Junction dots ── */}
      <circle cx={PX}      cy={CY} r="4" fill="#ea4b71" opacity="0.85"/>
      <circle cx={PR}      cy={CY} r="4" fill="#34d399" opacity="0.85"/>
      <circle cx={SHX}     cy={CY} r="4" fill="#34d399" opacity="0.85"/>
      <circle cx={SHX+SHW} cy={CY} r="4" fill="#a78bfa" opacity="0.85"/>
      <circle cx={DX}      cy={CY} r="4" fill="#a78bfa" opacity="0.85"/>

      {/* ── n8n Panel ── */}
      <rect x={PX} y={PY} width={PW} height={PH} rx={11}
        fill="#111118" stroke="rgba(234,75,113,0.32)" strokeWidth="1.2" strokeDasharray="8 4"/>

      {/* Panel header */}
      <image href={N8N_LOGO} x={PX + 12} y={PY + 9} width={22} height={22}/>
      <text x={PX + 38} y={PY + 24} fontSize="10" fontWeight="700" letterSpacing="2"
        fill="#ea4b71" fillOpacity="0.88" fontFamily="monospace">
        WORKFLOW N8N
      </text>
      <text x={PR - 10} y={PY + 24} fontSize="7.5" fill="rgba(234,75,113,0.42)"
        fontFamily="monospace" textAnchor="end">
        VPS · cron 8h lun-ven
      </text>
      <line x1={PX + 1} y1={PY + PHDR} x2={PR - 1} y2={PY + PHDR}
        stroke="rgba(234,75,113,0.14)" strokeWidth="1"/>

      {/* Step rows */}
      {STEPS.map((s, i) => {
        const cy = stepCY(i)
        const rowY = PY + PHDR + i * stepH
        return (
          <g key={i}>
            {i > 0 && (
              <line x1={PX + 8} y1={rowY} x2={PR - 8} y2={rowY}
                stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            )}
            {/* Active dot */}
            <circle cx={PX + 16} cy={cy} r="4" fill={s.color} opacity="0.92"/>
            {/* Logo or emoji */}
            {s.logo
              ? <image href={s.logo} x={PX + 27} y={cy - 10} width={20} height={20}/>
              : <text x={PX + 27} y={cy + 6} fontSize="13">{s.emoji}</text>
            }
            {/* Label */}
            <text x={PX + 52} y={cy - 5} fontSize="10.5" fontWeight="700"
              fill="#ddd9f2" fontFamily="system-ui, sans-serif">
              {s.label}
            </text>
            {/* Detail */}
            <text x={PX + 52} y={cy + 10} fontSize="8" fill="rgba(148,143,178,0.68)"
              fontFamily="monospace">
              {s.detail}
            </text>
          </g>
        )
      })}

      {/* ── Schedule pill ── */}
      <rect x={SX} y={SY} width={SW} height={SH} rx={10}
        fill="#16161f" stroke="rgba(234,75,113,0.22)" strokeWidth="1.2"/>
      <text x={SX + SW / 2} y={CY - 5} textAnchor="middle" fontSize="14">⏰</text>
      <text x={SX + SW / 2} y={CY + 9} textAnchor="middle" fontSize="9.5" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">
        Schedule
      </text>
      <text x={SX + SW / 2} y={CY + 21} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">
        8h · lun-ven
      </text>

      {/* ── Sheets node ── */}
      <rect x={SHX} y={SHY} width={SHW} height={SHH} rx={10}
        fill="#16161f" stroke="rgba(52,211,153,0.28)" strokeWidth="1.2"/>
      <image href={SHEETS_LOGO} x={SHCX - 13} y={CY - 28} width={26} height={26}/>
      <text x={SHCX} y={CY + 10} textAnchor="middle" fontSize="10" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">
        Google Sheets
      </text>
      <text x={SHCX} y={CY + 24} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">
        source of truth
      </text>

      {/* ── Dashboard node ── */}
      <rect x={DX} y={DY} width={DW} height={DH} rx={10}
        fill="#16161f" stroke="rgba(167,139,250,0.28)" strokeWidth="1.2"/>
      <image href={REACT_LOGO} x={DCX - 13} y={CY - 28} width={26} height={26}/>
      <text x={DCX} y={CY + 10} textAnchor="middle" fontSize="10" fontWeight="700"
        fill="#ddd9f2" fontFamily="system-ui, sans-serif">
        Dashboard
      </text>
      <text x={DCX} y={CY + 24} textAnchor="middle" fontSize="7.5"
        fill="rgba(148,143,178,0.55)" fontFamily="monospace">
        GitHub Pages
      </text>

      {/* Webhook label below the curve */}
      <text x={(DCX + PX + PW / 2) / 2} y={H + 40} textAnchor="middle"
        fontSize="7.5" fill="rgba(167,139,250,0.4)" fontFamily="monospace">
        ← webhook · update statut kanban
      </text>
    </svg>
  )
}

/* ─── Wrapper card (always dark) ─────────────────────────── */
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
          color: 'rgba(167,139,250,0.7)', fontWeight: 700, fontFamily: 'monospace',
        }}>
          Architecture du workflow
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

/* ─── Main export ─────────────────────────────────────────── */
export default function DiagramJobHunter() {
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
        <DiagramCard uid="inline" onExpand={() => setExpanded(true)}/>
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
                color: 'rgba(167,139,250,0.7)', fontWeight: 700, fontFamily: 'monospace',
              }}>
                Architecture du workflow — Job Hunter
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
            <WorkflowSVG uid="modal"/>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
