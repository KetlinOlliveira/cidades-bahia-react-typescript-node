import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Reset básico de estilos
const globalStyle = document.createElement('style')
globalStyle.innerHTML = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #f5f5f5; }
`
document.head.appendChild(globalStyle)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
