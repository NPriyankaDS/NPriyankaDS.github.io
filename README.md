# N Priyanka — Portfolio (React + Vite)

Rebuilt from the original static HTML/CSS site into React so content is
data-driven instead of copy-pasted markup, and styling actually matches
what the markup uses (the old `style.css` was missing most of the classes
`index.html` referenced, so a lot of the page was unstyled).

## Stack

- **React 18 + Vite** — fast dev server, tiny build, easiest modern
  framework to pick up if you're new to frontend frameworks.
- **react-router-dom** — client-side routing (`/`, `/resume`).
- Plain CSS with custom properties (no extra styling framework to learn).

## Project structure

```
src/
  data/portfolio.js        <- ALL content: bio, skills, projects, experience.
                               Edit this file to update the site. No JSX needed.
  components/
    Navbar.jsx, Footer.jsx
    GraphField.jsx          <- hero background graphic
    ProjectCard.jsx          <- one card component reused for every project
    sections/                <- Hero, About, Skills, Projects, OpenSource,
                                 Experience, Contact
  pages/
    Home.jsx, Resume.jsx
  index.css                 <- design tokens + all styles
```

**To add, edit, or remove a project:** open `src/data/portfolio.js` and
edit the `featuredProjects`, `omdenaProjects`, or `openSourceProjects`
array. The page updates automatically — no HTML duplication.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview the production build locally
```

## Deploy to GitHub Pages

A workflow at `.github/workflows/deploy_pages.yml` builds and deploys
`dist/` automatically on every push to `main` (uses GitHub's official
Pages actions — no `gh-pages` branch needed). In your repo settings,
set **Settings → Pages → Source → GitHub Actions**.

If this app lives at `https://<user>.github.io/` (a user/organization
site repo), keep `base: '/'` in `vite.config.js`. If you move it into a
project repo instead (`https://<user>.github.io/<repo>/`), change it to
`base: '/<repo>/'`.

## Missing asset

Your resume PDF wasn't in the original upload. Drop it in `public/` as
`resume.pdf` and the "Download Resume" buttons will work — see
`public/README-add-resume.txt`.
