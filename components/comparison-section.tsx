import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Minus } from "lucide-react"

const comparisonData = [
  {
    feature: "IRS-compliant Template",
    free: true,
    paid: true,
  },
  {
    feature: "Annual Risk Assessment",
    free: false,
    paid: true,
  },
  {
    feature: "Expert-Guided Buildout™",
    free: false,
    paid: true,
  },
  {
    feature: "Policy Update & Mgmt.",
    free: false,
    paid: true,
  },
  {
    feature: "Audit Preparation Support",
    free: false,
    paid: true,
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-[#0A252C] py-16 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The Right WISP Solution For Your Firm</h2>
          <p className="mt-4 text-lg text-gray-300">
            Start with our free template or get a comprehensive, expert-guided solution with VeritShield WISP.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-xl border border-gray-700 bg-[#122c34]">
          <Table>
            <TableHeader>
              <TableRow className="border-b-gray-700">
                <TableHead className="w-1/2 text-base font-semibold text-white">Feature</TableHead>
                <TableHead className="text-center text-base font-semibold text-white">Free Starter Template</TableHead>
                <TableHead className="text-center text-base font-semibold text-white">
                  VeritShield WISP Service
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((item) => (
                <TableRow key={item.feature} className="border-b-gray-700">
                  <TableCell className="font-medium">{item.feature}</TableCell>
                  <TableCell className="text-center">
                    {item.free ? (
                      <Check className="mx-auto h-6 w-6 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-6 w-6 text-gray-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.paid ? (
                      <Check className="mx-auto h-6 w-6 text-green-500" />
                    ) : (
                      <Minus className="mx-auto h-6 w-6 text-gray-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="border-b-0">
                <TableCell className="font-medium">Primary CTA</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" className="border-gray-500 bg-transparent hover:bg-gray-700">
                    Download Now
                  </Button>
                </TableCell>
                <TableCell className="text-center">
                  <Button className="bg-green-500 text-white hover:bg-green-600">Get a Free Consultation</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold">Need an Expert-Guided Solution?</h3>
          <p className="mt-2 text-gray-300">Let our experts handle the complexities of WISP compliance for you.</p>
          <Button size="lg" className="mt-6 bg-green-500 text-white hover:bg-green-600">
            Explore VeritShield WISP
          </Button>
        </div>
      </div>
    </section>
  )
}
