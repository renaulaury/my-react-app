import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/experiences">Experiences</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header
