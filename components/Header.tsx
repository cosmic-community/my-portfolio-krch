import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text">
            Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/skills" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Skills
            </Link>
            <Link href="/experience" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          <Link href="/contact" className="md:hidden text-sm font-medium text-brand-600">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}