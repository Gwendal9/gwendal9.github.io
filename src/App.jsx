import { useState, useEffect } from 'react'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Stack      from './components/Stack'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import Cursor     from './components/Cursor'

const NAV = [
  { id: 'hero',       icon: '👤', label: 'Profil'     },
  { id: 'about',      icon: '🙋', label: 'A propos'   },
  { id: 'experience', icon: '💼', label: 'Experience' },
  { id: 'projets',    icon: '🚀', label: 'Projets'    },
  { id: 'stack',      icon: '⚙️', label: 'Stack'      },
  { id: 'contact',    icon: '✉️', label: 'Contact'    },
]

export default function App() {
  const [active, setActive] = useState('hero')
  const [dark, setDark] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.style.setProperty('--cream',  '#0d0d0d')
      root.style.setProperty('--cream2', '#111111')
      root.style.setProperty('--cream3', '#1a1a1a')
      root.style.setProperty('--white',  '#161616')
      root.style.setProperty('--ink',    '#f0ece4')
      root.style.setProperty('--mid',    '#a09890')
      root.style.setProperty('--low',    '#666666')
      root.style.setProperty('--border', '#222222')
    } else {
      root.style.setProperty('--cream',  '#f7f3ec')
      root.style.setProperty('--cream2', '#f0ebe0')
      root.style.setProperty('--cream3', '#e8e1d4')
      root.style.setProperty('--white',  '#ffffff')
      root.style.setProperty('--ink',    '#1a1a1a')
      root.style.setProperty('--mid',    '#4a4540')
      root.style.setProperty('--low',    '#7a7068')
      root.style.setProperty('--border', '#d8cfc2')
    }
  }, [dark])

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* Curseur custom — desktop seulement */}
      {!isMobile && <Cursor />}

      {/* SIDEBAR desktop */}
      {!isMobile && (
        <aside style={{
          width: 'var(--sidebar)',
          minWidth: 'var(--sidebar)',
          height: '100vh',
          background: 'var(--cream2)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '40px 0',
          flexShrink: 0,
          transition: 'background 0.3s',
        }}>

          {/* Logo + toggle */}
          <div style={{
            padding: '0 28px 40px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
            <div
              onClick={() => setActive('hero')}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>
                Gwendal
              </div>
              <div style={{
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 13,
                color: 'var(--lilas)',
              }}>
                Rolland
              </div>
            </div>

            <button
              onClick={() => setDark(!dark)}
              title={dark ? 'Mode clair' : 'Mode sombre'}
              style={{
                width: 32, height: 32,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--cream)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 14,
                flexShrink: 0,
              }}
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: '0 16px' }}>
            {NAV.map(({ id, icon, label }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '11px 14px',
                  borderRadius: '8px',
                  fontSize: 13,
                  fontWeight: active === id ? 600 : 500,
                  color: active === id ? 'var(--lilas)' : 'var(--low)',
                  background: active === id ? 'var(--lilas-d)' : 'transparent',
                  border: '1px solid ' + (active === id ? 'var(--lilas-b)' : 'transparent'),
                  cursor: 'pointer',
                  marginBottom: '4px',
                  transition: 'all 0.2s',
                  userSelect: 'none',
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: 16, width: 20, textAlign: 'center', flexShrink: 0 }}>
                  {icon}
                </span>
                <span>{label}</span>
                {active === id && (
                  <span style={{
                    position: 'absolute', right: 14,
                    width: 5, height: 5, borderRadius: '50%',
                    background: 'var(--lilas)',
                  }} />
                )}
              </div>
            ))}
          </nav>

          {/* Status */}
          <div style={{
            padding: '24px 28px 0',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            color: 'var(--low)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(34,197,94,0.2)',
              animation: 'pulse-green 2s infinite',
              display: 'inline-block',
            }} />
            Disponible
          </div>
        </aside>
      )}

      {/* MOBILE header */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          height: 56,
          background: 'var(--cream2)',
          borderBottom: '1px solid var(--border)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}>
          <div
            onClick={() => setActive('hero')}
            style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', cursor: 'pointer' }}
          >
            G.{' '}
            <span style={{
              fontFamily: 'Fraunces, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--lilas)',
            }}>
              Rolland
            </span>
          </div>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--cream)',
              cursor: 'pointer', fontSize: 14,
            }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
      )}

      {/* MAIN */}
      <main style={{
        flex: 1,
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: isMobile ? 56 : 0,
        paddingBottom: isMobile ? 64 : 0,
      }}>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {active === 'hero'       && <Hero onNavigate={setActive} />}
          {active === 'about'      && <About />}
          {active === 'experience' && <Experience />}
          {active === 'projets'    && <Projects />}
          {active === 'stack'      && <Stack />}
          {active === 'contact'    && <Contact />}
        </div>
        {!isMobile && <Footer />}
      </main>

      {/* BOTTOM NAV mobile */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          height: 64,
          background: 'var(--cream2)',
          borderTop: '1px solid var(--border)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 8px',
        }}>
          {NAV.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: 8,
                flex: 1,
              }}
            >
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{
                fontSize: 9,
                fontWeight: active === id ? 700 : 400,
                color: active === id ? 'var(--lilas)' : 'var(--low)',
                letterSpacing: 0.3,
              }}>
                {label}
              </span>
              {active === id && (
                <span style={{
                  position: 'absolute',
                  bottom: 2,
                  width: 4, height: 4,
                  borderRadius: '50%',
                  background: 'var(--lilas)',
                }} />
              )}
            </button>
          ))}
        </div>
      )}

    </div>
  )
}
