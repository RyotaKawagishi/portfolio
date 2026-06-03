import { useEffect, useState } from 'react'

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia) {
      return undefined
    }

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const updateEnabled = () => {
      setEnabled(canHover.matches && !prefersReducedMotion.matches)
    }

    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${event.clientX}px`,
      )
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${event.clientY}px`,
      )
    }

    updateEnabled()
    canHover.addEventListener('change', updateEnabled)
    prefersReducedMotion.addEventListener('change', updateEnabled)
    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      canHover.removeEventListener('change', updateEnabled)
      prefersReducedMotion.removeEventListener('change', updateEnabled)
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  if (!enabled) {
    return null
  }

  return <div className="cursor-follower" aria-hidden="true" />
}
