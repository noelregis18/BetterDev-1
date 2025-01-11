import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  isPopular?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  isPopular = false,
}: PricingCardProps) {
  return (
    <Card className={`relative bg-gray-900 border-gray-800 sm:relative sm:bg-gray-900 sm:border-gray-800 md:relative md:bg-gray-900 md:border-gray-800 ${
      isPopular ? 'border-[#7C3AED]' : ''
    }`}>
      {isPopular && (
        <div className="
          absolute -top-3 left-1/2 -translate-x-1/2  
          sm:absolute sm:-top-3 sm:left-1/2 sm:-translate-x-1/2
          md:absolute md:-top-3 md:left-1/2 md:-translate-x-1/2">
          <span className="
            bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm
            sm:bg-[#7C3AED] sm:text-white sm:px-4 sm:py-1 sm:rounded-full sm:text-sm
            md:bg-[#7C3AED] md:text-white md:px-4 md:py-1 md:rounded-full md:text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-6 sm:p-6 md:p-6">
        <h3 className="
          text-base font-semibold text-white mb-2
          sm:text-xl sm:font-semibold sm:text-white sm:mb-2
          md:text-xl md:font-semibold md:text-white md:mb-2">{title}</h3>
        <div className="mb-4 sm:mb-4 md:mb-4">
          <span className="
            text-3xl font-bold text-white
            sm:text-4xl sm:font-bold sm:text-white
            md:text-4xl md:font-bold md:text-white">{price}</span>
          {price !== "Free" && price !== "Custom" && (
            <span className="
            text-gray-400 ml-1  
            sm:text-gray-400 sm:ml-1  
            md:text-gray-400 md:ml-1">/month</span>
          )}
        </div>
        <p className="
          text-gray-400 mb-6
          sm:text-gray-400 sm:mb-6
          md:text-gray-400 md:mb-6">{description}</p>
        <ul className="space-y-2 mb-6 sm:space-y-4 sm:mb-6 md:space-y-4 md:mb-6">
          {features.map((feature) => (
            <li key={feature} className="
              text-sm flex items-center text-gray-300  
              sm:text-base sm:flex sm:items-center sm:text-gray-300
              md:flex md:items-center md:text-gray-300">
              <Check className="
                w-5 h-5 text-[#7C3AED] mr-2 flex-shrink-0
                sm:w-5 sm:h-5 sm:text-[#7C3AED] sm:mr-2 sm:flex-shrink-0
                md:w-5 md:h-5 md:text-[#7C3AED] md:mr-2 md:flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className={`w-full sm:w-full md:w-full ${
            isPopular
              ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white sm:bg-[#7C3AED] sm:hover:bg-[#6D28D9] sm:text-white md:bg-[#7C3AED] md:hover:bg-[#6D28D9] md:text-white'
              : 'bg-transparent border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white sm:bg-transparent sm:border sm:border-[#7C3AED] sm:text-[#7C3AED] sm:hover:bg-[#7C3AED] sm:hover:text-white md:bg-transparent md:border md:border-[#7C3AED] md:text-[#7C3AED] md:hover:bg-[#7C3AED] md:hover:text-white'
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  )
}