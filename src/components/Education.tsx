import { education } from '../content/education.ts'
import { Card } from './Card.tsx'

export function Education() {
  return (
    <Card id="education" title="Education" defaultOpen>
      <ul className="entries">
        {education.map((entry) => (
          <li key={`${entry.school}-${entry.degree}`} className="entry">
            <h3>{entry.degree}</h3>
            <p className="entry__meta">
              {entry.school} · {entry.dates}
            </p>
            {entry.details.length > 0 && (
              <ul className="entry__points">
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Card>
  )
}
