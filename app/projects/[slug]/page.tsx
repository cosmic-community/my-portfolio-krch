// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projectName = getMetafieldValue(project.metadata?.project_name) || project.title
  const description = getMetafieldValue(project.metadata?.description)
  const summary = getMetafieldValue(project.metadata?.summary)
  const projectType = getMetafieldValue(project.metadata?.project_type)
  const liveUrl = getMetafieldValue(project.metadata?.live_url)
  const githubUrl = getMetafieldValue(project.metadata?.github_url)
  const techStack = project.metadata?.tech_stack || []
  const featuredImage = project.metadata?.featured_image
  const screenshots = project.metadata?.screenshots || []

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <Link href="/projects" className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-8">
          ← Back to projects
        </Link>

        <div className="mb-12">
          {projectType && (
            <span className="inline-block px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-4">
              {projectType}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectName}</h1>
          {summary && <p className="text-xl text-gray-600 mb-6">{summary}</p>}
          
          <div className="flex flex-wrap gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Live Site
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View on GitHub
              </a>
            )}
          </div>
        </div>

        {featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${featuredImage.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
              alt={projectName}
              className="w-full h-auto"
            />
          </div>
        )}

        {description && (
          <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {techStack.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech: string, idx: number) => (
                <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {screenshots.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {screenshots.map((screenshot, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={`${screenshot.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
                    alt={`${projectName} screenshot ${idx + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}