import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'

const NAV = [
  { id: 'hero', icon: '👤', label: 'Profil' },
  { id: 'experience', icon: '💼', label: 'Expérience' },
  { id: 'projets', icon: '🚀', label: 'Projets' },
  { id: 'stack', icon: '⚙️', label: 'Stack' },
  { id: 'contact', icon: '✉️', label: 'Contact' },
]

export default function App() {
  const [active, setActive] = useState('hero')

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width: 'var(--sidebar)', minWidth: 'var(--sidebar)',
        height: '100vh', background: 'var(--cream2)',
        borderRight: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column',
        padding: '40px 0',
      }}>

        {/* Logo */}
        <div style={{
          padding: '0 28px 40px',
          borderBottom: '1px solid var(--border)',
          marginBottom: '32px',
        }}>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
            Gwendal
          </div>
          <div style={{
            fontFamily: 'Fraunces, serif', fontStyle: 'italic',
            fontWeight: 300, fontSize: 13, color: 'var(--lilas)',
          }}>
            Ropars
          </div>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: '0 16px' }}>
          {NAV.map(({ id, icon, label }) => (
            <div
              key={id}
              onClick={() => setActive(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '11px 14px', borderRadius: '8px',
                fontSize: 13, fontWeight: active === id ? 600 : 500,
                color: active === id ? 'var(--lilas)' : 'var(--low)',
                background: active === id ? 'var(--lilas-d)' : 'transparent',
                border: `1px solid ${active === id ? 'var(--lilas-b)' : 'transparent'}`,
                cursor: 'pointer', marginBottom: '4px',
                transition: 'all 0.2s', userSelect: 'none',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 15, width: 20, textAlign: 'center' }}>{icon}</span>
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

        {/* Footer status */}
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
            animation: 'pulse-green 2s infinite',
            display: 'inline-block',
          }} />
          Disponible
        </div>
      </aside>

      {/* ── CONTENU ── */}
      <main style={{ flex: 1, height: '100vh', overflow: 'hidden', position: 'relative' }}>
        {active === 'hero' && <Hero />}
        {active === 'experience' && <Experience key={Date.now()} />}
        {active === 'projets' && <Projects key={Date.now()} />}
        {active === 'stack' && <Stack key={Date.now()} />}
        {active === 'contact' && <Contact key={Date.now()} />}
      </main>
    </div>
  )
}