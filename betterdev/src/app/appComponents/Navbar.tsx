import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Star } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="h-full w-[70%] flex items-center justify-between  p-6">
      <Link href="/" className="text-2xl font-bold text-[#7C3AED]">
        BetterDev
      </Link>
      <div className="hidden md:flex items-center gap-x-4 gap-y-8">
        <a href="https://buymeacoffee.com/poswalsameer" target="_blank">
          <Button className="h-10 w-10 text-[#7C3AED] hover:text-white  bg-white hover:bg-[#7C3AED] ">
            <Coffee className="h-6 w-6"/>
          </Button>
        </a>

        <a href="https://github.com/poswalsameer/BetterDev" target="_blank">
          <Button className="h-10 bg-[#02010a] hover:bg-[#7C3AED] border-2 border-[#7C3AED]/40">
            <Star className="text-yellow-400" /> us on Github
          </Button>
        </a>
      </div>
    </nav>
  )
}