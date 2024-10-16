import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18next'
import { LanguageProvider } from './useLanguageContext.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App/>
    </LanguageProvider>
  </React.StrictMode>
)
