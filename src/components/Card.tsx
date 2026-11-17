import { useEffect, useState, type ReactNode } from 'react'

interface CardProps {
  /** Section id; must match an entry in src/content/sections.ts. */
  id: string
  title: string
  /** Start expanded? Windows start collapsed unless this is set. */
  defaultOpen?: boolean
  children: ReactNode
}

/**
 * A retro "window" frame used by every section in the main column.
 * The first of the three title-bar squares collapses and expands the window
 * (WAI-ARIA disclosure pattern: a button with aria-expanded); the other two
 * are decorative.
 */
export function Card({ id, title, defaultOpen = false, children }: CardProps) {
  // A link straight to this window (e.g. /Portfolio/#projects) opens it.
  const [open, setOpen] = useState(
    () => defaultOpen || window.location.hash === `#${id}`,
  )
  const headingId = `${id}-heading`
  const contentId = `${id}-content`

  // Following a link to this window (the sidebar menu, a shared link, or the
  // back button) re-opens it if it was collapsed.
  useEffect(() => {
    const target = `#${id}`
    const onHashChange = () => {
      if (window.location.hash === target) setOpen(true)
    }
    const onClick = (event: MouseEvent) => {
      const link =
        event.target instanceof Element ? event.target.closest('a') : null
      if (link?.getAttribute('href') === target) setOpen(true)
    }
    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onClick)
    }
  }, [id])

  return (
    <section
      id={id}
      className={open ? 'card' : 'card card--collapsed'}
      aria-labelledby={headingId}
    >
      <div className="card__titlebar">
        <h2 id={headingId}>{title}</h2>
        <span className="card__controls">
          <button
            type="button"
            className="card__collapse-button"
            // Screen readers: "Education, expanded/collapsed, button".
            aria-label={title}
            aria-expanded={open}
            aria-controls={contentId}
            // Tooltip for mouse users.
            title={open ? 'Collapse' : 'Expand'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="card__collapse-square" aria-hidden="true">
              <span className="card__collapse-icon" />
            </span>
          </button>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>
      {/* Collapsing glides the height to 0 (see .card__collapse in CSS). */}
      <div id={contentId} className="card__collapse" data-open={open}>
        <div className="card__collapse-inner">
          <div className="card__body">{children}</div>
        </div>
      </div>
    </section>
  )
}
