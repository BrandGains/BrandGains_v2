"use client"
import PortfolioItem from "./portfolio-item"
import { motion } from "framer-motion"

interface PortfolioGridProps {
  items: {
    id: number
    title: string
    type: string
    thumbnail: string
    mediaType: "image" | "video"
    videoUrl?: string
    link: string
  }[]
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PortfolioItem
            id={item.id}
            title={item.title}
            type={item.type}
            thumbnail={item.thumbnail}
            mediaType={item.mediaType}
            videoUrl={item.videoUrl}
            link={item.link}
          />
        </motion.div>
      ))}
    </div>
  )
}
