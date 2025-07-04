import type { FC } from "react"
import type { App } from "@/lib/apps"
import { AppCard } from "./app-card"

interface AppGridProps {
  apps: App[]
  comparisonList: string[]
  onCompareToggle: (appId: string) => void
  onCardClick: (app: App) => void
}

export const AppGrid: FC<AppGridProps> = ({ apps, comparisonList, onCompareToggle, onCardClick }) => {
  return (
    <main>
      <div className="results-header">
        <span className="results-count">Showing {apps.length} applications</span>
        <select className="sort-dropdown">
          <option>Most Popular</option>
          <option>Alphabetical</option>
          <option>Recently Added</option>
          <option>Category</option>
        </select>
      </div>

      <div className="app-grid">
        {apps.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            isCompared={comparisonList.includes(app.id)}
            onCompareToggle={onCompareToggle}
            onCardClick={onCardClick}
          />
        ))}
      </div>

      <div className="pagination">
        <a href="#" className="page-btn active">
          1
        </a>
        <a href="#" className="page-btn">
          2
        </a>
        <a href="#" className="page-btn">
          3
        </a>
        <span className="page-btn">...</span>
        <a href="#" className="page-btn">
          22
        </a>
        <a href="#" className="page-btn">
          Next ›
        </a>
      </div>
    </main>
  )
}
