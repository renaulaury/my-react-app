import { createContext, useEffect, useState } from 'react'
import { translations } from '../translations/translations'

export const LanguageContext = createContext(null)
const LANGUAGE_KEY = 'language'

// Langue initiale : celle sauvegardée, sinon celle du navigateur (français par défaut)
function getInitialLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY)
  if (saved in translations) return saved
  return navigator.language.startsWith('en') ? 'en' : 'fr'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  // À chaque changement, on met à jour l'attribut lang de <html> et on la sauvegarde
  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem(LANGUAGE_KEY, language)
  }, [language])

  // texts : les textes de la langue courante (ex. texts.nav.logout)
  const texts = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  )
}
