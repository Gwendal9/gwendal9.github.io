import { createContext, useContext, useState } from 'react'
import { getContent } from '../data/content'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const content = getContent(lang)
  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr')

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
