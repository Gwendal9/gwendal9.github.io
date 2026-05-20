import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let raf

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot) {
        dot.style.left = e.clientX + 'px'
        dot.style.top = e.clientY + 'px'
      }
    }

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ring) {
        ring.style.left = ringPos.current.x + 'px'
        ring.style.top = ringPos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(2)'
      if (ring) {
        ring.style.width = '48px'
        ring.style.height = '48px'
        ring.style.borderColor = 'var(--lilas)'
        ring.style.opacity = '0.6'
      }
    }

    const onLeave = () => {
      if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)'
      if (ring) {
        ring.style.width = '32px'
        ring.style.height = '32px'
        ring.style.borderColor = 'var(--lilas)'
        ring.style.opacity = '0.3'
      }
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed',
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--lilas)',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s',
        mixBlendMode: 'multiply',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed',
        width: 32,
        height: 32,
        borderRadius: '50%',
        border: '1px solid var(--lilas)',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        opacity: 0.3,
        transition: 'width 0.2s, height 0.2s, opacity 0.2s',
      }} />
    </>
  )
}
