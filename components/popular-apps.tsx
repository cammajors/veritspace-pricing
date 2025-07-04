import type { FC } from "react"
import Link from "next/link"
import { getAppById } from "@/lib/apps"

const popularAppIds = ["ultratax-cs", "quickbooks-desktop", "drake-tax", "lacerte", "proseries"]

const popularAppsData = popularAppIds.map((id) => getAppById(id)).filter(Boolean)

export const PopularApps: FC = () => {
  return (
    <div className="popular-apps">
      <h3>Most Popular</h3>
      <div className="popular-list">
        {popularAppsData.map((app) => {
          if (!app) return null
          return (
            <Link
              href={app.liveUrl || `/apps/${app.id}`}
              key={app.id}
              className="popular-item"
              target={app.liveUrl ? "_blank" : "_self"}
              rel={app.liveUrl ? "noopener noreferrer" : ""}
            >
              <div className="popular-icon">{app.logo}</div>
              <span>{app.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
