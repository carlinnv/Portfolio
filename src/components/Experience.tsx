import { experience } from '../content/experience.ts'
import { Card } from './Card.tsx'
import { RoleList } from './RoleList.tsx'

export function Experience() {
  return (
    <Card id="experience" title="Experience" defaultOpen>
      <RoleList entries={experience} />
    </Card>
  )
}
