import { useEffect } from 'react'
import { content } from '../data/content'


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
                const el = document.getElementById(`form-item-${i}`)
                if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
            }, 600 + i * 100)
        })
        hobbies.forEach((_, i) => {
            setTimeout(() => {
                const el = document.getElementById(`hobby-${i}`)
                if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
            }, 900 + i * 80)
        })
    }, [])

    const fadeStyle = {
        opacity: 0, transform: 'translateY(12px)',
        transition: 'opacity 0.5s, transform 0.5s',
    }

    return (
        <div style={{
            height: '100vh', overflowY: 'auto',
            padding: 'clamp(40px,6vw,72px) clamp(32px,6vw,72px)',
            scrollbarWidth: 'none',
        }}>

            {/* Eyebrow */}
            <div id="about-eyebrow" style={{
                ...fadeStyle,
                fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
                display: 'flex', alignItems: 'center', gap: 10,
            }}>
                <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
                À propos
            </div>

            {/* Titre */}
            <h2 id="about-title" style={{
                ...fadeStyle,
                fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800,
                color: 'var(--ink)', lineHeight: 1.1, marginBottom: 24,
            }}>
                Qui{' '}
                <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
                    suis-je ?
                </em>
            </h2>

            {/* Description */}
            <p id="about-desc" style={{
                ...fadeStyle,
                fontSize: 15, color: 'var(--low)', lineHeight: 1.8,
                maxWidth: 560, marginBottom: 56,
            }}>
                {hero.description}
            </p>

            {/* Formation */}
            <div id="about-form-title" style={{
                ...fadeStyle,
                fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                color: 'var(--mid)', fontWeight: 700, marginBottom: 20,
            }}>
                Formation
            </div>

            <div style={{ marginBottom: 52 }}>
                {formation.map((f, i) => (
                    <div
                        key={i}
                        id={`form-item-${i}`}
                        style={{
                            ...fadeStyle,
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-start', gap: 20,
                            padding: '16px 0',
                            borderBottom: '1px solid var(--border)',
                        }}
                    >
                        <div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 3 }}>
                                {f.title}
                            </div>
                            <div style={{ fontSize: 12, color: 'var(--low)' }}>
                                {f.school}
                            </div>
                        </div>
                        <div style={{
                            fontSize: 11, color: 'var(--lilas)', fontWeight: 700,
                            whiteSpace: 'nowrap', letterSpacing: 1,
                        }}>
                            {f.date}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hobbies */}
            <div id="about-hobbies-title" style={{
                ...fadeStyle,
                fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                color: 'var(--mid)', fontWeight: 700, marginBottom: 20,
            }}>
                Centres d'intérêt
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: 12,
            }}>
                {hobbies.map((h, i) => (
                    <div
                        key={i}
                        id={`hobby-${i}`}
                        style={{
                            ...fadeStyle,
                            display: 'flex', alignItems: 'flex-start', gap: 14,
                            padding: '18px 20px',
                            background: 'var(--white)',
                            border: '1px solid var(--border)',
                            borderRadius: 12,
                            transition: 'opacity 0.4s, transform 0.4s, border-color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--lilas-b)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                        <span style={{ fontSize: 24, flexShrink: 0 }}>{h.icon}</span>
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                                {h.title}
                            </div>
                            <div style={{ fontSize: 12, color: 'var(--low)', lineHeight: 1.5 }}>
                                {h.desc}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}