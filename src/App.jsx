import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'

const NAV = [
  { id: 'hero', icon: '👤', label: 'Profil' },
  { id: 'about', icon: '🙋', label: 'A propos' },
  { id: 'experience', icon: '💼', label: 'Experience' },
  { id: 'projets', icon: '🚀', label: 'Projets' },
  { id: 'stack', icon: '⚙️', label: 'Stack' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
]

const PANELS = ['hero', 'about', 'experience', 'projets', 'stack', 'contact']

export default function App() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* SIDEBAR */}
      <aside className="sidebar-desktop" style={{
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
        }}>
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
                  position: 'absolute',
                  right: 14,
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--lilas)',
                }} />
              )}
            </div>
          ))}
        </nav>

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
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#22c55e',
            flexShrink: 0,
            boxShadow: '0 0 0 2px rgba(34,197,94,0.2)',
            animation: 'pulse-green 2s infinite',
            display: 'inline-block',
          }} />
          Disponible
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="mobile-header" style={{
        display: 'none',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 56,
        background: 'var(--cream2)',
        borderBottom: '1px solid var(--border)',
        zIndex: 200,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)' }}>
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
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: 22,
            cursor: 'pointer',
            color: 'var(--ink)',
          }}
        >
          {menuOpen ? 'x' : '='}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            background: 'rgba(0,0,0,0.3)',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              top: 56, left: 0, right: 0,
              background: 'var(--cream2)',
              borderBottom: '1px solid var(--border)',
              padding: '16px',
            }}
            onClick={e => e.stopPropagation()}
          >
            {NAV.map(({ id, icon, label }) => (
              <div
                key={id}
                onClick={() => { setActive(id); setMenuOpen(false) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: active === id ? 600 : 400,
                  color: active === id ? 'var(--lilas)' : 'var(--ink)',
                  background: active === id ? 'var(--lilas-d)' : 'transparent',
                  cursor: 'pointer',
                  marginBottom: 4,
                }}
              >
                <span>{icon}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MAIN */}
      <main style={{ flex: 1, height: '100vh', overflow: 'hidden', position: 'relative' }}>
        {active === 'hero' && <Hero onNavigate={setActive} />}
        {active === 'about' && <About />}
        {active === 'experience' && <Experience />}
        {active === 'projets' && <Projects />}
        {active === 'stack' && <Stack />}
        {active === 'contact' && <Contact />}
      </main>
    </div>
  )
}
