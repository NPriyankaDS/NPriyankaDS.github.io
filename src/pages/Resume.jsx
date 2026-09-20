import { profile } from '../data/portfolio.js'

export default function Resume() {
  return (
    <main>
      <section className="simple-page" style={{ borderBottom: 'none' }}>
        <div className="container">
          <span className="eyebrow center">resume</span>
          <h1>Download My Resume</h1>
          <p>Grab a PDF copy of my full experience, projects, and skills.</p>
          <a className="resume-button" href={profile.resumeFile} download>
            {'\u{1F4C4}'} Download Resume
          </a>
        </div>
      </section>
    </main>
  )
}
