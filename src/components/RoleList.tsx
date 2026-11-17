import type { ExperienceEntry } from '../content/types.ts'

interface RoleListProps {
  entries: ExperienceEntry[]
}

/** A list of roles (title, organization · dates, bullet points). Used by the
    Experience and Leadership windows. */
export function RoleList({ entries }: RoleListProps) {
  return (
    <ul className="entries">
      {entries.map((entry, index) => (
        <li key={`${entry.role}-${index}`} className="entry">
          <h3>{entry.role}</h3>
          <p className="entry__meta">
            {entry.organization} · {entry.dates}
          </p>
          <ul className="entry__points">
            {entry.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
