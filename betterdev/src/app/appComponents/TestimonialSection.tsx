import TestimonialCard from "./TestimonialCard"


export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Smith",
      position: "Senior Developer @ Tech Co",
      initials: "JS",
      testimonial:
        "BetterDev has completely transformed how I write code. The AI suggestions are spot-on and have helped me become a better developer.",
    },
    {
      name: "Alice Kim",
      position: "Lead Developer @ StartupX",
      initials: "AK",
      testimonial:
        "The real-time suggestions and code analysis have significantly improved our team's code quality. A must-have tool!",
    },
    {
      name: "Mark Rodriguez",
      position: "Freelance Developer",
      initials: "MR",
      testimonial:
        "As a freelancer, BetterDev helps me maintain high code standards across different projects. It's like having a senior developer reviewing your code 24/7.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Loved by Developers
          </h2>
          <p className="text-xl text-gray-400">
            See what our users have to say about their experience with BetterDev
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}