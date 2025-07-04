"use client"
import { useState } from "react"
import { ArrowRight, Check, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

import PricingToggle from "./pricing-toggle"
import SoftwareSelector from "./software-selector"
import PainPointSelector from "./pain-point-selector"
import HelpMeChooseButton from "./help-me-choose-button"
import HelpMeChooseModal from "./help-me-choose-modal"

const plansData = [
  {
    id: "core",
    name: "VeritSpace Core",
    description: "Firms needing secure, dedicated cloud hosting.",
    monthlyPrice: 69,
    annualPrice: 55,
    ctaText: "Sign Up",
    incompatibleSoftware: ["ultratax", "lacerte"],
    solvesPainPoints: [],
    features: [
      "Dedicated Private Cloud",
      "2FA, Encryption, FTC Safeguards, SOC 2",
      "40GB Storage",
      "10GB Standard RAM",
      "2 Included Applications",
      "30-Day Backup Retention",
      "24/7 Always-On Support",
    ],
  },
  {
    id: "pro",
    name: "VeritSpace Pro",
    description: "Firms needing scalable IT & performance.",
    monthlyPrice: 99,
    annualPrice: 79,
    badge: "Most Popular",
    ctaText: "Sign Up",
    isPopular: true,
    incompatibleSoftware: [],
    solvesPainPoints: ["performance", "security"],
    features: [
      "All Core features, plus:",
      "Performance-Optimized Cloud",
      "100GB Storage",
      "15GB RAM",
      "6 Included Applications",
      "60-Day Backup Retention",
      "24/7 Priority Support",
    ],
  },
  {
    id: "complete",
    name: "VeritComplete",
    description: "Firms wanting fully managed IT in one solution.",
    monthlyPrice: 199,
    annualPrice: 159,
    ctaText: "Sign Up",
    incompatibleSoftware: [],
    solvesPainPoints: ["performance", "security", "management"],
    features: [
      "All Pro features, plus:",
      "Fully Managed IT + Hosting",
      "Device-Level Security & Endpoint Management",
      "200GB Storage",
      "20GB RAM",
      "Unlimited Applications",
      "90-Day Backup Retention",
      "Dedicated Support Manager",
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function PricingSection() {
  const [pricingPeriod, setPricingPeriod] = useState<"monthly" | "annually">("monthly")
  const [selectedSoftware, setSelectedSoftware] = useState<string[]>([])
  const [selectedPainPoint, setSelectedPainPoint] = useState<string | null>(null)
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false)
  const [recommendedPlanId, setRecommendedPlanId] = useState<string | null>(null)

  const handleQuizRecommend = (planId: string) => {
    setRecommendedPlanId(planId)
    // Highlight the recommended card for 5 seconds
    setTimeout(() => setRecommendedPlanId(null), 5000)
  }

  const getPrice = (plan: (typeof plansData)[0]) =>
    pricingPeriod === "annually" ? plan.annualPrice : plan.monthlyPrice

  const softwareWithRequirements = selectedSoftware.filter((sw) => ["ultratax", "lacerte"].includes(sw))

  return (
    <TooltipProvider>
      <section className="py-12 bg-brand-dark sm:py-16 lg:py-20 overflow-hidden">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Choose the Right Plan for Your Firm
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Use our interactive tools to find the perfect fit, or explore the plans below.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <HelpMeChooseButton onClick={() => setIsQuizModalOpen(true)} />
            <PricingToggle pricingPeriod={pricingPeriod} onToggle={setPricingPeriod} />
            <SoftwareSelector selectedSoftware={selectedSoftware} onSelectionChange={setSelectedSoftware} />
            <PainPointSelector selectedPainPoint={selectedPainPoint} onSelectionChange={setSelectedPainPoint} />
          </motion.div>

          <HelpMeChooseModal
            isOpen={isQuizModalOpen}
            onClose={() => setIsQuizModalOpen(false)}
            onRecommend={handleQuizRecommend}
          />

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-left md:max-w-none lg:grid-cols-3 lg:gap-8 items-stretch">
            {plansData.map((plan, index) => {
              const isSoftwareCompatible = !plan.incompatibleSoftware.some((sw) => selectedSoftware.includes(sw))
              const isRecommendedBySoftware = softwareWithRequirements.length > 0 && isSoftwareCompatible
              const isRecommendedByPainPoint = selectedPainPoint && plan.solvesPainPoints.includes(selectedPainPoint)
              const isRecommendedByQuiz = recommendedPlanId === plan.id

              return (
                <motion.div
                  key={plan.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className={cn(
                    "flex flex-col rounded-xl overflow-hidden transition-all duration-300 ease-in-out relative bg-brand-medium border",
                    plan.isPopular && !isSoftwareCompatible && "opacity-50",
                    plan.isPopular && isSoftwareCompatible
                      ? "border-brand-accent shadow-2xl lg:scale-105 z-10"
                      : "border-brand-light",
                    !isSoftwareCompatible && "opacity-50",
                    (isRecommendedBySoftware || isRecommendedByPainPoint || isRecommendedByQuiz) &&
                      "ring-2 ring-brand-accent",
                  )}
                >
                  <Tooltip>
                    <TooltipTrigger asChild disabled={isSoftwareCompatible}>
                      <Card className="bg-transparent border-none w-full h-full flex flex-col p-6">
                        {!isSoftwareCompatible && (
                          <div className="absolute inset-0 bg-brand-dark/50 z-20 flex items-center justify-center p-4 text-center">
                            <p className="text-white font-semibold">
                              For {softwareWithRequirements.join(" & ")} we recommend our Pro or Complete plans.
                            </p>
                          </div>
                        )}
                        {plan.isPopular && isSoftwareCompatible && (
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase bg-brand-accent rounded-full z-10">
                            {plan.badge}
                          </div>
                        )}
                        <CardHeader className="p-0">
                          <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                          <CardDescription className="mt-2 text-sm text-gray-300 min-h-[40px]">
                            {plan.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow flex flex-col">
                          <div className="my-8">
                            <span className="text-5xl font-bold text-white">${getPrice(plan)}</span>
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
                          {isSoftwareCompatible ? (
                            <Button className="w-full py-3 text-base font-semibold bg-brand-accent text-brand-dark hover:bg-brand-accent-hover mt-8">
                              {plan.ctaText}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          ) : (
                            <Button
                              disabled
                              className="w-full py-3 text-base font-semibold bg-gray-500 text-gray-300 mt-8"
                            >
                              <XCircle className="w-4 h-4 mr-2" />
                              Not Recommended
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent className="bg-brand-dark text-white border-brand-light max-w-xs">
                      <p>
                        The Core plan does not meet the minimum system requirements for{" "}
                        {softwareWithRequirements.join(" & ")}.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
