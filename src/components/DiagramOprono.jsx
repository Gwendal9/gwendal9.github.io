import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const RN   = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
const NODE = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
const PG   = 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
const AZ   = 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'
const AWS  = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'

// Détecte le dark mode de l'app via CSS variable
function useDark() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const check = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--cream').trim()
      setDark(v === '#111113')
    }
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] })
    return () => obs.disconnect()
  }, [])
  return dark
}

// ─────────────────────────────────────────────
// SVG — s'adapte light / dark
// ─────────────────────────────────────────────
function DiagramSVG({ uid, dark = false }) {
  const d   = `${uid}d`
  const CY  = '4.5s'
  const k   = (t) => (t / 4.5).toFixed(4)

  const track   = dark ? '#1f2937' : '#f1f5f9'
  const pillBg  = dark ? '#1f2937' : '#ffffff'
  const ink     = dark ? '#f9fafb' : '#111827'
  const low     = dark ? '#6b7280' : '#9ca3af'
  const nodeU   = dark ? '#1e1b2e' : '#eef2ff'
  const nodeFE  = dark ? '#1e1b2e' : '#f5f3ff'
  const nodeBE  = dark ? '#1a1428' : '#f5f0ff'
  const nodeDB  = dark ? '#0f1f18' : '#f0fdf4'
  const borU    = dark ? '#3730a3' : '#c7d2fe'
  const borFE   = dark ? '#4c1d95' : '#ddd6fe'
  const borBE   = dark ? '#5b21b6' : '#ddd6fe'
  const borDB   = dark ? '#065f46' : '#bbf7d0'
  const sep     = dark ? '#374151' : '#e5e7eb'
  const apiCard = dark ? '#1c1a10' : '#fffbeb'
  const apiBor  = dark ? '#92400e' : '#fde68a'
  const avatarC = dark ? '#818cf8' : '#818cf8'

  return (
    <svg viewBox="0 0 920 222" width="100%"
      style={{ display: 'block', overflow: 'visible', borderRadius: dark ? 12 : 0,
               background: dark ? '#111827' : 'transparent' }}>
      <defs>
        <style>{`@keyframes ${d}{to{stroke-dashoffset:-20}} .${d}{animation:${d} 1s linear infinite}`}</style>
        <marker id={`${uid}ar`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0,1 L7,4 L0,7 Z" fill={dark ? '#818cf8' : '#c7d2fe'}/>
        </marker>
        <marker id={`${uid}ay`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#fbbf24"/>
        </marker>
      </defs>

      {/* Piste */}
      <line x1="14" y1="84" x2="906" y2="84" stroke={track} strokeWidth="22" strokeLinecap="round"/>

      {/* Segments fléchés */}
      <line x1="110" y1="84" x2="220" y2="84" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="6 5" className={d} markerEnd={`url(#${uid}ar)`}/>
      <line x1="332" y1="84" x2="462" y2="84" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="6 5" className={d} markerEnd={`url(#${uid}ar)`}/>
      <line x1="574" y1="84" x2="714" y2="84" stroke="#a7f3d0" strokeWidth="1.5" strokeDasharray="6 5" className={d} markerEnd={`url(#${uid}ar)`}/>

      {/* Pills protocoles */}
      <rect x="137" y="63" width="44" height="15" rx="7.5" fill={pillBg} stroke="#c7d2fe" strokeWidth="1"/>
      <text x="159" y="74" textAnchor="middle" fontSize="7.5" fill="#818cf8" fontFamily="monospace" fontWeight="600">HTTP</text>
      <rect x="368" y="63" width="82" height="15" rx="7.5" fill={pillBg} stroke="#c4b5fd" strokeWidth="1"/>
      <text x="409" y="74" textAnchor="middle" fontSize="7.5" fill="#a78bfa" fontFamily="monospace" fontWeight="600">JWT · Prisma</text>
      <rect x="622" y="63" width="36" height="15" rx="7.5" fill={pillBg} stroke="#a7f3d0" strokeWidth="1"/>
      <text x="640" y="74" textAnchor="middle" fontSize="7.5" fill="#34d399" fontFamily="monospace" fontWeight="600">SQL</text>

      {/* Boule 1 — S1 : 0→1s */}
      <circle r="5.5" fill="#6C63C7">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;1;1;1" keyTimes={`0;${k(1)};${k(1)};1`} path="M110,84 L220,84"/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="1;1;0;0" keyTimes={`0;${k(1)};${k(1.02)};1`}/>
      </circle>
      {/* Boule 2 — S2 : 1.5→2.5s */}
      <circle r="5.5" fill="#7c3aed">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(1.5)};${k(2.5)};${k(2.5)};1`} path="M332,84 L462,84"/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;1;1;0;0" keyTimes={`0;${k(1.48)};${k(1.5)};${k(2.5)};${k(2.52)};1`}/>
      </circle>
      {/* Boule 3 — S3 : 3→4s */}
      <circle r="5.5" fill="#059669">
        <animateMotion dur={CY} repeatCount="indefinite" calcMode="linear"
          keyPoints="0;0;1;1;1" keyTimes={`0;${k(3)};${k(4)};${k(4)};1`} path="M574,84 L714,84"/>
        <animate attributeName="opacity" dur={CY} repeatCount="indefinite"
          values="0;0;1;1;0;0" keyTimes={`0;${k(2.98)};${k(3)};${k(4)};${k(4.02)};1`}/>
      </circle>

      {/* Nœud Utilisateur */}
      <rect x="14" y="32" width="96" height="104" rx="18" fill={nodeU} stroke={borU} strokeWidth="1.5"/>
      <circle cx="62" cy="68" r="28" fill={dark ? '#1e1b2e' : '#fff'} stroke={borU} strokeWidth="1"/>
      <circle cx="62" cy="60" r="11" fill={avatarC}/>
      <path d="M40,82 Q40,70 62,70 Q84,70 84,82" fill={avatarC}/>
      <text x="62" y="112" textAnchor="middle" fontSize="10" fontWeight="700" fill={ink}>Utilisateur</text>
      <text x="62" y="126" textAnchor="middle" fontSize="8" fill={low}>iOS · Android</text>

      {/* Nœud React Native */}
      <rect x="222" y="28" width="110" height="112" rx="16" fill={nodeFE} stroke={borFE} strokeWidth="1.5"/>
      <image href={RN} x="237" y="32" width="80" height="80"/>
      <text x="277" y="122" textAnchor="middle" fontSize="10" fontWeight="800" fill={ink}>React Native</text>
      <text x="277" y="136" textAnchor="middle" fontSize="8.5" fill={dark ? '#a78bfa' : '#7c3aed'}>Application mobile</text>

      {/* Nœud Node + Express */}
      <rect x="464" y="28" width="110" height="112" rx="16" fill={nodeBE} stroke={borBE} strokeWidth="1.5"/>
      <image href={NODE} x="472" y="34" width="96" height="62"/>
      <text x="519" y="108" textAnchor="middle" fontSize="10" fontWeight="800" fill={ink}>Node + Express</text>
      <text x="519" y="122" textAnchor="middle" fontSize="8.5" fill={dark ? '#a78bfa' : '#6d28d9'}>API & logique métier</text>
      <text x="519" y="134" textAnchor="middle" fontSize="8" fill={low}>Hébergé sur Azure</text>

      {/* Nœud PostgreSQL */}
      <rect x="716" y="28" width="110" height="112" rx="16" fill={nodeDB} stroke={borDB} strokeWidth="1.5"/>
      <image href={PG} x="731" y="32" width="80" height="80"/>
      <text x="771" y="122" textAnchor="middle" fontSize="10" fontWeight="800" fill={dark ? '#6ee7b7' : '#064e3b'}>PostgreSQL</text>
      <text x="771" y="136" textAnchor="middle" fontSize="8.5" fill={dark ? '#34d399' : '#059669'}>Base de données</text>

      {/* Séparateur sync nocturne */}
      <line x1="14" y1="172" x2="906" y2="172" stroke={sep} strokeWidth="1"/>
      <text x="18" y="168" fontSize="7.5" fill={low} fontFamily="monospace" letterSpacing="0.5">SYNC NOCTURNE</text>

      {/* Flèches API → Backend (symétriques autour de x=519, ±90px) */}
      <path d="M429,196 C429,170 519,162 519,142" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" markerEnd={`url(#${uid}ay)`}/>
      <path d="M609,196 C609,170 519,162 519,142" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 4" markerEnd={`url(#${uid}ay)`}/>
      <circle r="3" fill="#fbbf24">
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="0s" path="M429,196 C429,170 519,162 519,142"/>
      </circle>
      <circle r="3" fill="#fbbf24">
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.1s" path="M609,196 C609,170 519,162 519,142"/>
      </circle>

      {/* Card Soccer — cx=429 */}
      <rect x="359" y="178" width="140" height="36" rx="9" fill={apiCard} stroke={apiBor} strokeWidth="1.5"/>
      <text x="379" y="200" fontSize="15">⚽</text>
      <text x="399" y="194" fontSize="9.5" fontWeight="700" fill={ink}>Soccer API</text>
      <text x="399" y="207" fontSize="7.5" fill={low}>Résultats & stats</text>

      {/* Card Sportradar — cx=609 */}
      <rect x="539" y="178" width="140" height="36" rx="9" fill={apiCard} stroke={apiBor} strokeWidth="1.5"/>
      <text x="559" y="200" fontSize="15">🏆</text>
      <text x="579" y="194" fontSize="9.5" fontWeight="700" fill={ink}>Sportradar</text>
      <text x="579" y="207" fontSize="7.5" fill={low}>Données de match</text>
    </svg>
  )
}

// ─────────────────────────────────────────────
// WRAPPER
// ─────────────────────────────────────────────
function DiagramCard({ uid, onExpand, dark }) {
  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 16px 20px', marginBottom: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture</span>
        {onExpand && (
          <button onClick={onExpand} style={{ all: 'unset', fontSize: 11, color: 'var(--low)', cursor: 'pointer', fontFamily: 'monospace', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Agrandir
          </button>
        )}
      </div>
      <DiagramSVG uid={uid} dark={dark} />
    </div>
  )
}

export default function DiagramOprono() {
  const [expanded, setExpanded] = useState(false)
  const dark = useDark()

  useEffect(() => {
    if (!expanded) return
    const fn = e => { if (e.key === 'Escape') setExpanded(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [expanded])

  return (
    <>
      <DiagramCard uid="op-i" onExpand={() => setExpanded(true)} dark={dark} />
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vw' }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 1200, background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: 16, padding: '24px 36px 36px', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>Architecture — O'PRONO</span>
              <button onClick={() => setExpanded(false)} style={{ all: 'unset', width: 30, height: 30, borderRadius: '50%', border: '1px solid var(--border)', background: 'var(--white)', cursor: 'pointer', fontSize: 17, color: 'var(--mid)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'×'}</button>
            </div>
            <DiagramSVG uid="op-m" dark={dark} />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
