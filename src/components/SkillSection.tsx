import { skills } from '../data/skills'
import { SectionHeading } from './SectionHeading'

export function SkillSection() {
  return (
    <section className="section" aria-labelledby="skill-title">
      <SectionHeading eyebrow="About" id="skill-title" title="Skill" />
      <div className="card-grid">
        {skills.map((category) => (
          <article className="info-card" key={category.name}>
            <h3>{category.name}</h3>
            <ul className="tag-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
