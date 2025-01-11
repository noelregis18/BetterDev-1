import StepItem from "./StepItem";


export default function HowItWorks() {
  return (
    <section className="
      py-20 px-6 bg-[#02010a]  
      sm:py-20 sm:px-6 sm:bg-[#02010a]
      md:py-20 md:px-6 md:bg-[#02010a]">
      <div className="
        max-w-4xl mx-auto
        sm:max-w-4xl sm:mx-auto
        md:max-w-4xl md:mx-auto">
        <div className="
          text-center mb-16
          sm:text-center sm:mb-16
          md:text-center md:mb-16">
          <h2 className="
            text-4xl font-bold text-white mb-4
            sm:text-4xl sm:font-bold sm:text-white sm:mb-4
            md:text-4xl md:font-bold md:text-white md:mb-4">
            How <span className="text-[#7C3AED]">BetterDev</span> Works
          </h2>
          <p className="
            text-lg text-gray-400/80
            sm:text-xl sm:text-gray-400/80
            md:text-xl md:text-gray-400/80">
            Transform your code into production-ready solutions in three simple steps
          </p>
        </div>
        
        <div className="relative sm:relative md:relative">
          {/* Timeline line */}
          <div className="
            absolute left-0 top-0 bottom-0 w-px bg-[#7C3AED]/20
            sm:absolute sm:left-0 sm:top-0 sm:bottom-0 sm:w-px sm:bg-[#7C3AED]/20
            md:absolute md:left-0 md:top-0 md:bottom-0 md:w-px md:bg-[#7C3AED]/20"></div>
          
          <div className="space-y-12 sm:space-y-12 md:space-y-12">
            <StepItem
              step="Step 1"
              title="Upload Your Code"
              description="Simply paste your code. BetterDev supports all major programming languages and frameworks."
            />
            
            <StepItem
              step="Step 2"
              title="AI Analysis"
              description="Our AI engine analyzes your code for patterns, potential improvements, and security vulnerabilities in real-time."
            />
            
            <StepItem
              step="Step 3"
              title="Get Recommendations"
              description="Receive detailed suggestions and improvements to enhance your code quality and development workflow."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
