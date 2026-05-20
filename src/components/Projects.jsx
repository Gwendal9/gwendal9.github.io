import { useEffect, useState } from 'react'
import { content } from '../data/content'
import ProjectDrawer from './ProjectDrawer'

const COLORS = {
  blue: { text: '#2563eb', bg: 'rgba(37,99,235,0.06)', border: 'rgba(37,99,235,0.15)' },
  lilas: { text: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
  green: { text: '#059669', bg: 'rgba(5,150,105,0.06)', border: 'rgba(5,150,105,0.15)' },
  amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.15)' },
}

const isMobile = window.innerWidth <= 768

const MARQUEE_TOOLS = [
  { name: 'Power BI', img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'GCP', img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
  { name: 'SQL', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'n8n', img: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
  { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Git', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { name: 'Excel', img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg' },
  { name: 'Docker', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Spark', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' },
]

function ToolTag({ name }) {
  const logo = content.toolLogos?.[name]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 8px', borderRadius: 4,
      background: 'var(--cream2)', border: '1px solid var(--border)',
      fontSize: 10, color: 'var(--low)', fontWeight: 500,
    }}>
      {logo && (
        <img src={logo} alt={name} style={{ width: 12, height: 12, objectFit: 'contain' }} />
      )}
      {name}
    </span>
  )
}

function ToolsMarquee() {
  const doubled = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS, ...MARQUEE_TOOLS]
  return (
    <div style={{
      overflow: 'hidden',
      marginBottom: 24,
      marginTop: 16,
      padding: '10px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--cream2)',
    }}>
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: 40,
          width: 'max-content',
        }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((tool, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
          }}>
            <img src={tool.img} alt={tool.name} style={{ width: 18, height: 18, objectFit: 'contain', opacity: 0.65 }} />
            <span style={{ fontSize: 11, color: 'var(--low)', fontWeight: 500, whiteSpace: 'nowrap' }}>
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [tab, setTab] = useState('pro')
  const [selected, setSelected] = useState(null)
  const projects = content.projects[tab]

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById('proj-eyebrow')
      if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, 100)
    setTimeout(() => {
      const el = document.getElementById('proj-title')
      if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, 250)
  }, [])

  useEffect(() => {
    content.projects[tab].forEach((_, i) => {
      const card = document.getElementById('proj-card-' + i)
      if (card) { card.style.opacity = '0'; card.style.transform = 'translateY(16px)' }
    })
    setTimeout(() => {
      content.projects[tab].forEach((_, i) => {
        setTimeout(() => {
          const card = document.getElementById('proj-card-' + i)
          if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)' }
        }, i * 100)
      })
    }, 50)
  }, [tab])

  return (
    <div style={{
      height: '100vh', overflowY: 'auto', overflowX: 'hidden',
      padding: isMobile ? '4px 16px 135px' : '48px 72px 0',
      boxSizing: 'border-box',
      maxWidth: 900,
      margin: '0 auto',
      width: '100%',
    }}>

      {/* Eyebrow */}
      <div id="proj-eyebrow" style={{
        fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: 0, transform: 'translateY(10px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
        Realisations
      </div>

      {/* Titre */}
      <h2 id="proj-title" style={{
        fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
        color: 'var(--ink)', lineHeight: 1.1, marginBottom: 24,
        opacity: 0, transform: 'translateY(14px)',
        transition: 'opacity 0.6s, transform 0.6s',
      }}>
        Mes{' '}
        <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
          projets
        </em>
      </h2>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 0,
        borderBottom: '1px solid var(--border)',
      }}>
        {[{ key: 'pro', label: 'Projets pro' }, { key: 'perso', label: 'Projets perso' }].map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: '8px 20px', background: 'transparent', border: 'none',
              fontSize: 13,
              fontWeight: tab === t.key ? 700 : 500,
              color: tab === t.key ? 'var(--lilas)' : 'var(--low)',
              borderBottom: tab === t.key ? '2px solid var(--lilas)' : '2px solid transparent',
              cursor: 'pointer', marginBottom: '-1px',
              transition: 'all 0.2s',
              fontFamily: 'inherit',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Marquee */}
      {!isMobile && <ToolsMarquee />}

      {/* Grille */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: 14,
        padding: isMobile ? '0' : '0 0 80px',
      }}>
        {projects.map((proj, i) => {
          const c = COLORS[proj.color] || COLORS.lilas
          return (
            <div
              key={i}
              id={'proj-card-' + i}
              onClick={() => setSelected(proj)}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 12, padding: 20,
                opacity: 0, transform: 'translateY(16px)',
                transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.border
                e.currentTarget.style.boxShadow = '0 4px 24px ' + c.bg
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 100,
                fontSize: 11, fontWeight: 600, marginBottom: 12,
                color: c.text, background: c.bg, border: '1px solid ' + c.border,
              }}>
                {proj.category}
              </div>

              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                {proj.title}
              </div>

              <p style={{ fontSize: 13, color: 'var(--low)', lineHeight: 1.75, marginBottom: 14 }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {proj.tags.map((tag, j) => (
                  <ToolTag key={j} name={tag} />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {selected && (
        <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
