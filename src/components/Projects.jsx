import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import ProjectDrawer from './ProjectDrawer'

const COLORS = {
  blue: { text: '#2563eb', bg: 'rgba(37,99,235,0.06)', border: 'rgba(37,99,235,0.15)' },
  lilas: { text: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
  green: { text: '#059669', bg: 'rgba(5,150,105,0.06)', border: 'rgba(5,150,105,0.15)' },
  amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.15)' },
}

const SIDEBAR = 220
const MAX_CONTENT = 900

const MARQUEE_TOOLS = [
  { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'SQL', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/DBeaver_logo.svg' },
  { name: 'n8n', img: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
  { name: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Microsoft_Office_Excel_%282025%E2%80%93present%29.svg' },
  { name: 'Spark', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
  { name: 'PyTorch', img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
  { name: 'OpenCV', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/OpenCV_logo_black.svg' },
  { name: 'Claude', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg' },
  { name: 'Docker', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
]

function getColors(proj) {
  if (proj.companyColor) {
    return {
      text: proj.companyColor,
      bg: proj.companyColor + '18',
      border: proj.companyColor + '40',
    }
  }
  return COLORS[proj.color] || COLORS.lilas
}

function ToolTag({ name, onPyEnter, onPyLeave }) {
  const { content } = useLanguage()
  const logo = content.toolLogos?.[name]
  const isPython = name === 'Python'
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 4, background: 'var(--cream2)', border: '1px solid var(--border)', fontSize: 10, color: 'var(--low)', fontWeight: 500, whiteSpace: 'nowrap' }}
      onMouseEnter={isPython ? onPyEnter : undefined}
      onMouseLeave={isPython ? onPyLeave : undefined}
    >
      {logo && <img src={logo} alt={name} style={{ width: 16, height: 16, objectFit: 'contain', flexShrink: 0 }}
        onError={e => {
          e.target.style.display = 'none'
          const fb = e.target.nextSibling
          if (fb && fb.classList?.contains('logo-fb')) fb.style.display = 'inline'
        }} />}
      {logo && <span className="logo-fb" style={{ display: 'none', fontSize: 9, fontWeight: 700, color: 'var(--lilas)', background: 'var(--lilas-d)', borderRadius: 3, padding: '1px 3px', flexShrink: 0 }}>{name.slice(0,2).toUpperCase()}</span>}
      {name}
      {isPython && content.pythonLibs?.length > 0 && (
        <span style={{ fontSize: 9, color: 'var(--lilas)', fontWeight: 700, marginLeft: 2 }}>
          +{content.pythonLibs.length}
        </span>
      )}
    </span>
  )
}

function PythonTooltip({ pos }) {
  const { content, lang } = useLanguage()
  if (!pos) return null
  const TOOLTIP_W = 240
  const TOOLTIP_H = 200
  const MARGIN = 12
  // clamp so tooltip doesn't go off screen bottom
  const clampedTop = Math.min(pos.top, window.innerHeight - TOOLTIP_H - MARGIN)
  // clamp so tooltip doesn't go off screen right
  const clampedLeft = Math.min(pos.left, window.innerWidth - TOOLTIP_W - MARGIN)
  return (
    <div style={{
      position: 'fixed',
      top: clampedTop,
      left: clampedLeft,
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: '12px 14px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      zIndex: 9999,
      width: TOOLTIP_W,
      pointerEvents: 'none',
    }}>
      <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--low)', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>
        {lang === 'en' ? 'Libraries & Frameworks' : 'Librairies & Frameworks'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {(content.pythonLibs || []).map((lib, idx) => (
          <span key={idx} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '3px 8px',
            background: 'rgba(37,99,235,0.06)',
            border: '1px solid rgba(37,99,235,0.15)',
            borderRadius: 4,
            fontSize: 10, fontWeight: 500, color: 'var(--mid)',
          }}>
            {lib.img && (
              <img src={lib.img} alt={lib.name} loading="lazy" style={{ width: 11, height: 11, objectFit: 'contain' }} onError={e => { e.target.style.display = 'none' }} />
            )}
            {lib.name}
          </span>
        ))}
      </div>
    </div>
  )
}

function ToolsMarquee() {
  const doubled = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS]
  return (
    <div style={{
      overflow: 'hidden',
      marginBottom: 28, marginTop: 20,
      padding: '14px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--cream2)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}>
      <div
        className="marquee-track"
        style={{ display: 'flex', gap: 48, width: 'max-content' }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((tool, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, flexShrink: 0 }}>
            <img
              src={tool.img}
              alt={tool.name}
              loading="lazy"
              style={{ width: 22, height: 22, objectFit: 'contain', opacity: 0.7, flexShrink: 0 }}
              onError={e => { e.target.style.display = 'none' }}
            />
            <span style={{ fontSize: 12, color: 'var(--mid)', fontWeight: 500, whiteSpace: 'nowrap', letterSpacing: 0.1 }}>{tool.name}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--border)', flexShrink: 0, marginLeft: 6 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ isMobile }) {
  const { content, lang } = useLanguage()
  const mainWidth = isMobile ? window.innerWidth : window.innerWidth - SIDEBAR
  const hPad = isMobile ? 16 : Math.max(40, (mainWidth - MAX_CONTENT) / 2)
  const [tab, setTab] = useState('pro')
  const [selected, setSelected] = useState(null)
  const [pyTooltip, setPyTooltip] = useState(null)
  const projects = content.projects[tab]

  // Préchargement de tous les logos dès le mount
  useEffect(() => {
    const urls = new Set()
    // Logos des outils
    Object.values(content.toolLogos || {}).forEach(u => u && urls.add(u))
    // Logos des sociétés dans les projets
    ;[...( content.projects.pro || []), ...(content.projects.perso || [])].forEach(p => {
      if (p.companyLogo) urls.add(p.companyLogo)
    })
    urls.forEach(url => { const img = new window.Image(); img.src = url })
  }, [])

  useEffect(() => {
    setTimeout(() => { const el = document.getElementById('proj-eyebrow'); if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } }, 100)
    setTimeout(() => { const el = document.getElementById('proj-title'); if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } }, 250)
  }, [])

  useEffect(() => {
    content.projects[tab].forEach((_, i) => {
      const card = document.getElementById('proj-card-' + i)
      if (card) { card.style.opacity = '0'; card.style.transform = 'translateY(16px)' }
    })
    setTimeout(() => {
      content.projects[tab].forEach((_, i) => {
        setTimeout(() => { const card = document.getElementById('proj-card-' + i); if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)' } }, i * 100)
      })
    }, 50)
  }, [tab])

  return (
    <>
      <div style={{
        height: '100vh', overflowY: 'auto', overflowX: 'hidden',
        paddingTop: isMobile ? 4 : 48,
        paddingBottom: isMobile ? 135 : 80,
        paddingLeft: hPad,
        paddingRight: hPad,
      }}>
        <div style={{ maxWidth: MAX_CONTENT, width: '100%' }}>

          <div id="proj-eyebrow" style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.5s, transform 0.5s' }}>
            <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
            {content.ui.projectsTitle}
          </div>

          <h2 id="proj-title" style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 24, opacity: 0, transform: 'translateY(14px)', transition: 'opacity 0.6s, transform 0.6s' }}>
            <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>{content.ui.projectsTitle}</em>
          </h2>

          <div style={{ display: 'flex', gap: 0, marginBottom: isMobile ? 20 : 28, borderBottom: '1px solid var(--border)', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 0 }}>
              {[{ key: 'pro', label: content.ui.proProjects }, { key: 'perso', label: content.ui.persoProjects }].map(t => {
                const count = content.projects[t.key]?.length || 0
                const active = tab === t.key
                return (
                  <button key={t.key} onClick={() => setTab(t.key)} style={{
                    padding: '10px 20px',
                    background: 'transparent',
                    border: 'none',
                    fontSize: 13,
                    fontWeight: active ? 700 : 400,
                    color: active ? 'var(--ink)' : 'var(--mid)',
                    borderBottom: active ? '2px solid var(--lilas)' : '2px solid transparent',
                    cursor: 'pointer',
                    marginBottom: '-1px',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                  }}>
                    {t.label}
                    <span style={{
                      fontSize: 10,
                      fontWeight: 600,
                      background: active ? 'var(--lilas)' : 'var(--cream2)',
                      color: active ? '#fff' : 'var(--low)',
                      borderRadius: 99,
                      padding: '1px 6px',
                      transition: 'all 0.2s',
                      minWidth: 18,
                      textAlign: 'center',
                    }}>{count}</span>
                  </button>
                )
              })}
            </div>
            <span style={{ fontSize: 11, color: 'var(--low)', paddingRight: 4, opacity: 0.6, letterSpacing: 0.3 }}>{lang === 'en' ? '⇄ switch' : '⇄ basculer'}</span>
          </div>

          {!isMobile && <ToolsMarquee />}

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: 14, paddingBottom: 20, alignItems: 'stretch' }}>
            {projects.map((proj, i) => {
              const c = getColors(proj)
              return (
                <div key={i} id={'proj-card-' + i} onClick={() => setSelected(proj)}
                  style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.4s, transform 0.4s, border-color 0.25s, box-shadow 0.25s', cursor: 'pointer', display: 'flex', flexDirection: 'column', position: 'relative' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = c.border
                    e.currentTarget.style.boxShadow = '0 8px 32px ' + c.text + '22'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.querySelector('.card-cta').style.opacity = '1'
                    e.currentTarget.querySelector('.card-cta').style.color = c.text
                    e.currentTarget.querySelector('.accent-bar').style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.querySelector('.card-cta').style.opacity = '0.45'
                    e.currentTarget.querySelector('.card-cta').style.color = 'var(--low)'
                    e.currentTarget.querySelector('.accent-bar').style.opacity = '0.5'
                  }}
                  onPointerDown={e => { e.currentTarget.style.transform = 'translateY(-1px) scale(0.99)' }}
                  onPointerUp={e => { e.currentTarget.style.transform = isMobile ? 'translateY(0)' : 'translateY(-4px)' }}
                >
                  {/* Barre accent colorée en haut */}
                  <div className="accent-bar" style={{ height: 3, background: `linear-gradient(90deg, ${c.text}, ${c.text}88)`, opacity: 0.5, transition: 'opacity 0.25s', flexShrink: 0 }} />

                  <div style={{ padding: 20, paddingBottom: 16, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 100, fontSize: 11, fontWeight: 600, marginBottom: 12, color: c.text, background: c.bg, border: '1px solid ' + c.border, alignSelf: 'flex-start' }}>
                      {proj.companyLogo && (
                        <img
                          src={proj.companyLogo}
                          alt=""
                          loading="lazy"
                          style={{ width: 24, height: 24, objectFit: 'contain', flexShrink: 0 }}
                          onError={e => { e.target.style.display = 'none' }}
                        />
                      )}
                      {proj.category}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{proj.title}</div>
                    <p style={{ fontSize: 13, color: 'var(--low)', lineHeight: 1.75, marginBottom: 14, whiteSpace: 'pre-line' }}>{proj.description}</p>

                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto', marginBottom: 14 }}>
                      {proj.tags.map((tag, j) => (
                        <ToolTag
                          key={j}
                          name={tag}
                          onPyEnter={e => {
                            const rect = e.currentTarget.getBoundingClientRect()
                            setPyTooltip({ top: rect.top, left: rect.right + 8 })
                          }}
                          onPyLeave={() => setPyTooltip(null)}
                        />
                      ))}
                    </div>

                    {/* CTA bas de card */}
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span className="card-cta" style={{ fontSize: 12, fontWeight: 600, color: 'var(--low)', opacity: 0.45, transition: 'opacity 0.2s, color 0.2s', display: 'flex', alignItems: 'center', gap: 5 }}>
                        {lang === 'en' ? 'See project' : 'Voir le projet'}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {proj.demo && (
                        <span style={{ fontSize: 10, color: 'var(--low)', opacity: 0.4, letterSpacing: 0.3 }}>
                          {proj.github ? 'GitHub + Demo' : 'Demo'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {selected && <ProjectDrawer project={selected} onClose={() => setSelected(null)} isMobile={isMobile} />
        }
      </div>
    </div>
    <PythonTooltip pos={pyTooltip} />
  </>
  )
}
