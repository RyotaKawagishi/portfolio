export type SkillCategory = {
  name: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: ['Ruby', 'Python', 'C++', 'TypeScript'],
  },
  {
    name: 'Frameworks & Libraries',
    items: ['Ruby on Rails', 'React', 'TensorFlow'],
  },
  {
    name: 'Cloud / Infrastructure',
    items: ['AWS', 'Kubernetes', 'Docker'],
  },
]
