import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Content-Security-Policy for production builds. Only this site's own files
// may load; no inline scripts or styles. See SECURITY.md before changing it.
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

// Injects the CSP as the first tag in <head>. Build only, because Vite's dev
// server relies on inline scripts for hot reloading.
const cspPlugin = (): Plugin => ({
  name: 'csp',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(
      '<head>',
      `<head>\n    <meta http-equiv="Content-Security-Policy" content="${csp}">`,
    ),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin()],
  // Case-sensitive: must match the GitHub repo name.
  base: '/Portfolio/',
  build: {
    // Never inline fonts as data: URIs; font-src 'self' would block them.
    assetsInlineLimit: (file) =>
      /\.(woff2?|ttf|otf)$/.test(file) ? false : undefined,
  },
})
