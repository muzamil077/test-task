'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import StepNavigation from '@/components/orders/StepNavigation'
import ClientSelection from '@/components/orders/ClientSelection'

interface Client {
  id: string
  name: string
  phone: string
  isFavorite?: boolean
}

const recentClients: Client[] = [
  { id: '1', name: 'Anna Cohen', phone: '+972 52-123-4567', isFavorite: true },
  { id: '2', name: 'David Levi', phone: '+972 54-765-4321' },
  { id: '3', name: 'Ruth Goldstein', phone: '+972 50-987-6543' },
]

const steps = [
  { id: 'client', label: 'Client' },
  { id: 'services', label: 'Services' },
  { id: 'resources', label: 'Resources' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'payment', label: 'Payment' },
]

export default function OrderCreation() {
  const [currentStep, setCurrentStep] = useState('client')
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)

  return (
    <div className=" max-w-7xl mt-10  ml-7 sm:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Create New Order</h1>
      </div>

      {/* Step Navigation */}
      <StepNavigation 
        steps={steps}
        currentStep={currentStep}
        onStepClick={setCurrentStep}
      />

      {/* Step Content */}
      <Card className="mt-4">
        {currentStep === 'client' && (
          <ClientSelection
            clients={recentClients}
            selectedClient={selectedClient}
            onClientSelect={setSelectedClient}
          />
        )}
        {currentStep === 'services' && (
          <div className="p-8 text-center text-gray-500">[Services step placeholder]</div>
        )}
        {/* Add more step content as needed */}
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
        <Button variant="secondary" className="order-2 sm:order-1">
          Cancel
        </Button>
        <Button 
          disabled={!selectedClient || currentStep !== 'client'}
          className="flex items-center gap-2 order-1 sm:order-2"
          onClick={() => {
            if (selectedClient && currentStep === 'client') setCurrentStep('services')
          }}
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Continue</span>
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  )
} 