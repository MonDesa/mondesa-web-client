# MonDesa Web Client

Marketing site for MonDesa — IoT-based natural-disaster monitoring.

Built with **Astro** (static output) on **Cloudflare**, with each page mounted as a
single **React + MUI** island (`client:load`). Article PDFs are served from Cloudflare
**R2** at `https://media.mondesa.org/articles/<slug>.pdf`.

## Stack

- Astro 7 + `@astrojs/cloudflare` adapter (`output: 'static'`)
- React 19 + MUI v6 + Emotion (page bodies, mounted as islands)
- Tailwind v4 (base layout / global reset)
- bun (package manager)

## Structure

```
src/
  layouts/Layout.astro        # <head>: fonts, per-route SEO/OG, favicon, Tailwind
  pages/*.astro               # thin shells -> <AppRoot page="..." client:load />
  pages/projects/[slug].astro # getStaticPaths from the 4 project slugs
  react/
    AppRoot.tsx               # providers + Navbar + <page> + Footer (one island)
    pages/  components/  contexts/  hooks/  constants/  utils/  theme.ts
public/                       # logos, team/, projects/enoe.jpg, robots.txt, sitemap.xml
```

## Commands

| Command             | Action                                              |
| ------------------- | --------------------------------------------------- |
| `bun install`       | Install dependencies                                |
| `bun run dev`       | Dev server at `localhost:4321`                      |
| `bun run build`     | Build static site to `./dist/`                      |
| `bunx astro check`  | Type-check                                          |
| `bun run deploy`    | Build + `wrangler deploy` (Cloudflare Workers)      |

## Notes

- i18n (pt/en) is client-side via `LanguageContext` (localStorage `mondesa-language`);
  prerendered HTML is English, PT applies after hydration.
- Legacy `/projects/fireRiskPredictor` 301-redirects to `/projects/fire-risk-predictor`
  (see `astro.config.mjs` -> `redirects`).
