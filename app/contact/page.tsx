import { getContactInfo, getMetafieldValue } from '@/lib/cosmic'

export const metadata = {
  title: 'Contact | QA Developer Portfolio',
}

export default async function ContactPage() {
  const contact = await getContactInfo()

  if (!contact) {
    return (
      <div className="py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-gray-500">Contact information not available.</p>
        </div>
      </div>
    )
  }

  const fullName = getMetafieldValue(contact.metadata?.full_name)
  const jobTitle = getMetafieldValue(contact.metadata?.job_title)
  const bio = getMetafieldValue(contact.metadata?.bio)
  const email = getMetafieldValue(contact.metadata?.email)
  const phone = getMetafieldValue(contact.metadata?.phone)
  const location = getMetafieldValue(contact.metadata?.location)
  const linkedinUrl = getMetafieldValue(contact.metadata?.linkedin_url)
  const githubUrl = getMetafieldValue(contact.metadata?.github_url)
  const twitterUrl = getMetafieldValue(contact.metadata?.twitter_url)
  const websiteUrl = getMetafieldValue(contact.metadata?.website_url)
  const photo = contact.metadata?.profile_photo
  const resume = contact.metadata?.resume

  return (
    <div className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {photo && (
              <div className="md:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                    alt={fullName || 'Profile'}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
            <div className={photo ? 'md:col-span-2' : 'md:col-span-3'}>
              {fullName && <h1 className="text-4xl md:text-5xl font-bold mb-2">{fullName}</h1>}
              {jobTitle && <p className="text-xl text-brand-600 mb-4">{jobTitle}</p>}
              {bio && <p className="text-gray-600 leading-relaxed mb-6">{bio}</p>}
              
              {resume && (
                <a href={resume.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download Resume
                </a>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {email && (
                <ContactItem label="Email" value={email} href={`mailto:${email}`} />
              )}
              {phone && (
                <ContactItem label="Phone" value={phone} href={`tel:${phone}`} />
              )}
              {location && (
                <ContactItem label="Location" value={location} />
              )}
              {websiteUrl && (
                <ContactItem label="Website" value={websiteUrl} href={websiteUrl} />
              )}
              {linkedinUrl && (
                <ContactItem label="LinkedIn" value="View Profile" href={linkedinUrl} />
              )}
              {githubUrl && (
                <ContactItem label="GitHub" value="View Profile" href={githubUrl} />
              )}
              {twitterUrl && (
                <ContactItem label="Twitter" value="View Profile" href={twitterUrl} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">
      {value}
    </a>
  ) : (
    <span className="text-gray-900 font-medium">{value}</span>
  )

  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      {content}
    </div>
  )
}