import { profile } from '../content/profile.ts'
import { ContactLinks } from './ContactLinks.tsx'

export function Sidebar() {
  return (
    <header className="sidebar">
      <img
        className="sidebar__photo"
        src={profile.photo.src}
        alt={profile.photo.alt}
        width="320"
        height="320"
      />
      <h1 className="sidebar__name">{profile.name}</h1>
      <p className="sidebar__tagline">{profile.tagline}</p>

      {/* A small "window" that opens like a dropdown. <details> is built into
          browsers: it works with mouse, keyboard (Enter/Space), and screen
          readers without any JavaScript. */}
      <details className="card card--compact menu">
        <summary className="card__titlebar menu__toggle">
          <span className="card__title">Menu</span>
          <span className="menu__caret" aria-hidden="true" />
        </summary>
        <div className="menu__body">
          <ContactLinks />
        </div>
      </details>
    </header>
  )
}
