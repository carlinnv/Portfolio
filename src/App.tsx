import { About } from './components/About.tsx'
import { Contact } from './components/Contact.tsx'
import { Education } from './components/Education.tsx'
import { Experience } from './components/Experience.tsx'
import { Footer } from './components/Footer.tsx'
import { Moments } from './components/Moments.tsx'
import { Projects } from './components/Projects.tsx'
import { Sidebar } from './components/Sidebar.tsx'
import { Skills } from './components/Skills.tsx'
import { SkipLink } from './components/SkipLink.tsx'

export function App() {
  return (
    <>
      <SkipLink />
      <div className="layout">
        <Sidebar />
        {/* tabIndex lets the skip link move keyboard focus here in all browsers. */}
        <main id="main-content" className="main" tabIndex={-1}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Moments />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
