import { projects } from '../content/projects.ts'

export function Projects() {
  return (
    <>
      <ul className="entries">
        {projects.map((project, index) => (
          <li key={`${project.title}-${index}`} className="entry">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
        ))}
      </ul>
    </>
  )
}
