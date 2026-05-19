import { getMetafieldValue } from '@/lib/cosmic'
import type { Skill } from '@/types'

const proficiencyColors: Record<string, string> = {
  'Beginner': 'bg-gray-100 text-gray-700',
  'Intermediate': 'bg-blue-100 text-blue-700',
  'Advanced': 'bg-purple-100 text-purple-700',
  'Expert': 'bg-green-100 text-green-700',
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const skillName = getMetafieldValue(skill.metadata?.skill_name) || skill.title
  const proficiency = getMetafieldValue(skill.metadata?.proficiency)
  const years = skill.metadata?.years_experience
  const description = getMetafieldValue(skill.metadata?.description)
  const icon = skill.metadata?.icon

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-brand-200 transition-all">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            <img
              src={`${icon.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={skillName}
              className="w-8 h-8 object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 mb-1">{skillName}</h3>
          <div className="flex items-center gap-2 mb-2">
            {proficiency && (
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${proficiencyColors[proficiency] || 'bg-gray-100 text-gray-700'}`}>
                {proficiency}
              </span>
            )}
            {years !== undefined && years !== null && (
              <span className="text-xs text-gray-500">
                {years} {years === 1 ? 'year' : 'years'}
              </span>
            )}
          </div>
          {description && <p className="text-sm text-gray-600 line-clamp-2">{description}</p>}
        </div>
      </div>
    </div>
  )
}