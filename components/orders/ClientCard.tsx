import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Client {
  id: string
  name: string
  phone: string
  isFavorite?: boolean
}

interface ClientCardProps {
  client: Client
  isSelected: boolean
  onClick: (client: Client) => void
}

export default function ClientCard({ client, isSelected, onClick }: ClientCardProps) {
  return (
    <div
      className={cn(
        'p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors',
        isSelected 
          ? 'border-primary-500 bg-primary-50' 
          : 'border-gray-200 hover:border-gray-300'
      )}
      onClick={() => onClick(client)}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{client.name}</div>
          <div className="text-xs sm:text-sm text-gray-500 truncate">{client.phone}</div>
        </div>
        {client.isFavorite && (
          <Star size={16} className="text-yellow-400 flex-shrink-0 ml-2" />
        )}
      </div>
    </div>
  )
} 