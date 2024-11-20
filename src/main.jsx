import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/Estilos/Estilo.css"
// import { ModalDatosFamiliar } from './Componentes/UI/Modal/ModalDatosFamiliar'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
