# 🏙️ Cidades Dashboard — Bahia

Dashboard interativo para visualização dos **417 municípios da Bahia**, construído com **React + TypeScript** e dados em tempo real da **API pública do IBGE**.

> Projeto desenvolvido como parte do portfólio de estudos

---

## ✨ Funcionalidades

- 📋 **Listagem completa** dos 417 municípios da Bahia
- 🔍 **Busca em tempo real** por nome do município
- 🗂️ **Filtro por mesorregião** (7 mesorregiões da Bahia)
- ★ **Sistema de favoritos** para marcar municípios de interesse
- 📊 **Contador dinâmico** de municípios exibidos vs total
- 📱 **Layout responsivo** para diferentes tamanhos de tela

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| React 18 | Componentização e gerenciamento de estado |
| TypeScript | Tipagem estática e segurança de dados |
| Vite | Bundler e servidor de desenvolvimento |
| IBGE API | Fonte de dados pública e oficial |

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/KetlinOlliveira/cidades-dashboard.git

# Entre na pasta
cd cidades-dashboard

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

---

## 🔗 API utilizada

**IBGE — Serviço de Dados**
```
GET https://servicodados.ibge.gov.br/api/v1/localidades/estados/BA/municipios
```

Documentação completa: [servicodados.ibge.gov.br](https://servicodados.ibge.gov.br/api/docs/localidades)

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Header.tsx        # Cabeçalho com estatísticas
│   ├── SearchBar.tsx     # Barra de busca e filtros
│   └── MunicipioCard.tsx # Card de cada município
├── services/
│   └── ibge.ts           # Chamadas à API do IBGE
├── types/
│   └── index.ts          # Tipagens TypeScript
├── App.tsx               # Componente principal
└── main.tsx              # Entry point
```

---

## 👩‍💻 Autora

**Ketlin Oliveira**
- GitHub: [@KetlinOlliveira](https://github.com/KetlinOlliveira)
- LinkedIn: [ketlin-oliveiradev](https://www.linkedin.com/in/ketlin-oliveiradev)
