"use client"

import type { FC } from "react"
import { PopularApps } from "./popular-apps"
import { FilterSection, FilterOption } from "./filter-section"

interface SidebarProps {
  selectedCategories: string[]
  activeFilters: string[]
  onCategoryToggle: (category: string) => void
  onFilterToggle: (filter: string) => void
}

export const Sidebar: FC<SidebarProps> = ({ selectedCategories, activeFilters, onCategoryToggle, onFilterToggle }) => {
  const categories = [
    { name: "Tax Preparation", count: 45 },
    { name: "Accounting", count: 38 },
    { name: "Practice Management", count: 27 },
    { name: "Document Management", count: 22 },
    { name: "Payroll & HR", count: 19 },
    { name: "Client Portal", count: 15 },
  ]

  const vendors = [
    { name: "Thomson Reuters", count: 12 },
    { name: "Intuit", count: 8 },
    { name: "Drake Software", count: 6 },
    { name: "CCH", count: 9 },
  ]

  const features = [
    { name: "E-filing", count: 42 },
    { name: "Bank Integration", count: 35 },
    { name: "Client Portal", count: 28 },
    { name: "Multi-user", count: 52 },
  ]

  return (
    <aside className="sidebar">
      <h3>Refine Your Search</h3>
      <PopularApps />

      <FilterSection
        title="By Category"
        isActive={activeFilters.includes("category")}
        onToggle={() => onFilterToggle("category")}
      >
        {categories.map((cat) => (
          <FilterOption
            key={cat.name}
            label={`${cat.name} (${cat.count})`}
            checked={selectedCategories.includes(cat.name)}
            onChange={() => onCategoryToggle(cat.name)}
          />
        ))}
      </FilterSection>

      <FilterSection
        title="By Vendor"
        isActive={activeFilters.includes("vendor")}
        onToggle={() => onFilterToggle("vendor")}
      >
        {vendors.map((vendor) => (
          <FilterOption
            key={vendor.name}
            label={`${vendor.name} (${vendor.count})`}
            checked={false} // Placeholder
            onChange={() => {}} // Placeholder
          />
        ))}
      </FilterSection>

      <FilterSection
        title="By Features"
        isActive={activeFilters.includes("features")}
        onToggle={() => onFilterToggle("features")}
      >
        {features.map((feature) => (
          <FilterOption
            key={feature.name}
            label={`${feature.name} (${feature.count})`}
            checked={false} // Placeholder
            onChange={() => {}} // Placeholder
          />
        ))}
      </FilterSection>
    </aside>
  )
}
