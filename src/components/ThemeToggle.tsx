import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon.tsx'

type Theme = 'light' | 'dark'

/**
 * Where the visitor's choice is saved in their own browser (local storage).
 * Must match the key in public/theme-init.js. Nothing is sent anywhere.
 */
const STORAGE_KEY = 'theme'

/** Length of the color fade; must match the 0.5s in base.css (.theme-fading). */
const FADE_MS = 500

/** The saved choice (applied early by public/theme-init.js), else the system setting. */
const initialTheme = (): Theme => {
  const applied = document.documentElement.dataset.theme
  if (applied === 'dark' || applied === 'light') return applied
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/**
 * Light/dark mode button. Its label says what pressing it will do:
 * "Dark mode" (crescent) in light mode, "Light mode" (sun) in dark mode.
 * The choice is remembered only after the visitor presses it.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const fadeTimer = useRef<number | undefined>(undefined)

  // tokens.css switches every color when <html data-theme="dark"> is set.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = () => {
    // Turn on the color fade just for this switch (base.css .theme-fading).
    const root = document.documentElement
    root.classList.add('theme-fading')
    window.clearTimeout(fadeTimer.current)
    fadeTimer.current = window.setTimeout(
      () => root.classList.remove('theme-fading'),
      FADE_MS,
    )

    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage blocked (e.g. some private-browsing modes): the switch still
      // works for this visit, it just isn't remembered.
    }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
      <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </button>
  )
}
