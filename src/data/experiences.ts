export type Experience = {
  company: string
  period: string
  role: string
  summary: string
  technologies: string[]
  learning: string
}

export const experiences: Experience[] = [
  {
    company: 'Techouse',
    period: 'Apr 2026 - present',
    role: 'Software Engineer Intern',
    summary:
      'Working on product development in a professional engineering environment.',
    technologies: ['Ruby on Rails', 'AWS', 'Docker'],
    learning:
      'Learning how to design maintainable features and collaborate through code review and CI.',
  },
]
