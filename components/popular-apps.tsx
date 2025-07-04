import type { FC } from "react"
import Link from "next/link"

const popularAppsData = [
  { id: "ultratax-cs", name: "UltraTax CS", logo: "U" },
  { id: "quickbooks-desktop", name: "QuickBooks Desktop", logo: "Q" },
  { id: "drake-tax", name: "Drake Tax", logo: "D" },
  { id: "lacerte", name: "Lacerte", logo: "L" },
  { id: "proseries", name: "ProSeries", logo: "P" },
]

export const PopularApps: FC = () => {
  return (
    <div className="popular-apps">
      <h3>Most Popular</h3>
      <div className="popular-list">
        {popularAppsData.map((app) => (
          <Link href={`/apps/${app.id}`} key={app.id} className="popular-item">
            <div className="popular-icon">{app.logo}</div>
            <span>{app.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
