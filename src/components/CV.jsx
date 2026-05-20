export default function CV({ isMobile }) {

  if (isMobile) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        padding: 40,
        background: 'var(--cream)',
      }}>
        <div style={{ fontSize: 48 }}>📄</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>
          Mon CV
        </div>
        <p style={{ fontSize: 14, color: 'var(--low)', textAlign: 'center', lineHeight: 1.7 }}>
          Telecharge mon CV pour le consulter sur mobile
        </p>
        <a
          href="/CV_GWENDAL_ROLLAND-Data_analyst.pdf"
          download
          style={{
            padding: '14px 32px',
            background: 'var(--ink)',
            color: 'var(--white)',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Telecharger PDF
        </a>
      </div>
    )
  }

  return (
    <div style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--cream)',
    }}>

      {/* Header */}
      <div style={{
        padding: '20px 32px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--cream2)',
        flexShrink: 0,
      }}>
        <div>
          <div style={{
            fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
            color: 'var(--lilas)', fontWeight: 700, marginBottom: 4,
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 12, height: 1, background: 'var(--lilas)', display: 'inline-block' }} />
            Curriculum Vitae
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>
            Gwendal Rolland
          </div>
        </div>
        <a
          href="/CV_GWENDAL_ROLLAND-Data_analyst.pdf"
          download
          style={{
            padding: '10px 20px',
            background: 'var(--ink)',
            color: 'var(--white)',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--lilas)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--ink)'}
        >
          Telecharger PDF
        </a>
      </div>

      {/* PDF viewer */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', justifyContent: 'center', background: 'var(--cream3)' }}>
        <iframe
          src="/CV_GWENDAL_ROLLAND-Data_analyst.pdf#zoom=75&view=FitH"
          style={{
            width: '820px',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          title="CV Gwendal Rolland"
        />
      </div>

    </div>
  )
}
