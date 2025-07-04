import Link from "next/link"
import { Check, Shield, Server, Clock } from "lucide-react"
import { getAppById } from "@/lib/apps"

export default function AppDetailPage({ params }: { params: { id: string } }) {
  const app = getAppById(params.id)

  if (!app) {
    return <div>App not found</div>
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0c1e2b] mb-4">
                Secure {app.name} Hosting with VeritoSpace
              </h1>
              <p className="text-gray-600 mb-8 max-w-xl">
                Dedicated private servers optimized for {app.name} with 99.999% uptime, SOC 2 & FTC compliance, and 24/7
                expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="bg-green-500 text-white py-3 px-6 rounded-md text-center font-medium hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  href="#pricing"
                  className="bg-white text-[#0c1e2b] border border-gray-300 py-3 px-6 rounded-md text-center font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                >
                  Pricing
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center p-8">
                  <div className="text-5xl font-bold text-[#0c1e2b]">{app.logo}</div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0c1e2b] mb-4">
            VeritoSpace Dedicated Private Server Hosting for {app.name}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated servers are optimized specifically for {app.name}, ensuring maximum performance, security, and
            reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0c1e2b]">Tax Data Security</h3>
            <p className="text-gray-600 text-sm">
              SOC 2 & FTC compliant infrastructure with end-to-end encryption and multi-factor authentication.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0c1e2b]">Private Server</h3>
            <p className="text-gray-600 text-sm">
              Dedicated resources ensure optimal performance without sharing hardware with other clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#0c1e2b]">Unlimited Usage</h3>
            <p className="text-gray-600 text-sm">
              No time limits or usage restrictions. Access your {app.name} instance 24/7 from anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-[#0c1e2b] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose VeritoSpace for {app.name} Hosting?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-[#1a3a4f] rounded-lg p-8 flex items-center justify-center">
                <div className="text-6xl font-bold">{app.logo}</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-400">
                Enhanced Security on Dedicated Private Servers
              </h3>
              <p className="text-gray-300 mb-6">
                VeritoSpace offers unmatched security and performance for your {app.name} installation, ensuring your
                client data remains protected.
              </p>

              <ul className="space-y-4">
                {app.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0c1e2b] mb-4 text-center">Superior Performance for {app.name}</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Our optimized infrastructure ensures your {app.name} installation runs at peak performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#0c1e2b] p-6 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold">Lightning-Fast</h3>
            </div>
            <p className="text-sm text-gray-300">
              SSD storage and optimized configurations ensure {app.name} loads and runs faster than on-premise.
            </p>
          </div>

          <div className="bg-[#0c1e2b] p-6 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold">Always Available</h3>
            </div>
            <p className="text-sm text-gray-300">
              99.999% uptime guarantee with redundant systems and automatic failover.
            </p>
          </div>

          <div className="bg-[#0c1e2b] p-6 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold">Multi-User Access</h3>
            </div>
            <p className="text-sm text-gray-300">
              Support for multiple simultaneous users without performance degradation.
            </p>
          </div>

          <div className="bg-[#0c1e2b] p-6 rounded-lg text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-semibold">Automatic Backups</h3>
            </div>
            <p className="text-sm text-gray-300">Daily automated backups with point-in-time recovery options.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0c1e2b] mb-12 text-center">
            What Our Clients Say - Trusted by Accounting & Tax Firms Nationwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-4xl text-gray-300 mr-4">"</div>
                <p className="text-gray-600">
                  We switched to VeritoSpace for our {app.name} hosting last year, and the performance improvement was
                  immediately noticeable. Our staff can now process returns much faster.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#0c1e2b]">John Wilson</h4>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-4xl text-gray-300 mr-4">"</div>
                <p className="text-gray-600">
                  The security features of VeritoSpace give us peace of mind when handling sensitive client tax data.
                  Their SOC 2 compliance was a key factor in our decision.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#0c1e2b]">Sarah Johnson</h4>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-4xl text-gray-300 mr-4">"</div>
                <p className="text-gray-600">
                  The 24/7 support team at VeritoSpace has been exceptional. They understand {app.name} and have helped
                  us optimize our workflow significantly.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-[#0c1e2b]">Michael Brown</h4>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#0c1e2b] mb-12 text-center">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0c1e2b] mb-3 flex items-start">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-green-600 text-sm">Q</span>
              </span>
              What makes VeritoSpace's hosting solution unique for {app.name}?
            </h3>
            <p className="text-gray-600 ml-9">
              Our hosting is specifically optimized for {app.name}, with dedicated resources, enhanced security
              protocols, and support specialists who understand tax software.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0c1e2b] mb-3 flex items-start">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-green-600 text-sm">Q</span>
              </span>
              How does VeritoSpace ensure the security of our tax data?
            </h3>
            <p className="text-gray-600 ml-9">
              We implement SOC 2 & FTC compliant infrastructure, end-to-end encryption, multi-factor authentication, and
              regular security audits to protect your sensitive data.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0c1e2b] mb-3 flex items-start">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-green-600 text-sm">Q</span>
              </span>
              Can multiple staff members access {app.name} simultaneously?
            </h3>
            <p className="text-gray-600 ml-9">
              Yes, our hosting solution supports multiple concurrent users without performance degradation, allowing
              your entire team to work efficiently.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0c1e2b] mb-3 flex items-start">
              <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-green-600 text-sm">Q</span>
              </span>
              What kind of support can I expect with VeritoSpace?
            </h3>
            <p className="text-gray-600 ml-9">
              We provide 24/7 expert support from specialists who understand {app.name} and accounting workflows,
              ensuring quick resolution of any issues.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Elevate Your Firm's IT Infrastructure?</h2>
          <p className="text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of accounting and tax firms who trust VeritoSpace for their {app.name} hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-white text-green-600 py-3 px-6 rounded-md text-center font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="#"
              className="bg-transparent text-white border border-white py-3 px-6 rounded-md text-center font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
