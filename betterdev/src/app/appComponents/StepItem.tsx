interface StepItemProps {
    step: string
    title: string
    description: string
    className?: string
  }
  
  export default function StepItem({ step, title, description, className = "" }: StepItemProps) {
    return (
      <div className={`relative pl-12 ${className}`}>
        {/* Timeline dot */}
        <div className="absolute left-0 w-4 h-4 rounded-full bg-[#7C3AED] transform -translate-x-1/2">
          <div className="absolute inset-0 rounded-full bg-[#7C3AED] opacity-20 blur-sm"></div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-8">
          <div className="text-[#7C3AED] mb-2">{step}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-lg">{description}</p>
        </div>
      </div>
    )
  }
  