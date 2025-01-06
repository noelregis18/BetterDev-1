import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="h-full w-[70%] flex items-center justify-between  p-6">
      <Link href="/" className="text-2xl font-bold text-[#7C3AED]">
        BetterDev
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/features" className="text-white hover:text-gray-300">
          Features
        </Link>
        <Link href="/pricing" className="text-white hover:text-gray-300">
          Pricing
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
      </div>
      {/* <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9]">
        Get Started
      </Button> */}
    </nav>
  )
}