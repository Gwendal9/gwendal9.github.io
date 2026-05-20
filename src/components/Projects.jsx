import { useEffect, useState } from 'react'
import { content } from '../data/content'
import ProjectDrawer from './ProjectDrawer'

const COLORS = {
  blue:  { text: '#2563eb', bg: 'rgba(37,99,235,0.06)',  border: 'rgba(37,99,235,0.15)'  },
  lilas: { text: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
  green: { text: '#059669', bg: 'rgba(5,150,105,0.06)',  border: 'rgba(5,150,105,0.15)'  },
  amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)',  border: 'rgba(217,119,6,0.15)'  },
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
      height: '100vh', overflowY: 'auto',
      padding: 'clamp(40px, 6vw, 72px) clamp(32px, 6vw, 72px)',
      scrollbarWidth: 'none',
    }}>

      <div id="proj-eyebrow" style={{
        fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: 0, transform: 'translateY(10px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
        Realisations
      </div>

      <h2 id="proj-title" style={{
        fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
        color: 'var(--ink)', lineHeight: 1.1, marginBottom: 32,
        opacity: 0, transform: 'translateY(14px)',
        transition: 'opacity 0.6s, transform 0.6s',
      }}>
        Mes{' '}
        <em style={{
          fontFamily: 'Fraunces, serif', fontStyle: 'italic',
          fontWeight: 300, color: 'var(--lilas)',
        }}>
          projets
        </em>
      </h2>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 32,
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
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 14,
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
                borderRadius: 12, padding: 24,
                opacity: 0, transform: 'translateY(16px)',
                transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.border
                e.currentTarget.style.boxShadow = '0 4px 24px ' + c.bg
                e.currentTarget.style.transform = 'translateY(-2px)'
                const link = e.currentTarget.querySelector('.proj-link')
                if (link) link.style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
                const link = e.currentTarget.querySelector('.proj-link')
                if (link) link.style.opacity = '0'
              }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '4px 10px', borderRadius: 100,
                fontSize: 11, fontWeight: 600, marginBottom: 14,
                color: c.text, background: c.bg, border: '1px solid ' + c.border,
              }}>
                {proj.category}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                {proj.title}
              </div>
              <p style={{ fontSize: 13, color: 'var(--low)', lineHeight: 1.75, marginBottom: 18 }}>
                {proj.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {proj.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 10, color: 'var(--low)' }}>
                      {tag}{j < proj.tags.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
                <span className="proj-link" style={{
                  fontSize: 12, color: c.text, fontWeight: 600,
                  opacity: 0, transition: 'opacity 0.2s',
                }}>
                  Voir →
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Drawer */}
      {selected && (
        <ProjectDrawer
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
