/**
 * Builds a URL for a file in `public/` that works under the site's base path
 * ('/Portfolio/'). Pass the path relative to `public/`, e.g. 'resume.pdf'.
 */
export const publicUrl = (path: string): string =>
  `${import.meta.env.BASE_URL}${path}`
