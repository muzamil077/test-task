'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'

interface CRMLayoutProps {
  children: React.ReactNode
  activeSection?: string
  onNavigation?: (section: string) => void
}

export default function CRMLayout({ children, activeSection = 'dashboard', onNavigation }: CRMLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigation = (section: string) => {
    // Call the parent's navigation handler if provided
    if (onNavigation) {
      onNavigation(section)
    }
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen}
        activeSection={activeSection}
        onClose={() => setSidebarOpen(false)}
        onNavigate={handleNavigation}
      />

      {/* Main content */}    
      <div className="lg:pl-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
} 