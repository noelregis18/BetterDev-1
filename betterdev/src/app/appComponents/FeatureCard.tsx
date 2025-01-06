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
      className="bg-gray-900 border-2 border-[#7C3AED]/20 transition-all delay-100 ease-linear hover:cursor-pointer hover:border-[#7C3AED] p-6"
      // className="cursor-pointer bg-black shadow-2xl p-6"
      // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      // gradientOpacity={1.5}
      // gradientSize={200}
      >
      <div className="w-10 h-10 bg-[#1a1a1a] border border-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#7C3AED]" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
}