import { useEffect } from 'react'
import { content } from '../data/content'

const COLORS = {
    blue: { text: '#2563eb', bg: 'rgba(37,99,235,0.06)', border: 'rgba(37,99,235,0.15)' },
    lilas: { text: 'var(--lilas)', bg: 'var(--lilas-d)', border: 'var(--lilas-b)' },
    green: { text: '#059669', bg: 'rgba(5,150,105,0.06)', border: 'rgba(5,150,105,0.15)' },
    amber: { text: '#d97706', bg: 'rgba(217,119,6,0.06)', border: 'rgba(217,119,6,0.15)' },
}

export default function Projects() {
    const { projects } = content

    useEffect(() => {
        // Eyebrow + titre
        setTimeout(() => {
            const el = document.getElementById('proj-eyebrow')
            if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
        }, 100)
        setTimeout(() => {
            const el = document.getElementById('proj-title')
            if (el) { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }
        }, 250)

        // Cards en cascade
        projects.forEach((_, i) => {
            setTimeout(() => {
                const card = document.getElementById(`proj-card-${i}`)
                if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0)' }
            }, 400 + i * 120)
        })
    }, [])

    return (
        <div style={{
            height: '100vh', overflowY: 'auto',
            padding: 'clamp(40px,6vw,72px) clamp(32px,6vw,72px)',
        }}>

            {/* Eyebrow */}
            <div id="proj-eyebrow" style={{
                fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: 0, transform: 'translateY(10px)',
                transition: 'opacity 0.5s, transform 0.5s',
            }}>
                <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
                Réalisations
            </div>

            {/* Titre */}
            <h2 id="proj-title" style={{
                fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800,
                color: 'var(--ink)', lineHeight: 1.1, marginBottom: 40,
                opacity: 0, transform: 'translateY(14px)',
                transition: 'opacity 0.6s, transform 0.6s',
            }}>
                Mes{' '}
                <em style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, color: 'var(--lilas)' }}>
                    projets
                </em>
            </h2>

            {/* Grille */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 14,
            }}>
                {projects.map((proj, i) => {
                    const c = COLORS[proj.color] || COLORS.lilas
                    return (
                        <div
                            key={i}
                            id={`proj-card-${i}`}
                            style={{
                                background: 'var(--white)',
                                border: '1px solid var(--border)',
                                borderRadius: 12, padding: 24,
                                opacity: 0, transform: 'translateY(16px)',
                                transition: 'opacity 0.45s, transform 0.45s, border-color 0.2s, box-shadow 0.2s',
                                cursor: proj.link ? 'pointer' : 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = c.border
                                e.currentTarget.style.boxShadow = `0 4px 24px ${c.bg}`
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                const link = e.currentTarget.querySelector('.proj-link')
                                if (link) link.style.opacity = '1'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border)'
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.transform = 'translateY(0)'
                                const link = e.currentTarget.querySelector('.proj-link')
                                if (link) link.style.opacity = '0'
                            }}
                            onClick={() => proj.link && window.open(proj.link, '_blank')}
                        >
                            {/* Catégorie */}
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: 6,
                                padding: '4px 10px', borderRadius: 100,
                                fontSize: 11, fontWeight: 600, marginBottom: 14,
                                color: c.text, background: c.bg, border: `1px solid ${c.border}`,
                            }}>
                                {proj.category}
                            </div>

                            {/* Titre */}
                            <div style={{
                                fontSize: 15, fontWeight: 700,
                                color: 'var(--ink)', marginBottom: 8,
                            }}>
                                {proj.title}
                            </div>

                            {/* Description */}
                            <p style={{
                                fontSize: 13, color: 'var(--low)',
                                lineHeight: 1.75, marginBottom: 18,
                            }}>
                                {proj.description}
                            </p>

                            {/* Footer */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                    {proj.tags.map((tag, j) => (
                                        <span key={j} style={{ fontSize: 10, color: 'var(--low)' }}>
                                            {tag}{j < proj.tags.length - 1 ? ' ·' : ''}
                                        </span>
                                    ))}
                                </div>
                                <span className="proj-link" style={{
                                    fontSize: 12, color: c.text, fontWeight: 600,
                                    opacity: 0, transition: 'opacity 0.2s',
                                }}>
                                    {proj.label}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}