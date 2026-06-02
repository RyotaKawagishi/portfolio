import { NavLink } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navigation" aria-label="Primary navigation">
      <NavLink className="nav-button" to="/">
        HOME
      </NavLink>
      <NavLink className="nav-button" to="/about">
        ABOUT
      </NavLink>
    </nav>
  )
}
