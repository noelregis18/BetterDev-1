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
    <Card className="bg-[#1a1a1a] border-gray-800 p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-semibold">
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
      <StarRating rating={5} />
      <blockquote className="mt-4 text-gray-300">
        "{testimonial}"
      </blockquote>
    </Card>
  )
}