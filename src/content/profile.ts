import { publicUrl } from './publicUrl.ts'
import type { Profile } from './types.ts'

export const profile: Profile = {
  name: 'Carlin Verano',
  tagline: 'BS/MS student at NJIT · Computer Science and Cybersecurity',
  // Replace public/photo-placeholder.svg with your photo (e.g. public/photo.jpg)
  // and update the path here.
  photo: {
    src: publicUrl('photo-placeholder.svg'),
    alt: 'Portrait of Carlin Verano',
  },
  about: [
    'Hello! My name is Carlin Verano, and I am a BS/MS student in the NJIT Albert Dorman Honors College, pursuing a BS in Computer Science with a minor in Drones and Robotics and an MS in Cybersecurity and Privacy.',
    'As an NSF CyberAI Scholar, my interests lie in securing physical systems and raising awareness of cyberattacks and threats.',
  ],
  email: 'carlinverano@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/carlinverano/',
  githubUrl: 'https://github.com/carlinnv',
  // Replace public/resume.pdf with your real resume (keep the same file name).
  resumeUrl: publicUrl('resume.pdf'),
  contactNote:
    'The best way to reach me is by email. You can also find me on LinkedIn and GitHub.',
}
