import { Plus, Users, MapPin } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const teams = [
  { 
    id: '1', 
    name: 'Moving Team Alpha', 
    members: 4, 
    location: 'Tel Aviv',
    status: 'active',
    currentOrders: 3
  },
  { 
    id: '2', 
    name: 'Moving Team Beta', 
    members: 3, 
    location: 'Jerusalem',
    status: 'active',
    currentOrders: 2
  },
  { 
    id: '3', 
    name: 'Moving Team Gamma', 
    members: 5, 
    location: 'Haifa',
    status: 'inactive',
    currentOrders: 0
  },
]

export default function Teams() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teams</h1>
          <p className="text-gray-600 mt-1">Manage your moving teams</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add New Team
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Card key={team.id}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <MapPin size={16} />
                  {team.location}
                </div>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                team.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {team.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  Members
                </div>
                <span className="font-medium">{team.members}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Current Orders
                </div>
                <span className="font-medium">{team.currentOrders}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" className="flex-1">View Details</Button>
              <Button size="sm" variant="outline">Edit</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 