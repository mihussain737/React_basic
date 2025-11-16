import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project2 from './Project2.jsx'
import MouseTracker from './MouseTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Project2/> */}
    <MouseTracker></MouseTracker>
  </StrictMode>,
)
