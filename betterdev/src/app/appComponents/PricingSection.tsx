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
    <section className="py-20 px-6 bg-[#02010a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-[#7C3AED]">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400/80">
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