type ViewType = 'day' | 'week' | 'month' | 'list'

interface ViewOption {
  id: ViewType
  label: string
}

interface ViewSelectorProps {
  options: ViewOption[]
  currentView: ViewType
  onViewChange: (view: ViewType) => void
}

export default function ViewSelector({ options, currentView, onViewChange }: ViewSelectorProps) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1 mb-6 overflow-x-auto">
      {options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => onViewChange(option.id)}
          className={`
            flex-1 min-w-0 py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap
            ${currentView === option.id
              ? 'bg-white text-primary-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
            }
            ${index === 0 ? 'rounded-l-md' : ''}
            ${index === options.length - 1 ? 'rounded-r-md' : ''}
          `}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
} 