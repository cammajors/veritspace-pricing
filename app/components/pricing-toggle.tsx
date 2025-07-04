"use client"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface PricingToggleProps {
  pricingPeriod: "monthly" | "annually"
  onToggle: (period: "monthly" | "annually") => void
}

export default function PricingToggle({ pricingPeriod, onToggle }: PricingToggleProps) {
  const handleToggle = (checked: boolean) => {
    onToggle(checked ? "annually" : "monthly")
  }

  return (
    <div className="flex items-center space-x-2 justify-center my-8">
      <Label
        htmlFor="pricing-toggle"
        className={pricingPeriod === "monthly" ? "text-white font-semibold" : "text-gray-400"}
      >
        Monthly
      </Label>
      <Switch
        id="pricing-toggle"
        checked={pricingPeriod === "annually"}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-brand-accent data-[state=unchecked]:bg-gray-600"
      />
      <Label
        htmlFor="pricing-toggle"
        className={pricingPeriod === "annually" ? "text-white font-semibold" : "text-gray-400"}
      >
        Annually <span className="text-brand-accent text-xs">(Save 20%)</span>
      </Label>
    </div>
  )
}
