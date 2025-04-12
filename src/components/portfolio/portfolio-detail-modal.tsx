"use client"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { PortfolioItem } from "@/app/portfolio/data"

interface PortfolioDetailModalProps {
  item: PortfolioItem | null
  onClose: () => void
}

export default function PortfolioDetailModal({ item, onClose }: PortfolioDetailModalProps) {
  if (!item) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-[#171919] rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-[#bafc50] rounded-full p-2">
          <X className="text-black" size={20} />
        </button>

        <div>
          {/* Media */}
          <div className="w-full aspect-video relative">
            {item.mediaType === "image" ? (
              <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            ) : (
              <video src={item.videoUrl} className="w-full h-full object-cover" controls autoPlay loop />
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <span className="text-[#bafc50] text-sm font-metropolis-bold mb-2 block">{item.type}</span>
                <h2 className="text-white text-2xl md:text-4xl font-monument-regular">{item.title}</h2>
              </div>

              <Link
                href={item.link}
                className="bg-[#bafc50] hover:bg-[#c5ff6b] px-6 py-2 rounded-full text-black font-metropolis-bold transition-all duration-300 inline-flex items-center gap-2"
              >
                View Project
              </Link>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-[#bafc50] text-sm font-metropolis-bold mb-2">Client</h3>
                <p className="text-white">{item.client}</p>
              </div>
              <div>
                <h3 className="text-[#bafc50] text-sm font-metropolis-bold mb-2">Year</h3>
                <p className="text-white">{item.date}</p>
              </div>
              <div>
                <h3 className="text-[#bafc50] text-sm font-metropolis-bold mb-2">Category</h3>
                <p className="text-white">{item.type}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-[#bafc50] text-sm font-metropolis-bold mb-2">About the Project</h3>
              <p className="text-white/80 font-metropolis-medium">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
