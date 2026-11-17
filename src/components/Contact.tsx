import { profile } from '../content/profile.ts'
import { ContactLinks } from './ContactLinks.tsx'

export function Contact() {
  return (
    <>
      <p>{profile.contactNote}</p>
      <ContactLinks />
    </>
  )
}
