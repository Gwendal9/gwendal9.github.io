export default function Footer() {
  return (
    <div style={{
      padding: '20px clamp(24px, 5vw, 60px)',
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
      <span>Concu et developpe par <strong style={{ color: 'var(--mid)', fontWeight: 600 }}>Gwendal Rolland</strong></span>
      <span style={{ color: 'var(--border)' }}>2026</span>
    </div>
  )
}
