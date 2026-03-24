import { Municipio } from '../types'

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

export async function getMunicipiosByEstado(uf: string): Promise<Municipio[]> {
  const response = await fetch(
    `${BASE_URL}/localidades/estados/${uf}/municipios?orderBy=nome`
  )
  if (!response.ok) {
    throw new Error(`Erro ao buscar municípios: ${response.status}`)
  }
  return response.json()
}

export async function getMunicipioById(id: number): Promise<Municipio> {
  const response = await fetch(`${BASE_URL}/localidades/municipios/${id}`)
  if (!response.ok) {
    throw new Error(`Erro ao buscar município: ${response.status}`)
  }
  return response.json()
}
