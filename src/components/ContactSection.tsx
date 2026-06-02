import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function ContactSection() {
  return (
    <section className="section" aria-labelledby="contact-title">
      <SectionHeading eyebrow="Contact" id="contact-title" title="Contact" />
      <a className="text-link" href={profile.githubUrl}>
        {profile.githubUrl}
      </a>
    </section>
  )
}
