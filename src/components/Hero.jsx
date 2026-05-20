import { useEffect } from 'react'
import { content } from '../data/content'

export default function Hero({ onNavigate }) {
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
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
          <span
            key={chip}
            style={{
              padding: '6px 14px',
              borderRadius: '100px',
              border: '1px solid var(--border)',
              background: 'var(--white)',
              fontSize: '12px',
              color: 'var(--low)',
              fontWeight: 500,
              transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
              cursor: 'default',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--lilas)'
              e.currentTarget.style.color = 'var(--lilas)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--low)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
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

      {/* Compteurs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        background: 'var(--border)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 56,
        opacity: 0,
        animation: 'fadeup 0.5s 1.6s forwards',
      }}>
        {content.counters.map((c, i) => (
          <div key={i} style={{
            background: 'var(--white)',
            padding: '24px 20px',
          }}>
            <div style={{
              fontSize: 36,
              fontWeight: 800,
              color: 'var(--lilas)',
              lineHeight: 1,
              marginBottom: 6,
            }}>
              {c.value}{c.suffix}
            </div>
            <div style={{ fontSize: 11, color: 'var(--low)', letterSpacing: 1 }}>
              {c.label}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
