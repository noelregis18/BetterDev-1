import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Star } from "lucide-react"

export default function Navbar() {
  return (
    <nav 
      className="
        h-full w-[95%] flex items-center justify-between p-4  
        sm:h-full sm:w-[70%] sm:flex sm:items-center sm:justify-between sm:p-8
        md:h-full md:w-[70%] md:flex md:items-center md:justify-between md:p-6">
      <Link 
        href="/" 
        className="
          text-2xl font-bold text-[#7C3AED]  
          sm:text-2xl sm:font-bold sm:text-[#7C3AED]
          md:text-2xl md:font-bold md:text-[#7C3AED]">
        BetterDev
      </Link>
      <div 
        className="
          flex items-center gap-x-3 gap-y-8  
          sm:flex sm:items-center sm:gap-x-4 sm:gap-y-8
          md:flex md:items-center md:gap-x-4 md:gap-y-8">
        <a href="https://buymeacoffee.com/poswalsameer" target="_blank">
          <Button 
            className="
              h-9 w-9 text-[#7C3AED] hover:text-white  bg-white hover:bg-[#7C3AED]  
              sm:h-10 sm:w-10 sm:text-[#7C3AED] sm:hover:text-white  sm:bg-white sm:hover:bg-[#7C3AED]
              md:h-10 md:w-10 md:text-[#7C3AED] md:hover:text-white  md:bg-white md:hover:bg-[#7C3AED] ">
            <Coffee 
              className="
                h-4 w-4  
                sm:h-6 sm:w-6
                md:h-6 md:w-6"/>
          </Button>
        </a>

        <a href="https://github.com/poswalsameer/BetterDev" target="_blank">
          <Button 
            className="
              h-9 bg-[#02010a] hover:bg-[#7C3AED] border-2 border-[#7C3AED]/40  
              sm:h-10 sm:bg-[#02010a] sm:hover:bg-[#7C3AED] sm:border-2 sm:border-[#7C3AED]/40
              md:h-10 md:bg-[#02010a] md:hover:bg-[#7C3AED] md:border-2 md:border-[#7C3AED]/40">
            <Star className="text-yellow-400" /> us on Github
          </Button>
        </a>
      </div>
    </nav>
  )
}