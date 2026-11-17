export interface Image {
  /** Path from `publicUrl()`, e.g. publicUrl('photo.jpg'). */
  src: string
  /** Describe what is in the image. Use '' only for purely decorative images. */
  alt: string
}

export interface Profile {
  name: string
  tagline: string
  photo: Image
  /** Each string is one paragraph. */
  about: string[]
  email: string
  linkedinUrl: string
  githubUrl: string
  resumeUrl: string
  /** Short line shown above the links in the Contact section. */
  contactNote: string
}

export interface SectionLink {
  /** Must match the `id` of the section it links to. */
  id: string
  label: string
}

export interface EducationEntry {
  school: string
  degree: string
  dates: string
  details: string[]
}

export interface ExperienceEntry {
  role: string
  organization: string
  dates: string
  highlights: string[]
}

export interface Project {
  title: string
  /** Where it was made, e.g. 'HackPrinceton Fall 2026' or a course. Optional. */
  context?: string
  /** e.g. 'Nov. 2026'. Optional. */
  date?: string
  /** One string per bullet point. */
  highlights: string[]
  /** Technologies, shown as tags. */
  tags: string[]
  /** Optional link, e.g. a GitHub repo, Devpost page, or write-up. */
  link?: { href: string; label: string }
}

export interface SkillGroup {
  label: string
  skills: string[]
}

export interface Moment {
  image: Image
  caption: string
  /** Free text, e.g. 'Summer 2025'. Optional. */
  date?: string
}

export interface Award {
  /** e.g. '2023' or '2026 – Present'. */
  years: string
  title: string
  /** Who gave it, e.g. 'CyberPatriot'. Optional. */
  organization?: string
}
