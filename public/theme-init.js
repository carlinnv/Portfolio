// Applies a saved light/dark choice before the page is first drawn, so a
// visitor who chose dark mode never sees a flash of the light colors.
//
// This is a separate file (not inline in index.html) because the site's
// Content-Security-Policy blocks inline scripts. The storage key 'theme' must
// match STORAGE_KEY in src/components/ThemeToggle.tsx.
;(function () {
  try {
    var saved = window.localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved)
    }
  } catch (error) {
    // Storage blocked (e.g. some private-browsing modes): use the system setting.
  }
})()
