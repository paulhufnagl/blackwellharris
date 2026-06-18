# Blackwell Harris — Website

Static website. Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies.

## Structure

Each page lives in its own folder and is served as `index.html`, giving clean URLs (`/about/`, `/services/`, …) on any static host.

```
.
├── index.html          ← Home (/)
├── about/index.html    ← /about/
├── services/index.html ← /services/
├── impact/index.html   ← /impact/
├── contact/index.html  ← /contact/
├── privacy/index.html  ← /privacy/
├── assets/             ← images, video, logos, favicons (shared)
├── tokens/             ← CSS design tokens (colors, type, spacing, fonts, base)
├── styles.css          ← global entry point (imports tokens/*)
├── components.css      ← component styles
└── site.js             ← interactions (nav, reveals, form) — no dependencies
```

## Run locally

Because pages reference shared assets with relative paths, open it through a local server rather than `file://`:

```
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Upload the whole folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, …). No configuration required. For GitHub Pages, push these files to the repo root (or `/docs`) and enable Pages for that source.
