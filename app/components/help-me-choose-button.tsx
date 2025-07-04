"use client"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"

interface HelpMeChooseButtonProps {
  onClick: () => void
}

export default function HelpMeChooseButton({ onClick }: HelpMeChooseButtonProps) {
  return (
    <div className="text-center my-6">
      <Button
        onClick={onClick}
        variant="ghost"
        className="text-brand-accent hover:text-brand-accent-hover hover:bg-brand-light"
      >
        <Lightbulb className="w-5 h-5 mr-2" />
        Help Me Choose the Right Plan
      </Button>
    </div>
  )
}
