import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { token, user, logout } = useAuth()
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
            <NavLink to="/characters">Personnages</NavLink>
            <NavLink to="/quote">Citations</NavLink>
          </div>
          <div className="user">
            {user && <span>Bonjour, {user.username || user.email}</span>}
            <button onClick={handleLogout}>Déconnexion</button>
          </div>
        </>
      ) : (
        <div className="links">
          <NavLink to="/login">Connexion</NavLink>
          <NavLink to="/register">Inscription</NavLink>
        </div>
      )}
    </nav>
  )
}
