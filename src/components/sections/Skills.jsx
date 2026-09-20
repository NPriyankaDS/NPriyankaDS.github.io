import { skillCategories } from '../../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">02 · skills</span>
        <h2>Skills &amp; Expertise</h2>
        <div className="skills-grid" style={{ marginTop: '2rem' }}>
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <h3>
                <span aria-hidden="true">{cat.icon}</span> {cat.title}
              </h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
