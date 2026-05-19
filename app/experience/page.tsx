import { getWorkExperience } from '@/lib/cosmic'
import ExperienceCard from '@/components/ExperienceCard'

export const metadata = {
  title: 'Experience | QA Developer Portfolio',
}

export default async function ExperiencePage() {
  const experiences = await getWorkExperience()

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1>
          <p className="text-xl text-gray-600">My professional journey</p>
        </div>

        {experiences.length === 0 ? (
          <p className="text-gray-500">No work experience available yet.</p>
        ) : (
          <div className="space-y-8 max-w-4xl">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}