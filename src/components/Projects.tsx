import { projects } from '../content/projects.ts'
import { Card } from './Card.tsx'

export function Projects() {
  return (
    <Card id="projects" title="Projects">
      <ul className="entries">
        {projects.map((project, index) => {
          const meta = [project.context, project.date].filter(Boolean)
          return (
            <li key={`${project.title}-${index}`} className="entry">
              <h3>{project.title}</h3>
              {meta.length > 0 && (
                <p className="entry__meta">{meta.join(' · ')}</p>
              )}
              <ul className="entry__points">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link && (
                <p className="entry__link">
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.label}
                  </a>
                </p>
              )}
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
