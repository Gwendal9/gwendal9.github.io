import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Timeline() {
  const { content, lang } = useLanguage()
  const { timeline } = content
  const lineRef = useRef(null)
  const isMobile = window.innerWidth <= 768

  useEffect(() => {
    setTimeout(() => {
      const eyebrow = document.getElementById('tl-eyebrow')
      const title = document.getElementById('tl-title')
      if (eyebrow) { eyebrow.style.opacity = '1'; eyebrow.style.transform = 'translateY(0)' }
      if (title) { title.style.opacity = '1'; title.style.transform = 'translateY(0)' }
    }, 100)

    // Ligne qui se dessine
    setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = '100%'
    }, 400)

    // Items qui arrivent
    timeline.forEach((_, i) => {
      setTimeout(() => {
        const el = document.getElementById('tl-step-' + i)
        if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
      }, 500 + i * 150)
    })
  }, [])

  return (
    <div style={{
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: isMobile ? '4px 16px 135px' : '48px 72px 80px',
      boxSizing: 'border-box',
    }}>

      {/* Eyebrow */}
      <div id="tl-eyebrow" style={{
        fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: 0, transform: 'translateY(10px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
        {lang === 'en' ? 'Technical journey' : 'Parcours technique'}
      </div>

      {/* Titre */}
      <h2 id="tl-title" style={{
        fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
        color: 'var(--ink)', lineHeight: 1.1, marginBottom: 48,
        opacity: 0, transform: 'translateY(14px)',
        transition: 'opacity 0.6s, transform 0.6s',
      }}>
        Mon{' '}
        <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
          évolution
        </em>
      </h2>

      {/* Timeline horizontale sur desktop, verticale sur mobile */}
      {!isMobile ? (

        /* ── DESKTOP : horizontal ── */
        <div style={{ position: 'relative', paddingBottom: 40 }}>

          {/* Ligne horizontale */}
          <div style={{ position: 'relative', marginBottom: 32 }}>
            <div style={{ height: 2, background: 'var(--border)', width: '100%' }} />
            <div ref={lineRef} style={{
              position: 'absolute', top: 0, left: 0,
              height: 2, width: 0,
              background: 'linear-gradient(90deg, var(--blue, #2563eb), var(--lilas))',
              transition: 'width 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }} />
          </div>

          {/* Steps */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(' + timeline.length + ', 1fr)',
            gap: 16,
            position: 'relative',
          }}>
            {timeline.map((step, i) => (
              <div
                key={i}
                id={'tl-step-' + i}
                style={{
                  opacity: 0, transform: 'translateY(16px)',
                  transition: 'opacity 0.5s, transform 0.5s',
                  position: 'relative',
                }}
              >
                {/* Dot sur la ligne */}
                <div style={{
                  position: 'absolute', top: -43,
                  left: '50%', transform: 'translateX(-50%)',
                  width: 12, height: 12, borderRadius: '50%',
                  background: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--border)',
                  border: '3px solid var(--cream)',
                  boxShadow: i === timeline.length - 1 ? '0 0 0 3px var(--lilas-b)' : '0 0 0 3px var(--border)',
                  transition: 'background 0.4s',
                }} />

                {/* Année */}
                <div style={{
                  fontSize: 13, fontWeight: 800,
                  color: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--mid)',
                  marginBottom: 4,
                }}>
                  {step.year}
                </div>

                {/* Label */}
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginBottom: 8 }}>
                  {step.label}
                </div>

                {/* Description */}
                <p style={{ fontSize: 11, color: 'var(--low)', lineHeight: 1.6, marginBottom: 12 }}>
                  {step.description}
                </p>

                {/* Tools */}
                <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                  {step.tools.map((tool, j) => (
                    <span key={j} style={{
                      padding: '3px 8px', borderRadius: 4,
                      background: i === timeline.length - 1 ? 'var(--lilas-d)' : 'var(--cream2)',
                      border: '1px solid ' + (i === timeline.length - 1 ? 'var(--lilas-b)' : 'var(--border)'),
                      fontSize: 10, fontWeight: 500,
                      color: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--low)',
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      ) : (

        /* ── MOBILE : vertical ── */
        <div style={{ position: 'relative', paddingLeft: 24 }}>

          {/* Ligne verticale */}
          <div style={{
            position: 'absolute', left: 5, top: 0, bottom: 0,
            width: 2, background: 'var(--border)',
          }}>
            <div style={{
              width: 2, height: '100%',
              background: 'linear-gradient(180deg, #2563eb, var(--lilas))',
              opacity: 0.6,
            }} />
          </div>

          {timeline.map((step, i) => (
            <div
              key={i}
              id={'tl-step-' + i}
              style={{
                marginBottom: 28, position: 'relative',
                opacity: 0, transform: 'translateY(12px)',
                transition: 'opacity 0.5s, transform 0.5s',
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -28, top: 4,
                width: 10, height: 10, borderRadius: '50%',
                background: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--border)',
                border: '2px solid var(--cream)',
              }} />

              <div style={{ fontSize: 12, fontWeight: 800, color: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--mid)', marginBottom: 2 }}>
                {step.year} — {step.label}
              </div>
              <p style={{ fontSize: 11, color: 'var(--low)', lineHeight: 1.6, marginBottom: 8 }}>
                {step.description}
              </p>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {step.tools.map((tool, j) => (
                  <span key={j} style={{
                    padding: '3px 8px', borderRadius: 4,
                    background: i === timeline.length - 1 ? 'var(--lilas-d)' : 'var(--cream2)',
                    border: '1px solid ' + (i === timeline.length - 1 ? 'var(--lilas-b)' : 'var(--border)'),
                    fontSize: 10, color: i === timeline.length - 1 ? 'var(--lilas)' : 'var(--low)',
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
    