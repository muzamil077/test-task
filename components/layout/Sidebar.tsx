'use client'

import { Home, Users, ClipboardList, Calendar, Users2, Truck, BarChart2, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Dashboard', icon: Home, href: '/' },
  { label: 'Clients', icon: Users, href: '#' },
  { label: 'Orders', icon: ClipboardList, href: '/orders/new' },
  { label: 'Calendar', icon: Calendar, href: '/calendar' },
  { label: 'Teams', icon: Users2, href: '#' },
  { label: 'Transport', icon: Truck, href: '#' },
  { label: 'Reports', icon: BarChart2, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
]

export default function Sidebar({ open, onClose }: { open: boolean, onClose: () => void }) {
  const pathname = usePathname()
  // Overlay for md and below
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-200 md:hidden ${open ? 'block' : 'hidden'}`}
        onClick={onClose}
        aria-label="Close sidebar"
      />
      <aside
        className={`fixed z-50 top-0 left-0 bottom-0 bg-[#223046] text-white flex flex-col py-4 h-[94.5vh] overflow-y-auto transition-transform duration-200
          w-56
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:static md:translate-x-0 md:w-56 md:flex
        `}
        aria-label="Sidebar"
      >
        <div className="text-lg font-bold px-4 mb-8 block md:hidden">Mover CRM</div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = item.href !== '#' && pathname.startsWith(item.href)
              return (
                <li key={item.label}>
                  {item.href === '#' ? (
                    <span className="flex items-center gap-3 px-4 py-2 rounded-l-full text-gray-400 cursor-not-allowed">
                      <item.icon size={20} />
                      <span className={`ml-2 ${open ? 'inline' : 'hidden'} md:hidden`}>{item.label}</span>
                      <span className="hidden md:inline">{item.label}</span>
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2 rounded-l-full transition-colors ${isActive ? 'bg-[#3B5B8A] text-white' : 'hover:bg-[#2D4060] text-gray-200'}`}
                    >
                      <item.icon size={20} />
                      <span className={`ml-2 ${open ? 'inline' : 'hidden'} md:hidden`}>{item.label}</span>
                      <span className="hidden md:inline">{item.label}</span>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="mt-auto px-4">
          <button className="flex items-center gap-3 py-2 text-gray-400 hover:text-white w-full">
            <LogOut size={20} />
            <span className={`ml-2 ${open ? 'inline' : 'hidden'} md:hidden`}>Logout</span>
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}   