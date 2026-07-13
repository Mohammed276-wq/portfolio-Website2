# Portfolio — Mohammed Abd Al Rahman Himedan

Personal portfolio website for **Mohammed Abd Al Rahman Himedan**, AI automation & web developer. A dark-themed, modern single-page site built with React, Vite, Tailwind CSS, and Framer Motion, deployed to GitHub Pages.

## Tech Stack

- **React 19** + **Vite 7** — fast SPA development and builds
- **Tailwind CSS 4** — utility-first styling (via the `@tailwindcss/vite` plugin)
- **Framer Motion** — scroll and entrance animations
- **GitHub Pages** — hosting (automated via GitHub Actions)

## Project Structure

```
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── index.html
├── vite.config.js                 # base set to /portfolio-Website2/ for Pages
└── src/
    ├── main.jsx                   # React entry point
    ├── App.jsx                    # Page layout / section order
    ├── index.css                  # Tailwind import + dark theme tokens
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Deployment

Two options are set up:

1. **GitHub Actions (recommended):** every push to `main` builds the site and deploys it to GitHub Pages. In the repo settings, set **Pages → Source** to **GitHub Actions**.
2. **Manual:** `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch using the `gh-pages` package.

The site is served at `https://mohammed276-wq.github.io/portfolio-Website2/` — the Vite `base` option in `vite.config.js` must match the repository name.

## Theme

Dark theme colors are defined as Tailwind theme tokens in `src/index.css` (`--color-background`, `--color-surface`, `--color-primary`, `--color-accent`, …) so they can be tweaked in one place.
