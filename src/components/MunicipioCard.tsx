import { Municipio } from '../types'

interface MunicipioCardProps {
  municipio: Municipio
  favorito: boolean
  onToggleFavorito: (id: number) => void
}

export function MunicipioCard({ municipio, favorito, onToggleFavorito }: MunicipioCardProps) {
  const mesorregiao = municipio.microrregiao.mesorregiao.nome
  const microrregiao = municipio.microrregiao.nome

  return (
    <div style={styles.card}>
      <div style={styles.top}>
        <div>
          <h3 style={styles.nome}>{municipio.nome}</h3>
          <span style={styles.id}>Cód. IBGE: {municipio.id}</span>
        </div>
        <button
          onClick={() => onToggleFavorito(municipio.id)}
          style={styles.favBtn}
          title={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {favorito ? '★' : '☆'}
        </button>
      </div>

      <div style={styles.tags}>
        <span style={styles.tag}>📍 {mesorregiao}</span>
        <span style={{ ...styles.tag, ...styles.tagSecondary }}>
          {microrregiao}
        </span>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: '#fff',
    border: '1.5px solid #ebebeb',
    borderRadius: 10,
    padding: '16px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    transition: 'box-shadow 0.15s, transform 0.15s',
    cursor: 'default',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nome: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: '#1a1a1a',
  },
  id: {
    fontSize: 11,
    color: '#aaa',
    marginTop: 2,
    display: 'block',
  },
  favBtn: {
    background: 'none',
    border: 'none',
    fontSize: 20,
    cursor: 'pointer',
    color: '#f59e0b',
    padding: '0 2px',
    lineHeight: 1,
  },
  tags: {
    display: 'flex',
    gap: 6,
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 11,
    background: '#f0f0f0',
    color: '#4a4a4a',
    borderRadius: 20,
    padding: '3px 10px',
    fontWeight: 500,
  },
  tagSecondary: {
    background: '#e8e8e8',
    color: '#666',
  },
}
