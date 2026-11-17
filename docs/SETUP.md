# Setup Plan

Step-by-step setup for the portfolio repo. Claude: work through the phases in order, check off each box as it is done, and stop at any **⏸ CHECKPOINT** to confirm with me before continuing.

| Setting         | Value                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub username | `carlinnv`                                                                                                                                                                                                                          |
| Repo name       | `Portfolio`                                                                                                                                                                                                                         |
| Site URL        | https://carlinnv.github.io/Portfolio/                                                                                                                                                                                               |
| Vite `base`     | `/Portfolio/` (case-sensitive: must match the repo name exactly)                                                                                                                                                                    |
| Design example  | `template/Pixelution.html` (visual reference only: no code may be reused; local only, never committed)                                                                                                                              |
| Fonts           | Pixelify Sans (`@fontsource/pixelify-sans`, weight 500) for your name and window titles; Share Tech Mono (`@fontsource/share-tech-mono`) for menu links, tags, dates, and entry titles; Nunito (`@fontsource/nunito`) for body text |

---

## Phase 1 — Scaffold (React + Vite + TypeScript + ESLint)

The project lives at the repo root. The old `frontend/` scaffold has been deleted; do not reuse it.

- [x] **First**, before anything else is created, make sure the root `.gitignore` exists and includes at least:
  ```
  node_modules
  dist
  dist-ssr
  *.local
  *.log
  .env*
  .DS_Store
  template/
  ```
  `template/` holds third-party theme code and artwork and must stay local.
- [x] Scaffold into a temporary folder, **not** the root (create-vite offers to delete existing files in a non-empty directory). Answer "No" if asked to install and start now:
  ```bash
  npm create vite@latest vite-scaffold -- --template react-ts
  ```
- [x] Copy the scaffold into the root without overwriting the existing docs or `.gitignore`, then delete the temp folder:
  ```bash
  rsync -a --exclude README.md --exclude .gitignore vite-scaffold/ ./
  rm -rf vite-scaffold
  ```
- [x] If the scaffold ships Oxlint (`oxlint` in `package.json`, `.oxlintrc.json`), remove it; this project uses ESLint:
  ```bash
  npm uninstall oxlint
  rm -f .oxlintrc.json
  ```
