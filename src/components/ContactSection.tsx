import { profile } from '../data/profile'

export function ContactSection() {
  return (
    <section className="section" aria-label="Contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
      </div>
      <a className="text-link" href={profile.githubUrl}>
        <svg className="link-icon" aria-hidden="true">
          <use href="/icons.svg#github-icon" />
        </svg>
        GitHub
      </a>
    </section>
  )
}
