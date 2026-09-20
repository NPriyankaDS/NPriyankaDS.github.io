import { profile } from '../../data/portfolio.js'

export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: 'none' }}>
      <div className="container contact-container">
        <span className="eyebrow center">06 · contact</span>
        <h2>Let's Connect</h2>
        <p className="contact-intro">
          I'm always interested in discussing AI opportunities, collaborations, open source
          contributions, or talking about the latest in ML, LLMs, agentic AI, knowledge graphs,
          and AI for social impact. Feel free to reach out!
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Email</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Priyanka N</a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">NPriyankaDS</a>
          </div>
        </div>
      </div>
    </section>
  )
}
