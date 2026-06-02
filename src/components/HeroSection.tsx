import { profile } from '../data/profile'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <p className="eyebrow">Portfolio</p>
      <h1 id="page-title">{profile.name}</h1>
      <p className="lead">{profile.title}</p>
      <p className="hero-copy">{profile.intro}</p>
    </section>
  )
}
