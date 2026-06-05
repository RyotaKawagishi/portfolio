import { education } from '../data/education'
import { SectionHeading } from './SectionHeading'

export function EducationSection() {
  return (
    <section className="section" aria-labelledby="education-title">
      <SectionHeading eyebrow="Study" id="education-title" title="Education" />
      <div className="stack">
        {education.map((item) => (
          <article className="info-card" key={item.degree}>
            <div className="card-header">
              <h3>{item.school}</h3>
              <span>{item.period}</span>
            </div>
            <p className="card-meta">{item.degree}</p>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
