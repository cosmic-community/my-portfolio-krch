import { getProjects } from '@/lib/cosmic'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects | QA Developer Portfolio',
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-gray-600">A collection of work I'm proud of</p>
        </div>
        
        {projects.length === 0 ? (
          <p className="text-gray-500">No projects available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}