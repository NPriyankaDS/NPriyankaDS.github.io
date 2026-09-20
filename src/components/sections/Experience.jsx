import { experience } from '../../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">05 · experience</span>
        <h2>Experience &amp; Impact</h2>

        <div style={{ marginTop: '1.5rem' }}>
          {experience.map((e) => (
            <div className="experience-item" key={e.title}>
              <div className="experience-title">
                <h3>{e.title}</h3>
              </div>
              <div className="experience-date">{e.date}</div>
              <p className="experience-description">{e.description}</p>
              <ul className="experience-highlights">
                {e.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
