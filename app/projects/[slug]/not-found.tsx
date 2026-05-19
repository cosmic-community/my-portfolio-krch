// app/projects/[slug]/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
        <Link href="/projects" className="btn-primary">
          View All Projects
        </Link>
      </div>
    </div>
  )
}