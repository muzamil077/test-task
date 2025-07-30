import { Plus, Truck, MapPin, Fuel } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const vehicles = [
  { 
    id: '1', 
    name: 'Moving Truck Alpha', 
    type: 'Large Truck',
    license: 'ABC-123',
    location: 'Tel Aviv',
    status: 'available',
    fuel: '85%'
  },
  { 
    id: '2', 
    name: 'Moving Van Beta', 
    type: 'Medium Van',
    license: 'DEF-456',
    location: 'Jerusalem',
    status: 'in-use',
    fuel: '45%'
  },
  { 
    id: '3', 
    name: 'Pickup Truck Gamma', 
    type: 'Small Truck',
    license: 'GHI-789',
    location: 'Haifa',
    status: 'maintenance',
    fuel: '20%'
  },
]

export default function Transport() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transport</h1>
          <p className="text-gray-600 mt-1">Manage your fleet of vehicles</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add New Vehicle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                <div className="text-sm text-gray-600 mt-1">{vehicle.type}</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <MapPin size={16} />
                  {vehicle.location}
                </div>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                vehicle.status === 'available' 
                  ? 'bg-green-100 text-green-800'
                  : vehicle.status === 'in-use'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {vehicle.status}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  License Plate
                </div>
                <span className="font-mono font-medium">{vehicle.license}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Fuel size={16} />
                  Fuel Level
                </div>
                <span className="font-medium">{vehicle.fuel}</span>
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