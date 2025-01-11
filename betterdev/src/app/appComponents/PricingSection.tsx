import PricingCard from "./PricingCard"


export default function PricingSection() {
  const plans = [
    {
      title: "Starter",
      price: "Free",
      description: "Perfect for personal projects",
      features: [
        "Up to 1,000 lines/month",
        "Basic code analysis",
        "Community support",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: "$29",
      description: "For professional developers",
      features: [
        "Unlimited code analysis",
        "Advanced suggestions",
        "Priority support",
        "GitHub integration",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
      ],
      buttonText: "Contact Sales",
    },
  ]

  return (
    <section className="
      py-20 px-6 bg-[#02010a]  
      sm:py-20 sm:px-6 sm:bg-[#02010a]
      md:py-20 md:px-6 md:bg-[#02010a]">
      <div className="
        max-w-6xl mx-auto
        sm:max-w-6xl sm:mx-auto
        md:max-w-6xl md:mx-auto">
        <div className="
          text-center mb-16
          sm:text-center sm:mb-16
          md:text-center md:mb-16">
          <h2 className="
            text-4xl font-bold text-white mb-4
            sm:text-4xl sm:font-bold sm:text-white sm:mb-4
            md:text-4xl md:font-bold md:text-white md:mb-4">
            Simple, Transparent <span className="text-[#7C3AED]">Pricing</span>
          </h2>
          <p className="
            text-lg text-gray-400/80  
            sm:text-xl sm:text-gray-400/80  
            md:text-xl md:text-gray-400/80">
            Choose the perfect plan for your development needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}