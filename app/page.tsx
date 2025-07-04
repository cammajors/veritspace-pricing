"use client"

import { useState, useEffect, useCallback } from "react"
import { apps, getAppById, type App } from "@/lib/apps"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Sidebar } from "@/components/sidebar"
import { AppGrid } from "@/components/app-grid"
import { ComparisonBar } from "@/components/comparison-bar"
import { SidePanel } from "@/components/side-panel"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Tax Preparation", "Accounting"])
  const [activeFilters, setActiveFilters] = useState<string[]>(["category"])
  const [comparisonList, setComparisonList] = useState<string[]>([])
  const [selectedApp, setSelectedApp] = useState<App | null>(null)

  const handlePopState = useCallback(() => {
    const path = window.location.pathname
    if (path.startsWith("/apps/")) {
      const appId = path.split("/")[2]
      const app = getAppById(appId)
      setSelectedApp(app || null)
    } else {
      setSelectedApp(null)
    }
  }, [])

  useEffect(() => {
    // Handle initial URL
    handlePopState()

    window.addEventListener("popstate", handlePopState)
    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [handlePopState])

  const handleAppClick = (app: App) => {
    setSelectedApp(app)
    const url = `/apps/${app.id}`
    history.pushState({ appId: app.id }, app.name, url)
  }

  const handleClosePanel = () => {
    setSelectedApp(null)
    history.pushState(null, "", "/")
  }

  const handleCompareToggle = (appId: string) => {
    setComparisonList((prev) => {
      if (prev.includes(appId)) {
        return prev.filter((id) => id !== appId)
      }
      if (prev.length < 4) {
        return [...prev, appId]
      }
      return prev
    })
  }

  const handleClearCompare = () => {
    setComparisonList([])
  }

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.vendor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(app.category)
    return matchesSearch && matchesCategory
  })

  const comparisonApps = comparisonList.map((id) => getAppById(id)).filter(Boolean) as App[]

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleFilterToggle = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="pb-24">
      <Header />
      <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="main-container">
        <Sidebar
          selectedCategories={selectedCategories}
          activeFilters={activeFilters}
          onCategoryToggle={handleCategoryToggle}
          onFilterToggle={handleFilterToggle}
        />
        <AppGrid
          apps={filteredApps}
          totalApps={apps.length}
          comparisonList={comparisonList}
          onCompareToggle={handleCompareToggle}
          onCardClick={handleAppClick}
        />
      </div>
      <ComparisonBar selectedApps={comparisonApps} onRemove={handleCompareToggle} onClear={handleClearCompare} />
      <SidePanel app={selectedApp} onClose={handleClosePanel} />
    </div>
  )
}
