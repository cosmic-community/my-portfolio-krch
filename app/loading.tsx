export default function Loading() {
  return (
    <div className="py-24 text-center">
      <div className="container-custom">
        <div className="inline-block w-12 h-12 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  )
}