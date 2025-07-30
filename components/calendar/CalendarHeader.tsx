interface CalendarHeaderProps {
  title: string
  subtitle: string
}

export default function CalendarHeader({ title, subtitle }: CalendarHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-1">{subtitle}</p>
    </div>
  )
} 