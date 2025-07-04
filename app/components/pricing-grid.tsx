import { Check, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureDetail {
  text: string
  available: boolean
  bold?: boolean
}

interface FeatureGroup {
  [key: string]: FeatureDetail
}

interface Plan {
  id: string
  name: string
  description: string
  price: string
  priceSuffix: string
  badge?: string
  badgeColor?: string
  ctaText: string
  ctaVariant: "default" | "outline" | "secondary" | "ghost" | "link"
  ctaClassName?: string
  cardClassName?: string
  isPopular?: boolean
  features: {
    [groupName: string]: FeatureGroup
  }
}

const plansData: Plan[] = [
  {
    id: "core",
    name: "VeritSpace Core",
    description: "Firms needing secure, dedicated cloud hosting.",
    price: "69",
    priceSuffix: "/user/mo",
    ctaText: "Sign Up",
    ctaVariant: "outline",
    ctaClassName:
      "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700",
    cardClassName: "border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800",
    features: {
      "Cloud Hosting": {
        "Dedicated Private Cloud": { text: "Standard", available: true },
      },
      "Security & Compliance": {
        "2FA Encryption": { text: "Included", available: true, bold: true },
        "FTC Safeguards": { text: "Included", available: true },
        "SOC 2 Compliance": { text: "Included", available: true },
      },
      Storage: {
        "Base Storage": { text: "40GB", available: true },
      },
      RAM: {
        "Standard RAM": { text: "10GB", available: true },
      },
      Applications: {
        "Included Applications": { text: "2 Included", available: true },
      },
      "Backups & Disaster Recovery": {
        "Data Retention": { text: "30-Day Retention", available: true },
      },
      "IT Management (VeritGuard)": {
        "Basic Management": { text: "Add-on Available", available: false }, // Representing add-on as not included by default
      },
      Support: {
        "Standard Support": { text: "24/7 Always-On Support", available: true },
      },
    },
  },
  {
    id: "pro",
    name: "VeritSpace Pro",
    description: "Firms needing scalable IT & performance.",
    price: "99",
    priceSuffix: "/user/mo",
    badge: "Most Popular",
    badgeColor: "bg-blue-600 text-white",
    ctaText: "Sign Up",
    ctaVariant: "default",
    ctaClassName: "bg-blue-600 hover:bg-blue-700 text-white",
    cardClassName: "border-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500 shadow-xl",
    isPopular: true,
    features: {
      "Cloud Hosting": {
        "Performance-Optimized Cloud": { text: "Enhanced", available: true, bold: true },
      },
      "Security & Compliance": {
        "2FA Encryption": { text: "Included", available: true },
        "FTC Safeguards": { text: "Included", available: true },
        "SOC 2 Compliance": { text: "Included", available: true },
        "Advanced Threat Protection": { text: "Included", available: true, bold: true },
      },
      Storage: {
        "Base Storage": { text: "100GB", available: true, bold: true },
      },
      RAM: {
        "Standard RAM": { text: "15GB", available: true, bold: true },
      },
      Applications: {
        "Included Applications": { text: "6 Included", available: true },
      },
      "Backups & Disaster Recovery": {
        "Data Retention": { text: "60-Day Retention", available: true, bold: true },
      },
      "IT Management (VeritGuard)": {
        "Proactive Management": { text: "Add-on Available", available: false },
      },
      Support: {
        "Priority Support": { text: "24/7 Priority Support", available: true, bold: true },
      },
    },
  },
  {
    id: "complete",
    name: "VeritComplete",
    description: "Firms wanting fully managed IT + hosting in one solution.",
    price: "199",
    priceSuffix: "/user/mo",
    badge: "Enterprise",
    badgeColor: "bg-purple-700 text-white dark:bg-purple-600",
    ctaText: "Contact Sales",
    ctaVariant: "default",
    ctaClassName: "bg-purple-700 hover:bg-purple-800 text-white dark:bg-purple-600 dark:hover:bg-purple-700",
    cardClassName: "border-purple-700 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-600",
    features: {
      "Cloud Hosting": {
        "Fully Managed IT + Hosting": { text: "All-inclusive", available: true, bold: true },
      },
      "Security & Compliance": {
        "2FA Encryption": { text: "Included", available: true },
        "FTC Safeguards": { text: "Included", available: true },
        "SOC 2 Compliance": { text: "Included", available: true },
        "Device-Level Security": { text: "Included", available: true, bold: true },
        "Endpoint Management": { text: "Included", available: true, bold: true },
      },
      Storage: {
        "Base Storage": { text: "200GB", available: true, bold: true },
      },
      RAM: {
        "Standard RAM": { text: "20GB", available: true, bold: true },
      },
      Applications: {
        "Included Applications": { text: "Unlimited", available: true, bold: true },
      },
      "Backups & Disaster Recovery": {
        "Data Retention": { text: "90-Day Retention", available: true, bold: true },
      },
      "IT Management (VeritGuard)": {
        "VeritGuard Elite": { text: "Fully Managed IT", available: true, bold: true },
      },
      Support: {
        "Dedicated Support Manager": { text: "Dedicated Manager + 24/7 Support", available: true, bold: true },
      },
    },
  },
]

export default function PricingGrid() {
  return (
    <section className="py-12 bg-slate-900 dark:bg-gray-950 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Choose the Right Plan for Your Firm</h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-300 sm:mt-6">
            Affordable, secure, dedicated cloud hosting tailored for tax firms.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-left md:max-w-none md:grid-cols-3 lg:gap-8">
          {plansData.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                "flex flex-col rounded-xl overflow-hidden transition-all duration-300 ease-in-out",
                plan.cardClassName,
                plan.isPopular ? "relative lg:scale-105 lg:z-10" : "lg:hover:scale-105",
              )}
            >
              {plan.isPopular && (
                <div
                  className={cn(
                    "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full",
                    plan.badgeColor || "bg-pink-500 text-white",
                  )}
                >
                  {plan.badge}
                </div>
              )}
              <CardHeader className={cn("pt-12 pb-6 px-6", plan.isPopular && "lg:pt-16")}>
                {!plan.isPopular && plan.badge && (
                  <div
                    className={cn(
                      "mb-3 inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full w-fit",
                      plan.badgeColor || "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
                    )}
                  >
                    {plan.badge}
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="ml-1 text-base text-gray-500 dark:text-gray-400">{plan.priceSuffix}</span>
                </div>
              </CardHeader>

              <CardContent className={cn("flex flex-col flex-grow px-6 pb-8", plan.isPopular && "lg:pb-12")}>
                <div className="space-y-6 flex-grow">
                  {Object.entries(plan.features).map(([groupName, features]) => (
                    <div key={groupName}>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">{groupName}</p>
                      <ul className="space-y-2">
                        {Object.entries(features).map(([featureName, detail]) => (
                          <li key={featureName} className="flex items-start">
                            {detail.available ? (
                              <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span
                              className={cn(
                                "text-sm text-gray-600 dark:text-gray-300",
                                detail.bold && "font-semibold text-gray-800 dark:text-white",
                              )}
                            >
                              {featureName}:{" "}
                              <span className={cn(detail.bold ? "font-normal" : "text-gray-500 dark:text-gray-400")}>
                                {detail.text}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.ctaVariant}
                  className={cn("w-full mt-10 py-3 text-base font-semibold", plan.ctaClassName)}
                  aria-label={`Sign up for ${plan.name}`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
