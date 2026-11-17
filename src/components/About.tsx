import { profile } from '../content/profile.ts'
import { Card } from './Card.tsx'

export function About() {
  return (
    <Card id="about" title="About" defaultOpen>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </Card>
  )
}
