import type { CSSProperties } from 'react'

const fish = [
  {
    className: 'pixel-fish pixel-fish-a',
    label: 'Fish 1',
    style: {
      '--fish-top': '18%',
      '--fish-delay': '-2s',
      '--fish-duration': '24s',
      '--fish-scale': 1,
    },
  },
  {
    className: 'pixel-fish pixel-fish-b',
    label: 'Fish 2',
    style: {
      '--fish-top': '52%',
      '--fish-delay': '-9s',
      '--fish-duration': '30s',
      '--fish-scale': 0.82,
    },
  },
  {
    className: 'pixel-fish pixel-fish-c',
    label: 'Fish 3',
    style: {
      '--fish-top': '72%',
      '--fish-delay': '-17s',
      '--fish-duration': '34s',
      '--fish-scale': 0.68,
    },
  },
]

export function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="aquarium-grid" />
      <div className="aquarium-glow" />
      <div className="fish-layer">
        {fish.map((item) => (
          <span
            aria-label={item.label}
            className={item.className}
            key={item.className}
            role="img"
            style={item.style as CSSProperties}
          >
            <span className="fish-body" />
            <span className="fish-tail" />
            <span className="fish-eye" />
          </span>
        ))}
      </div>
    </div>
  )
}
