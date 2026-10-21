import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import { LanguageContext } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import useToggle from '../hooks/useToggle'

export default function Navbar() {
  // Authentification : token (connecté ou non), utilisateur courant et déconnexion
  const { token, user, logout } = useAuth()
  // Thème clair/sombre partagé par toute l'application
  const { theme, toggleTheme } = useContext(ThemeContext)
  // Textes traduits selon la langue choisie (FR/EN)
  const { texts } = useContext(LanguageContext)
  const navigate = useNavigate()
  // Hook personnalisé : isHighlighted vaut false au départ, toggleHighlighted l'inverse à chaque appel
  const [isHighlighted, toggleHighlighted] = useToggle()

  // Déconnecte l'utilisateur puis le renvoie sur la page de connexion
  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      {/* Logo toggle */}
      <span
        className="logo"
        style={{ color: isHighlighted ? 'red' : 'inherit', cursor: 'pointer' }}
        onClick={toggleHighlighted}
      >
        Springfield
      </span>
      {/* Liens différents selon que l'utilisateur est co ou non */}
      {token ? (
        <>
          <div className="links">
            <NavLink to="/characters">{texts.nav.characters}</NavLink>
            <NavLink to="/quote">{texts.nav.quotes}</NavLink>
          </div>
          <div className="user">
            {/* Le nom s'affiche seulement une fois le user chargé */}
            {user && <span>{texts.nav.hello(user.username || user.email)}</span>}
            <button onClick={handleLogout}>{texts.nav.logout}</button>
          </div>
        </>
      ) : (
        <div className="links">
          <NavLink to="/login">{texts.nav.login}</NavLink>
          <NavLink to="/register">{texts.nav.register}</NavLink>
        </div>
      )}
      <LanguageSwitcher />
      {/* Le bouton propose le thème inverse de celui en cours */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? texts.nav.lightMode : texts.nav.darkMode}
      </button>
    </nav>
  )
}
