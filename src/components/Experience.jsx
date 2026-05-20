import { useEffect } from 'react'
import { content } from '../data/content'

export default function Experience({ key: _key }) {
    const { experience } = content

    useEffect(() => {
        // Titre arrive en premier
        const title = document.getElementById('exp-title')
        const eyebrow = document.getElementById('exp-eyebrow')
        setTimeout(() => { eyebrow.style.opacity = '1'; eyebrow.style.transform = 'translateY(0)' }, 100)
        setTimeout(() => { title.style.opacity = '1'; title.style.transform = 'translateY(0)' }, 250)

        // Ligne verticale se dessine
        setTimeout(() => {
            const fill = document.getElementById('tlFill')
            if (fill) fill.style.height = '100%'
        }, 400)

        // Chaque item arrive avec ses sous-éléments
        experience.forEach((_, i) => {
            const delay = 500 + i * 350

            // Le bloc arrive
            setTimeout(() => {
                const item = document.getElementById(`tl-item-${i}`)
                if (item) { item.style.opacity = '1'; item.style.transform = 'translateX(0)' }
            }, delay)

            // Le dot se colorie 150ms après le bloc
            setTimeout(() => {
                const dot = document.getElementById(`tl-dot-${i}`)
                if (dot) {
                    dot.style.background = experience[i].current ? 'var(--lilas)' : 'var(--mid)'
                    dot.style.boxShadow = experience[i].current
                        ? '0 0 0 4px var(--lilas-b)'
                        : '0 0 0 4px var(--border)'
                    dot.style.transform = 'scale(1.3)'
                    setTimeout(() => { dot.style.transform = 'scale(1)' }, 200)
                }
            }, delay + 150)

            // Les tags arrivent un par un après
            setTimeout(() => {
                const tags = document.querySelectorAll(`#tl-tags-${i} span`)
                tags.forEach((tag, j) => {
                    setTimeout(() => {
                        tag.style.opacity = '1'
                        tag.style.transform = 'translateY(0)'
                    }, j * 60)
                })
            }, delay + 280)
        })
    }, [])

    return (
        <div style={{
            height: '100vh', overflowY: 'auto',
            padding: '64px 72px',
            boxSizing: 'border-box',
        }}>

            {/* Eyebrow */}
            <div id="exp-eyebrow" style={{
                fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
                color: 'var(--lilas)', fontWeight: 700, marginBottom: 16,
                display: 'flex', alignItems: 'center', gap: 10,
                opacity: 0, transform: 'translateY(10px)',
                transition: 'opacity 0.5s, transform 0.5s',
            }}>
                <span style={{ width: 16, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
                Parcours
            </div>

            {/* Titre */}
            <h2 id="exp-title" style={{
                fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800,
                color: 'var(--ink)', lineHeight: 1.1, marginBottom: 52,
                opacity: 0, transform: 'translateY(14px)',
                transition: 'opacity 0.6s, transform 0.6s',
            }}>
                Mon{' '}
                <em style={{
                    fontFamily: 'Fraunces, serif', fontStyle: 'italic',
                    fontWeight: 300, color: 'var(--lilas)',
                }}>
                    expérience
                </em>
            </h2>

            {/* Timeline */}
            <div style={{ position: 'relative', paddingLeft: 32 }}>

                {/* Ligne verticale */}
                <div style={{
                    position: 'absolute', left: 0, top: 8, bottom: 0,
                    width: 1, background: 'var(--border)',
                }}>
                    <div id="tlFill" style={{
                        position: 'absolute', left: 0, top: 0,
                        width: 1, height: 0,
                        background: 'linear-gradient(180deg, var(--lilas), var(--lilas-l))',
                        transition: 'height 1.4s cubic-bezier(0.16,1,0.3,1)',
                    }} />
                </div>

                {experience.map((item, i) => (
                    <div
                        key={i}
                        id={`tl-item-${i}`}
                        style={{
                            marginBottom: i < experience.length - 1 ? 52 : 0,
                            position: 'relative',
                            opacity: 0,
                            transform: 'translateX(-16px)',
                            transition: 'opacity 0.55s, transform 0.55s',
                        }}
                    >
                        {/* Dot */}
                        <div
                            id={`tl-dot-${i}`}
                            style={{
                                position: 'absolute', left: -36, top: 6,
                                width: 11, height: 11, borderRadius: '50%',
                                background: 'var(--border)',
                                border: '2px solid var(--cream)',
                                boxShadow: '0 0 0 3px var(--border)',
                                transition: 'background 0.4s, box-shadow 0.4s, transform 0.2s',
                            }}
                        />

                        {/* Date */}
                        <div style={{
                            fontSize: 11, color: 'var(--low)',
                            letterSpacing: 2, textTransform: 'uppercase',
                            marginBottom: 10, fontWeight: 500,
                        }}>
                            {item.date}
                        </div>

                        {/* Titre poste */}
                        <div style={{
                            fontSize: 18, fontWeight: 700,
                            color: 'var(--ink)', marginBottom: 6,
                            lineHeight: 1.2,
                        }}>
                            {item.title}
                        </div>

                        {/* Entreprise + badge */}
                        <div style={{
                            fontSize: 13, color: 'var(--mid)',
                            marginBottom: 16, display: 'flex',
                            alignItems: 'center', gap: 8,
                        }}>
                            {item.company}
                            {item.badge && (
                                <span style={{
                                    fontSize: 10, padding: '3px 8px', borderRadius: 4,
                                    background: 'var(--lilas-d)', color: 'var(--lilas)',
                                    border: '1px solid var(--lilas-b)', fontWeight: 700,
                                }}>
                                    {item.badge}
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p style={{
                            fontSize: 13, color: 'var(--low)',
                            lineHeight: 1.8, maxWidth: 520, marginBottom: 18,
                        }}>
                            {item.description}
                        </p>

                        {/* Tags */}
                        <div id={`tl-tags-${i}`} style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                            {item.tags.map((tag, j) => (
                                <span key={j} style={{
                                    fontSize: 11, padding: '4px 10px', borderRadius: 4,
                                    background: 'var(--cream2)', border: '1px solid var(--border)',
                                    color: 'var(--low)', opacity: 0,
                                    transform: 'translateY(6px)',
                                    transition: 'opacity 0.3s, transform 0.3s',
                                    display: 'inline-block',
                                }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}