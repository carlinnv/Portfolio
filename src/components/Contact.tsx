import { profile } from '../content/profile.ts'
import { Card } from './Card.tsx'
import { ContactLinks } from './ContactLinks.tsx'

export function Contact() {
  return (
    <Card id="contact" title="Contact">
      <p>{profile.contactNote}</p>
      <ContactLinks />
    </Card>
  )
}
