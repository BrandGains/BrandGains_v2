"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"

interface PortfolioItemProps {
  id: number
  title: string
  type: string
  thumbnail: string
  mediaType: "image" | "video"
  videoUrl?: string
  link: string
}

export default function PortfolioItem({ id, title, type, thumbnail, mediaType, videoUrl, link }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (mediaType === "video") {
      setIsVideoPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (mediaType === "video") {
      setIsVideoPlaying(false)
    }
  }

  return (
    <div
      className="group relative bg-[#171919] rounded-2xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {mediaType === "image" ? (
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full relative cursor-pointer">
            <div
              className={`absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            {videoUrl && (
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay={isVideoPlaying}
              />
            )}
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-[#bafc50]/80 flex items-center justify-center">
                  <Play className="text-black ml-1" size={24} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-[#bafc50] text-sm font-metropolis-bold mb-2 block">{type}</span>
            <h3 className="text-white text-xl md:text-2xl font-monument-regular">{title}</h3>
          </div>
          <Link
            href={link}
            className="bg-[#bafc50] rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="text-black" size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
