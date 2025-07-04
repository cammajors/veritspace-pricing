"use client"

import { useState } from "react"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const plans = [
  {
    id: "essentials",
    name: "VeritGuard Essentials",
    description: "Firms needing secure, dedicated cloud hosting",
    monthlyPrice: 60,
    features: [
      "Next Generation Security Software",
      "Enhanced Backup Software (up to 250 GB)",
      "24/7 Remote Monitoring Software",
      "24/7 Remote Technical Support",
      "Bi-Annual Remote PC Tune-ups",
    ],
  },
  {
    id: "pro",
    name: "VeritGuard Pro",
    description: "Firms needing scalability & performance",
    monthlyPrice: 120,
    isPopular: true,
    features: [
      "All Essentials features, plus",
      "Enhanced Backup Software (up to 500 GB)",
      "Advanced Email Anti-Phishing Tool",
      "Quarterly Remote PC Tune-ups",
      "Employee Cybersecurity Training Resources",
      "WISP Assistance",
      "FTC Safeguards Quarterly Audit",
    ],
  },
  {
    id: "elite",
    name: "VeritGuard Elite",
    description: "Firms wanting fully managed IT + hosting in one solution",
    monthlyPrice: 150,
    features: [
      "All Pro features, plus",
      "Enhanced Backup Software (up to 1 TB)",
      "24/7 SOC Monitoring",
      "Advanced Threat Detection and Response",
      "Quarterly Vulnerability Assessments",
      "Priority Remote Support",
      "Customized Compliance Reporting",
    ],
  },
]

const PricingToggle = ({
  period,
  onToggle,
}: { period: "monthly" | "annually"; onToggle: (p: "monthly" | "annually") => void }) => (
  <div className="flex justify-center items-center my-10">
    <div className="inline-flex bg-brand-medium p-1 rounded-lg space-x-1">
      <Button
        onClick={() => onToggle("monthly")}
        className={cn(
          "px-6 py-2 rounded-md text-sm font-medium transition-colors",
          period === "monthly"
            ? "bg-brand-accent text-brand-dark shadow"
            : "bg-transparent text-gray-300 hover:bg-brand-light",
        )}
      >
        Monthly
      </Button>
      <Button
        onClick={() => onToggle("annually")}
        className={cn(
          "px-6 py-2 rounded-md text-sm font-medium transition-colors",
          period === "annually"
            ? "bg-brand-accent text-brand-dark shadow"
            : "bg-transparent text-gray-300 hover:bg-brand-light",
        )}
      >
        Annual - 2 Months Free
      </Button>
    </div>
  </div>
)

export default function VeritGuardPricing() {
  const [pricingPeriod, setPricingPeriod] = useState<"monthly" | "annually">("monthly")

  const getPrice = (monthlyPrice: number) => {
    if (pricingPeriod === "annually") {
      // 2 months free is equivalent to paying for 10 months over a year
      return Math.round((monthlyPrice * 10) / 12)
    }
    return monthlyPrice
  }

  return (
    <section className="py-12 bg-brand-dark sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <PricingToggle period={pricingPeriod} onToggle={setPricingPeriod} />

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto text-left lg:max-w-none lg:grid-cols-3 lg:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn(
                "flex flex-col rounded-xl overflow-hidden transition-all duration-300 ease-in-out bg-brand-medium border",
                plan.isPopular ? "border-brand-accent shadow-2xl" : "border-brand-light",
              )}
            >
              <Card className="bg-transparent border-none w-full h-full flex flex-col p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm text-gray-300 min-h-[40px]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col">
                  <div className="my-8">
                    <span className="text-5xl font-bold text-white">${getPrice(plan.monthlyPrice)}</span>
                    <span className="ml-1 text-base text-gray-400">/per device</span>
                  </div>
                  <div className="w-full border-t border-brand-light my-6" />
                  <ul className="space-y-4 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full py-3 text-base font-semibold bg-brand-accent text-brand-dark hover:bg-brand-accent-hover mt-8">
                    Sign Up
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-brand-medium text-gray-300 px-4 py-2 rounded-lg">
            <Check className="w-5 h-5 mr-3 text-brand-accent" />
            <p>One Time Setup fee - $100/device</p>
          </div>
        </div>
      </div>
    </section>
  )
}
