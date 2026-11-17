import { profile } from '../content/profile.ts'

export function About() {
  return (
    <>
      {profile.about.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
}
