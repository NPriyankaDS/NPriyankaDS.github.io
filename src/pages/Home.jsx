import Hero from '../components/sections/Hero.jsx'
import About from '../components/sections/About.jsx'
import Skills from '../components/sections/Skills.jsx'
import Projects from '../components/sections/Projects.jsx'
import OpenSource from '../components/sections/OpenSource.jsx'
import Experience from '../components/sections/Experience.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Experience />
      <Contact />
    </main>
  )
}
