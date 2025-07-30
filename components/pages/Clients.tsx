import { Search, Plus, Filter } from 'lucide-react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const clients = [
  { id: '1', name: 'Anna Cohen', email: 'anna.cohen@email.com', phone: '+972 52-123-4567', status: 'active' },
  { id: '2', name: 'David Levi', email: 'david.levi@email.com', phone: '+972 54-765-4321', status: 'active' },
  { id: '3', name: 'Ruth Goldstein', email: 'ruth.goldstein@email.com', phone: '+972 50-987-6543', status: 'inactive' },
  { id: '4', name: 'Michael Rosen', email: 'michael.rosen@email.com', phone: '+972 53-456-7890', status: 'active' },
  { id: '5', name: 'Sarah Cohen', email: 'sarah.cohen@email.com', phone: '+972 55-123-4567', status: 'active' },
]

export default function Clients() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-1">Manage your client relationships</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add New Client
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search clients..."
              icon={<Search size={20} />}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </div>
      </Card>

      {/* Clients List */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{client.name}</div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{client.email}</td>
                  <td className="py-3 px-4 text-gray-600">{client.phone}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      client.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">View</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
} 