import { useEffect } from 'react'
import { content } from '../data/content'
import DiagramJobHunter from './DiagramJobHunter'
import DiagramPadel from './DiagramPadel'
import DiagramOprono from './DiagramOprono'
import DiagramOrangeBilling from './DiagramOrangeBilling'

const COLORS = {
  blue:  { text: '#2563eb', bg: 'rgba(37,99,235,0.06)',  border: 'rgba(37,99,235,0.15)'  },
  lilas: { text: '#7c3aed', bg: 'rgba(124,58,237,0.06)', border: 'rgba(124,58,237,0.15)' },
  green: { text: '#059669', bg: 'rgba(5,150,105,0.06)',  border: 'rgba(5,150,105,0.15)'  },
  amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)',  border: 'rgba(217,119,6,0.15)'  },
}

function getColors(project) {
  if (project.companyColor) {
    return { text: project.companyColor, bg: project.companyColor + '18', border: project.companyColor + '40' }
  }
  return COLORS[project.color] || COLORS.lilas
}

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function ProjectDrawer({ project, onClose, isMobile }) {
  const c = getColors(project)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    let startX = 0
    const drawer = document.getElementById('project-drawer')
    const onTouchStart = (e) => { startX = e.touches[0].clientX }
    const onTouchEnd = (e) => { if (e.changedTouches[0].clientX - startX > 80) onClose() }
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
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.25)',
        zIndex: 300, animation: 'fadein 0.2s forwards',
      }}/>

      <div id="project-drawer" style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(680px, 92vw)',
        background: 'var(--cream)',
        borderLeft: '1px solid var(--border)',
        zIndex: 301, overflowY: 'auto',
        animation: 'slidein 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        display: 'flex', flexDirection: 'column',
      }}>

        {/* ── Header sticky ── */}
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1px solid var(--border)',
          position: 'sticky', top: 0,
          background: 'var(--cream)', zIndex: 1,
        }}>
          {/* Row 1: badge + close */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '4px 12px', borderRadius: 100,
              fontSize: 11, fontWeight: 600,
              color: c.text, background: c.bg, border: '1px solid ' + c.border,
            }}>
              {project.companyLogo && (
                <img src={project.companyLogo} alt="" style={{ width: 22, height: 22, objectFit: 'contain' }}
                  onError={e => { e.target.style.display = 'none' }}/>
              )}
              {project.category}
            </div>
            <button onClick={onClose} style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--border)', background: 'var(--white)',
              cursor: 'pointer', fontSize: 15, color: 'var(--mid)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {'×'}
            </button>
          </div>

          {/* Row 2: titre + context */}
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 4 }}>
            {project.title}
          </h2>
          {project.context && (
            <div style={{ fontSize: 12, color: 'var(--low)', marginBottom: 14 }}>{project.context}</div>
          )}

          {/* Row 3: liens en haut */}
          {(project.github || project.demo) && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '7px 14px', borderRadius: 8,
                  background: 'var(--ink)', color: 'var(--white)',
                  fontSize: 12, fontWeight: 600, textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <IconGithub/> GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '7px 14px', borderRadius: 8,
                  background: 'var(--white)', color: 'var(--ink)',
                  border: '1px solid var(--border)',
                  fontSize: 12, fontWeight: 600, textDecoration: 'none',
                  transition: 'border-color 0.15s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lilas)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <IconExternal/> Voir le projet
                </a>
              )}
            </div>
          )}
        </div>

        {/* ── Contenu avec fade-in ── */}
        <div style={{ padding: '28px 28px 40px', flex: 1, animation: 'fadein 0.35s 0.15s both' }}>

          {project.screenshot && (
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', marginBottom: 28 }}>
              <img src={project.screenshot} alt={project.title} style={{ width: '100%', display: 'block' }}/>
            </div>
          )}

          {project.title === 'Job Hunter — Veille auto' && <DiagramJobHunter />}
          {project.title === 'Padel — Classements joueurs FFT' && <DiagramPadel />}
          {project.title === "O'PRONO" && <DiagramOprono />}
          {project.title === 'Modernisation contrôle facturation' && <DiagramOrangeBilling />}

          {project.longDescription && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 12 }}>
                Description
              </div>
              <p style={{ fontSize: 14, color: 'var(--low)', lineHeight: 1.85, whiteSpace: 'pre-line', margin: 0 }}>
                {project.longDescription}
              </p>
            </div>
          )}

          {project.stack && project.stack.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 12 }}>
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
                      {logo && <img src={logo} alt="" style={{ width: 22, height: 22, objectFit: 'contain' }}
                        onError={e => { e.target.style.display = 'none'; const fb = e.target.nextSibling; if (fb?.classList?.contains('logo-fb')) fb.style.display = 'inline' }}/>}
                      {logo && <span className="logo-fb" style={{ display: 'none', fontSize: 9, fontWeight: 700, color: 'var(--lilas)', background: 'var(--lilas-d)', borderRadius: 3, padding: '1px 4px' }}>{s.slice(0,2).toUpperCase()}</span>}
                      {s}
                    </span>
                  )
                })}
              </div>

              {/* Librairies Python si Python est dans la stack */}
              {project.stack.includes('Python') && content.pythonLibs?.length > 0 && (
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontSize: 10, letterSpacing: 2, color: 'var(--low)', fontWeight: 600, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="" style={{ width: 12, height: 12, objectFit: 'contain' }}/>
                    LIBRAIRIES PYTHON
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {content.pythonLibs.map((lib, i) => (
                      <span key={i} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5,
                        padding: '4px 10px', borderRadius: 5,
                        background: 'var(--lilas-d)', border: '1px solid var(--lilas-b)',
                        fontSize: 11, color: 'var(--lilas)', fontWeight: 500,
                      }}>
                        {lib.img && <img src={lib.img} alt="" style={{ width: 14, height: 14, objectFit: 'contain' }}
                          onError={e => { e.target.style.display = 'none'; const fb = e.target.nextSibling; if (fb?.classList?.contains('logo-fb')) fb.style.display = 'inline' }}/>}
                        {lib.img && <span className="logo-fb" style={{ display: 'none', fontSize: 8, fontWeight: 700, color: 'var(--lilas)', background: 'var(--lilas-d)', borderRadius: 3, padding: '1px 3px' }}>{lib.name.slice(0,2).toUpperCase()}</span>}
                        {lib.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 11, color: 'var(--low)', opacity: 0.5 }}>
              <span>Glisser vers la droite pour fermer</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
