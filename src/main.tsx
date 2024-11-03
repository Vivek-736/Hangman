import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-screen'>
    <StrictMode>
      <Navbar />
      <App />
    </StrictMode>,
  </div>
)