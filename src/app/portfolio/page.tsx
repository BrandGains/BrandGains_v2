"use client"
import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, ExternalLink, ArrowRight } from "lucide-react"
import Button from "@/components/Button"

// Portfolio data structure - easy to update
const portfolioItems = [
  {
    id: 1,
    title: "Brand Awareness Campaign",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Product Launch Video",
    type: "MOTION",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/1.mp4",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Social Media Series",
    type: "CAMPAIGN",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Promotional Content",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/3.webm",
    link: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Brand Story",
    type: "NARRATIVE",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project5",
  },
  {
    id: 6,
    title: "Product Showcase",
    type: "COMMERCIAL",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/1.mp4",
    link: "https://example.com/project6",
  },
  {
    id: 7,
    title: "Viral Marketing Campaign",
    type: "CAMPAIGN",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project7",
  },
  {
    id: 8,
    title: "Testimonial Series",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/3.webm",
    link: "https://example.com/project8",
  },
]

// Filter categories
const categories = ["ALL", "EDIT", "MOTION", "CAMPAIGN", "NARRATIVE", "COMMERCIAL"]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Filter portfolio items based on selected category
  const filteredItems =
    activeFilter === "ALL" ? portfolioItems : portfolioItems.filter((item) => item.type === activeFilter)

  // Handle mouse movement for custom cursor effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    }
  }

  return (
    <main className="min-h-screen bg-[#021814] pt-24 pb-16 overflow-hidden" onMouseMove={handleMouseMove}>
      {/* Custom cursor for video items */}
      <div
        ref={cursorRef}
        className={`fixed w-20 h-20 rounded-full bg-[#bafc50] flex items-center justify-center z-50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${hoveredItem !== null && portfolioItems.find((item) => item.id === hoveredItem)?.mediaType === "video" ? "opacity-100" : "opacity-0"}`}
      >
        <Play className="text-black" size={24} />
      </div>

      {/* Hero Section */}
      <section className="w-full relative mb-16">
        <div className="container mx-auto px-5 md:px-10">
          <motion.h1
            className="text-4xl md:text-7xl lg:text-9xl text-white font-monument-black mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR WORK
          </motion.h1>
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white text-lg md:text-xl max-w-2xl font-metropolis-medium">
              We create short-form content that doesn&apos;t just help clients grow their business but also builds an
              engaging presence. Browse our portfolio to see how we&apos;ve helped brands stand out.
            </p>
            <Button title="Let's Create Together" />
          </motion.div>
        </div>

        {/* Background blur effect */}
        <div className="absolute pointer-events-none top-0 left-1/4 w-[40vw] h-[40vw] bg-[#255e45] rounded-full filter blur-[120px] opacity-30 z-0"></div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-5 md:px-10 mb-12">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-metropolis-bold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-[#bafc50] text-black"
                  : "bg-transparent text-white border border-white/20 hover:border-white/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative bg-[#171919] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Media Container */}
              <div className="aspect-[4/3] relative overflow-hidden">
                {item.mediaType === "image" ? (
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full relative cursor-pointer">
                    <div className="absolute inset-0 bg-black/30 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                    <video src={item.videoUrl} className="w-full h-full object-cover" loop muted playsInline autoPlay />
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[#bafc50] text-sm font-metropolis-bold mb-2 block">{item.type}</span>
                    <h3 className="text-white text-xl md:text-2xl font-monument-regular">{item.title}</h3>
                  </div>
                  <Link
                    href={item.link}
                    className="bg-[#bafc50] rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="text-black" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-5 md:px-10 mt-24">
        <div className="bg-[#171919] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-[#bafc50] rounded-full filter blur-[100px] opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl text-white font-monument-black mb-4">
                Ready to <span className="text-[#bafc50]">Stand Out</span>?
              </h2>
              <p className="text-white/80 font-metropolis-medium max-w-xl">
                Let's create content that captures attention and drives results. Our team is ready to help your brand
                shine.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-[#bafc50] hover:bg-[#c5ff6b] px-8 py-4 rounded-full text-black font-metropolis-bold transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
