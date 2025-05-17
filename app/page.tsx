import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import TechStack from "@/components/tech-stack"
import Education from "@/components/education"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <ParticlesBackground />
      <div className=" mx-auto px-4 py-8 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
