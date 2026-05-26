import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Sanctuary from './pages/Sanctuary'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanctuary/:slug" element={<Sanctuary />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
