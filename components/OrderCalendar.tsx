'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import CalendarHeader from '@/components/calendar/CalendarHeader'
import ViewSelector from '@/components/calendar/ViewSelector'
import DateNavigation from '@/components/calendar/DateNavigation'

type ViewType = 'day' | 'week' | 'month' | 'list'

const viewOptions: { id: ViewType; label: string }[] = [
  { id: 'day', label: 'Day' },
  { id: 'week', label: 'Week' },
  { id: 'month', label: 'Month' },
  { id: 'list', label: 'List' },
]

const timeSlots = [
  '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
  '16:00', '17:00', '18:00', '19:00', '20:00'
]

export default function OrderCalendar() {
  const [currentView, setCurrentView] = useState<ViewType>('day')
  const [currentDate, setCurrentDate] = useState(new Date())

  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    setCurrentDate(newDate)
  }

  const goToNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    setCurrentDate(newDate)
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  return (
    <div className="max-w-6xl mx-auto">
      <CalendarHeader 
        title="Order Calendar"
        subtitle="Schedule planning and management"
      />

      <ViewSelector
        options={viewOptions}
        currentView={currentView}
        onViewChange={setCurrentView}
      />

      <DateNavigation
        currentDate={currentDate}
        onPrevious={goToPreviousDay}
        onNext={goToNextDay}
        onToday={goToToday}
        formatDate={formatDate}
      />

      {/* Calendar Grid */}
      <Card>
        {currentView === 'day' && (
          <div className="flex flex-col sm:flex-row">
            {/* Time Column */}
            <div className="w-full sm:w-20 border-b sm:border-b-0 sm:border-r border-gray-200">
              <div className="h-12 border-b border-gray-200 flex items-center justify-center sm:justify-center">
                <span className="text-sm font-medium text-gray-700 hidden sm:block">Time</span>
              </div>
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="h-16 border-b border-gray-100 flex items-center justify-center text-sm text-gray-600"
                >
                  {time}
                </div>
              ))}
            </div>
            
            {/* Events Column */}
            <div className="flex-1">
              <div className="h-12 border-b border-gray-200 bg-gray-50 flex items-center px-4">
                <span className="text-sm font-medium text-gray-700">
                  Events for {formatDate(currentDate).split(',')[0]}
                </span>
              </div>
              {timeSlots.map((time) => (
                <div
                  key={time}
                  className="h-16 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  {/* Events would be rendered here */}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {currentView === 'week' && (
          <div className="p-6 text-center text-gray-500">
            Weekly calendar view
          </div>
        )}
        
        {currentView === 'month' && (
          <div className="p-6 text-center text-gray-500">
            Monthly calendar view
          </div>
        )}
        
        {currentView === 'list' && (
          <div className="p-6 text-center text-gray-500">
            Events list
          </div>
        )}
      </Card>
    </div>
  )
} 