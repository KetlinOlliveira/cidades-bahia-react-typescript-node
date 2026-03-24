interface HeaderProps {
  total: number
  filtrados: number
}

export function Header({ total, filtrados }: HeaderProps) {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div style={styles.logoArea}>
          <span style={styles.logoIcon}>🏙️</span>
          <div>
            <h1 style={styles.title}>Cidades Dashboard</h1>
            <p style={styles.subtitle}>Municípios da Bahia — dados do IBGE</p>
          </div>
        </div>
      </div>
      <div style={styles.stats}>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{total}</span>
          <span style={styles.statLabel}>Total de municípios</span>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>{filtrados}</span>
          <span style={styles.statLabel}>Exibindo</span>
        </div>
      </div>
    </header>
  )
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    background: '#280905',
    color: '#fff',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  },
  left: { display: 'flex', alignItems: 'center', gap: 16 },
  logoArea: { display: 'flex', alignItems: 'center', gap: 14 },
  logoIcon: { fontSize: 36 },
  title: { margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.3px' },
  subtitle: { margin: '2px 0 0', fontSize: 13, color: '#aaa', fontWeight: 400 },
  stats: { display: 'flex', gap: 24 },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  statNumber: { fontSize: 28, fontWeight: 700, lineHeight: 1 },
  statLabel: { fontSize: 11, color: '#aaa', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.5px' },
}
