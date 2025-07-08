import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCog,
  FileText,
  GanttChartSquare,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  UsersRound,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ComparisonSection } from "@/components/comparison-section"
import { WispLeadForm } from "@/components/wisp-lead-form"

export default function VeritoLandingPage() {
  return (
    <div className="relative bg-white text-[#0A252C]">
      <Header />
      <main>
        <HeroSection />
        <WhyWispSection />
        <WhyChooseVeritShieldSection />
        <ComparisonSection />
        <VeritShieldWispAdvantageSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <BackedBySection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

function Header() {
  return (
    <div className="absolute inset-x-0 top-0 z-50 p-4">
      <header className="mx-auto max-w-7xl rounded-xl bg-[#0A252C] text-white shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Image src="/verito-logo-white.png" alt="Verito Logo" width={140} height={40} />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-green-400"
              prefetch={false}
            >
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-green-400"
              prefetch={false}
            >
              Solutions <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-green-400"
              prefetch={false}
            >
              Pricing <ChevronDown className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 text-sm font-medium hover:text-green-400"
              prefetch={false}
            >
              Resources <ChevronDown className="h-4 w-4" />
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="hidden rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600 md:flex"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" className="lg:hidden">
              <GanttChartSquare className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-gray-50 to-green-100/30 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#0A252C] md:text-5xl lg:text-6xl">
            Get Your Free IRS WISP Starter Template
          </h1>
          <p className="text-lg text-gray-600">
            A foundational, DIY tool to kickstart your compliance journey. It's a great first step, but true compliance
            requires ongoing management.
          </p>
          <WispLeadForm />
        </div>
        <div className="flex justify-center">
          <Image
            src="/secure-document-icon.png"
            alt="WISP Template Illustration"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

function WhyWispSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Do You Need a Written Information Security Plan (WISP)?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A Written Information Security Plan is not just a legal requirement for tax return preparers - it's a
            crucial component of your firm's overall security strategy.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-50 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Client Confidentiality</h3>
            <p className="mt-2 text-gray-600">
              Protect sensitive client information and mitigate risks of unauthorized access and data breaches.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Risk Management</h3>
            <p className="mt-2 text-gray-600">
              Identify and assess potential vulnerabilities in your systems and networks.
            </p>
          </div>
          <div className="rounded-xl bg-gray-50 p-8 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-6 text-xl font-bold">Legal Compliance</h3>
            <p className="mt-2 text-gray-600">
              Meet regulatory requirements and industry-specific mandates for data protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChooseVeritShieldSection() {
  return (
    <section className="bg-[#0A252C] py-16 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Choose VeritShield's IRS Written Information Security Plan?
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold text-green-400">Time-Saving Expertise</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Reduce WISP development time from 20+ hours to just a few</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Leverage our pre-built templates and industry knowledge</span>
              </li>
            </ul>
          </div>
          <Image
            src="/business-meeting-hourglass.png"
            alt="Business meeting"
            width={500}
            height={330}
            className="rounded-xl"
          />
        </div>
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold text-green-400">Efficiency Boost</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-800/50 p-6">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Streamline the WISP creation process with our guided approach</span>
              </div>
            </div>
            <div className="rounded-xl bg-gray-800/50 p-6">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Focus on your core business while we handle the complexities</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/digital-compliance-interface.png"
            alt="Compliance dashboard"
            width={500}
            height={330}
            className="order-last rounded-xl lg:order-first"
          />
          <div>
            <h3 className="text-2xl font-bold text-green-400">Compliance Assurance</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Benefit from our rigorously evaluated WISP framework</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Ensure adherence to industry best practices and standards</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold text-green-400">Comprehensive Protection</h3>
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="rounded-xl bg-gray-800/50 p-6">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Get a structured approach that covers all aspects of information security</span>
              </div>
            </div>
            <div className="mt-6 rounded-xl bg-gray-800/50 p-6">
              <div className="flex items-start">
                <CheckCircle2 className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                <span>Reduce the risk of overlooking crucial security measures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VeritShieldWispAdvantageSection() {
  const advantages = [
    {
      icon: FileCog,
      title: "Custom-Built Program",
      description:
        "We go beyond generic templates. Your WISP is developed based on your firm’s specific size, software, workflows, and risk profile to ensure true compliance.",
    },
    {
      icon: ShieldCheck,
      title: "Tax & Accounting Focused",
      description:
        "Our entire process is built around the unique needs of tax professionals, specifically addressing the FTC Safeguards Rule and IRS Publication 4557 requirements.",
    },
    {
      icon: UsersRound,
      title: "Expert-Guided Process",
      description:
        "You’re not alone. Our specialists guide your team through the entire buildout and implementation, empowering you to own and manage a robust security program.",
    },
    {
      icon: ClipboardCheck,
      title: "Audit & Insurance Ready",
      description:
        "Receive the formal, actionable documentation you need to satisfy auditors, secure or maintain cyber liability insurance, and confidently answer 'Yes' to Form W-12.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The VeritShield WISP Advantage</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="rounded-xl bg-white p-8 text-center shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <advantage.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{advantage.title}</h3>
              <p className="mt-2 text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "As a one person tax practice I was looking for a dependable remote desktop - verito was referred on many tax professional forums. The price was right and I have been with them a few months now with zero issues - when I have questions, they are answered in the same day, usually in the same hour. Highly recommend.",
      avatar: "/diverse-woman-avatar.png",
      name: "Nicole Westra",
    },
    {
      quote:
        "Verito does a wonderful job of supporting my accounting/tax/payroll. Service and support are very easy to reach and solve our issues quickly.",
      avatar: "/man-avatar.png",
      name: "John Strah",
    },
    {
      quote:
        "Superior customer service. Almost 0% downtime. Host tax software as well as virtual office. Great cloud company.",
      avatar: "/man-in-suit-avatar.png",
      name: "Sheldon Brown",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What Our Clients Say – Trusted by Accounting & Tax Firms Nationwide
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-xl bg-white p-8 shadow-lg">
              <div className="absolute -top-4 left-8 text-6xl text-green-200">“</div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
              <div className="mt-6 flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white hover:bg-green-600"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "How does VeritShield's WISP solution differ from generic templates?",
      answer:
        "Our WISP solution is specifically tailored for tax and accounting professionals, incorporating industry-specific regulations and best practices that generic templates often miss. It's a comprehensive, ready-to-implement plan, not just a basic outline.",
    },
    {
      question: "Is VeritShield's WISP solution appropriate for my firm size?",
      answer:
        "Yes, our WISP solution is scalable and suitable for firms of all sizes, from sole practitioners to large accounting firms. The template can be easily customized to fit the specific needs and complexity of your operations.",
    },
    {
      question: "What makes VeritShield's approach to WISP development superior?",
      answer:
        "Our approach is superior because it combines legal expertise, cybersecurity best practices, and deep knowledge of the tax industry. We provide a guided process that saves you time and ensures you have a robust, compliant, and effective security plan.",
    },
    {
      question: "What should tax & accounting firms look for in an Information Security Plan Template?",
      answer:
        "Firms should look for a template that covers all IRS requirements, includes policies for data handling, access control, incident response, and employee training. It should also be easily adaptable to the firm's specific technology and workflow.",
    },
    {
      question: "Can I purchase just the WISP template without additional services?",
      answer:
        "Absolutely. You can get our comprehensive IRS WISP template as a standalone product to implement on your own. We also offer consultation and support services if you need assistance with customization or implementation.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Still have some questions in mind?</p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-none bg-gray-50 px-6 shadow-sm"
              >
                <AccordionTrigger className="py-4 text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <p className="mt-12 text-center text-gray-600">
          Secure your firm's future with VeritShield's IRS Written Information Security Plan solution. Protect your
          clients, comply with regulations, and gain peace of mind.
        </p>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-[#0A252C] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-green-400 to-green-600 p-8 text-center text-white md:p-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Ready to Elevate Your Firm's IT Infrastructure?
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Experience the Verito difference with secure, reliable cloud hosting designed for tax and accounting
            professionals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-green-600 hover:bg-gray-100"
            >
              Start Your Free trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg border-white bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10"
            >
              Schedule A Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-green-200">14-day risk-free trial.</p>
        </div>
      </div>
    </section>
  )
}

function BackedBySection() {
  const logos = [
    { name: "VMware", src: "/vmware-logo.png" },
    { name: "Microsoft", src: "/microsoft-logo.png" },
    { name: "Veeam", src: "/veeam-logo.png" },
    { name: "CrowdStrike", src: "/crowdstrike-logo.png" },
  ]
  return (
    <section className="bg-[#0A252C] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-xl font-semibold text-white">Backed by the Best in Security & IT</h3>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src || "/placeholder.svg"}
              alt={`${logo.name} logo`}
              width={120}
              height={30}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0A252C] pt-16 text-gray-300">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="#" className="mb-4 inline-block" prefetch={false}>
            <Image src="/verito-logo-white.png" alt="Verito Logo" width={140} height={40} />
          </Link>
          <p className="mb-4">Secure Cloud Solutions for Tax & Accounting Professionals</p>
          <address className="not-italic">
            3524 Silverside rd.
            <br />
            Suite 35B,
            <br />
            Wilmington, Delaware 19810
          </address>
          <div className="mt-6 space-y-2">
            <a href="tel:1-855-583-7486" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> 1-855-583-7486
            </a>
            <a href="mailto:sales@verito.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> sales@verito.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Dedicated Private Server Hosting
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Managed IT Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                VeritComplete
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Pricing</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                VeritSpace Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                VeritShield Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white" prefetch={false}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm">&copy; 2025 Verito Technologies. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold">Proud Affinity Partner of:</p>
            <Image src="/association-logos.png" alt="Partner logos" width={180} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}

function ChatWidget() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button size="icon" className="h-16 w-16 rounded-full bg-green-500 shadow-lg hover:bg-green-600">
        <MessageSquare className="h-8 w-8 text-white" />
        <span className="sr-only">Open Chat</span>
      </Button>
    </div>
  )
}
