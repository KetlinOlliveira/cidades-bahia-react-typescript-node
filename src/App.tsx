import { useState, useEffect, useMemo } from 'react'
import { Municipio } from './types'
import { getMunicipiosByEstado } from './services/ibge'
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { MunicipioCard } from './components/MunicipioCard'

type Aba = 'todos' | 'favoritos'

export default function App() {
  const [municipios, setMunicipios] = useState<Municipio[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [erro, setErro] = useState<string | null>(null)
  const [busca, setBusca] = useState<string>('')
  const [mesoFiltro, setMesoFiltro] = useState<string>('')
  const [favoritos, setFavoritos] = useState<Set<number>>(new Set())
  const [aba, setAba] = useState<Aba>('todos')

  useEffect(() => {
    getMunicipiosByEstado('BA')
      .then(setMunicipios)
      .catch((e: Error) => setErro(e.message))
      .finally(() => setLoading(false))
  }, [])

  const mesorregioesUnicas = useMemo(() => {
    const set = new Set(municipios.map((m) => m.microrregiao.mesorregiao.nome))
    return Array.from(set).sort()
  }, [municipios])

  const municipiosFiltrados = useMemo(() => {
    return municipios.filter((m) => {
      const matchBusca = m.nome.toLowerCase().includes(busca.toLowerCase())
      const matchMeso = mesoFiltro ? m.microrregiao.mesorregiao.nome === mesoFiltro : true
      const matchAba = aba === 'favoritos' ? favoritos.has(m.id) : true
      return matchBusca && matchMeso && matchAba
    })
  }, [municipios, busca, mesoFiltro, aba, favoritos])

  function toggleFavorito(id: number) {
    setFavoritos((prev) => {
      const novo = new Set(prev)
      if (novo.has(id)) {
        novo.delete(id)
      } else {
        novo.add(id)
      }
      return novo
    })
  }

  return (
    <div style={styles.app}>
      <Header total={municipios.length} filtrados={municipiosFiltrados.length} />

      <SearchBar
        value={busca}
        onChange={setBusca}
        mesorregioesUnicas={mesorregioesUnicas}
        mesoFiltro={mesoFiltro}
        onMesoChange={setMesoFiltro}
      />

      {/* Abas */}
      <div style={styles.abas}>
        <button
          onClick={() => setAba('todos')}
          style={{ ...styles.aba, ...(aba === 'todos' ? styles.abaAtiva : {}) }}
        >
          Todos os municípios
        </button>
        <button
          onClick={() => setAba('favoritos')}
          style={{ ...styles.aba, ...(aba === 'favoritos' ? styles.abaAtiva : {}) }}
        >
          ★ Favoritos ({favoritos.size})
        </button>
      </div>

      {/* Conteúdo */}
      <main style={styles.main}>
        {loading && (
          <div style={styles.centro}>
            <p style={styles.loadingText}>Carregando municípios...</p>
          </div>
        )}

        {erro && (
          <div style={styles.centro}>
            <p style={styles.erroText}>❌ {erro}</p>
          </div>
        )}

        {!loading && !erro && municipiosFiltrados.length === 0 && (
          <div style={styles.centro}>
            <p style={styles.vazioText}>
              {aba === 'favoritos'
                ? 'Nenhum município favoritado ainda.'
                : 'Nenhum município encontrado para essa busca.'}
            </p>
          </div>
        )}

        {!loading && !erro && (
          <div style={styles.grid}>
            {municipiosFiltrados.map((municipio) => (
              <MunicipioCard
                key={municipio.id}
                municipio={municipio}
                favorito={favoritos.has(municipio.id)}
                onToggleFavorito={toggleFavorito}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: '100vh',
    background: '#f5f5f5',
    fontFamily: "'Inter', sans-serif",
  },
  abas: {
    display: 'flex',
    gap: 4,
    padding: '16px 32px 0',
    borderBottom: '1px solid #e5e5e5',
    background: '#fff',
  },
  aba: {
    padding: '10px 20px',
    border: 'none',
    borderBottom: '2.5px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontSize: 14,
    color: '#777',
    fontWeight: 500,
    transition: 'color 0.15s',
    fontFamily: 'inherit',
  },
  abaAtiva: {
    color: '#1a1a1a',
    borderBottomColor: '#1a1a1a',
    fontWeight: 600,
  },
  main: {
    padding: '24px 32px',
    maxWidth: 1400,
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 14,
  },
  centro: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 80,
  },
  loadingText: { color: '#777', fontSize: 16 },
  erroText: { color: '#c0392b', fontSize: 16 },
  vazioText: { color: '#999', fontSize: 15 },
}
