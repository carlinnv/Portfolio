import { profile } from '../content/profile.ts'
import { sections } from '../content/sections.ts'
import { ContactLinks } from './ContactLinks.tsx'
import { Icon } from './Icon.tsx'
import { ThemeToggle } from './ThemeToggle.tsx'

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

      {/* A small "window" that opens like a dropdown, one section per row.
          <details> is built into browsers: it works with mouse, keyboard
          (Enter/Space), and screen readers without any JavaScript. */}
      <nav className="sidebar__nav" aria-label="Sections">
        {/* Decorative village-game style items resting on top of the menu,
            like on a shelf. Hidden from screen readers: no information. */}
        <div className="sidebar__icons" aria-hidden="true">
          <Icon name="leaf" className="icon--leaf" />
          <Icon name="bag" className="icon--bag" />
          <Icon name="radish" className="icon--radish" />
        </div>
        <details className="card card--compact menu">
          <summary className="card__titlebar menu__toggle">
            <span className="card__title">Menu</span>
            <span className="menu__caret" aria-hidden="true" />
          </summary>
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      <ContactLinks />
      <ThemeToggle />
    </header>
  )
}
