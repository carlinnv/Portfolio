import { awards } from '../content/awards.ts'
import { Card } from './Card.tsx'

export function Awards() {
  return (
    <Card id="awards" title="Awards & Honors">
      <ul className="awards">
        {awards.map((award, index) => (
          <li key={`${award.title}-${index}`} className="award">
            <span className="award__years">{award.years}</span>
            <span>
              {award.title}
              {award.organization && (
                <span className="award__org"> · {award.organization}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
