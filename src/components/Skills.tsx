import { skillGroups } from '../content/skills.ts'

export function Skills() {
  return (
    <>
      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <div key={`${group.label}-${index}`}>
            <h3>{group.label}</h3>
            <ul className="tags">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
