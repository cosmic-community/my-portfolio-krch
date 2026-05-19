import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { Project } from '@/types'

export default function ProjectCard({ project }: { project: Project }) {
  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title
  const summary = getMetafieldValue(project.metadata?.summary)
  const projectType = getMetafieldValue(project.metadata?.project_type)
  const techStack = project.metadata?.tech_stack || []
  const featuredImage = project.metadata?.featured_image

  return (
    <Link href={`/projects/${project.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {featuredImage && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={projectName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {projectType && (
          <span className="inline-block px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs font-medium mb-3">
            {projectType}
          </span>
        )}
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">
          {projectName}
        </h3>
        {summary && <p className="text-gray-600 text-sm mb-4 line-clamp-2">{summary}</p>}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {techStack.slice(0, 4).map((tech: string, idx: number) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="px-2 py-1 text-gray-500 text-xs">+{techStack.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}