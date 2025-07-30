"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const views = ['Day', 'Week', 'Month', 'List']

// Mock events by date string (YYYY-MM-DD)
const mockEventsByDate: Record<string, Array<{
  time: string
  title: string
  address: string
  color: string
  timeStart: number
}>> = {
  '2025-04-14': [
    {
      time: '9:30 - 12:15',
      title: 'Ruth Goldstein - Move #32844',
      address: 'Dneprov 112 → Dneprov 242',
      color: 'bg-red-100 border-red-300',
      timeStart: 9,
    },
    {
      time: '12:30 - 14:00',
      title: 'Team Break',
      address: '',
      color: 'bg-yellow-100 border-yellow-300',
      timeStart: 12,
    },
    {
      time: '14:00 - 16:00',
      title: 'Anna Cohen - Move #32845',
      address: 'Yeli Gruzchikov 78',
      color: 'bg-red-100 border-red-300',
      timeStart: 14,
    },
  ],
  '2025-04-15': [
    {
      time: '10:00 - 12:00',
      title: 'David Levi - Move #32846',
      address: 'Herzl 10 → Ben Gurion 20',
      color: 'bg-blue-100 border-blue-300',
      timeStart: 10,
    },
    {
      time: '13:00 - 15:00',
      title: 'Team Meeting',
      address: '',
      color: 'bg-green-100 border-green-300',
      timeStart: 13,
    },
  ],
}

function getDateKey(date: Date) {
  return date.toISOString().slice(0, 10)
}

export default function CalendarOrders() {
  const [view, setView] = useState('Day')
  const [currentDate, setCurrentDate] = useState(new Date(2025, 3, 14)) // April 14, 2025

  function formatDate(date: Date) {
    return date.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })
  }

  function changeDate(days: number) {
    setCurrentDate(prev => {
      const d = new Date(prev)
      d.setDate(d.getDate() + days)
      return d
    })
  }

  const events = mockEventsByDate[getDateKey(currentDate)] || []

  return (
    <main className="flex-1 p-4 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Order Calendar</h2>
      <p className="text-gray-500 mb-4 text-sm">Plan and manage your schedule</p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        <div className="flex gap-2 bg-gray-100 rounded overflow-hidden">
          {views.map(v => (
            <button
              key={v}
              className={`px-3 py-1 text-sm font-medium ${view === v ? 'bg-[#3B5B8A] text-white' : 'text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setView(v)}
            >
              {v}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-0 sm:ml-6 mt-2 sm:mt-0">
          <button className="p-1 rounded hover:bg-gray-200" onClick={() => changeDate(-1)}><ChevronLeft size={20} /></button>
          <span className="font-semibold text-gray-900 text-base">{formatDate(currentDate)}</span>
          <button className="p-1 rounded hover:bg-gray-200" onClick={() => changeDate(1)}><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="bg-white rounded shadow p-0 sm:p-4 min-h-[300px] ">
        {/* Time slots */}
        {events.length === 0 && (
          <div className="text-center text-gray-400 py-8">No events for this day.</div>
        )}
        <div className="divide-y divide-gray-100">
          {[8,9,10,11,12,13,14,15,16].map(hour => {
            const event = events.find(e => e.timeStart === hour)
            return (
              <div key={hour} className="flex items-start min-h-[48px] py-2 px-2 sm:px-4">
                <div className="w-14 text-gray-400 text-sm shrink-0">{hour}:00</div>
                {event ? (
                  <div className={`flex-1 border-l-4 ${event.color} px-3 py-1 ml-2 rounded`}>
                    <div className="font-semibold text-sm text-gray-900">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.time} {event.address && <>· {event.address}</>}</div>
                  </div>
                ) : (
                  <div className="flex-1 min-h-[24px]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}