- [x] If there is no `eslint.config.js`, add ESLint (approved dependency):
  ```bash
  npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh globals
  ```
  and create `eslint.config.js` (check each plugin's README for the current flat-config export names):
  ```js
  import js from '@eslint/js'
  import globals from 'globals'
  import reactHooks from 'eslint-plugin-react-hooks'
  import reactRefresh from 'eslint-plugin-react-refresh'
  import tseslint from 'typescript-eslint'
  import { defineConfig, globalIgnores } from 'eslint/config'

  export default defineConfig([
    globalIgnores(['dist', 'template']),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs.flat.recommended,
        reactRefresh.configs.vite,
      ],
      languageOptions: { globals: globals.browser },
    },
  ])
  ```
  Set the `lint` script to `eslint .`. If the scaffold already has ESLint, keep its config and add `'template'` to the ignores.
- [x] `npm install`
  > **Done, with a change:** the scaffold installed TypeScript 7.0, but typescript-eslint 8.73 only supports TypeScript below 6.1. TypeScript is pinned to `~6.0.3` until typescript-eslint supports 7.
- [x] Confirm `tsconfig.app.json` has `"strict": true`.
- [x] Set `base` in `vite.config.ts` to the value in the table above.
- [x] Remove all Vite starter content: starter images and SVGs in `src/assets/` and `public/`, demo code in `App.tsx`, `App.css`, and default `index.css` rules.
- [x] Update `<title>`, `<meta name="description">`, and favicon in `index.html`.

**Done when:** `npm run dev` shows a blank page with the correct title, and `npm run build` and `npm run lint` pass.

---

## Phase 2 — Prettier

- [x] Install:
  ```bash
  npm install -D prettier eslint-config-prettier
  ```
- [x] Create `.prettierrc`:
  ```json
  { "singleQuote": true, "semi": false }
  ```
- [x] Create `.prettierignore`:
  ```
  dist
  node_modules
  template
  package-lock.json
  ```
- [x] In `eslint.config.js`, import `eslint-config-prettier` and add it as the **last** entry of the exported config.
- [x] Add scripts to `package.json`:
  ```json
  "lint": "eslint .",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
  ```
- [x] Run `npm run format` once on the whole project.

**Done when:** `npm run lint` and `npm run format:check` both pass with no errors.

---

## Phase 3 — Build the site, using the template as a visual example

The template's creator does not allow their code to be used as base code. Look at `template/Pixelution.html` for the general look and feel only. **Do not copy, port, or adapt its HTML, CSS, JavaScript, icons, or images.** Write all markup and styles from scratch.

- [x] Look at the template and describe its overall style in your own words: layout (e.g. sidebar vs. top nav, column widths), color palette, typography, spacing, and mood. **⏸ CHECKPOINT:** show me that description plus a proposed section and component breakdown for _my_ portfolio (e.g. Header, About, Education, Projects, Experience, Contact) before writing components.
- [x] Write original CSS in `src/styles/` (design tokens such as colors and spacing as CSS custom properties) and import it in `main.tsx`.
- [x] Create one component per section in `src/components/`.
- [x] Put text content in typed data files in `src/content/` (e.g. `projects.ts`, `experience.ts`) with placeholder content I can fill in.
- [x] Add a "Skip to main content" link and make sure the landmark structure (`header`/`nav`/`main`/`footer`) follows `CLAUDE.md`.
- [x] Any interactivity (e.g. a mobile menu toggle) is written fresh with React state, not adapted from the template's scripts.

**Done when:** the site has a similar general feel to the template but is built entirely from original code, the whole page works with keyboard only, and lint/build pass.

---

## Phase 4 — Self-hosted fonts, no third-party requests (no analytics)

- [x] Self-host the fonts (both are open-source and free to use; only the template's code is off-limits):
  ```bash
  npm install @fontsource/share-tech-mono @fontsource/nunito
  ```
  and import them (plus any needed weights) in `main.tsx`, e.g. `import '@fontsource/share-tech-mono'`.
- [x] Icons: do not use the template's icons (Flaticon uicons). Done in Phase 3: hand-drawn pixel icons live in `src/components/Icon.tsx` (no icon package).
- [x] Do **not** add Google Analytics or any other analytics/tracking.
- [x] Search `src/`, `index.html`, and `public/` for external resource URLs (`http`, `//fonts.`, `cdn`, `googletagmanager`, `analytics`, etc.). **⏸ CHECKPOINT:** show me anything found.

**Done when:** that search finds no external resource URLs (outbound `<a href>` links to GitHub/LinkedIn are fine).

---

## Phase 5 — Content-Security-Policy `<meta>` tag

- [ ] Add a build-only plugin to `vite.config.ts` that injects the CSP into `index.html` (build only, because Vite's dev server uses inline scripts):
  ```ts
  import { defineConfig, type Plugin } from 'vite'
  import react from '@vitejs/plugin-react'

  const csp = [
    "default-src 'self'",
    "script-src 'self'",
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

  const cspPlugin = (): Plugin => ({
    name: 'csp',
    apply: 'build',
    transformIndexHtml: (html) =>
      html.replace(
        '<head>',
        `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp}">`,
      ),
  })

  export default defineConfig({
    plugins: [react(), cspPlugin()],
    base: '/Portfolio/',
    build: {
      // Never inline fonts as data: URIs; font-src 'self' would block them.
      assetsInlineLimit: (file) =>
        /\.(woff2?|ttf|otf)$/.test(file) ? false : undefined,
    },
  })
  ```
- [ ] Also add to `index.html` `<head>`:
  ```html
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  ```
- [ ] Run `npm run build`, then confirm `dist/index.html` contains the CSP tag.
- [ ] If anything needs a looser policy (e.g. inline styles), **⏸ CHECKPOINT:** tell me what and why instead of changing it.

**Done when:** `dist/index.html` contains the CSP meta tag and `npm run preview` renders the site correctly. (I will check the browser console for CSP violations myself.)

---

## Phase 6 — Git + GitHub repo

The repo already exists (`main`, remote `origin` → `https://github.com/carlinnv/Portfolio.git`). Do not run `git init` or `gh repo create`. Claude does not commit (see `CLAUDE.md`); I make the commits.

