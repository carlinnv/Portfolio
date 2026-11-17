import type { ReactNode } from 'react'

interface CardProps {
  /** Section id; must match an entry in src/content/sections.ts. */
  id: string
  title: string
  children: ReactNode
}

/** A retro "window" frame used by every section in the main column. */
export function Card({ id, title, children }: CardProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} className="card" aria-labelledby={headingId}>
      <div className="card__titlebar">
        <h2 id={headingId}>{title}</h2>
        <span className="card__controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="card__body">{children}</div>
    </section>
  )
}
