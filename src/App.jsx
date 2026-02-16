import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import GitHubSection from './components/sections/GitHubSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
