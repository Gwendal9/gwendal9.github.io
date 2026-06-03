import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Stack() {
    const { content, lang } = useLanguage()
    const { stack, pythonLibs } = content
    const [pyTooltip, setPyTooltip] = useState(null) // { top, left } ou null

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
                const card = document.getElementById('stack-item-' + i)
                if (card) { card.style.opacity = '1'; card.style.transform = 'translateY(0) scale(1)' }
            }, delay)
        })
    }, [])

    return (
        <>
        <div style={{
            height: '100vh', overflowY: 'auto', overflowX: 'hidden',
            padding: window.innerWidth <= 768 ? '4px 16px 135px' : '48px 72px',
            boxSizing: 'border-box',
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
                fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                gap: 16,
                width: '100%',
            }}>
                {stack.map((item, i) => (
                    <div
                        key={i}
                        id={'stack-item-' + i}
                        style={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', gap: 10,
                            padding: '20px 8px',
                            borderRadius: 12, textAlign: 'center',
                            opacity: 0, transform: 'translateY(20px) scale(0.95)',
                            transition: 'opacity 0.4s, transform 0.4s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.filter = 'drop-shadow(0 4px 10px rgba(124,58,237,0.2))'
                            if (item.name === 'Python') {
                                const rect = e.currentTarget.getBoundingClientRect()
                                setPyTooltip({ top: rect.bottom + 10, left: rect.left + rect.width / 2 })
                            }
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)'
                            const img = e.currentTarget.querySelector('img')
                            if (img) img.style.filter = 'none'
                            if (item.name === 'Python') setPyTooltip(null)
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: 40, height: 40, objectFit: 'contain', transition: 'filter 0.25s' }}
                        />
                        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--mid)', lineHeight: 1.3 }}>
                            {item.name}
                        </div>
                        {item.name === 'Python' && (
                            <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--lilas)', opacity: 0.7, marginTop: -4, letterSpacing: 0.5 }}>
                                +{pythonLibs.length} libs
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Tooltip librairies Python */}
        {pyTooltip && (
            <div style={{
                position: 'fixed',
                top: pyTooltip.top,
                left: pyTooltip.left,
                transform: 'translateX(-50%)',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '12px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                zIndex: 1000,
                minWidth: 230,
                pointerEvents: 'none',
            }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--low)', marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>
                    {lang === 'en' ? 'Libraries & Frameworks' : 'Librairies & Frameworks'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                    {pythonLibs.map((lib, idx) => (
                        <span key={idx} style={{
                            display: 'inline-flex', alignItems: 'center', gap: 4,
                            padding: '3px 8px',
                            background: 'rgba(37,99,235,0.06)',
                            border: '1px solid rgba(37,99,235,0.15)',
                            borderRadius: 4,
                            fontSize: 10, fontWeight: 500, color: 'var(--mid)',
                        }}>
                            {lib.img && (
                                <img
                                    src={lib.img}
                                    alt={lib.name}
                                    style={{ width: 11, height: 11, objectFit: 'contain' }}
                                    onError={e => { e.target.style.display = 'none' }}
                                />
                            )}
                            {lib.name}
                        </span>
                    ))}
                </div>
            </div>
        )}
        </>
    )
}
