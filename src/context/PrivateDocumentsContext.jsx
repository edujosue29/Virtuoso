import { createContext, useContext, useState, useEffect } from 'react'

const PrivateDocumentsContext = createContext()

export function PrivateDocumentsProvider({ children }) {
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('virtuoso_private_docs_unlocked')
    if (saved === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const unlockDocuments = (pin) => {
    if (pin === '7070') {
      setIsUnlocked(true)
      localStorage.setItem('virtuoso_private_docs_unlocked', 'true')
      return true
    }
    return false
  }

  const lockDocuments = () => {
    setIsUnlocked(false)
    localStorage.removeItem('virtuoso_private_docs_unlocked')
  }

  return (
    <PrivateDocumentsContext.Provider value={{ isUnlocked, unlockDocuments, lockDocuments }}>
      {children}
    </PrivateDocumentsContext.Provider>
  )
}

export function usePrivateDocuments() {
  const context = useContext(PrivateDocumentsContext)
  if (!context) {
    throw new Error('usePrivateDocuments debe usarse dentro de PrivateDocumentsProvider')
  }
  return context
}
