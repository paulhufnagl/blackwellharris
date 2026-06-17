# Blackwell Harris — Website (static build)

A fully static version of the Blackwell Harris site. **No build step, no framework, no dependencies** — just HTML, CSS and a single vanilla JavaScript file. Open `index.html` in a browser or deploy the folder as-is to any static host (GitHub Pages, Netlify, S3, nginx…).

## Pages
- `index.html` — Home
- `about.html` — About
- `services.html` — Services
- `impact.html` — Impact
- `contact.html` — Contact
- `privacy.html` — Privacy Policy

## Structure
```
.
├── *.html          # one file per page (self-contained markup)
├── styles.css      # global entry — @imports the token files below
├── tokens/         # design tokens: fonts, colors, typography, spacing, base reset
├── components.css  # component styles (nav, buttons, cards, footer, etc.)
├── site.js         # all interactivity (mobile menu, scroll reveal, contact form, cookie consent)
└── assets/         # images, logos, favicons, hero video
```

## Notes
- **Fonts** load from the Fontsource CDN (see `tokens/fonts.css`). To self-host, drop the `.woff2` files in and swap the `src:` URLs — the family names stay the same.
- **Analytics**: `site.js` loads Google Analytics only after the visitor accepts cookies. Replace the `GA_ID` value if you use a different property, or remove that block to drop analytics entirely.
- **Contact form** posts via a `mailto:` handoff to `contact@blackwellharris.com`. Wire it to a real backend/form service if you need server-side handling.

## Deploying to GitHub Pages
1. Push this folder to a repository.
2. In the repo settings → Pages, set the source to the branch and root (`/`).
3. Your site will be served from `https://<user>.github.io/<repo>/`.
