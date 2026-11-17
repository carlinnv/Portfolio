import { leadership } from '../content/leadership.ts'
import { Card } from './Card.tsx'
import { RoleList } from './RoleList.tsx'

export function Leadership() {
  return (
    <Card id="leadership" title="Leadership">
      <RoleList entries={leadership} />
    </Card>
  )
}
