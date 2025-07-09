"use client"

import type { FC, ReactNode } from "react"

interface FilterSectionProps {
  title: string
  children: ReactNode
  isActive: boolean
  onToggle: () => void
}

export const FilterSection: FC<FilterSectionProps> = ({ title, children, isActive, onToggle }) => {
  return (
    <div className={`filter-section ${isActive ? "active" : ""}`}>
      <h4 onClick={onToggle}>{title}</h4>
      <div className="filter-options">{children}</div>
    </div>
  )
}

interface FilterOptionProps {
  label: string
  checked: boolean
  onChange: () => void
}

export const FilterOption: FC<FilterOptionProps> = ({ label, checked, onChange }) => {
  return (
    <label className="filter-option">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}
