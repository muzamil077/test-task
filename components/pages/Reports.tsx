import { BarChart3, TrendingUp, TrendingDown, Calendar } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function Reports() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Analytics and insights for your business</p>
        </div>
        <Button className="flex items-center gap-2">
          <Calendar size={16} />
          Generate Report
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">$45,231</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp size={20} />
              <span className="text-sm ml-1">+20%</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Orders Completed</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp size={20} />
              <span className="text-sm ml-1">+12%</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New Clients</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <div className="flex items-center text-red-600">
              <TrendingDown size={20} />
              <span className="text-sm ml-1">-5%</span>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Team Performance</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <div className="flex items-center text-green-600">
              <TrendingUp size={20} />
              <span className="text-sm ml-1">+8%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Reports</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Monthly Revenue Report
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Profit & Loss Statement
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Cash Flow Analysis
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Tax Summary Report
            </button>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Operational Reports</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Order Completion Report
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Team Performance Report
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Vehicle Utilization Report
            </button>
            <button className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
              Customer Satisfaction Report
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
} 