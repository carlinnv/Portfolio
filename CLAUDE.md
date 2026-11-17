# CLAUDE.md

Context for Claude Code working in this repository. Read this first, then `docs/SETUP.md` if setup is not complete.

## Project

Personal portfolio for **Carlin Verano**, hosted on GitHub Pages at **https://carlinnv.github.io/Portfolio/**.

**Audience:** hiring managers and reviewers for **federal cybersecurity and tech positions**. They may open the site on locked-down government machines, older browsers, or print it. Every decision should favor: fast, accessible, privacy-respecting, and simple over flashy.

The visual direction is inspired by a third-party Tumblr theme saved at `template/Pixelution.html` (with assets in `template/Pixelution_files/`). **Its creator does not allow the code to be used as base code**, so it is a visual example only:
- Look at it for general layout, color, typography, and mood.
- **Never copy, port, or adapt its HTML, CSS, JavaScript, icons, or images.** All code and assets in `src/` and `public/` must be original or from approved open-licensed packages.
- Do not modify anything in `template/`. It is git-ignored and must never be committed.

## Stack

- React + TypeScript (strict mode), built with Vite
- TypeScript is pinned to `~6.0` because typescript-eslint does not support TypeScript 7 yet. Do not upgrade to 7 (including via a Dependabot PR) until typescript-eslint's `typescript` peer range allows it.
- ESLint (flat config, `eslint.config.js`) + Prettier (`.prettierrc`)
- Plain, hand-written CSS (no CSS framework unless I ask)
- Deployed via GitHub Actions to GitHub Pages
- Dependabot + CodeQL enabled on the repo

## Commands

```bash
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build (use this to test the CSP)
npm run lint      # ESLint
npm run format    # Prettier --write
```

Before saying a task is done: run `npm run lint` and `npm run build` and make sure both pass.

## Project structure

```
template/           # third-party design example (look only, never copy code; git-ignored)
src/
  components/       # one component per section (Header, About, Projects, ...)
  content/          # project/experience data as typed TS objects
  styles/           # original CSS (design tokens as custom properties)
  App.tsx
  main.tsx
public/             # static files served as-is (resume PDF, favicon, images)
docs/               # project docs (SETUP.md, etc.)
.github/            # workflows, dependabot.yml
```

## Rules

### Security and privacy (non-negotiable)
- **No third-party requests.** No analytics, no tracking pixels, no Google Fonts links, no CDN scripts or stylesheets, no embedded widgets. Fonts are self-hosted via `@fontsource/*`; libraries come from npm and are bundled.
- **No inline scripts and no inline `style="..."` attributes.** The production build ships a Content-Security-Policy `<meta>` tag (injected by the `cspPlugin` in `vite.config.ts`) that blocks them. Put styles in CSS files.
- If a change requires loosening the CSP, **stop and ask me** — don't edit the policy on your own.
- Never use `dangerouslySetInnerHTML`.
- Never commit secrets, `.env` files, or API keys. This site needs none.
- Links that open a new tab use `target="_blank" rel="noopener noreferrer"`.

### Accessibility (Section 508 / WCAG 2.1 AA)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, one `<h1>`, headings in order.
- Every `<img>` has meaningful `alt` text (or `alt=""` if decorative).
- All interactive elements are reachable and usable by keyboard, with a visible focus style. Use `<button>` and `<a>`, not clickable `<div>`s.
- Include a "Skip to main content" link.
- Respect `prefers-reduced-motion`; keep animation minimal.
- Color contrast must meet AA (4.5:1 for body text).

### Code style
- TypeScript strict; no `any`. Type the content data in `src/content/`.
- Functional components, named exports, one component per file.
- Keep content (text, project lists) in `src/content/`, separate from layout components.
- Let Prettier decide formatting; don't hand-format.

### Dependencies
- **Ask before adding any new npm dependency.** Prefer zero-dependency solutions.
- No heavy animation or 3D libraries (Framer Motion, three.js, GSAP, particles).

### Git
- Do not make any commits; I commit myself. When work is ready, stop and tell me.
- The root `.gitignore` must keep secrets, `.env` files, API keys, `node_modules/`, `dist/`, `.DS_Store`, and `template/` out of the repo.
- Don't push or change GitHub repo settings without asking.

## Deployment notes

- `vite.config.ts` sets `base` to **`'/Portfolio/'`** (case-sensitive; must match the repo name). Asset and link paths must work under that base.
- `vite.config.ts` also stops Vite from inlining font files as `data:` URIs, because `font-src 'self'` would block them. Keep that setting.
- GitHub Pages cannot set HTTP response headers, so the CSP is delivered as a `<meta>` tag. `frame-ancestors` and `report-uri` do not work in meta tags — this is a known, documented limitation (see `SECURITY.md`).
- Single-page site with anchor-link sections; no client-side router. If multiple pages are ever needed, ask first (GitHub Pages does not handle client-side routes).
