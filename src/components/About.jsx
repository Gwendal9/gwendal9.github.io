import { useEffect } from 'react'
import { content } from '../data/content'

const SCHOOL_LOGOS = {
  'eiCNAM': '/logos/CNAM_Logo.svg.png',
  'IUT Paris Descartes': '/logos/UniversiteParis_monogramme_couleur_RVB.jpg',
  'Lycee Paul Robert': null,
}

const HOBBY_ICONS = {
  'Padel': (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="6"/><path d="M15 15l4 4"/><path d="M9 6v6M6 9h6"/>
    </svg>
  ),
  'Gaming': (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4M8 10v4"/>
      <circle cx="16" cy="11" r="1" fill="var(--lilas)"/><circle cx="18" cy="13" r="1" fill="var(--lilas)"/>
    </svg>
  ),
  'Veille': (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  'Dev perso': (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
}

const SIDEBAR = 220
const isMobile = window.innerWidth <= 768
const mainWidth = isMobile ? window.innerWidth : window.innerWidth - SIDEBAR
const MAX_CONTENT = 900
const hPad = isMobile ? 16 : Math.max(40, (mainWidth - MAX_CONTENT) / 2)
const vPadTop = isMobile ? 4 : 56
const vPadBottom = isMobile ? 135 : 60

export default function About() {
  const { formation, hobbies, hero } = content

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

  const fadeStyle = { opacity: 0, transform: 'translateY(12px)', transition: 'opacity 0.5s, transform 0.5s' }

  return (
    <div style={{
      height: '100vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      paddingTop: vPadTop,
      paddingBottom: vPadBottom,
      paddingLeft: hPad,
      paddingRight: hPad,
    }}>
      <div style={{ maxWidth: MAX_CONTENT, width: '100%' }}>

        <div id="about-eyebrow" style={{ ...fadeStyle, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
          À propos
        </div>

        <h2 id="about-title" style={{ ...fadeStyle, fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 16 }}>
          Qui{' '}
          <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>suis-je ?</em>
        </h2>

        <div id="about-desc" style={{ ...fadeStyle, marginBottom: 40 }}>
          {(hero.aboutParagraphs || []).map((para, i) => (
            <p key={i} style={{
              fontSize: isMobile ? 14 : 16,
              color: 'var(--low)',
              lineHeight: 1.85,
              margin: 0,
              marginBottom: i < (hero.aboutParagraphs.length - 1) ? 20 : 0,
              paddingLeft: 16,
              borderLeft: i === 0 ? '2px solid var(--lilas)' : '2px solid var(--border)',
            }}>
              {para}
            </p>
          ))}
        </div>

        <div id="about-form-title" style={{ ...fadeStyle, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--mid)', fontWeight: 700, marginBottom: 16 }}>
          Formation
        </div>

        <div style={{ marginBottom: 36 }}>
          {formation.map((f, i) => (
            <div key={i} id={'form-item-' + i} style={{ ...fadeStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {SCHOOL_LOGOS[f.school] ? (
                  <div style={{ width: 36, height: 36, borderRadius: 8, overflow: 'hidden', background: 'var(--white)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 4 }}>
                    <img src={SCHOOL_LOGOS[f.school]} alt={f.school} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                ) : (
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--cream2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--mid)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--low)' }}>{f.school}</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--lilas)', fontWeight: 700, whiteSpace: 'nowrap' }}>{f.date}</div>
            </div>
          ))}
        </div>

        <div id="about-hobbies-title" style={{ ...fadeStyle, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--mid)', fontWeight: 700, marginBottom: 16 }}>
          Centres d'intérêt
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {hobbies.map((h, i) => (
            <div key={i} id={'hobby-' + i} style={{ ...fadeStyle, display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 12, transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lilas-b)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--lilas-d)', border: '1px solid var(--lilas-b)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {HOBBY_ICONS[h.title] || <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--lilas)" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>}
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>{h.title}</div>
                <div style={{ fontSize: 11, color: 'var(--low)', lineHeight: 1.5 }}>{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
