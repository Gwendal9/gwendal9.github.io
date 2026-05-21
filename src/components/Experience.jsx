import { useEffect } from 'react'
import { content } from '../data/content'

const SIDEBAR = 220
const isMobile = window.innerWidth <= 768
const mainWidth = isMobile ? window.innerWidth : window.innerWidth - SIDEBAR
const MAX_CONTENT = 900
const hPad = isMobile ? 16 : Math.max(40, (mainWidth - MAX_CONTENT) / 2)

export default function Experience() {
  const { experience } = content

  useEffect(() => {
    const eyebrow = document.getElementById('exp-eyebrow')
    const title = document.getElementById('exp-title')
    setTimeout(() => { if (eyebrow) { eyebrow.style.opacity = '1'; eyebrow.style.transform = 'translateY(0)' } }, 100)
    setTimeout(() => { if (title) { title.style.opacity = '1'; title.style.transform = 'translateY(0)' } }, 250)
    setTimeout(() => { const fill = document.getElementById('tlFill'); if (fill) fill.style.height = '100%' }, 400)
    experience.forEach((_, i) => {
      const delay = 500 + i * 350
      setTimeout(() => { const item = document.getElementById('tl-item-' + i); if (item) { item.style.opacity = '1'; item.style.transform = 'translateX(0)' } }, delay)
      setTimeout(() => {
        const dot = document.getElementById('tl-dot-' + i)
        if (dot) { dot.style.background = experience[i].current ? 'var(--lilas)' : 'var(--mid)'; dot.style.boxShadow = experience[i].current ? '0 0 0 4px var(--lilas-b)' : '0 0 0 4px var(--border)'; dot.style.transform = 'scale(1.3)'; setTimeout(() => { dot.style.transform = 'scale(1)' }, 200) }
      }, delay + 150)
      setTimeout(() => { const tools = document.getElementById('tl-tools-' + i); if (tools) { tools.style.opacity = '1'; tools.style.transform = 'translateY(0)' } }, delay + 280)
    })
  }, [])

  return (
    <div style={{
      height: '100vh', overflowY: 'auto', overflowX: 'hidden',
      paddingTop: isMobile ? 4 : 56,
      paddingBottom: isMobile ? 135 : 80,
      paddingLeft: hPad,
      paddingRight: hPad,
    }}>
      <div style={{ maxWidth: MAX_CONTENT, width: '100%' }}>

        <div id="exp-eyebrow" style={{ fontSize: 10, letterSpacing: 4, textTransform: 'uppercase', color: 'var(--lilas)', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 10, opacity: 0, transform: 'translateY(10px)', transition: 'opacity 0.5s, transform 0.5s' }}>
          <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
          Parcours
        </div>

        <h2 id="exp-title" style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.1, marginBottom: 40, opacity: 0, transform: 'translateY(14px)', transition: 'opacity 0.6s, transform 0.6s' }}>
          Mon{' '}
          <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>experience</em>
        </h2>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 1, background: 'var(--border)' }}>
            <div id="tlFill" style={{ position: 'absolute', left: 0, top: 0, width: 1, height: 0, background: 'linear-gradient(180deg, var(--lilas), var(--lilas-l))', transition: 'height 1.4s cubic-bezier(0.16,1,0.3,1)' }} />
          </div>

          {experience.map((item, i) => (
            <div key={i} id={'tl-item-' + i} style={{ marginBottom: i < experience.length - 1 ? 48 : 0, position: 'relative', opacity: 0, transform: 'translateX(-16px)', transition: 'opacity 0.55s, transform 0.55s' }}>
              <div id={'tl-dot-' + i} style={{ position: 'absolute', left: -36, top: 6, width: 11, height: 11, borderRadius: '50%', background: 'var(--border)', border: '2px solid var(--cream)', boxShadow: '0 0 0 3px var(--border)', transition: 'background 0.4s, box-shadow 0.4s, transform 0.2s' }} />

              <div style={{ fontSize: 11, color: 'var(--low)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>{item.date}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.2 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                {item.company}
                {item.badge && <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 4, background: 'var(--lilas-d)', color: 'var(--lilas)', border: '1px solid var(--lilas-b)', fontWeight: 700 }}>{item.badge}</span>}
              </div>
              <p style={{ fontSize: 13, color: 'var(--low)', lineHeight: 1.8, marginBottom: 16, whiteSpace: 'pre-line' }}>{item.description}</p>

              <div id={'tl-tools-' + i} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-start', opacity: 0, transform: 'translateY(6px)', transition: 'opacity 0.4s, transform 0.4s' }}>
                {item.logos && item.logos.length > 0 ? (
                  item.logos.map((logo, j) => (
                    <div key={j} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 8, background: logo.img ? 'var(--white)' : 'var(--cream2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: logo.img ? 6 : 0, fontSize: 10, fontWeight: 700, color: 'var(--mid)' }}>
                        {logo.img ? <img src={logo.img} alt={logo.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : logo.name.slice(0, 2).toUpperCase()}
                      </div>
                      <span style={{ fontSize: 9, color: 'var(--low)', letterSpacing: 0.5, textAlign: 'center', maxWidth: 40, wordBreak: 'break-word', lineHeight: 1.3, display: 'block' }}>{logo.name}</span>
                    </div>
                  ))
                ) : (
                  item.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 4, background: 'var(--cream2)', border: '1px solid var(--border)', color: 'var(--low)', display: 'inline-block' }}>{tag}</span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
