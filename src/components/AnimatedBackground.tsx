import type { CSSProperties } from 'react'

const rainDrops = Array.from({ length: 18 }, (_, index) => index)

export function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="rain-layer" />
      <div className="pixel-orbit">
        {rainDrops.map((drop) => (
          <span
            key={drop}
            style={
              {
                '--drop-index': drop,
                '--drop-top': `${(drop * 13) % 100}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
