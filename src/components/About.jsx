import { useEffect } from 'react'
import { content } from '../data/content'

const SCHOOL_LOGOS = {
  'eiCNAM': '/logos/CNAM_Logo.svg.png',
  'IUT Paris Descartes': '/logos/UniversiteParis_monogramme_couleur_RVB.jpg',
  'Lycee Paul Robert': null,
}

export default function About() {
  const { formation, hobbies, hero } = content
  const isMobile = window.innerWidth <= 768

  useEffect(() => {
    const ids = ['about-eyebrow', 'about-title', 'about-desc', 'about-form-title', 'about-hobbies-title']
    ids.forEach((id, i) => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
      }, 100 + i * 120)
    })
    formation.forEach((_, i) => {
      setTimeout(() => {
        const el = document.getElementById('form-item-' + i)
        if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
      }, 600 + i * 100)
    })
    hobbies.forEach((_, i) => {
      setTimeout(() => {
        const el = document.getElementById('hobby-' + i)
        if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
      }, 900 + i * 80)
    })
  }, [])

  const fadeStyle = {
    opacity: 0,
    transform: 'translateY(12px)',
    transition: 'opacity 0.5s, transform 0.5s',
  }

  return (
    <div style={{
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: window.innerWidth <= 768 ? '4px 16px 135px' : '48px 72px',
    }}>

      <div id="about-eyebrow" style={{
        ...fadeStyle,
        fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
        A propos
      </div>

      <h2 id="about-title" style={{
        ...fadeStyle,
        fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
        color: 'var(--ink)', lineHeight: 1.1, marginBottom: 16,
      }}>
        Qui{' '}
        <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
          suis-je ?
        </em>
      </h2>

      <p id="about-desc" style={{
        ...fadeStyle,
        fontSize: isMobile ? 13 : 15,
        color: 'var(--low)', lineHeight: 1.8,
        maxWidth: 560, marginBottom: 36,
      }}>
        {hero.description}
      </p>

      <div id="about-form-title" style={{
        ...fadeStyle,
        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
        color: 'var(--mid)', fontWeight: 700, marginBottom: 16,
      }}>
        Formation
      </div>

      <div style={{ marginBottom: 36 }}>
        {formation.map((f, i) => (
          <div
            key={i}
            id={'form-item-' + i}
            style={{
              ...fadeStyle,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              padding: '14px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              {SCHOOL_LOGOS[f.school] ? (
                <div style={{
                  width: 36, height: 36, borderRadius: 8, overflow: 'hidden',
                  background: 'var(--white)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, padding: 4,
                }}>
                  <img src={SCHOOL_LOGOS[f.school]} alt={f.school} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              ) : (
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--cream2)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: 16,
                }}>
                  🎓
                </div>
              )}
              <div>
                <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>
                  {f.title}
                </div>
                <div style={{ fontSize: 11, color: 'var(--low)' }}>{f.school}</div>
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--lilas)', fontWeight: 700, whiteSpace: 'nowrap' }}>
              {f.date}
            </div>
          </div>
        ))}
      </div>

      <div id="about-hobbies-title" style={{
        ...fadeStyle,
        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
        color: 'var(--mid)', fontWeight: 700, marginBottom: 16,
      }}>
        Centres d'interet
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 10,
      }}>
        {hobbies.map((h, i) => (
          <div
            key={i}
            id={'hobby-' + i}
            style={{
              ...fadeStyle,
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: '16px', background: 'var(--white)',
              border: '1px solid var(--border)', borderRadius: 12,
              transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lilas-b)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <span style={{ fontSize: 20, flexShrink: 0 }}>{h.icon}</span>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>{h.title}</div>
              <div style={{ fontSize: 11, color: 'var(--low)', lineHeight: 1.5 }}>{h.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
