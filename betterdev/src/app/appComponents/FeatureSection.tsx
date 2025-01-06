import FeatureCard from "./FeatureCard"



export default function FeatureSection() {
  const features = [
    {
      icon: "analysis",
      title: "Real-time Code Analysis",
      description: "Get instant feedback on your code quality, performance, and security vulnerabilities as you type.",
    },
    {
      icon: "refactoring",
      title: "Smart Refactoring",
      description: "Automatically identify and fix code smells with AI-powered refactoring suggestions.",
    },
    {
      icon: "patterns",
      title: "Code Pattern Recognition",
      description: "Learn from best practices and common patterns in your programming language.",
    },
    {
      icon: "performance",
      title: "Performance Optimization",
      description: "Identify bottlenecks and receive suggestions for improving code performance.",
    },
    {
      icon: "security",
      title: "Security Scanning",
      description: "Detect and fix security vulnerabilities before they reach production.",
    },
    {
      icon: "collaboration",
      title: "Collaborative Learning",
      description: "Share and learn from code reviews within your team or the community.",
    },
  ] as const

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Supercharge Your Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your coding experience with powerful AI-driven features designed
            to make you a better developer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}