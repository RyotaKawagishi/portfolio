import { Outlet } from 'react-router-dom'
import { AnimatedBackground } from './AnimatedBackground'
import { CursorFollower } from './CursorFollower'
import { Navigation } from './Navigation'

export function Layout() {
  return (
    <>
      <AnimatedBackground />
      <CursorFollower />
      <div className="site-shell">
        <Navigation />
        <Outlet />
      </div>
    </>
  )
}
