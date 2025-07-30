'use client'

import { Search, Bell, User, Menu } from 'lucide-react'

export default function Header({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean, setSidebarOpen: (open: boolean) => void }) {
  return (
    <header className="bg-[#3B5B8A] text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Hamburger button for md and below */}
        <button
          className="md:hidden mr-2 p-1 rounded hover:bg-[#2D4060] focus:outline-none"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
        <div className="font-bold text-lg hidden md:block">Mover CRM</div>
      </div>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full px-4 py-1 w-40 sm:w-64 text-gray-900 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell size={20} className="cursor-pointer" />
        <User size={20} className="cursor-pointer" />
      </div>
    </header>
  )
} 