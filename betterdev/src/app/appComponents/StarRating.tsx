import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
}

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  )
}
