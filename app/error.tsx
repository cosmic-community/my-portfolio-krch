'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-24 text-center">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-8">{error.message || 'An unexpected error occurred'}</p>
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  )
}