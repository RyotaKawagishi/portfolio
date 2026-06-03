import { ContactSection } from '../components/ContactSection'
import { HeroSection } from '../components/HeroSection'

export function HomePage() {
  return (
    <main className="page">
      <HeroSection />
      <ContactSection />
    </main>
  )
}
