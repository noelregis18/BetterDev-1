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
    <div 
    className="
      min-h-screen w-full flex flex-col items-center bg-[#02010a]
      sm:min-h-screen sm:w-full sm:flex sm:flex-col sm:items-center sm:bg-[#02010a]
      md:min-h-screen md:w-full md:flex md:flex-col md:items-center md:bg-[#02010a]">
      
      <Navbar />

      {/* HERO SECTION */}
      <main 
        className=" 
          mt-6 h-screen max-w-7xl flex items-center container mx-auto px-6  
          sm:h-screen sm:max-w-7xl sm:flex sm:items-center sm:container sm:mx-auto sm:px-6
          md:h-screen md:max-w-7xl md:flex md:items-center md:container md:mx-auto md:px-6">
        <div 
          className="
            h-full w-full flex flex-col justify-center items-center gap-12  
            sm:h-full sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-12
            md:h-full md:w-full md:flex md:flex-col md:justify-center md:items-center md:gap-12">
          <div 
            className="
              w-full flex flex-col justify-center items-center space-y-8  
              sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:space-y-8
              md:w-full md:flex md:flex-col md:justify-center md:items-center md:space-y-8">
            <h1 
              className="
                w-full flex flex-col justify-center items-center text-4xl font-bold text-white leading-tight  
                sm:w-full sm:flex sm:flex-col sm:justify-center sm:items-center sm:text-5xl sm:font-bold sm:text-white sm:leading-tight
                md:w-full md:flex md:flex-col md:justify-center md:items-center md:text-5xl md:font-bold md:text-white md:leading-tight">
              Your Own Personal{" "}
              {" "}
              <br />
              <span className="text-[#7C3AED]">AI Senior Engineer</span>
            </h1>
            <p 
              className="
                max-w-2xl text-center text-lg text-gray-400/80  
                sm:max-w-2xl sm:text-center sm:text-xl sm:text-gray-400/80
                md:max-w-2xl md:text-center md:text-xl md:text-gray-400/80">
              Get instant, intelligent code reviews that help you write better,
              cleaner, and more efficient code. Let AI be your senior engineer.
            </p>
            <div 
              className="
                flex flex-wrap gap-4  
                sm:flex sm:flex-wrap sm:gap-4
                md:flex md:flex-wrap md:gap-4">
              <Button 
                size="lg" 
                className="bg-[#7C3AED] hover:bg-[#6D28D9]"
                onClick={() => router.push('/codeReview')}
                >
                Get Started
              </Button>
            </div>
          </div>
          <div 
            className="
              mb-10 w-full max-w-xl  
              sm:mb-10 sm:w-full sm:max-w-xl
              md:mb-10 md:w-full md:max-w-xl">
            <CodePreview />
          </div>
          <div 
            className="
              flex items-center  
              sm:flex sm:items-center
              md:flex md:items-center">
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