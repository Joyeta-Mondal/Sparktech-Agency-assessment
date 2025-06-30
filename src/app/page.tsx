"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-gray-800 px-4 sm:px-6 lg:px-16 py-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 border-b mb-10">
        <h1 className="text-xl sm:text-2xl font-bold">MyShadcnSite</h1>
        <Button className="text-sm sm:text-base">Get Started</Button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-24" data-aos="fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Build Beautiful UIs Fast
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          This is a modern responsive page using Next.js + shadcn/ui to
          demonstrate a clean component-based design with animations.
        </p>
        <Button size="lg">Learn More</Button>
      </section>

      {/* Features Section */}
      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
        data-aos="fade-up"
      >
        {["Fast", "Beautiful", "Accessible"].map((title, i) => (
          <Card key={i} className="hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {title} UI components help you build with speed and precision.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Call To Action */}
      <section
        className="text-center py-16 bg-white shadow rounded-xl mt-10"
        data-aos="zoom-in"
      >
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Dive In?
        </h3>
        <p className="mb-6 text-gray-600 text-sm sm:text-base">
          Start building your website with shadcn/ui and Next.js today.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Join Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-20 py-6 border-t text-sm">
        {year && <>© {year} MyShadcnSite. All rights reserved.</>}
      </footer>
    </main>
  )
}
