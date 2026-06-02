import { Outlet } from 'react-router-dom'
import { Navigation } from './Navigation'

export function Layout() {
  return (
    <div className="site-shell">
      <Navigation />
      <Outlet />
    </div>
  )
}
