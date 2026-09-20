import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {profile.name} | Building AI systems for real-world impact</p>
      <p>
        <Link to="/resume">Resume</Link>
        ·
        <Link to="/#projects">Projects</Link>
      </p>
    </footer>
  )
}
