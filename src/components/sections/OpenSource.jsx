import { openSourceProjects } from '../../data/portfolio.js'
import ProjectCard from '../ProjectCard.jsx'

export default function OpenSource() {
  return (
    <section id="open-source">
      <div className="container">
        <span className="eyebrow">04 · open source</span>
        <h2>{'\u{1F310}'} Open Source &amp; Knowledge Graph Contributions</h2>
        <p className="section-intro">
          I actively contribute to open source projects and knowledge graph initiatives,
          collaborating with the broader AI community on tools and libraries that advance
          AI accessibility and developer experience.
        </p>

        <div className="projects-grid">
          {openSourceProjects.map((p) => (
            <ProjectCard project={p} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
