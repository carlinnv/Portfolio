import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { sections, type SectionId } from '../content/sections.ts'

const ids: SectionId[] = sections.map((section) => section.id)

const isSectionId = (value: string): value is SectionId =>
  (ids as string[]).includes(value)

/** The section named in the URL (e.g. #projects), if any. */
const idFromHash = (): SectionId | null => {
  const hash = decodeURIComponent(window.location.hash.slice(1))
  return isSectionId(hash) ? hash : null
}

interface TabbedWindowProps {
  /** The content of each tab. TypeScript requires one entry per section. */
  panels: Record<SectionId, ReactNode>
}

/**
 * One retro window holding every section as a tab.
 * Follows the WAI-ARIA tabs pattern: arrow keys move between tabs, Home/End
 * jump to the first/last tab, and only the selected tab is in the Tab order.
 */
export function TabbedWindow({ panels }: TabbedWindowProps) {
  const [active, setActive] = useState<SectionId>(() => idFromHash() ?? ids[0])
  const windowRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef(new Map<SectionId, HTMLButtonElement>())

  // Sidebar menu links (#education, ...) and the back button change the URL
  // hash; switch to that tab and bring the window into view.
  useEffect(() => {
    const onHashChange = () => {
      const id = idFromHash()
      if (!id) return
      setActive(id)
      windowRef.current?.scrollIntoView({ block: 'start' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const select = (id: SectionId, moveFocus = false) => {
    setActive(id)
    // Update the URL so the tab can be shared, without adding history entries.
    window.history.replaceState(null, '', `#${id}`)
    if (moveFocus) tabRefs.current.get(id)?.focus()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const current = ids.indexOf(active)
    const last = ids.length - 1
    const next =
      event.key === 'ArrowRight'
        ? current === last
          ? 0
          : current + 1
        : event.key === 'ArrowLeft'
          ? current === 0
            ? last
            : current - 1
          : event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? last
              : null
    if (next === null) return
    event.preventDefault()
    select(ids[next], true)
  }

  return (
    <div ref={windowRef} className="card tab-window">
      <div className="card__titlebar">
        <span className="card__title">Portfolio</span>
        <span className="card__controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className="tabs" role="tablist" aria-label="Portfolio sections">
        {sections.map((section) => {
          const selected = section.id === active
          return (
            <button
              key={section.id}
              ref={(element) => {
                if (element) tabRefs.current.set(section.id, element)
                else tabRefs.current.delete(section.id)
              }}
              id={`tab-${section.id}`}
              className="tabs__tab"
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${section.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(section.id)}
              onKeyDown={onKeyDown}
            >
              {section.label}
            </button>
          )
        })}
      </div>

      {sections.map((section) => (
        <section
          key={section.id}
          id={`panel-${section.id}`}
          className="card__body tabs__panel"
          role="tabpanel"
          aria-labelledby={`tab-${section.id}`}
          // Lets keyboard users reach panels that contain no links.
          tabIndex={0}
          hidden={section.id !== active}
        >
          {/* Hidden on screen (the tab shows the name); visible when printed
              and keeps the heading order h1 → h2 → h3 for screen readers. */}
          <h2 className="tabs__heading">{section.label}</h2>
          {panels[section.id]}
        </section>
      ))}
    </div>
  )
}
