import { useEffect, useState, useRef } from 'react'
import { content } from '../data/content'
import Particles from './Particles'

const TYPING_TITLES = ['Data Analyst', 'IA & Big Data']

function useTypingEffect(titles) {
  const [display, setDisplay] = useState('')
  const [titleIdx, setTitleIdx] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = titles[titleIdx]
    let timeout

    if (typing) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 40)
      } else {
        setTitleIdx(i => (i + 1) % titles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIdx, typing, titleIdx, titles])

  return display
}

export default function Hero({ onNavigate }) {
  const { hero } = content
  const typedTitle = useTypingEffect(TYPING_TITLES)
  const photoRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!photoRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 12
      photoRef.current.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'clamp(88px, 10vw, 120px) clamp(24px, 5vw, 60px) 72px',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
    }}>
      <Particles />

      {/* Ligne accent top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 'clamp(24px, 5vw, 60px)',
        height: '2px',
        background: 'linear-gradient(90deg, var(--lilas), transparent)',
        animation: 'linedraw 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        width: 0,
      }} />

      {/* Photo de profil avec parallax */}
      <div ref={photoRef} style={{
        position: 'absolute',
        top: 'clamp(88px, 10vw, 120px)',
        right: 'clamp(24px, 5vw, 60px)',
        opacity: 0,
        animation: 'fadeup 0.6s 0.8s forwards',
        transition: 'transform 0.1s ease-out',
      }}>
        <div style={{
          width: 130,
          height: 130,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--white)',
          animation: 'photo-pulse 3s ease-in-out infinite',
        }}>
          <img
            src="/CV_photo.jpg"
            alt="Gwendal Rolland"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Infos essentielles */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '44px',
        opacity: 0,
        animation: 'fadeup 0.5s 0.3s forwards',
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 14px', borderRadius: '100px',
          border: '1px solid var(--lilas-b)', background: 'var(--lilas-d)',
          fontSize: '12px', color: 'var(--lilas)', fontWeight: 500,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--lilas)', display: 'inline-block',
            animation: 'blink 2.5s ease-in-out infinite',
          }} />
          Disponible immediatement
        </span>
        <span style={{ fontSize: 12, color: 'var(--low)' }}>📍 Paris — Vehicule</span>
        <span style={{ fontSize: 12, color: 'var(--low)' }}>📄 CDI / Mission</span>
      </div>

      {/* Nom */}
      <div style={{ marginBottom: '16px' }}>
        {[hero.firstName, hero.lastName].map((name, i) => (
          <span key={i} style={{
            display: 'block',
            overflow: 'hidden',
            fontSize: 'clamp(42px, 10vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
          }}>
            <span style={{
              display: 'block',
              transform: 'translateY(100%)',
              animation: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ' + (0.4 + i * 0.15) + 's forwards',
              fontFamily: i === 1 ? 'Fraunces, serif' : 'inherit',
              fontStyle: i === 1 ? 'italic' : 'normal',
              fontWeight: i === 1 ? 300 : 800,
              color: i === 1 ? 'var(--lilas)' : 'var(--ink)',
            }}>
              {name}
            </span>
          </span>
        ))}
      </div>

      {/* Typing effect */}
      <div style={{
        fontSize: 'clamp(16px, 2.5vw, 22px)',
        fontWeight: 600,
        color: 'var(--mid)',
        marginBottom: '28px',
        height: 32,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        opacity: 0,
        animation: 'fadeup 0.5s 0.9s forwards',
      }}>
        {typedTitle}
        <span style={{
          display: 'inline-block',
          width: 2,
          height: '1em',
          background: 'var(--lilas)',
          marginLeft: 2,
          animation: 'blink 1s infinite',
        }} />
      </div>

      {/* Description */}
      <p style={{
        fontSize: '15px',
        color: 'var(--low)',
        lineHeight: 1.8,
        maxWidth: '460px',
        marginBottom: '40px',
        opacity: 0,
        animation: 'fadeup 0.6s 1.05s forwards',
      }}>
        {hero.description}
      </p>

      {/* Boutons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        opacity: 0,
        animation: 'fadeup 0.5s 1.2s forwards',
      }}>
        <a
          href="/CV_GWENDAL_ROLLAND-Data_analyst.pdf"
          download
          style={{
            padding: '13px 28px',
            background: 'var(--ink)',
            color: 'var(--white)',
            fontSize: '13px',
            fontWeight: 600,
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--lilas)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--ink)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Telecharger CV
        </a>
        <button
          onClick={() => onNavigate('projets')}
          style={{
            padding: '13px 28px',
            background: 'var(--white)',
            border: '1px solid var(--border)',
            color: 'var(--low)',
            fontSize: '13px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--lilas)'
            e.currentTarget.style.color = 'var(--lilas)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)'
            e.currentTarget.style.color = 'var(--low)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Voir les projets
        </button>
      </div>

      {/* Mots-cles */}
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        marginTop: 48,
        opacity: 0,
        animation: 'fadeup 0.5s 1.4s forwards',
      }}>
        {content.keywords.map((kw, i) => (
          <span key={i} style={{
            padding: '8px 16px',
            borderRadius: 8,
            background: i === 0 ? 'var(--lilas-d)' : 'var(--white)',
            border: '1px solid ' + (i === 0 ? 'var(--lilas-b)' : 'var(--border)'),
            fontSize: 12,
            fontWeight: 600,
            color: i === 0 ? 'var(--lilas)' : 'var(--mid)',
            letterSpacing: 0.5,
          }}>
            {kw}
          </span>
        ))}
      </div>

    </section>
  )
}
