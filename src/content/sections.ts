import type { SectionLink } from './types.ts'

/** Sidebar navigation. Each `id` must match a section's `id`. */
export const sections: SectionLink[] = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'moments', label: 'Moments' },
  { id: 'contact', label: 'Contact' },
]
