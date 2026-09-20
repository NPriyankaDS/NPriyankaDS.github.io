export default function ProjectCard({ project }) {
  const { icon, title, impact, contributionsHeading, contributions, tech, links } = project

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{icon ? `${icon} ` : ''}{title}</h3>
        <div className="project-impact">{impact}</div>
      </div>
      <div className="project-body">
        <div className="project-contributions">
          <h4>{contributionsHeading || 'Key Contributions'}</h4>
          <ul>
            {contributions.map((c, i) => (
              <li key={i}>
                {typeof c === 'string' ? c : (
                  <>{c.strong ? <strong>{c.strong} </strong> : null}{c.text}</>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-tech">
          <h4>Tech Stack</h4>
          <div className="tech-tags">
            {tech.map((t) => (
              <span className="tech-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          {links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-link ${l.primary ? 'primary' : 'secondary'}`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
