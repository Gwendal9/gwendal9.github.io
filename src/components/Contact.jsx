import { useEffect, useState } from 'react'
import { content } from '../data/content'

const SIDEBAR = 220
const isMobile = window.innerWidth <= 768
const mainWidth = isMobile ? window.innerWidth : window.innerWidth - SIDEBAR
const MAX_CONTENT = 700
const hPad = isMobile ? 16 : Math.max(40, (mainWidth - MAX_CONTENT) / 2)

const ICONS = {
  email: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--mid)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--mid)">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--mid)">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
}

export default function Contact() {
  const { contact } = content
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => { const el = document.getElementById('contact-eyebrow'); if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } }, 100)
    setTimeout(() => { const el = document.getElementById('contact-title'); if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } }, 250)
    setTimeout(() => { const el = document.getElementById('contact-intro'); if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' } }, 400)
    contact.forEach((_, i) => {
      setTimeout(() => { const card = document.getElementById('contact-card-' + i); if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)' } }, 550 + i * 120)
    })
  }, [])

  const handleCopyEmail = (e, item) => {
    if (item.icon !== 'email') return
    e.preventDefault()
    navigator.clipboard.writeText(item.value).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000) })
  }

  const handleEnter = (e) => {
    e.currentTarget.style.borderColor = 'var(--lilas-b)'
    e.currentTarget.style.boxShadow = '0 4px 20px var(--lilas-d)'
    e.currentTarget.style.transform = 'translateX(6px)'
    const arrow = e.currentTarget.querySelector('.arrow')
    if (arrow) { arrow.style.opacity = '1'; arrow.style.transform = 'translate(2px, -2px)' }
  }

  const handleLeave = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.style.transform = 'translateX(0)'
    const arrow = e.currentTarget.querySelector('.arrow')
    if (arrow) { arrow.style.opacity = '0'; arrow.style.transform = 'translate(0, 0)' }
  }

  return (
    <div style={{
      height: '100vh', overflowY: 'auto', overflowX: 'hidden',
      paddingTop: isMobile ? 4 : 56,
      paddingBottom: isMobile ? 135 : 60,
      paddingLeft: hPad,
      paddingRight: hPad,
    }}>
      <div style={{ maxWidth: MAX_CONTENT, width: '100%' }}>

        <div id="contact-eyebrow" style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10, opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.5s, transform 0.5s' }}>
          <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
          Contact
        </div>

        <h2 id="contact-title" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 20, opacity: 0, transform: 'translateY(14px)', transition: 'opacity 0.6s, transform 0.6s' }}>
          On se{' '}
          <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>parle ?</em>
        </h2>

        <p id="contact-intro" style={{ fontSize: 15, color: 'var(--low)', lineHeight: 1.8, marginBottom: 48, opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.6s, transform 0.6s' }}>
          Disponible pour des opportunités en Data et BI en Île-de-France.
          N'hésite pas à me contacter directement.
        </p>

        {copied && (
          <div style={{ position: 'fixed', bottom: isMobile ? 80 : 32, left: '50%', transform: 'translateX(-50%)', background: 'var(--ink)', color: 'var(--white)', padding: '10px 20px', borderRadius: 8, fontSize: 13, fontWeight: 600, zIndex: 999, display: 'flex', alignItems: 'center', gap: 8 }}>
            ✓ Email copie !
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {contact.map((item, i) => (
            <a key={i} id={'contact-card-' + i}
              href={item.icon === 'email' ? undefined : item.href}
              target={item.href && item.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              onClick={(e) => handleCopyEmail(e, item)}
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none', color: 'inherit', opacity: 0, transform: 'translateY(14px)', transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--cream2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {ICONS[item.icon]}
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--low)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 3, fontWeight: 500 }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{item.icon === 'email' && copied ? 'Copie !' : item.value}</div>
              </div>
              <span className="arrow" style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--lilas)', opacity: 0, transition: 'opacity 0.2s, transform 0.2s' }}>
                {item.icon === 'email' ? 'Copier' : '↗'}
              </span>
            </a>
          ))}

          <div style={{ marginTop: 48 }}>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--mid)', fontWeight: 700, marginBottom: 20 }}>References</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {content.references && content.references.map((ref, i) => (
                <div key={i} style={{ padding: '20px 24px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--lilas-d)', border: '1px solid var(--lilas-b)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: 'var(--lilas)', flexShrink: 0 }}>
                    {ref.photo ? <img src={ref.photo} alt={ref.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : ref.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{ref.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--low)' }}>{ref.role} · {ref.company}</div>
                  </div>
                  {ref.companyLogo && <img src={ref.companyLogo} alt={ref.company} style={{ height: 24, objectFit: 'contain', opacity: 0.7 }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
