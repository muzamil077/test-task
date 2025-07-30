interface Step {
  id: string
  label: string
}

interface StepNavigationProps {
  steps: Step[]
  currentStep: string
  onStepClick?: (stepId: string) => void
}

export default function StepNavigation({ steps, currentStep, onStepClick }: StepNavigationProps) {
  return (
    <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 overflow-x-auto">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`
            px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap
            ${currentStep === step.id 
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }
          `}
          onClick={() => onStepClick?.(step.id)}
        >
          {step.label}
        </div>
      ))}
    </div>
  )
} 