import Link from 'next/link'
import { getFeaturedProjects, getContactInfo, getSkills } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'
import Hero from '@/components/Hero'
import SkillsPreview from '@/components/SkillsPreview'

export default async function HomePage() {
  const [featuredProjects, contact, skills] = await Promise.all([
    getFeaturedProjects(),
    getContactInfo(),
    getSkills(),
  ])

  return (
    <div>
      <Hero contact={contact} />
      
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
                <p className="text-gray-600">Some of my recent work</p>
              </div>
              <Link href="/projects" className="text-brand-600 hover:text-brand-700 font-medium">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {skills.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
                <p className="text-gray-600">Technologies I work with</p>
              </div>
              <Link href="/skills" className="text-brand-600 hover:text-brand-700 font-medium">
                View all →
              </Link>
            </div>
            <SkillsPreview skills={skills.slice(0, 8)} />
          </div>
        </section>
      )}

      <section className="py-20 bg-gradient-to-br from-brand-600 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">Have a project in mind? I'd love to hear about it.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}