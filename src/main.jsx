import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { LikedProvider } from './context/LikedContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LikedProvider>
        <App />
      </LikedProvider>
    </ThemeProvider>
  </StrictMode>,
)
