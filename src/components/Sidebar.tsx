import { profile } from '../content/profile.ts'
import { sections } from '../content/sections.ts'
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

      {/* A small "window" holding the section links. */}
      <nav
        className="card card--compact sidebar__nav"
        aria-labelledby="nav-title"
      >
        <div className="card__titlebar">
          <span id="nav-title" className="card__title">
            Menu
          </span>
          <span className="card__controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>
        <ul className="nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <ContactLinks />
    </header>
  )
}
