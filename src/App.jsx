import { useState, useEffect } from 'react'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Stack      from './components/Stack'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import CV         from './components/CV'

// Icones SVG propres
const ICONS = {
  hero: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>
  ),
  about: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 16v-4M12 8h.01"/>
    </svg>
  ),
  experience: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>
  ),
  projets: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  ),
  stack: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  contact: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  cv: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14,2 14,8 20,8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10,9 9,9 8,9"/>
    </svg>
  ),
  moon: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  ),
  sun: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  ),
}

const NAV = [
  { id: 'hero',       icon: 'hero',       label: 'Profil'     },
  { id: 'about',      icon: 'about',      label: 'A propos'   },
  { id: 'experience', icon: 'experience', label: 'Experience' },
  { id: 'projets',    icon: 'projets',    label: 'Projets'    },
  { id: 'stack',      icon: 'stack',      label: 'Stack'      },
  { id: 'contact',    icon: 'contact',    label: 'Contact'    },
  { id: 'cv',         icon: 'cv',         label: 'Mon CV'     },
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

  // Nav items mobile — on en prend 5 max pour la bottom bar
  const mobileNav = NAV.slice(0, 5)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

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
        }}>

          <div style={{
            padding: '0 28px 40px',
            borderBottom: '1px solid var(--border)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
            <div onClick={() => setActive('hero')} style={{ cursor: 'pointer' }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)' }}>Gwendal</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, fontSize: 13, color: 'var(--lilas)' }}>
                Rolland
              </div>
            </div>
            <button
              onClick={() => setDark(!dark)}
              style={{
                width: 32, height: 32, borderRadius: '50%',
                border: '1px solid var(--border)', background: 'var(--cream)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--mid)',
              }}
            >
              {dark ? ICONS.sun : ICONS.moon}
            </button>
          </div>

          <nav style={{ flex: 1, padding: '0 16px' }}>
            {NAV.map(({ id, icon, label }) => (
              <div
                key={id}
                onClick={() => setActive(id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '11px 14px', borderRadius: '8px',
                  fontSize: 13,
                  fontWeight: active === id ? 600 : 500,
                  color: active === id ? 'var(--lilas)' : 'var(--low)',
                  background: active === id ? 'var(--lilas-d)' : 'transparent',
                  border: '1px solid ' + (active === id ? 'var(--lilas-b)' : 'transparent'),
                  cursor: 'pointer', marginBottom: '4px',
                  transition: 'all 0.2s', userSelect: 'none', position: 'relative',
                }}
              >
                <span style={{ color: active === id ? 'var(--lilas)' : 'var(--low)', display: 'flex', flexShrink: 0 }}>
                  {ICONS[icon]}
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

          <div style={{
            padding: '24px 28px 0',
            borderTop: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 11, color: 'var(--low)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(34,197,94,0.2)',
              animation: 'pulse-green 2s infinite', display: 'inline-block',
            }} />
            Disponible
          </div>
        </aside>
      )}

      {/* MOBILE header */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 56,
          background: 'var(--cream2)', borderBottom: '1px solid var(--border)',
          zIndex: 200, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 20px',
        }}>
          <div onClick={() => setActive('hero')} style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)', cursor: 'pointer' }}>
            G.{' '}
            <span style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
              Rolland
            </span>
          </div>
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--border)', background: 'var(--cream)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--mid)',
            }}
          >
            {dark ? ICONS.sun : ICONS.moon}
          </button>
        </div>
      )}

      {/* MAIN */}
      <main style={{
        flex: 1, height: '100vh', overflow: 'hidden', position: 'relative',
        display: 'flex', flexDirection: 'column',
        paddingTop: isMobile ? 56 : 0,
        paddingBottom: isMobile ? 64 : 0,
      }}>
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          {active === 'hero'       && <Hero onNavigate={setActive} isMobile={isMobile} />}
          {active === 'about'      && <About />}
          {active === 'experience' && <Experience />}
          {active === 'projets'    && <Projects />}
          {active === 'stack'      && <Stack />}
          {active === 'contact'    && <Contact />}
          {active === 'cv'         && <CV isMobile={isMobile} />}
        </div>
        {!isMobile && <Footer />}
      </main>

      {/* BOTTOM NAV mobile */}
      {isMobile && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, height: 64,
          background: 'var(--cream2)', borderTop: '1px solid var(--border)',
          zIndex: 200, display: 'flex', alignItems: 'center',
          justifyContent: 'space-around', padding: '0 4px',
        }}>
          {mobileNav.map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                background: 'transparent', border: 'none', cursor: 'pointer',
                padding: '8px 6px', borderRadius: 8, flex: 1,
                color: active === id ? 'var(--lilas)' : 'var(--low)',
              }}
            >
              {ICONS[icon]}
              <span style={{
                fontSize: 9, fontWeight: active === id ? 700 : 400,
                letterSpacing: 0.3,
              }}>
                {label}
              </span>
            </button>
          ))}
          {/* Bouton ... pour les onglets restants */}
          <button
            onClick={() => setActive(NAV[5].id)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '8px 6px', borderRadius: 8, flex: 1,
              color: ['contact', 'cv'].includes(active) ? 'var(--lilas)' : 'var(--low)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/>
            </svg>
            <span style={{ fontSize: 9, fontWeight: 400 }}>Plus</span>
          </button>
        </div>
      )}

    </div>
  )
}
