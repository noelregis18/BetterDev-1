'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import CodePreview from "./appComponents/CodePreview"
import FeatureSection from "./appComponents/FeatureSection"
import Footer from "./appComponents/Footer"
import HowItWorks from "./appComponents/HowItWorks"
import Navbar from "./appComponents/Navbar"
import PricingSection from "./appComponents/PricingSection"
import TestimonialsSection from "./appComponents/TestimonialSection"

export default function Home() {

  const router = useRouter();

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
              <Button 
                size="lg" 
                className="bg-[#7C3AED] hover:bg-[#6D28D9]"
                onClick={() => router.push('/codeReview')}
                >
                Get Started
              </Button>
              
            </div>
            <div className="flex items-center gap-4">
              
              <p className="text-gray-400">
                Trusted by
                {" "}<span className="text-[#7C3AED] font-bold">5,000+</span>{" "}
                developers
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