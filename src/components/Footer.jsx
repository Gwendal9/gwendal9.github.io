import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()
  return (
    <div style={{
      padding: '16px clamp(24px, 5vw, 60px)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 11,
      color: 'var(--low)',
      letterSpacing: 1,
      flexWrap: 'wrap',
      gap: 8,
    }}>
      <span>
        {lang === 'en' ? 'Designed & built by' : 'Conçu et développé par'}{' '}
        <strong style={{ color: 'var(--mid)', fontWeight: 600 }}>Gwendal Rolland</strong>
      </span>

      {/* Boosted by Claude */}
      <a
        href="https://claude.ai"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          textDecoration: 'none', color: 'var(--low)',
          fontSize: 11, letterSpacing: 0.5,
          opacity: 0.7, transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
      >
        Boosted by
        {/* Logo Anthropic/Claude — forme caractéristique */}
        <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017L3.674 20H0L6.57 3.52zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"
            fill="var(--lilas)"
          />
        </svg>
        <span style={{ color: 'var(--lilas)', fontWeight: 600 }}>Claude</span>
      </a>

      <span style={{ color: 'var(--border)' }}>2026</span>
    </div>
  )
}
