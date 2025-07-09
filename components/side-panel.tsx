"use client"

import type { FC } from "react"
import Link from "next/link"
import { X, Check, Shield, Zap, LifeBuoy } from "lucide-react"
import type { App } from "@/lib/apps"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SidePanelProps {
  app: App | null
  onClose: () => void
}

export const SidePanel: FC<SidePanelProps> = ({ app, onClose }) => {
  const isVisible = !!app

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="side-panel-title"
      >
        {app && (
          <div className="h-full flex flex-col">
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0c1e2b] rounded-md flex items-center justify-center text-white text-2xl flex-shrink-0">
                  {app.logo}
                </div>
                <div>
                  <h2 id="side-panel-title" className="text-2xl font-semibold text-[#0c1e2b]">
                    {app.name}
                  </h2>
                  <span className="text-sm text-gray-500">{app.vendor}</span>
                  <div className="flex items-center mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(app.rating ?? 0) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    <span className="ml-2 text-xs text-gray-600">{app.rating?.toFixed(1)}</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close panel">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-[#0c1e2b]">Overview</h3>
              <p className="text-gray-600 mb-6">{app.description}</p>

              <h3 className="text-lg font-semibold mb-4 text-[#0c1e2b]">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {app.contextualBenefit && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-sm text-green-800 italic">"{app.contextualBenefit}"</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 text-[#0c1e2b]">Why Host with Verito?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-1 text-[#0c1e2b]">Enhanced Security</h4>
                    <p className="text-sm text-gray-600">
                      SOC 2 & FTC compliant infrastructure with end-to-end encryption.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-1 text-[#0c1e2b]">High Performance</h4>
                    <p className="text-sm text-gray-600">99.999% uptime guarantee with lightning-fast servers.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                      <LifeBuoy className="w-5 h-5 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-1 text-[#0c1e2b]">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Dedicated specialists who understand accounting software.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4 text-[#0c1e2b]">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can I migrate my existing {app.name} data to Verito?</AccordionTrigger>
                    <AccordionContent>
                      Yes, absolutely. Our expert migration team will work with you to seamlessly transfer your existing{" "}
                      {app.name} data to our secure servers with minimal downtime. We handle the entire process to
                      ensure a smooth transition.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Is your hosting for {app.name} compliant with industry regulations?
                    </AccordionTrigger>
                    <AccordionContent>
                      Security and compliance are our top priorities. Our infrastructure is SOC 2 & FTC compliant, and
                      we employ end-to-end encryption and multi-factor authentication to ensure your client data is
                      always protected and meets regulatory requirements.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What kind of support can I expect for {app.name}?</AccordionTrigger>
                    <AccordionContent>
                      We provide 24/7/365 US-based support from specialists who are experts in {app.name} and other
                      accounting software. Whether it's a technical issue or a question about optimizing your workflow,
                      our team is always here to help.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="p-6 border-t bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/apps/${app.id}`}
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-green-600 transition-colors"
                >
                  View Full Details
                </Link>
                <button className="flex-1 bg-[#0c1e2b] text-white py-3 px-4 rounded-md text-center font-medium hover:bg-[#1a3a4f] transition-colors">
                  Get Started with Verito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
