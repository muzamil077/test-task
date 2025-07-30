import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DateNavigationProps {
  currentDate: Date
  onPrevious: () => void
  onNext: () => void
  onToday: () => void
  formatDate: (date: Date) => string
}

export default function DateNavigation({ 
  currentDate, 
  onPrevious, 
  onNext, 
  onToday, 
  formatDate 
}: DateNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 flex-wrap">
      <button
        onClick={onPrevious}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Previous day"
      >
        <ChevronLeft size={16} />
      </button>
      
      <button
        onClick={onToday}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-sm font-medium"
        aria-label="Go to today"
      >
        T
      </button>
      
      <span className="text-sm sm:text-lg font-medium text-gray-900 text-center px-2">
        {formatDate(currentDate)}
      </span>
      
      <button
        onClick={onNext}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Next day"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
} 