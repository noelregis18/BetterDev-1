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
    <div className="min-h-screen w-full flex flex-col items-center bg-[#02010a]">
      
      <Navbar />

      {/* HERO SECTION */}
      <main className=" h-screen max-w-7xl flex items-center container mx-auto px-6">
        <div className="h-full w-full flex flex-col justify-center items-center gap-12">
          <div className="w-full flex flex-col justify-center items-center  space-y-8">
            <h1 className="w-full flex flex-col justify-center items-center text-5xl font-bold text-white leading-tight">
              Your Own Personal{" "}
              {" "}
              <br />
              <span className="text-[#7C3AED]">AI Senior Engineer</span>
            </h1>
            <p className="max-w-2xl text-center text-xl text-gray-400/80">
              Get instant, intelligent code reviews that help you write better,
              cleaner, and more efficient code. Let AI be your senior engineer.
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
          </div>
          <div className="mb-10 w-full max-w-xl">
            <CodePreview />
          </div>
          <div className="flex items-center">
              <p className="text-gray-400">
                Trusted by
                {" "}<span className="text-[#7C3AED] font-bold">5,000+</span>{" "}
                developers
              </p>
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