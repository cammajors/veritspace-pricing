"use client"

import type { FC } from "react"
import type { App } from "@/lib/apps"

interface ComparisonBarProps {
  selectedApps: App[]
  onRemove: (appId: string) => void
  onClear: () => void
}

export const ComparisonBar: FC<ComparisonBarProps> = ({ selectedApps, onRemove, onClear }) => {
  if (selectedApps.length === 0) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-30">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-700">Comparing {selectedApps.length} of 4 selected apps</div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClear}
              className="text-green-600 hover:text-green-800 font-medium text-sm transition-colors duration-200"
            >
              Clear All
            </button>
            {selectedApps.map((app) => (
              <div key={app.id} className="flex items-center space-x-2">
                <span className="text-gray-600 text-sm">{app.name}</span>
                <button
                  onClick={() => onRemove(app.id)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
