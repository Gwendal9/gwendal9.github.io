import { useEffect, useState, useRef } from 'react'
import { content } from '../data/content'

const SIDEBAR = 220
const MAX_CONTENT = 900
const isMobile = window.innerWidth <= 768
const mainWidth = isMobile ? window.innerWidth : window.innerWidth - SIDEBAR
const hPad = isMobile ? 16 : Math.max(40, (mainWidth - MAX_CONTENT) / 2)

export default function Experience() {
  const { experience } = content

  // All animation state — survives re-renders triggered by mouse events
  const [filled, setFilled] = useState(false)
  const [eyebrowIn, setEyebrowIn] = useState(false)
  const [titleIn, setTitleIn] = useState(false)
  const [visibleItems, setVisibleItems] = useState(() => experience.map(() => false))
  const [litDots, setLitDots] = useState(() => experience.map(() => false))
  const [hoveredItem, setHoveredItem] = useState(null)

  // Light ball state
  const [lightY, setLightY] = useState(0)
  const [lightVisible, setLightVisible] = useState(false)
  const timelineRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setEyebrowIn(true), 100)
    setTimeout(() => setTitleIn(true), 250)
    setTimeout(() => setFilled(true), 400)
    experience.forEach((_, i) => {
      const delay = 500 + i * 350
      setTimeout(() => setVisibleItems(prev => prev.map((v, j) => j === i ? true : v)), delay)
      setTimeout(() => setLitDots(prev => prev.map((v, j) => j === i ? true : v)), delay + 150)
    })
  }, [])

  const handleItemEnter = (i) => {
    setHoveredItem(i)
    const dot = document.getElementById('tl-dot-' + i)
    const container = timelineRef.current
    if (dot && container) {
      const dotRect = dot.getBoundingClientRect()
      const containerRect = container.getBoundingClientRect()
      setLightY(dotRect.top - containerRect.top + dotRect.height / 2)
      setLightVisible(true)
    }
  }

  const handleItemLeave = () => {
    setHoveredItem(null)
  }

  const getDotStyle = (i) => {
    const isHovered = hoveredItem === i
    const isCurrent = experience[i].current
    if (isHovered) return {
      background: 'var(--lilas)',
      boxShadow: '0 0 0 5px rgba(124,58,237,0.25)',
      transform: 'scale(1.2)',
    }
    if (litDots[i]) return {
      background: isCurrent ? 'var(--lilas)' : 'var(--mid)',
      boxShadow: isCurrent ? '0 0 0 4px var(--lilas-b)' : '0 0 0 4px var(--border)',
      transform: 'scale(1)',
    }
    return {
      background: 'var(--border)',
      boxShadow: '0 0 0 3px var(--border)',
      transform: 'scale(1)',
    }
  }

  return (
    <div style={{
      height: '100vh', overflowY: 'auto', overflowX: 'hidden',
      paddingTop: isMobile ? 4 : 56,
      paddingBottom: isMobile ? 135 : 80,
      paddingLeft: hPad,
      paddingRight: hPad,
    }}>
      <div style={{ maxWidth: MAX_CONTENT, width: '100%' }}>

        <div style={{
          fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
          color: 'var(--lilas)', fontWeight: 700, marginBottom: 12,
          display: 'flex', alignItems: 'center', gap: 10,
          opacity: eyebrowIn ? 1 : 0,
          transform: eyebrowIn ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.5s, transform 0.5s',
        }}>
          <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
          Parcours
        </div>

        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800, color: 'var(--ink)',
          lineHeight: 1.1, marginBottom: 40,
          opacity: titleIn ? 1 : 0,
          transform: titleIn ? 'translateY(0)' : 'translateY(14px)',
          transition: 'opacity 0.6s, transform 0.6s',
        }}>
          Mon{' '}
          <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>experience</em>
        </h2>

        <div
          ref={timelineRef}
          style={{ position: 'relative', paddingLeft: 32 }}
          onMouseLeave={() => { setLightVisible(false); setHoveredItem(null) }}
        >
          {/* Background gray line + animated purple fill */}
          <div style={{ position: 'absolute', left: 0, top: 8, bottom: 0, width: 1, background: 'var(--border)' }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
              background: 'linear-gradient(180deg, var(--lilas), var(--lilas-l))',
              transformOrigin: 'top',
              transform: filled ? 'scaleY(1)' : 'scaleY(0)',
              transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)',
            }} />
          </div>

          {/* Moving light ball */}
          <div style={{
            position: 'absolute', left: -3, top: lightY,
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--lilas)',
            boxShadow: '0 0 10px 4px rgba(124,58,237,0.45)',
            transition: 'top 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s',
            opacity: lightVisible ? 1 : 0,
            transform: 'translateY(-50%)',
            pointerEvents: 'none', zIndex: 2,
          }} />

          {experience.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => handleItemEnter(i)}
              onMouseLeave={handleItemLeave}
              style={{
                marginBottom: i < experience.length - 1 ? 48 : 0,
                position: 'relative',
                opacity: visibleItems[i] ? 1 : 0,
                transform: visibleItems[i] ? 'translateX(0)' : 'translateX(-16px)',
                transition: 'opacity 0.55s, transform 0.55s',
              }}
            >
              <div id={'tl-dot-' + i} style={{
                position: 'absolute', left: -36, top: 6,
                width: 11, height: 11, borderRadius: '50%',
                border: '2px solid var(--cream)',
                transition: 'background 0.3s, box-shadow 0.3s, transform 0.2s',
                ...getDotStyle(i),
              }} />
              <div style={{ fontSize: 11, color: 'var(--low)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, fontWeight: 500 }}>{item.date}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 4, lineHeight: 1.2 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                {item.companyLogo && (
                  <img src={item.companyLogo} alt={item.company} style={{ height: 18, maxWidth: 60, objectFit: 'contain', flexShrink: 0 }} onError={e => { e.target.style.display = 'none' }} />
                )}
                <span style={{ fontWeight: 600 }}>{item.company}</span>
                {item.badge && <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 4, background: 'var(--lilas-d)', color: 'var(--lilas)', border: '1px solid var(--lilas-b)', fontWeight: 700 }}>{item.badge}</span>}
              </div>
              <p style={{ fontSize: 13, color: 'var(--low)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
