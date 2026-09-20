import { about } from '../../data/portfolio.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="eyebrow">01 · about</span>
        <h2>About Me</h2>
        <div className="about-content" style={{ marginTop: '1.5rem' }}>
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
