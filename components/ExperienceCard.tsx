import { getMetafieldValue } from '@/lib/cosmic'
import type { WorkExperience } from '@/types'

function formatDate(dateString: string): string {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  } catch {
    return dateString
  }
}

export default function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const companyName = getMetafieldValue(experience.metadata?.company_name)
  const position = getMetafieldValue(experience.metadata?.position)
  const location = getMetafieldValue(experience.metadata?.location)
  const employmentType = getMetafieldValue(experience.metadata?.employment_type)
  const responsibilities = getMetafieldValue(experience.metadata?.responsibilities)
  const startDate = experience.metadata?.start_date
  const endDate = experience.metadata?.end_date
  const isCurrent = experience.metadata?.current
  const technologies = experience.metadata?.technologies || []
  const logo = experience.metadata?.company_logo

  const dateRange = `${formatDate(startDate || '')} - ${isCurrent ? 'Present' : formatDate(endDate || '')}`

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {logo && (
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <img
                src={`${logo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                alt={companyName}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div>
              {position && <h3 className="text-xl font-bold text-gray-900">{position}</h3>}
              {companyName && <p className="text-brand-600 font-medium">{companyName}</p>}
            </div>
            <div className="text-right text-sm text-gray-500">
              <p className="font-medium">{dateRange}</p>
              {location && <p>{location}</p>}
            </div>
          </div>
          
          {employmentType && (
            <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium mb-3">
              {employmentType}
            </span>
          )}

          {responsibilities && (
            <div className="prose prose-sm max-w-none text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: responsibilities }} />
          )}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {technologies.map((tech: string, idx: number) => (
                <span key={idx} className="px-2 py-1 bg-brand-50 text-brand-700 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}