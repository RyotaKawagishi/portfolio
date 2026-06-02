import { experiences } from '../data/experiences'
import { SectionHeading } from './SectionHeading'

export function ExperienceSection() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <SectionHeading
        eyebrow="Work"
        id="experience-title"
        title="Experience"
      />
      <div className="stack">
        {experiences.map((experience) => (
          <article className="info-card" key={experience.company}>
            <div className="card-header">
              <h3>{experience.company}</h3>
              <span>{experience.period}</span>
            </div>
            <p className="card-meta">{experience.role}</p>
            <p>{experience.summary}</p>
            <ul className="tag-list">
              {experience.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>{experience.learning}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
