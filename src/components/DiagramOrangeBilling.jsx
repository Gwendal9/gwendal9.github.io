import { useState, useRef, useCallback, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { createPortal } from 'react-dom'

const EXCEL = 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg'
const PBI   = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg'

// ─────────────────────────────────────────────────────────────
// viewBox="0 0 1000 200" — FY≈100
//
// AVANT  : Sources disparates → Excel central (manuel) → Reporting instable
// APRÈS  : Sources structurées → Power Query + DAX      → Power BI dashboard
//
// Slider : LEFT = AVANT, RIGHT = APRÈS
//   clip APRÈS : inset(0 0 0 ${100-pos}%)
//   pos=0 → full AVANT  |  pos=100 → full APRÈS
// ─────────────────────────────────────────────────────────────

// ── AVANT ────────────────────────────────────────────────────
function AvantSVG() {
  const { lang } = useLanguage()
  return (
    <svg viewBox="0 0 1000 200" width="100%" style={{ display: 'block' }}>
      <rect x="0" y="0" width="1000" height="200" fill="#fefcf7"/>

      {/* Labels */}
      <text x="20"  y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="#d97706" fontFamily="monospace" opacity="0.75">FICHIERS REÇUS</text>
      <text x="280" y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="#d97706" fontFamily="monospace" opacity="0.75">CONSOLIDATION MANUELLE</text>
      <text x="650" y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="#9ca3af" fontFamily="monospace" opacity="0.9">PAS DE REPORTING</text>

      {/* ── 3 fichiers Excel épars (pas de container) ── */}

      {/* F1 */}
      <rect x="10" y="28" width="200" height="36" rx="8"
        fill="#fffbf0" stroke="#fcd34d" strokeWidth="1" strokeDasharray="4 3"/>
      <image href={EXCEL} x="18" y="34" width="20" height="20"/>
      <text x="44" y="44" fontSize="9.5" fontWeight="600" fill="#78450a" fontFamily="monospace">{lang === 'en' ? 'Supplier 1' : 'Fournisseur 1'}</text>
      <text x="44" y="57" fontSize="8" fill="#b45309" fontFamily="monospace" opacity="0.8">Format propre à chacun</text>

      {/* F2 — légèrement décalé pour suggérer le désordre */}
      <rect x="14" y="76" width="200" height="36" rx="8"
        fill="#fffbf0" stroke="#fcd34d" strokeWidth="1" strokeDasharray="4 3"/>
      <image href={EXCEL} x="22" y="82" width="20" height="20"/>
      <text x="48" y="92" fontSize="9.5" fontWeight="600" fill="#78450a" fontFamily="monospace">{lang === 'en' ? 'Supplier 2' : 'Fournisseur 2'}</text>
      <text x="48" y="105" fontSize="8" fill="#b45309" fontFamily="monospace" opacity="0.8">Colonnes différentes</text>

      {/* F3 */}
      <rect x="8" y="124" width="200" height="36" rx="8"
        fill="#fffbf0" stroke="#fcd34d" strokeWidth="1" strokeDasharray="4 3"/>
      <image href={EXCEL} x="16" y="130" width="20" height="20"/>
      <text x="42" y="140" fontSize="9.5" fontWeight="600" fill="#78450a" fontFamily="monospace">{lang === 'en' ? 'Supplier 3' : 'Fournisseur 3'}</text>
      <text x="42" y="153" fontSize="8" fill="#b45309" fontFamily="monospace" opacity="0.8">Nommage incohérent</text>

      {/* Fichiers internes — badge simple */}
      <rect x="10" y="170" width="200" height="22" rx="5"
        fill="#fef3c7" stroke="#fde68a" strokeWidth="0.8"/>
      <text x="110" y="184" textAnchor="middle" fontSize="7.5" fill="#92400e" fontFamily="monospace">+ Cibles · Référentiels (internes)</text>

      {/* Flèches des 3 sources → Excel central, avec label "copier-coller" */}
      <path d="M210,46 C248,46 260,100 272,100" fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 4"/>
      <path d="M214,94  C248,94  260,100 272,100" fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 4"/>
      <path d="M208,142 C248,142 260,100 272,100" fill="none" stroke="#d97706" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 4"/>
      <circle cx="272" cy="100" r="2.5" fill="#d97706" opacity="0.4"/>
      {/* Label "copier-coller" sur la flèche du milieu */}
      <text x="240" y="89" fontSize="7" fill="#d97706" fontFamily="monospace" opacity="0.65" fontStyle="italic">copier-coller</text>

      {/* ── Excel Contrôle central ── */}
      <rect x="272" y="30" width="330" height="140" rx="10"
        fill="#fffbf0" stroke="#d97706" strokeWidth="1.5"/>
      <image href={EXCEL} x="288" y="48" width="54" height="54"/>
      <text x="354" y="65" fontSize="12" fontWeight="700" fill="#92400e" fontFamily="monospace">{lang === 'en' ? 'Control spreadsheet' : 'Tableur de contrôle'}</text>
      <text x="354" y="82" fontSize="8.5" fill="#b45309" fontFamily="monospace">{lang === 'en' ? 'Manually maintained' : 'Maintenu à la main'}</text>
      <text x="354" y="97" fontSize="8" fill="#a07030" fontFamily="monospace">{lang === 'en' ? 'Tabs · fragile formulas · outdated' : 'Onglets · formules fragiles · périmé'}</text>
      <line x1="288" y1="112" x2="588" y2="112" stroke="#fde68a" strokeWidth="0.8"/>
      {/* Badge "à la main" */}
      <rect x="288" y="118" width="130" height="40" rx="7" fill="#fef3c7" stroke="#fde68a" strokeWidth="1"/>
      <text x="353" y="133" textAnchor="middle" fontSize="13">✍️</text>
      <text x="353" y="150" textAnchor="middle" fontSize="8" fontWeight="700" fill="#92400e" fontFamily="monospace">{lang === 'en' ? 'manual' : 'à la main'}</text>
      {/* Badge "40M€ risque" */}
      <rect x="430" y="118" width="158" height="40" rx="7" fill="#fef3c7" stroke="#fde68a" strokeWidth="1"/>
      <text x="509" y="133" textAnchor="middle" fontSize="13">⚠️</text>
      <text x="509" y="150" textAnchor="middle" fontSize="8" fontWeight="700" fill="#92400e" fontFamily="monospace">40M€ · risque d'erreur</text>

      {/* ── Pas de reporting — zone droite vide / barrée ── */}
      {/* Rectangle grisé en pointillés */}
      <rect x="634" y="40" width="340" height="120" rx="10"
        fill="#f9fafb" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="6 4"/>
      {/* Croix barrée */}
      <line x1="654" y1="60" x2="954" y2="140" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="954" y1="60" x2="654" y2="140" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Texte */}
      <text x="804" y="95" textAnchor="middle" fontSize="11" fontWeight="700" fill="#9ca3af" fontFamily="monospace">{lang === 'en' ? 'No reporting' : 'Pas de reporting'}</text>
      <text x="804" y="112" textAnchor="middle" fontSize="8" fill="#9ca3af" fontFamily="monospace">{lang === 'en' ? 'Ad hoc control · time-consuming' : 'Contrôle ad hoc · chronophage'}</text>
      {/* Petite flèche entrante */}
      <line x1="602" y1="100" x2="632" y2="100" stroke="#d1d5db" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="4 4"/>
      <circle cx="602" cy="100" r="2.5" fill="#d1d5db" opacity="0.5"/>
    </svg>
  )
}

