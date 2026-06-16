import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { I18nextProvider } from 'react-i18next'
import { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { PrivateDocumentsProvider } from './context/PrivateDocumentsContext'
import i18n from './i18n/i18n'
import Home from './pages/Home'
import Sanctuary from './pages/Sanctuary'

function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#2d4a2b',
      color: '#faf9f6',
    }}>
      <p>Cargando...</p>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <I18nextProvider i18n={i18n}>
          <PrivateDocumentsProvider>
            <BrowserRouter>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sanctuary/:slug" element={<Sanctuary />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </AnimatePresence>
            </BrowserRouter>
          </PrivateDocumentsProvider>
        </I18nextProvider>
      </Suspense>
    </ErrorBoundary>
  )
}
