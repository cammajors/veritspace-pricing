"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"

const supportedSoftware = [
  {
    id: "ultratax",
    name: "UltraTax CS",
    logo: "/ultratax-logo.png",
    requiresPro: true,
  },
  {
    id: "lacerte",
    name: "Lacerte Tax",
    logo: "/lacerte-logo.png",
    requiresPro: true,
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    logo: "/quickbooks-logo.png",
    requiresPro: false,
  },
  {
    id: "drake",
    name: "Drake Tax",
    logo: "/drake-logo.png",
    requiresPro: false,
  },
]

interface SoftwareSelectorProps {
  selectedSoftware: string[]
  onSelectionChange: (selected: string[]) => void
}

export default function SoftwareSelector({ selectedSoftware, onSelectionChange }: SoftwareSelectorProps) {
  const handleSelect = (softwareId: string) => {
    const newSelection = selectedSoftware.includes(softwareId)
      ? selectedSoftware.filter((id) => id !== softwareId)
      : [...selectedSoftware, softwareId]
    onSelectionChange(newSelection)
  }

  return (
    <div className="my-8 p-6 bg-brand-medium rounded-lg max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold text-white block text-center mb-4">
        Using specific software? Select it for a tailored recommendation.
      </h3>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {supportedSoftware.map((software) => (
          <button
            key={software.id}
            onClick={() => handleSelect(software.id)}
            className={cn(
              "p-3 rounded-lg border-2 transition-all duration-200 ease-in-out",
              selectedSoftware.includes(software.id)
                ? "bg-brand-light border-brand-accent scale-110"
                : "bg-brand-dark border-transparent hover:border-brand-light",
            )}
            aria-pressed={selectedSoftware.includes(software.id)}
          >
            <Image
              src={software.logo || "/placeholder.svg"}
              alt={`${software.name} logo`}
              width={80}
              height={40}
              className="object-contain h-10 w-20"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
