import { useEffect } from 'react'
import { content } from '../data/content'

export default function Stack() {
    const { stack } = content

    useEffect(() => {
        setTimeout(() => {
            const el = document.getElementById('stack-eyebrow')
            if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
        }, 100)
        setTimeout(() => {
            const el = document.getElementById('stack-title')
            if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
        }, 250)

        stack.forEach((_, i) => {
            const col = i % 4
            const row = Math.floor(i / 4)
            const delay = 400 + col * 80 + row * 120
            setTimeout(() => {
                const card = document.getElementById(`stack-item-${i}`)
                if (card) {
                    card.style.opacity = '1'
                    card.style.transform = 'translateY(0)'
                }
            }, delay)
        })
    }, [])

    return (
        <div style={{
            height: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            padding: 'clamp(40px,6vw,72px) clamp(32px,6vw,72px)',
            scrollbarWidth: 'none',
        }}>

            <div id="stack-eyebrow" style={{
                fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: 0, transform: 'translateY(10px)',
                transition: 'opacity 0.5s, transform 0.5s',
            }}>
                <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
                Outils
            </div>

            <h2 id="stack-title" style={{
                fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800,
                color: 'var(--ink)', lineHeight: 1.1, marginBottom: 40,
                opacity: 0, transform: 'translateY(14px)',
                transition: 'opacity 0.6s, transform 0.6s',
            }}>
                Ma{' '}
                <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
                    stack
                </em>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 16,
            }}>
                {stack.map((item, i) => (
                    <div
                        key={i}
                        id={`stack-item-${i}`}
                        style={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', gap: 12,
                            padding: '28px 12px',
                            borderRadius: 12, textAlign: 'center',
                            opacity: 0,
                            transform: 'translateY(20px)',
                            transition: 'opacity 0.4s, transform 0.4s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.filter = 'drop-shadow(0 4px 10px rgba(124,58,237,0.2))'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.filter = 'none'
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            style={{
                                width: 44, height: 44,
                                objectFit: 'contain',
                                transition: 'filter 0.25s',
                            }}
                        />
                        <div style={{
                            fontSize: 12, fontWeight: 600,
                            color: 'var(--mid)', lineHeight: 1.3,
                        }}>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}