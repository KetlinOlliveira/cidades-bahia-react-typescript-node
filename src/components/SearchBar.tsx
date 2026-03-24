interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  mesorregioesUnicas: string[]
  mesoFiltro: string
  onMesoChange: (value: string) => void
}

export function SearchBar({
  value,
  onChange,
  mesorregioesUnicas,
  mesoFiltro,
  onMesoChange,
}: SearchBarProps) {
  return (
    <div style={styles.container}>
      <div style={styles.inputWrapper}>
        <span style={styles.icon}>🔍</span>
        <input
          type="text"
          placeholder="Buscar município..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={styles.input}
        />
        {value && (
          <button onClick={() => onChange('')} style={styles.clearBtn}>✕</button>
        )}
      </div>
      <select
        value={mesoFiltro}
        onChange={(e) => onMesoChange(e.target.value)}
        style={styles.select}
      >
        <option value="">Todas as mesorregiões</option>
        {mesorregioesUnicas.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    gap: 12,
    padding: '20px 32px',
    background: '#280905',
    borderBottom: '1px solid #e5e5e5',
    flexWrap: 'wrap',
  },
  inputWrapper: {
    flex: 1,
    minWidth: 240,
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    border: '1.5px solid #ddd',
    borderRadius: 8,
    padding: '0 12px',
    gap: 8,
  },
  icon: { fontSize: 16, opacity: 0.5 },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 15,
    padding: '10px 0',
    background: 'transparent',
    color: '#1a1a1a',
  },
  clearBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
    color: '#999',
    padding: '2px 4px',
  },
  select: {
    padding: '10px 14px',
    border: '1.5px solid #ddd',
    borderRadius: 8,
    fontSize: 14,
    background: '#fff',
    color: '#1a1a1a',
    cursor: 'pointer',
    outline: 'none',
    minWidth: 200,
  },
}
