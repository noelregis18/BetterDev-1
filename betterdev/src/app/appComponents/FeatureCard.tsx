import { Card } from "@/components/ui/card"
import { MagicCard } from "@/components/ui/magic-card"
import { Check, Zap, Clipboard, Gauge, Lock, MessageSquare } from 'lucide-react'
import { useTheme } from "next-themes"

interface FeatureCardProps {
  title: string
  description: string
  icon: "analysis" | "refactoring" | "patterns" | "performance" | "security" | "collaboration"
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const icons = {
    analysis: Check,
    refactoring: Zap,
    patterns: Clipboard,
    performance: Gauge,
    security: Lock,
    collaboration: MessageSquare,
  }

  const { theme } = useTheme();
  const Icon = icons[icon]

  return (
    <Card 
      className="
      bg-gray-900 border-2 border-[#7C3AED]/20 transition-all delay-100 ease-linear hover:cursor-pointer hover:border-[#7C3AED] p-5
      sm:bg-gray-900 sm:border-2 sm:border-[#7C3AED]/20 sm:transition-all sm:delay-100 sm:ease-linear sm:hover:cursor-pointer sm:hover:border-[#7C3AED] sm:p-5  
      md:bg-gray-900 md:border-2 md:border-[#7C3AED]/20 md:transition-all md:delay-100 md:ease-linear md:hover:cursor-pointer md:hover:border-[#7C3AED] md:p-6"
      >
      <div 
        className="
          w-8 h-8 bg-[#1a1a1a] border border-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4  
          sm:w-10 sm:h-10 sm:bg-[#1a1a1a] sm:border sm:border-[#7C3AED]/20 sm:rounded-lg sm:flex sm:items-center sm:justify-center sm:mb-4
          md:w-10 md:h-10 md:bg-[#1a1a1a] md:border md:border-[#7C3AED]/20 md:rounded-lg md:flex md:items-center md:justify-center md:mb-4">
        <Icon 
          className="
            w-4 h-4 text-[#7C3AED]
            sm:w-5 sm:h-5 sm:text-[#7C3AED]
            md:w-5 md:h-5 md:text-[#7C3AED]" />
      </div>
      <h3 className="
        text-lg font-semibold text-white mb-2
        sm:text-xl sm:font-semibold sm:text-white sm:mb-2
        md:text-xl md:font-semibold md:text-white md:mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-400">{description}</p>
    </Card>
  )
}