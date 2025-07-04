export interface App {
  id: string
  name: string
  vendor: string
  description: string
  features: string[]
  logo: string
  isFeatured?: boolean
  rating?: number
  category: string
}

export const apps: App[] = [
  {
    id: "ultratax-cs",
    name: "UltraTax CS",
    vendor: "Thomson Reuters",
    description:
      "Professional tax preparation software for high-volume practices. Handle complex returns with advanced diagnostics and comprehensive form coverage for all entity types.",
    features: [
      "Tax Preparation",
      "E-filing",
      "Multi-state",
      "Advanced Diagnostics",
      "Integration with other CS Professional Suite products",
      "Comprehensive form library",
      "Automatic calculations",
      "Multi-user access",
    ],
    logo: "U",
    isFeatured: true,
    rating: 4.8,
    category: "Tax Preparation",
  },
  {
    id: "quickbooks-desktop",
    name: "QuickBooks Desktop",
    vendor: "Intuit",
    description:
      "Industry-leading accounting software for small to medium businesses. Track expenses, manage inventory, and run payroll with this comprehensive financial management solution.",
    features: [
      "Accounting",
      "Invoicing",
      "Payroll",
      "Inventory Management",
      "Financial Reporting",
      "Bank Reconciliation",
      "Job Costing",
      "Multi-user access",
    ],
    logo: "Q",
    rating: 4.7,
    category: "Accounting",
  },
  {
    id: "drake-tax",
    name: "Drake Tax",
    vendor: "Drake Software",
    description:
      "Comprehensive tax software with unlimited e-filing. Perfect for tax professionals seeking affordability and reliability with excellent customer support.",
    features: [
      "Tax Preparation",
      "Unlimited E-filing",
      "1040/1120/1065 Support",
      "Multi-state Returns",
      "Data Import/Export",
      "Client Status Manager",
      "Tax Planner",
      "Integrated Bank Products",
    ],
    logo: "D",
    rating: 4.6,
    category: "Tax Preparation",
  },
  {
    id: "lacerte",
    name: "Lacerte",
    vendor: "Intuit",
    description:
      "Advanced tax software for complex returns. Trusted by CPAs for accuracy and comprehensive form coverage with powerful automation features.",
    features: [
      "Tax Preparation",
      "Complex Returns",
      "All States Support",
      "Comprehensive Form Library",
      "Automatic Calculations",
      "Multi-user Access",
      "Data Import/Export",
      "Integration with QuickBooks",
    ],
    logo: "L",
    rating: 4.5,
    category: "Tax Preparation",
  },
  {
    id: "cch-axcess",
    name: "CCH Axcess Tax",
    vendor: "Wolters Kluwer",
    description:
      "Cloud-native tax compliance platform with integrated research tools and workflow automation for accounting firms of all sizes.",
    features: [
      "Tax Compliance",
      "Research Tools",
      "Workflow Automation",
      "Document Management",
      "Client Portal",
      "Practice Management",
      "Cloud-based Access",
      "Multi-user Collaboration",
    ],
    logo: "C",
    rating: 4.4,
    category: "Tax Preparation",
  },
  {
    id: "quickbooks-online",
    name: "QuickBooks Online",
    vendor: "Intuit",
    description:
      "Cloud-based accounting solution with real-time collaboration. Access your books from anywhere with this modern, mobile-friendly financial management system.",
    features: [
      "Cloud Accounting",
      "Mobile Access",
      "Bank Feeds",
      "Invoicing",
      "Expense Tracking",
      "Financial Reporting",
      "Multi-user Access",
      "App Integrations",
    ],
    logo: "Q",
    rating: 4.3,
    category: "Accounting",
  },
  {
    id: "proseries",
    name: "ProSeries",
    vendor: "Intuit",
    description:
      "Professional tax software with intuitive interface. Ideal for growing practices transitioning from consumer software to professional-grade solutions.",
    features: [
      "Tax Preparation",
      "Import from TurboTax",
      "E-filing",
      "Form Automation",
      "Client Management",
      "Multi-state Returns",
      "Data Import/Export",
      "Integration with QuickBooks",
    ],
    logo: "P",
    rating: 4.2,
    category: "Tax Preparation",
  },
  {
    id: "taxwise",
    name: "TaxWise",
    vendor: "CCH",
    description:
      "Affordable professional tax software with bank product integration. Popular with tax preparation franchises and high-volume seasonal preparers.",
    features: [
      "Tax Preparation",
      "Bank Products",
      "Spanish Support",
      "E-filing",
      "Multi-office Management",
      "Client Portal",
      "Data Import/Export",
      "Form Automation",
    ],
    logo: "T",
    rating: 4.1,
    category: "Tax Preparation",
  },
  {
    id: "sage-50",
    name: "Sage 50",
    vendor: "Sage",
    description:
      "Desktop accounting with advanced inventory management. Perfect for product-based businesses needing robust financial and operational controls.",
    features: [
      "Accounting",
      "Inventory",
      "Job Costing",
      "Financial Reporting",
      "Bank Reconciliation",
      "Fixed Assets",
      "Multi-user Access",
      "Industry-specific Features",
    ],
    logo: "S",
    rating: 4.0,
    category: "Accounting",
  },
]

export function getAppById(id: string): App | undefined {
  return apps.find((app) => app.id === id)
}

export function getAppsByCategory(category: string): App[] {
  return apps.filter((app) => app.category === category)
}

export function getFeaturedApps(): App[] {
  return apps.filter((app) => app.isFeatured)
}
