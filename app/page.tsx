"use client"

import { useState } from "react"
import { apps } from "@/lib/apps"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Sidebar } from "@/components/sidebar"
import { AppGrid } from "@/components/app-grid"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Tax Preparation", "Accounting"])
  const [activeFilters, setActiveFilters] = useState<string[]>(["category"])

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      searchQuery === "" ||
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(app.category)

    return matchesSearch && matchesCategory
  })

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleFilterToggle = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div>
      <Header />
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="main-container">
        <Sidebar
          selectedCategories={selectedCategories}
          activeFilters={activeFilters}
          onCategoryToggle={handleCategoryToggle}
          onFilterToggle={handleFilterToggle}
        />
        <AppGrid apps={filteredApps} />
      </div>
    </div>
  )
}
