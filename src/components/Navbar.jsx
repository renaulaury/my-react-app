import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'
import { LanguageContext } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const { token, user, logout } = useAuth()
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { texts } = useContext(LanguageContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <span className="logo">Springfield</span>
      {token ? (
        <>
          <div className="links">
            <NavLink to="/characters">{texts.nav.characters}</NavLink>
            <NavLink to="/quote">{texts.nav.quotes}</NavLink>
          </div>
          <div className="user">
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
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? texts.nav.lightMode : texts.nav.darkMode}
      </button>
    </nav>
  )
}
