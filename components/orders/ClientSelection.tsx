'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Input from '@/components/ui/Input'
import ClientCard from './ClientCard'

interface Client {
  id: string
  name: string
  phone: string
  isFavorite?: boolean
}

interface ClientSelectionProps {
  clients: Client[]
  selectedClient: Client | null
  onClientSelect: (client: Client) => void
}

export default function ClientSelection({ clients, selectedClient, onClientSelect }: ClientSelectionProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery)
  )

  return (
    <div>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Select Client</h2>
      
      {/* Search */}
      <div className="mb-6">
        <Input
          placeholder="Search client by name or phone"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={<Search size={20} />}
        />
      </div>

      {/* Recent Clients */}
      <div>
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Recent Clients</h3>
        <div className="space-y-3">
          {filteredClients.length > 0 ? (
            filteredClients.map((client) => (
              <ClientCard
                key={client.id}
                client={client}
                isSelected={selectedClient?.id === client.id}
                onClick={onClientSelect}
              />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No clients found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 