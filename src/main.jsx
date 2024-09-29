import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/components/js/App.jsx'
import './assets/components/scss/styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
