import { profile } from '../content/profile.ts'
import { Icon } from './Icon.tsx'

const newTab = { target: '_blank', rel: 'noopener noreferrer' } as const

/** Email, LinkedIn, GitHub, and resume links with pixel icons. */
export function ContactLinks() {
  return (
    <ul className="contact-links">
      <li>
        <a href={`mailto:${profile.email}`}>
          <Icon name="email" />
          <span>Email</span>
        </a>
      </li>
      <li>
        <a href={profile.linkedinUrl} {...newTab}>
          <Icon name="linkedin" />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a href={profile.githubUrl} {...newTab}>
          <Icon name="github" />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href={profile.resumeUrl} {...newTab}>
          <Icon name="resume" />
          <span>Resume (PDF)</span>
        </a>
      </li>
    </ul>
  )
}
