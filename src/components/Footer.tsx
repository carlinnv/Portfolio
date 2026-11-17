import { profile } from '../content/profile.ts'

export function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. No cookies, analytics, or
        third-party requests.{' '}
        <a
          href="https://github.com/carlinnv/Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the source on GitHub
        </a>
        .
      </p>
    </footer>
  )
}
