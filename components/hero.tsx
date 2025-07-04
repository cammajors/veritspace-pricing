"use client"

import type { FC } from "react"

interface HeroProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export const Hero: FC<HeroProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <section className="hero">
      <h1>Business Application Directory</h1>
      <p>We support 300+ software applications for CPA firms, accounting professionals, and SMBs</p>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for your application..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </div>
    </section>
  )
}
