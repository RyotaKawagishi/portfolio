import { profile } from '../data/profile'

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="page-title">
      <h1 className="hero-title" id="page-title" aria-label={profile.name}>
        Ryota
        <br />
        Kawagishi
      </h1>
      <p className="lead">{profile.title}</p>
      <p className="hero-copy">{profile.intro}</p>
    </section>
  )
}
