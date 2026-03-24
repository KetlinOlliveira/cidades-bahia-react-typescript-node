export interface Municipio {
  id: number
  nome: string
  microrregiao: {
    id: number
    nome: string
    mesorregiao: {
      id: number
      nome: string
      UF: {
        id: number
        sigla: string
        nome: string
      }
    }
  }
}

export interface MunicipioDetalhado extends Municipio {
  regiao_imediata: {
    id: number
    nome: string
  }
}

export type StatusFiltro = 'todos' | 'favoritos'
