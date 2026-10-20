import { AuthProvider } from './AuthContext'
import { ThemeProvider } from './ThemeContext'
import { LanguageProvider } from './LanguageContext'

// Regroupe tous les providers de l'application en un seul composant
export function AppProvider({ children }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
