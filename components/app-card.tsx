"use client"

import type { FC } from "react"
import type { App } from "@/lib/apps"

interface AppCardProps {
  app: App
  isCompared: boolean
  onCompareToggle: (appId: string) => void
  onCardClick: (app: App) => void
}

export const AppCard: FC<AppCardProps> = ({ app, isCompared, onCompareToggle, onCardClick }) => {
  const { id, name, vendor, description, features, logo, rating } = app

  return (
    <div
      className={`bg-white rounded-md border p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative group ${
        isCompared ? "border-green-500 shadow-lg" : "border-gray-100"
      }`}
    >
      <div className="absolute top-4 right-4 z-10">
        <label className="flex items-center space-x-2 cursor-pointer text-sm text-gray-600 hover:text-green-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            checked={isCompared}
            onChange={() => onCompareToggle(id)}
          />
          <span>Compare</span>
        </label>
      </div>

      <div onClick={() => onCardClick(app)} className="cursor-pointer">
        <div className="flex items-center gap-4 mb-4 mt-6">
          <div className="w-12 h-12 bg-[#0c1e2b] rounded-md flex items-center justify-center text-white text-xl flex-shrink-0">
            {logo}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0c1e2b] group-hover:text-green-600 transition-colors">
              {name}
            </h3>
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
    </div>
  )
}
