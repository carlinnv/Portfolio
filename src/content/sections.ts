import type { SectionLink } from './types.ts'

/**
 * The tabs in the main window, in order. Also used by the sidebar menu.
 * Each `id` is used in the URL (e.g. /Portfolio/#projects).
 */
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'moments', label: 'Moments' },
  { id: 'contact', label: 'Contact' },
] as const satisfies readonly SectionLink[]

export type SectionId = (typeof sections)[number]['id']
