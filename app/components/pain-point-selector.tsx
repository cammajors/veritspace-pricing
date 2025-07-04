"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Zap, ShieldCheck, UserCog } from "lucide-react"

const painPoints = [
  {
    id: "performance",
    text: "My system is too slow",
    icon: <Zap className="w-4 h-4 mr-2" />,
    recommendedPlanIds: ["pro", "complete"],
  },
  {
    id: "security",
    text: "I'm worried about security",
    icon: <ShieldCheck className="w-4 h-4 mr-2" />,
    recommendedPlanIds: ["pro", "complete"],
  },
  {
    id: "management",
    text: "I spend too much time on IT",
    icon: <UserCog className="w-4 h-4 mr-2" />,
    recommendedPlanIds: ["complete"],
  },
]

interface PainPointSelectorProps {
  selectedPainPoint: string | null
  onSelectionChange: (painPointId: string | null) => void
}

export default function PainPointSelector({ selectedPainPoint, onSelectionChange }: PainPointSelectorProps) {
  return (
    <div className="my-8 p-6 bg-brand-medium rounded-lg max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold text-white block text-center mb-4">What's your biggest IT challenge?</h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {painPoints.map((point) => (
          <Button
            key={point.id}
            variant={selectedPainPoint === point.id ? "default" : "outline"}
            onClick={() => onSelectionChange(point.id === selectedPainPoint ? null : point.id)}
            className={cn(
              "transition-all duration-200",
              selectedPainPoint === point.id
                ? "bg-brand-accent text-brand-dark hover:bg-brand-accent-hover scale-105"
                : "bg-brand-dark border-brand-light text-gray-300 hover:bg-brand-light hover:text-white",
            )}
          >
            {point.icon}
            {point.text}
          </Button>
        ))}
      </div>
    </div>
  )
}
