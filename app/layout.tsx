import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

export const metadata: Metadata = {
  title: 'Mover CRM',
  description: 'CRM system for order and client management',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" bg-gray-50">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 