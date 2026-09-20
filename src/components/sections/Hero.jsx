import { profile, hero } from '../../data/portfolio.js'
import GraphField from '../GraphField.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <GraphField />
      <div className="container hero-inner">
        <span className="hero-role">{profile.role} · {profile.tagline}</span>
        <h1>{hero.headline}</h1>
        <p>{hero.body}</p>
        <a href="#projects" className="cta-button">View My Work</a>
        <a href="/resume" className="cta-secondary">Download Resume →</a>
      </div>
    </section>
  )
}