- [ ] Confirm the root `.gitignore` from Phase 1 is still in place and unchanged.
- [ ] Stop tracking files that were committed before the `.gitignore` existed, and stage removal of the old scaffold:
  ```bash
  git rm --cached .DS_Store
  git rm -r --cached frontend
  ```
- [ ] Run `git status` and confirm nothing under `template/`, `node_modules/`, `dist/`, or any `.env` file is listed.
- [ ] **⏸ CHECKPOINT:** show me `git status`. I will commit and push.

---

## Phase 7 — Deploy workflow (GitHub Actions → Pages)

- [ ] Create `.github/workflows/deploy.yml`:
  ```yaml
  name: Deploy to GitHub Pages

  on:
    push:
      branches: [main]
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  concurrency:
    group: pages
    cancel-in-progress: true

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: lts/*
            cache: npm
        - run: npm ci
        - run: npm run lint
        - run: npm run format:check
        - run: npm run build
        - uses: actions/upload-pages-artifact@v3
          with:
            path: dist

    deploy:
      needs: build
      runs-on: ubuntu-latest
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - id: deployment
          uses: actions/deploy-pages@v4
  ```
- [ ] Set Pages source to GitHub Actions — either **Settings → Pages → Source → GitHub Actions**, or:
  ```bash
  gh api -X POST repos/carlinnv/Portfolio/pages -f build_type=workflow
  ```
- [ ] **⏸ CHECKPOINT:** ask me to commit and push, then confirm the workflow run succeeds (`gh run watch` or the Actions tab).

**Done when:** the site loads at the live URL with styles, fonts, and images working.

---

## Phase 8 — Dependabot

- [ ] Create `.github/dependabot.yml`:
  ```yaml
  version: 2
  updates:
    - package-ecosystem: npm
      directory: /
      schedule:
        interval: weekly
      groups:
        dev-dependencies:
          dependency-type: development
    - package-ecosystem: github-actions
      directory: /
      schedule:
        interval: weekly
  ```
- [ ] Enable Dependabot alerts and security updates — **Settings → Code security**, or:
  ```bash
  gh api -X PUT repos/carlinnv/Portfolio/vulnerability-alerts
  gh api -X PUT repos/carlinnv/Portfolio/automated-security-fixes
  ```

**Done when:** **Insights → Dependency graph → Dependabot** shows both ecosystems being monitored.

---

## Phase 9 — CodeQL

- [ ] Enable CodeQL default setup — **Settings → Code security → Code scanning → CodeQL analysis → Set up → Default**, or:
  ```bash
  gh api -X PATCH repos/carlinnv/Portfolio/code-scanning/default-setup -f state=configured
  ```
- [ ] Confirm the first CodeQL run completes (**Actions** tab or **Security → Code scanning**).

**Done when:** the Security tab shows CodeQL scanning `javascript-typescript` with no open alerts (or alerts reported to me).

---

## Phase 10 — Repo docs

- [ ] Check that `README.md` and `SECURITY.md` match what was actually built (stack, scripts, CSP, workflow). Report any mismatch to me instead of rewriting them.
- [ ] Add a `LICENSE` file with the MIT license text (`Copyright (c) 2026 Carlin Verano`) to match the README's license section.
- [ ] Add repo description, website URL, and topics on GitHub:
  ```bash
  gh repo edit --description "[description]" --homepage "https://carlinnv.github.io/Portfolio/" --add-topic portfolio,react,typescript,vite,cybersecurity
  ```

---

## Done

When every box is checked, summarize: what was set up, anything skipped or changed from this plan, and anything that needs my manual attention.
