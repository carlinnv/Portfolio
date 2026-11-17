# Security Policy

## Reporting a vulnerability

If you find a security issue with this site or repository, please email **carlinverano@gmail.com** rather than opening a public issue. I'll respond within 7 days.

## Security measures

### Content-Security-Policy

Production builds include the following CSP, injected as a `<meta>` tag at build time by a Vite plugin (`vite.config.ts`):

```
default-src 'self';
script-src 'self';
style-src 'self';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self'
```

What it does:

- Only resources from this site's own origin can load. No CDNs, analytics, or third-party embeds.
- **No inline scripts or `eval`**, which removes the most common XSS execution paths.
- `object-src 'none'` blocks plugin content; `base-uri 'self'` prevents `<base>` tag hijacking; `form-action 'self'` stops form submissions to other origins.

The CSP is applied to production builds only, because Vite's development server relies on inline scripts for hot reloading.

### Known limitation: GitHub Pages and HTTP headers

GitHub Pages does not allow custom HTTP response headers, so the CSP is delivered through a `<meta>` tag instead of a header. As a result:

- `frame-ancestors` (clickjacking protection) is **not enforceable**; browsers ignore it in meta tags.
- `report-uri` / `report-to` are not supported in meta tags, so violations aren't reported.
- Headers like `X-Content-Type-Options`, `Strict-Transport-Security`, and `Permissions-Policy` can't be set.

**Risk assessment:** the site is static, has no login, forms, user data, or state-changing actions, so clickjacking and the missing headers carry minimal risk. If the site needed these protections, the fix would be to put it behind a CDN or host that supports response headers (e.g. Cloudflare, Netlify).

### Privacy

- No analytics, cookies, or tracking of any kind.
- The only thing the site stores is the visitor's light/dark mode choice, saved in their own browser's local storage (key `theme`, value `light` or `dark`) and only after they press the button. It is never sent anywhere. Clearing site data removes it.
- The early theme script (`public/theme-init.js`) is a separate file, not inline, so the Content-Security-Policy can keep blocking all inline scripts.
- No third-party requests; fonts are self-hosted.
- Referrer policy: `strict-origin-when-cross-origin`.

### Supply chain

- **Dependabot** checks npm packages and GitHub Actions weekly and opens PRs for updates. Version updates wait 7 days after a release (a cooldown), so malicious or broken releases are usually caught before they are proposed. Security updates are opened right away.
- **CodeQL** default setup scans the JavaScript/TypeScript code and the GitHub Actions workflows on every push and pull request to `main`, and weekly.
- **Secret scanning with push protection** is enabled, so a pushed API key or token is blocked before it reaches the repository.
- `package-lock.json` is committed and CI installs with `npm ci` for reproducible builds.
- Dependencies are kept to a minimum.

### CI/CD

- **Pull request checks:** a CI workflow runs lint, format check, type-check, and build on every pull request, including Dependabot's. It has read-only permissions (`contents: read`) and never deploys.
- **Deployment:** the deploy workflow runs the same checks on every push to `main`, then publishes to GitHub Pages. It uses least-privilege `permissions` (`contents: read`, `pages: write`, `id-token: write`).
- **Workflow hardening:** checkout does not leave the GitHub token on disk (`persist-credentials: false`), and no dependency cache is used, to avoid cache poisoning in a publishing workflow.
- **Protected `main` branch:** a repository ruleset blocks force pushes and branch deletion, requires the CI check to pass before merging, and blocks merges that introduce CodeQL alerts of high severity or above.
- No secrets are stored in the repository or required by the build.
