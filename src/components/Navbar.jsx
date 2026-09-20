import { useState } from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Open Source', href: '/#open-source' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          {profile.name}
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '\u2715' : '\u2630'}
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
