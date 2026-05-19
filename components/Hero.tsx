import Link from 'next/link'
import { getMetafieldValue } from '@/lib/cosmic'
import type { ContactInfo } from '@/types'

export default function Hero({ contact }: { contact: ContactInfo | null }) {
  const fullName = getMetafieldValue(contact?.metadata?.full_name) || 'QA Developer'
  const jobTitle = getMetafieldValue(contact?.metadata?.job_title) || 'Quality Assurance Engineer'
  const bio = getMetafieldValue(contact?.metadata?.bio) || 'Crafting reliable software through meticulous testing and quality assurance.'
  const photo = contact?.metadata?.profile_photo

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-500/5" />
      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-600 font-medium mb-4 animate-fade-in">👋 Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
              {fullName}
            </h1>
            <p className="text-xl md:text-2xl gradient-text font-semibold mb-6">{jobTitle}</p>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">{bio}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
          {photo && (
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-accent-600 rounded-full blur-2xl opacity-30" />
                <img
                  src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={fullName}
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}