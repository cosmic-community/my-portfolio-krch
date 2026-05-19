import SkillCard from '@/components/SkillCard'
import type { Skill } from '@/types'

export default function SkillsPreview({ skills }: { skills: Skill[] }) {
  if (!skills || skills.length === 0) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  )
}