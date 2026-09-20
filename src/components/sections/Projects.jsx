import { featuredProjects, omdenaProjects } from '../../data/portfolio.js'
import ProjectCard from '../ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">03 · projects</span>
        <h2>Featured Projects</h2>
        <p className="section-intro">
          My work spans mental health AI, voice-first accessibility, environmental conservation,
          healthcare systems, legal AI, and collaborative innovation through Omdena.
        </p>

        <div className="projects-grid">
          {featuredProjects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>

        <h2 className="subsection-heading">{'\u{1F30D}'} Omdena Collaborative Projects (8+ Global Impact Projects)</h2>
        <p className="subsection-intro" style={{ color: 'var(--mist)' }}>
          I've contributed to 8+ international Omdena projects collaborating with researchers,
          engineers, and domain experts worldwide on challenges in healthcare, environmental
          conservation, mental health, accessibility, and government services.
        </p>

        <div className="projects-grid">
          {omdenaProjects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
