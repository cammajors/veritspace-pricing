"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

interface AppCardProps {
  id: string
  name: string
  vendor: string
  description: string
  features: string[]
  logo: string
  isFeatured?: boolean
  rating?: number
}

export function AppCard({
  id,
  name,
  vendor,
  description,
  features,
  logo,
  isFeatured = false,
  rating = 4.5,
}: AppCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        className="bg-white rounded-md border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:border-green-500 cursor-pointer relative"
        onClick={() => setShowModal(true)}
      >
        {isFeatured && (
          <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold uppercase py-1 px-3 rounded-full">
            Featured
          </span>
        )}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#0c1e2b] rounded-md flex items-center justify-center text-white text-xl flex-shrink-0">
            {logo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0c1e2b]">{name}</h3>
            <span className="text-xs text-gray-500 uppercase tracking-wider">{vendor}</span>
            <div className="flex items-center mt-1">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(rating ?? 0) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              <span className="ml-2 text-xs text-gray-600">{rating?.toFixed(1)}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 3).map((feature, index) => (
            <span key={index} className="text-xs py-1 px-3 bg-green-50 text-green-700 rounded-full">
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#0c1e2b] rounded-md flex items-center justify-center text-white text-2xl">
                  {logo}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-[#0c1e2b]">{name}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{vendor}</span>
                    <div className="flex items-center">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      <span className="ml-1 text-sm text-gray-500">{rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-[#0c1e2b]">Overview</h3>
              <p className="text-gray-600 mb-6">{description}</p>

              <h3 className="text-lg font-semibold mb-2 text-[#0c1e2b]">Key Features</h3>
              <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href={`/apps/${id}`}
                  className="flex-1 bg-green-500 text-white py-3 px-4 rounded-md text-center font-medium hover:bg-green-600 transition-colors"
                >
                  View Details
                </Link>
                <button className="flex-1 bg-[#0c1e2b] text-white py-3 px-4 rounded-md text-center font-medium hover:bg-[#1a3a4f] transition-colors">
                  Get Started with Verito
                </button>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t">
              <h3 className="text-lg font-semibold mb-4 text-[#0c1e2b]">Why Host with Verito?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1 text-[#0c1e2b]">Enhanced Security</h4>
                  <p className="text-sm text-gray-600">
                    SOC 2 & FTC compliant infrastructure with end-to-end encryption.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1 text-[#0c1e2b]">High Performance</h4>
                  <p className="text-sm text-gray-600">99.999% uptime guarantee with lightning-fast servers.</p>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-medium mb-1 text-[#0c1e2b]">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Dedicated specialists who understand accounting software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
