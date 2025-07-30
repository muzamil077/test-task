'use client'

import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Mover CRM</h1>
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => router.push('/orders/new')}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-base shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          Create New Order
        </button>
        <button
          onClick={() => router.push('/calendar')}
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold text-base shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
        >
          Order Calendar
        </button>
      </div>
    </div>
  )
} 