// ── APRÈS ─────────────────────────────────────────────────────
function ApresSVG() {
  const { lang } = useLanguage()
  return (
    <svg viewBox="0 0 1000 200" width="100%" style={{ display: 'block' }}>
      <rect x="0" y="0" width="1000" height="200" fill="white"/>

      {/* Labels */}
      <text x="20"  y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="var(--lilas,#818cf8)" fontFamily="monospace" opacity="0.7">SOURCES</text>
      <text x="266" y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="var(--lilas,#818cf8)" fontFamily="monospace" opacity="0.7">TRANSFORMATION</text>
      <text x="600" y="14" fontSize="7.5" fontWeight="700" letterSpacing="2" fill="#059669" fontFamily="monospace" opacity="0.7">DASHBOARD</text>

      {/* ── Sources structurées (mêmes positions que AVANT) ── */}
      <rect x="8" y="20" width="242" height="168" rx="10"
        fill="white" stroke="#059669" strokeWidth="1.2"/>
      <text x="129" y="34" textAnchor="middle" fontSize="8" fontWeight="700"
        fill="#065f46" fontFamily="monospace">{lang === 'en' ? 'Structured sources' : 'Sources structurées'}</text>

      <rect x="18" y="42" width="222" height="30" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      <image href={EXCEL} x="24" y="47" width="16" height="16"/>
      <text x="46" y="61" fontSize="9" fill="#065f46" fontFamily="monospace">{lang === 'en' ? 'Supplier 1 · Excel' : 'Fournisseur 1 · Excel'}</text>

      <rect x="18" y="80" width="222" height="30" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      <image href={EXCEL} x="24" y="85" width="16" height="16"/>
      <text x="46" y="99" fontSize="9" fill="#065f46" fontFamily="monospace">{lang === 'en' ? 'Supplier 2 · Excel' : 'Fournisseur 2 · Excel'}</text>

      <rect x="18" y="118" width="222" height="30" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1"/>
      <image href={EXCEL} x="24" y="123" width="16" height="16"/>
      <text x="46" y="137" fontSize="9" fill="#065f46" fontFamily="monospace">{lang === 'en' ? 'Supplier 3 · Excel' : 'Fournisseur 3 · Excel'}</text>

      <rect x="18" y="157" width="222" height="22" rx="5" fill="#dcfce7" stroke="#86efac" strokeWidth="0.8"/>
      <text x="129" y="171" textAnchor="middle" fontSize="8" fill="#065f46" fontFamily="monospace">+ Cibles · Référentiels</text>

      {/* Arrow sources → Power Query */}
      <line x1="250" y1="104" x2="258" y2="100"
        stroke="var(--lilas,#818cf8)" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="6 4"/>
      <circle cx="250" cy="104" r="2.5" fill="var(--lilas,#818cf8)" opacity="0.5"/>
      <circle cx="258" cy="100" r="2.5" fill="var(--lilas,#818cf8)" opacity="0.5"/>

      {/* ── Power Query + DAX ── */}
      <rect x="258" y="50" width="254" height="100" rx="10"
        fill="white" stroke="var(--border,#e5e7eb)" strokeWidth="1.5"/>
      <image href={EXCEL} x="270" y="62" width="44" height="44"/>
      <text x="324" y="76" fontSize="11.5" fontWeight="700" fill="var(--ink,#111)" fontFamily="monospace">Power Query</text>
      <text x="324" y="92" fontSize="8.5" fill="var(--lilas,#818cf8)" fontFamily="monospace">{lang === 'en' ? 'Auto transformation' : 'Transformation auto'}</text>
      <line x1="270" y1="114" x2="498" y2="114" stroke="var(--border,#e5e7eb)" strokeWidth="0.8"/>
      <rect x="270" y="121" width="42" height="20" rx="6" fill="#ede9fe" stroke="#ddd6fe" strokeWidth="1"/>
      <text x="291" y="134" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="var(--lilas,#818cf8)" fontFamily="monospace">DAX</text>
      <text x="320" y="134" fontSize="8" fill="var(--low,#9ca3af)" fontFamily="monospace">{lang === 'en' ? 'Data model' : 'Modèle de données'}</text>

      {/* Arrow PQ → PBI */}
      <line x1="512" y1="100" x2="554" y2="100"
        stroke="#059669" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="6 4"/>
      <circle cx="512" cy="100" r="2.5" fill="#059669" opacity="0.5"/>
      <circle cx="554" cy="100" r="2.5" fill="#059669" opacity="0.5"/>

      {/* ── Power BI ── */}
      <rect x="554" y="28" width="274" height="144" rx="10"
        fill="white" stroke="var(--border,#e5e7eb)" strokeWidth="1.5"/>
      <image href={PBI} x="566" y="42" width="54" height="54"/>
      <text x="632" y="61" fontSize="12" fontWeight="700" fill="var(--ink,#111)" fontFamily="monospace">Power BI</text>
      <text x="632" y="77" fontSize="8.5" fill="#059669" fontFamily="monospace">{lang === 'en' ? 'Real-time dashboard' : 'Dashboard temps réel'}</text>
      <text x="632" y="92" fontSize="7.5" fill="var(--low,#9ca3af)" fontFamily="monospace">{lang === 'en' ? 'Refurbishments · billing' : 'Reconditionnements · facturation'}</text>
      <line x1="566" y1="108" x2="814" y2="108" stroke="var(--border,#e5e7eb)" strokeWidth="0.8"/>
      <rect x="566" y="115" width="234" height="44" rx="6" fill="#f0fdf4"/>
      <text x="683" y="131" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#059669" fontFamily="monospace">✓ 40M€ · Pipeline reproductible</text>
      <text x="683" y="148" textAnchor="middle" fontSize="7.5" fill="#059669" fontFamily="monospace">{lang === 'en' ? 'Industrialized · stable · real-time' : 'Industrialisé · stable · temps réel'}</text>

      {/* Arrow PBI → Équipe */}
      <line x1="828" y1="100" x2="866" y2="100"
        stroke="#059669" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="6 4"/>
      <circle cx="828" cy="100" r="2.5" fill="#059669" opacity="0.5"/>
      <circle cx="866" cy="100" r="2.5" fill="#059669" opacity="0.5"/>

      {/* ── Équipe contrôle ── */}
      <rect x="866" y="58" width="126" height="84" rx="10"
        fill="white" stroke="var(--border,#e5e7eb)" strokeWidth="1"/>
      <circle cx="929" cy="86" r="16" fill="none" stroke="var(--border,#e5e7eb)" strokeWidth="1.5"/>
      <circle cx="929" cy="80" r="6" fill="var(--lilas,#818cf8)" opacity="0.7"/>
      <path d="M914,98 Q914,91 929,91 Q944,91 944,98" fill="var(--lilas,#818cf8)" opacity="0.7"/>
      <text x="929" y="117" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="var(--ink,#111)" fontFamily="monospace">Équipe</text>
      <text x="929" y="130" textAnchor="middle" fontSize="8" fill="var(--low,#9ca3af)" fontFamily="monospace">{lang === 'en' ? 'Billing ctrl.' : 'Contrôle fact.'}</text>
    </svg>
  )
}

