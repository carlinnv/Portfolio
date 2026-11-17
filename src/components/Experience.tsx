import { experience } from '../content/experience.ts'
import { Card } from './Card.tsx'

export function Experience() {
  return (
    <Card id="experience" title="Experience">
      <ul className="entries">
        {experience.map((entry, index) => (
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
    </Card>
  )
}
