import { EducationSection } from '../components/EducationSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { SkillSection } from '../components/SkillSection'

export function AboutPage() {
  return (
    <main className="page">
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
    </main>
  )
}
