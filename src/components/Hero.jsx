import { useEffect } from 'react'
import { content } from '../data/content'

export default function Hero() {
  const { hero } = content

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

      {/* Photo de profil */}
      <div style={{
        position: 'absolute',
        top: 'clamp(88px, 10vw, 120px)',
        right: 'clamp(24px, 5vw, 60px)',
        opacity: 0,
        animation: 'fadeup 0.6s 0.8s forwards',
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
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Status pill */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 16px',
        borderRadius: '100px',
        border: '1px solid var(--lilas-b)',
        background: 'var(--lilas-d)',
        fontSize: '12px',
        color: 'var(--lilas)',
        width: 'fit-content',
        marginBottom: '44px',
        opacity: 0,
        animation: 'fadeup 0.5s 0.3s forwards',
      }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--lilas)',
          boxShadow: '0 0 6px var(--lilas)',
          animation: 'blink 2.5s ease-in-out infinite',
          display: 'inline-block',
        }} />
        {hero.status}
      </div>

      {/* Nom */}
      <div style={{ marginBottom: '20px' }}>
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

      {/* Roles */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap',
        fontSize: '13px',
        marginBottom: '32px',
        opacity: 0,
        animation: 'fadeup 0.5s 0.9s forwards',
      }}>
        {hero.roles.map((role, i) => (
          <span key={i} style={{ color: i === 0 ? 'var(--mid)' : 'var(--low)' }}>
            {role}{i < hero.roles.length - 1 ? ' · ' : ''}
          </span>
        ))}
      </div>

      {/* Description */}
      <p style={{
        fontSize: '15px',
        color: 'var(--low)',
        lineHeight: 1.8,
        maxWidth: '460px',
        marginBottom: '24px',
        opacity: 0,
        animation: 'fadeup 0.6s 1.05s forwards',
      }}>
        {hero.description}
      </p>

      {/* Infos rapides */}
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        fontSize: '12px',
        color: 'var(--low)',
        marginBottom: '32px',
        opacity: 0,
        animation: 'fadeup 0.5s 1.1s forwards',
      }}>
        <span>📍 {hero.location}</span>
        <span>🟢 {hero.disponibility}</span>
        <span>📄 {hero.contract}</span>
      </div>

      {/* Chips */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '44px',
        opacity: 0,
        animation: 'fadeup 0.5s 1.2s forwards',
      }}>
        {hero.chips.map(chip => (
          <span key={chip} style={{
            padding: '6px 14px',
            borderRadius: '100px',
            border: '1px solid var(--border)',
            background: 'var(--white)',
            fontSize: '12px',
            color: 'var(--low)',
            fontWeight: 500,
          }}>
            {chip}
          </span>
        ))}
      </div>

      {/* Boutons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        opacity: 0,
        animation: 'fadeup 0.5s 1.35s forwards',
      }}>
        <a
          href="/CV_GWENDAL ROLLAND-Data analyst.pdf"
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
          }}
        >
          Telecharger CV
        </a>
        <a
          href="mailto:gwendal.rolland@yahoo.fr"
          style={{
            padding: '13px 28px',
            background: 'var(--white)',
            border: '1px solid var(--border)',
            color: 'var(--low)',
            fontSize: '13px',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Me contacter
        </a>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute',
        bottom: '36px',
        left: 'clamp(24px, 5vw, 60px)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '11px',
        color: 'var(--low)',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        opacity: 0,
        animation: 'fadeup 0.5s 1.8s forwards',
      }}>
        <span style={{
          width: '32px',
          height: '1px',
          background: 'var(--low)',
          position: 'relative',
          overflow: 'hidden',
          display: 'inline-block',
        }}>
          <span style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--lilas)',
            animation: 'scrollanim 2s ease-in-out 2s infinite',
          }} />
        </span>
        Scroll
      </div>

    </section>
  )
}
