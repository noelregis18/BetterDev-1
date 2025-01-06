import { Button } from "@/components/ui/button"
import CodePreview from "./appComponents/CodePreview"
import FeatureSection from "./appComponents/FeatureSection"
import Footer from "./appComponents/Footer"
import HowItWorks from "./appComponents/HowItWorks"
import Navbar from "./appComponents/Navbar"
import PricingSection from "./appComponents/PricingSection"
import TestimonialsSection from "./appComponents/TestimonialSection"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-950">
      <Navbar />

      {/* HERO SECTION */}
      <main className="h-full max-w-7xl container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Elevate Your Code With{" "}
              <span className="text-[#7C3AED] block">AI-Powered Reviews</span>
            </h1>
            <p className="text-xl text-gray-400">
              Get instant, intelligent code reviews that help you write better,
              cleaner, and more efficient code. Let AI be your personal code
              mentor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9]">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-gray-700 hover:bg-gray-900"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-700"
                  />
                ))}
              </div>
              <p className="text-gray-400">
                <span className="text-[#7C3AED] font-bold">5,000+</span>{" "}
                developers trust BetterDev
              </p>
            </div>
          </div>
          <div className="lg:ml-auto w-full max-w-xl">
            <CodePreview />
          </div>
        </div>
      </main>

      {/* FEATURES SECTION */}
      <FeatureSection />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PRICING SECTION */}
      <PricingSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* FOOTER */}
      <Footer />

    </div>
  )
}