"use client"

interface FilterButtonsProps {
  categories: string[]
  activeFilter: string
  setActiveFilter: (category: string) => void
}

export default function FilterButtons({ categories, activeFilter, setActiveFilter }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 mb-12">
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
  )
}
