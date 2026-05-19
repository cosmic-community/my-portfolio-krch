import { getSkills } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'
import type { Skill, SkillCategory } from '@/types'

export const metadata = {
  title: 'Skills | QA Developer Portfolio',
}

export default async function SkillsPage() {
  const skills = await getSkills()

  const grouped: Record<string, Skill[]> = {}
  skills.forEach((skill) => {
    const category = skill.metadata?.category || 'Other'
    if (!grouped[category]) grouped[category] = []
    grouped[category].push(skill)
  })

  const categoryOrder: SkillCategory[] = ['Frontend', 'Backend', 'Database', 'DevOps', 'Testing', 'Mobile', 'Tools', 'Other']

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-xl text-gray-600">Technologies and tools I work with</p>
        </div>

        {skills.length === 0 ? (
          <p className="text-gray-500">No skills available yet.</p>
        ) : (
          <div className="space-y-12">
            {categoryOrder.map((category) => {
              const categorySkills = grouped[category]
              if (!categorySkills || categorySkills.length === 0) return null
              
              return (
                <div key={category}>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{category}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categorySkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}