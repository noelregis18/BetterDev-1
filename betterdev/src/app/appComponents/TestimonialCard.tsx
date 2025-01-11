import { Card } from "@/components/ui/card"
import StarRating from "./StarRating"

interface TestimonialCardProps {
  name: string
  position: string
  testimonial: string
  initials: string
}

export default function TestimonialCard({
  name,
  position,
  testimonial,
  initials,
}: TestimonialCardProps) {
  return (
    <Card className="
      bg-gray-900 border-2 border-[#7C3AED]/20 p-6  
      sm:bg-gray-900 sm:border-2 sm:border-[#7C3AED]/20 sm:p-6
      md:bg-gray-900 md:border-2 md:border-[#7C3AED]/20 md:p-6">
      <div className="
        flex items-center gap-4 mb-4
        sm:flex sm:items-center sm:gap-4 sm:mb-4
        md:flex md:items-center md:gap-4 md:mb-4">
        <div className="
          w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-semibold
          sm:w-12 sm:h-12 sm:rounded-full sm:bg-[#7C3AED] sm:flex sm:items-center sm:justify-center sm:text-white sm:font-semibold
          md:w-12 md:h-12 md:rounded-full md:bg-[#7C3AED] md:flex md:items-center md:justify-center md:text-white md:font-semibold">
          {initials}
        </div>
        <div>
          <h3 className="
            font-semibold text-white
            sm:font-semibold sm:text-white
            md:font-semibold md:text-white">{name}</h3>
          <p className="
            text-gray-400 text-sm
            sm:text-gray-400 sm:text-sm
            md:text-gray-400 md:text-sm">{position}</p>
        </div>
      </div>
      <StarRating rating={5} />
      <blockquote className="
        mt-4 text-gray-300
        sm:mt-4 sm:text-gray-300
        md:mt-4 md:text-gray-300">
        "{testimonial}"
      </blockquote>
    </Card>
  )
}