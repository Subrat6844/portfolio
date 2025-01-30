import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { OrbitalSkills } from "@/components/orbital-skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white">
      <main>
        <Hero />
        <Projects />
        <OrbitalSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

