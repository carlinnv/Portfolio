import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Self-hosted fonts (bundled at build time, no requests to font CDNs).
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/700.css'
import '@fontsource/pixelify-sans/500.css'
import '@fontsource/share-tech-mono/400.css'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/print.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