// ── Slider ────────────────────────────────────────────────────
function SliderDiagram({ onExpand }) {
  const { lang } = useLanguage()
  const [pos, setPos] = useState(50) // 0 = full AVANT, 100 = full APRÈS
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updatePos = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPos(Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100)))
  }, [])

  // Drag sur document entier → pas de perte du handle en sortant
  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      updatePos(e.clientX ?? e.touches?.[0]?.clientX)
    }
    const onUp = () => { dragging.current = false }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('touchmove', onMove, { passive: true })
    document.addEventListener('touchend', onUp)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('touchmove', onMove)
      document.removeEventListener('touchend', onUp)
    }
  }, [updatePos])

  return (
    <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, marginBottom: 28, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '14px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>
          {lang === 'en' ? 'Architecture · Before / After' : 'Architecture · Avant / Après'}
        </span>
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

      {/* Zone slider plein-largeur */}
      <div
        ref={containerRef}
        style={{ position: 'relative', userSelect: 'none', cursor: 'ew-resize', overflow: 'hidden' }}
        onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX) }}
        onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX) }}
      >
        {/* AVANT (base, toujours visible) */}
        <AvantSVG />

        {/* APRÈS (clippé : visible à droite du slider)
            inset(top right bottom left)
            inset(0 0 0 X%) → cache les X% de gauche → montre la partie droite */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          clipPath: `inset(0 0 0 ${pos.toFixed(1)}%)`,
          pointerEvents: 'none',
        }}>
          <ApresSVG />
        </div>

        {/* Ligne séparatrice */}
        <div style={{
          position: 'absolute', top: 0, bottom: 0,
          left: `${pos}%`,
          width: 2,
          background: 'var(--lilas)',
          opacity: 0.6,
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }}/>

        {/* Handle */}
        <div
          onMouseDown={(e) => { e.stopPropagation(); dragging.current = true }}
          onTouchStart={(e) => { e.stopPropagation(); dragging.current = true }}
          style={{
            position: 'absolute',
            top: '50%',
            left: `${pos}%`,
            transform: 'translate(-50%, -50%)',
            width: 44, height: 44,
            borderRadius: '50%',
            background: 'var(--cream)',
            border: '2px solid var(--lilas)',
            cursor: 'ew-resize',
            zIndex: 10,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
          }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 5H15M1 5L4 2M1 5L4 8M15 5L12 2M15 5L12 8"
              stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Badge AVANT (coin bas-gauche) */}
        <div style={{
          position: 'absolute', bottom: 10, left: 12,
          fontSize: 8, fontWeight: 700, letterSpacing: 2, fontFamily: 'monospace',
          color: '#d97706', background: '#fef3c7',
          padding: '3px 8px', borderRadius: 4, border: '1px solid #fde68a',
          pointerEvents: 'none', zIndex: 5,
        }}>{lang === 'en' ? 'BEFORE' : 'AVANT'}</div>

        {/* Badge APRÈS (coin bas-droit) */}
        <div style={{
          position: 'absolute', bottom: 10, right: 12,
          fontSize: 8, fontWeight: 700, letterSpacing: 2, fontFamily: 'monospace',
          color: 'var(--lilas)', background: '#ede9fe',
          padding: '3px 8px', borderRadius: 4, border: '1px solid #ddd6fe',
          pointerEvents: 'none', zIndex: 5,
        }}>{lang === 'en' ? 'AFTER' : 'APRÈS'}</div>
      </div>
    </div>
  )
}

// ── Export ────────────────────────────────────────────────────
export default function DiagramOrangeBilling() {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <SliderDiagram onExpand={() => setExpanded(true)} />
      {expanded && createPortal(
        <div onClick={() => setExpanded(false)} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '4vw',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: 1300,
            background: 'var(--cream)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '24px 0 36px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.12)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, padding: '0 40px' }}>
              <span style={{ fontSize: 9, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, fontFamily: 'monospace' }}>
                Architecture — Contrôle Facturation Orange
              </span>
              <button onClick={() => setExpanded(false)} style={{
                all: 'unset', width: 28, height: 28, borderRadius: '50%',
                border: '1px solid var(--border)', background: 'var(--white)',
                cursor: 'pointer', color: 'var(--mid)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <SliderDiagram />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
