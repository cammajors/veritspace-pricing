import { apps, type App } from "@/lib/apps"

export const getAppById = (id: string): App | undefined => {
  return apps.find((app) => app.id === id)
}
