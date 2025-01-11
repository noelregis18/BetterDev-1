interface StepItemProps {
    step: string
    title: string
    description: string
    className?: string
  }
  
  export default function StepItem({ step, title, description, className = "" }: StepItemProps) {
    return (
      <div className={`relative pl-12 sm:relative sm:pl-12 md:relative md:pl-12 ${className}`}>
        {/* Timeline dot */}
        <div className="
          absolute left-0 w-4 h-4 rounded-full bg-[#7C3AED] transform -translate-x-1/2
          sm:absolute sm:left-0 sm:w-4 sm:h-4 sm:rounded-full sm:bg-[#7C3AED] sm:transform sm:-translate-x-1/2
          md:absolute md:left-0 md:w-4 md:h-4 md:rounded-full md:bg-[#7C3AED] md:transform md:-translate-x-1/2">
          <div className="
            absolute inset-0 rounded-full bg-[#7C3AED] opacity-20 blur-sm
            sm:absolute sm:inset-0 sm:rounded-full sm:bg-[#7C3AED] sm:opacity-20 sm:blur-sm
            md:absolute md:inset-0 md:rounded-full md:bg-[#7C3AED] md:opacity-20 md:blur-sm"></div>
        </div>
        
        <div className="
          bg-gray-900 rounded-lg p-8
          sm:bg-gray-900 sm:rounded-lg sm:p-8
          md:bg-gray-900 md:rounded-lg md:p-8">
          <div className="
            text-[#7C3AED] mb-2
            sm:text-[#7C3AED] sm:mb-2
            md:text-[#7C3AED] md:mb-2">{step}</div>
          <h3 className="
            text-lg font-bold text-white mb-3
            sm:text-2xl sm:font-bold sm:text-white sm:mb-3
            md:text-2xl md:font-bold md:text-white md:mb-3">{title}</h3>
          <p className="
            text-gray-400 text-sm
            sm:text-gray-400 sm:text-lg
            md:text-gray-400 md:text-lg">{description}</p>
        </div>
      </div>
    )
  }
  