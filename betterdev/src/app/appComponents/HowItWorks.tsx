import StepItem from "./StepItem";


export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-[#02010a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How <span className="text-[#7C3AED]">BetterDev</span> Works
          </h2>
          <p className="text-xl text-gray-400/80">
            Transform your code into production-ready solutions in three simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#7C3AED]/20"></div>
          
          <div className="space-y-12">
            <StepItem
              step="Step 1"
              title="Upload Your Code"
              description="Simply paste your code or connect your repository. BetterDev supports all major programming languages and frameworks."
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
