# Carlin Verano — Portfolio

BS/MS student at NJIT pursuing a BS in Computer Science with a minor in Drones and Robotics, and a MS in Cybersecurity and Privacy. This repo is the source of my personal portfolio.

**Live site:** https://carlinnv.github.io/Portfolio/

---

## About

Hello! My name is Carlin Verano, and I am a BS/MS student in the NJIT Albert Dorman Honors College. As a CyberAI Scholarship for Service (SFS) Scholar pursuing a Master's in Cybersecurity and Privacy, my interests lie in securing physical systems and raising awareness on cyberattacks and threats.

## Tech stack

| Area                  | Tool                                       |
| --------------------- | ------------------------------------------ |
| Framework             | React + TypeScript                         |
| Build tool            | Vite                                       |
| Code quality          | ESLint, Prettier                           |
| Hosting               | GitHub Pages (deployed via GitHub Actions) |
| CI                    | GitHub Actions (pull request checks)       |
| Supply-chain security | Dependabot (npm + GitHub Actions)          |
| Static analysis       | CodeQL                                     |
| Secret protection     | Secret scanning with push protection       |

## Security and privacy

This site is built to the same standards I would expect from any public-facing system:

- **No tracking.** No analytics, cookies, or third-party scripts. Visiting this site sends no data to anyone but GitHub Pages.
- **No third-party requests.** Fonts and all assets are self-hosted and bundled at build time.
- **Content-Security-Policy.** Production builds ship a restrictive CSP (`default-src 'self'`, no inline scripts). See [`SECURITY.md`](SECURITY.md) for the policy and its limitations on GitHub Pages.
- **Automated dependency updates** via Dependabot, and **static analysis** via CodeQL on every push, pull request, and weekly. CodeQL scans both the site code and the GitHub Actions workflows.
- **CI gate.** Every pull request and every push to `main` must pass lint, format check, type-check, and build before anything is merged or deployed.
- **Protected `main` branch.** A repository ruleset blocks force pushes and deletion, requires the CI check, and blocks merges that introduce high-severity CodeQL findings.

## Accessibility

Built to meet **Section 508 / WCAG 2.1 AA**: semantic landmarks, keyboard navigation, visible focus states, skip link, sufficient color contrast, and reduced-motion support.

## Running locally

Requires the current Node.js LTS.

```bash
git clone https://github.com/carlinnv/Portfolio.git
cd Portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:5173/Portfolio/ (the same path as the live site).

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start the dev server                       |
| `npm run build`        | Type-check and build to `dist/`            |
| `npm run preview`      | Serve the production build locally         |
| `npm run lint`         | Run ESLint                                 |
| `npm run format`       | Format with Prettier                       |
| `npm run format:check` | Check formatting without changing anything |

## Project structure

```
src/
  components/   # page sections
  content/      # text, projects, experience, and photos list (edit these)
  styles/       # CSS; colors, fonts, and spacing live in tokens.css
public/         # static assets (resume, images)
docs/           # setup notes
.github/        # deploy and CI workflows, Dependabot config
```

## Deployment

Every pull request runs lint, format check, and build in GitHub Actions. Every push to `main` runs the same checks, then deploys `dist/` to GitHub Pages.

## Contact

- Email: carlinverano@gmail.com
- LinkedIn: [link](https://www.linkedin.com/in/carlinverano/)
- GitHub: [link](https://github.com/carlinnv)

## License

Code: MIT (see [`LICENSE`](LICENSE)). Content (text, images, resume): © 2026 Carlin Verano, all rights reserved.
