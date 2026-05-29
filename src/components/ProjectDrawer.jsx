import { useEffect } from 'react'
import { content } from '../data/content'
import DiagramJobHunter from './DiagramJobHunter'
import DiagramPadel from './DiagramPadel'

const COLORS = {
  blue: { text: '#2563eb', bg: 'rgba(37,99,235,0.06)', border: 'rgba(37,99,235,0.15)' },
  lilas: { text: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
  green: { text: '#059669', bg: 'rgba(5,150,105,0.06)', border: 'rgba(5,150,105,0.15)' },
  amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.15)' },
}

function getColors(project) {
  if (project.companyColor) {
    return {
      text: project.companyColor,
      bg: project.companyColor + '18',
      border: project.companyColor + '40',
    }
  }
  return COLORS[project.color] || COLORS.lilas
}

export default function ProjectDrawer({ project, onClose }) {
  const c = getColors(project)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)

    let startX = 0
    const drawer = document.getElementById('project-drawer')
    const onTouchStart = (e) => { startX = e.touches[0].clientX }
    const onTouchEnd = (e) => {
      const diff = e.changedTouches[0].clientX - startX
      if (diff > 80) onClose()
    }
    if (drawer) {
      drawer.addEventListener('touchstart', onTouchStart)
      drawer.addEventListener('touchend', onTouchEnd)
    }

    return () => {
      document.removeEventListener('keydown', handleKey)
      if (drawer) {
        drawer.removeEventListener('touchstart', onTouchStart)
        drawer.removeEventListener('touchend', onTouchEnd)
      }
    }
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.25)',
          zIndex: 300,
          animation: 'fadein 0.2s forwards',
        }}
      />

      {/* Drawer */}
      <div
        id="project-drawer"
        style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0,
          width: 'min(680px, 92vw)',
          background: 'var(--cream)',
          borderLeft: '1px solid var(--border)',
          zIndex: 301,
          overflowY: 'auto',
          animation: 'slidein 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Header */}
        <div style={{
          padding: '28px 32px 24px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
          position: 'sticky',
          top: 0,
          background: 'var(--cream)',
          zIndex: 1,
        }}>
          <div>
            {/* Badge categorie avec logo */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '5px 12px', borderRadius: 100,
              fontSize: 11, fontWeight: 600, marginBottom: 10,
              color: c.text, background: c.bg, border: '1px solid ' + c.border,
            }}>
              {project.companyLogo && (
                <img
                  src={project.companyLogo}
                  alt=""
                  style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }}
                  onError={e => { e.target.style.display = 'none' }}
                />
              )}
              {project.category}
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.2 }}>
              {project.title}
            </h2>
            {project.context && (
              <div style={{ fontSize: 12, color: 'var(--low)', marginTop: 6 }}>
                {project.context}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--white)',
              cursor: 'pointer', fontSize: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, color: 'var(--mid)',
            }}
          >
            x
          </button>
        </div>

        {/* Contenu */}
        <div style={{ padding: '28px 32px', flex: 1 }}>

          {project.screenshot && (
            <div style={{
              borderRadius: 12, overflow: 'hidden',
              border: '1px solid var(--border)', marginBottom: 28,
            }}>
              <img src={project.screenshot} alt={project.title} style={{ width: '100%', display: 'block' }} />
            </div>
          )}

          {project.title === 'Job Hunter \u2014 Veille auto' && <DiagramJobHunter />}
          {project.title === 'Padel \u2014 Classements joueurs FFT' && <DiagramPadel />}

          {project.longDescription && (
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
              }}>
                Description
              </div>
              <p style={{ fontSize: 14, color: 'var(--low)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {project.longDescription}
              </p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
              }}>
                Stack technique
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.stack.map((s, i) => {
                  const logo = content.toolLogos?.[s]
                  return (
                    <span key={i} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 6,
                      background: 'var(--white)', border: '1px solid var(--border)',
                      fontSize: 12, color: 'var(--mid)', fontWeight: 500,
                    }}>
                      {logo && (
                        <img
                          src={logo}
                          alt=""
                          style={{ width: 16, height: 16, objectFit: 'contain', flexShrink: 0 }}
                          onError={e => { e.target.style.display = 'none' }}
                        />
                      )}
                      {s}
                    </span>
                  )
                })}
              </div>
            </div>
          )}

          {(project.github || project.demo) && (
            <div style={{ marginBottom: 28 }}>
              <div style={{
                fontSize: 10, letterSpacing: 3, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
              }}>
                Liens
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    padding: '10px 20px', background: 'var(--ink)', color: 'var(--white)',
                    borderRadius: 8, fontSize: 13, fontWeight: 600,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}>
                    {'GitHub ->'}
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" style={{
                    padding: '10px 20px', background: 'var(--white)',
                    border: '1px solid var(--border)', color: 'var(--mid)',
                    borderRadius: 8, fontSize: 13, fontWeight: 600,
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}>
                    {'Demo ->'}
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Hint swipe sur mobile */}
          <div style={{
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            alignItems: 'center', gap: 6, marginTop: 24,
            fontSize: 11, color: 'var(--low)', opacity: 0.6,
          }}>
            <span>{'->'}</span>
            <span>Glisser vers la droite pour fermer</span>
          </div>
        </div>
            </div>
    </>
  )
}
