import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingSection from './Components/LandingSection/LandingSection.jsx'
import InterViewSection from './Components/InterViewSection/InterViewSection.jsx'



createRoot(document.getElementById('root')).render(

    <App />
  
)
