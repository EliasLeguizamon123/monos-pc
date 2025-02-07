import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Cpu, HardDrive, Wifi } from "lucide-react"
import type React from "react" // Import React

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uKvLw5XJ1CMhzZu0eKbEYpBlKFi8Iz.png"
              alt="MONOS Logo"
              width={180}
              height={80}
              className="w-auto h-12"
              priority
            />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Expert PC Repair Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your PC problems into solutions with professional computer repair services
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-primary" />}
              title="Hardware Repair"
              description="Fix and replace damaged computer components"
            />
            <ServiceCard
              icon={<Cpu className="h-12 w-12 text-primary" />}
              title="Software Troubleshooting"
              description="Resolve software issues and remove viruses"
            />
            <ServiceCard
              icon={<HardDrive className="h-12 w-12 text-primary" />}
              title="Data Recovery"
              description="Recover lost or deleted files from your devices"
            />
            <ServiceCard
              icon={<Wifi className="h-12 w-12 text-primary" />}
              title="Network Setup"
              description="Configure and optimize your home or office network"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose MONOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Expert Technicians"
              description="Our team of certified professionals ensures top-quality repairs"
            />
            <FeatureCard
              title="Quick Turnaround"
              description="We understand the importance of your device and work efficiently"
            />
            <FeatureCard
              title="Affordable Pricing"
              description="Competitive rates without compromising on quality of service"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Your PC Fixed?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact us today for a free consultation</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uKvLw5XJ1CMhzZu0eKbEYpBlKFi8Iz.png"
                alt="MONOS Logo"
                width={150}
                height={67}
                className="w-auto h-10 brightness-0 invert"
              />
            </div>
            <div className="text-sm">© {new Date().getFullYear()} MONOS PC Repair. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

