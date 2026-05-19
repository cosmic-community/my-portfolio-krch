export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© {new Date().getFullYear()} QA Developer Portfolio. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Built with Next.js & Cosmic CMS</p>
        </div>
      </div>
    </footer>
  )
}