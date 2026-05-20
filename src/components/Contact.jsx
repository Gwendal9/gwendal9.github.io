import { useEffect } from 'react'
import { content } from '../data/content'

export default function Contact() {
  const { contact } = content

  useEffect(() => {
    setTimeout(() => {
      const el = document.getElementById('contact-eyebrow')
      if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, 100)
    setTimeout(() => {
      const el = document.getElementById('contact-title')
      if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, 250)
    setTimeout(() => {
      const el = document.getElementById('contact-intro')
      if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
    }, 400)
    contact.forEach((_, i) => {
      setTimeout(() => {
        const card = document.getElementById(`contact-card-${i}`)
        if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)' }
      }, 550 + i * 120)
    })
  }, [])

  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'var(--lilas-b)'
    e.currentTarget.style.boxShadow = '0 4px 20px var(--lilas-d)'
    e.currentTarget.style.transform = 'translateX(6px)'
    const arrow = e.currentTarget.querySelector('.arrow')
    if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translate(2px,-2px)' }
  }

  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.style.transform = 'translateX(0)'
    const arrow = e.currentTarget.querySelector('.arrow')
    if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translate(0,0)' }
  }
  

  return (
    <div style={{
      height: '100vh', overflowY: 'auto',
      padding: 'clamp(40px,6vw,72px) clamp(32px,6vw,72px)',
    }}>
      <div id="contact-eyebrow" style={{
        fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
        display: 'flex', alignItems: 'center', gap: 10,
        opacity: 0, transform: 'translateY(10px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}>
        <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
        Contact
      </div>

      <h2 id="contact-title" style={{
        fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800,
        color: 'var(--ink)', lineHeight: 1.1, marginBottom: 20,
        opacity: 0, transform: 'translateY(14px)',
        transition: 'opacity 0.6s, transform 0.6s',
      }}>
        On se{' '}
        <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
          parle ?
        </em>
      </h2>

      <p id="contact-intro" style={{
        fontSize: 15, color: 'var(--low)', lineHeight: 1.8,
        maxWidth: 440, marginBottom: 48,
        opacity: 0, transform: 'translateY(12px)',
        transition: 'opacity 0.6s, transform 0.6s',
      }}>
        Disponible pour des opportunités en Data et BI en Ile-de-France.
        N'hésite pas à me contacter directement.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
        {contact.map((item, i) => (
          <a
            key={i}
            id={`contact-card-${i}`}
            href={item.href}
            target={item.href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '20px 24px',
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              textDecoration: 'none', color: 'inherit',
              opacity: 0, transform: 'translateY(14px)',
              transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: 'var(--cream2)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <div>
              <div style={{
                fontSize: 10, color: 'var(--low)',
                letterSpacing: 2, textTransform: 'uppercase',
                marginBottom: 3, fontWeight: 500,
              }}>
                {item.label}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>
                {item.value}
              </div>
            </div>
            <span className="arrow" style={{
              marginLeft: 'auto', fontSize: 16,
              color: 'var(--lilas)', opacity: 0,
              transition: 'opacity 0.2s, transform 0.2s',
            }}>
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}