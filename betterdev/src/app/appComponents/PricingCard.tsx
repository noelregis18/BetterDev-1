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
    <Card className={`relative bg-[#1a1a1a] border-gray-800 ${
      isPopular ? 'border-[#7C3AED]' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#7C3AED] text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          {price !== "Free" && price !== "Custom" && (
            <span className="text-gray-400 ml-1">/month</span>
          )}
        </div>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-4 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 text-[#7C3AED] mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className={`w-full ${
            isPopular
              ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white'
              : 'bg-transparent border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white'
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  )
}