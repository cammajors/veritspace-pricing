import type { FC } from "react"
import Link from "next/link"

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          verito
        </Link>
        <nav className="header-nav">
          <a href="/solutions">Solutions</a>
          <a href="/pricing">Pricing</a>
          <a href="/resources">Resources</a>
          <a href="/support">Support</a>
          <a href="/trial" className="btn-trial">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
