export interface PortfolioItem {
  id: number
  title: string
  type: string
  thumbnail: string
  mediaType: "image" | "video"
  videoUrl?: string
  link: string
  description?: string
  client?: string
  date?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Brand Awareness Campaign",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project1",
    description: "A series of short-form videos designed to increase brand awareness across social media platforms.",
    client: "Fashion Retailer",
    date: "2023",
  },
  {
    id: 2,
    title: "Product Launch Video",
    type: "MOTION",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/1.mp4",
    link: "https://example.com/project2",
    description: "Dynamic product reveal with custom motion graphics and sound design.",
    client: "Tech Startup",
    date: "2023",
  },
  {
    id: 3,
    title: "Social Media Series",
    type: "CAMPAIGN",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project3",
    description: "A 12-part series of short videos optimized for Instagram and TikTok engagement.",
    client: "Lifestyle Brand",
    date: "2022",
  },
  {
    id: 4,
    title: "Promotional Content",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/3.webm",
    link: "https://example.com/project4",
    description: "Fast-paced promotional content with custom transitions and effects.",
    client: "Sports Brand",
    date: "2023",
  },
  {
    id: 5,
    title: "Brand Story",
    type: "NARRATIVE",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project5",
    description: "Emotional storytelling through a series of connected short-form videos.",
    client: "Non-profit Organization",
    date: "2022",
  },
  {
    id: 6,
    title: "Product Showcase",
    type: "COMMERCIAL",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/1.mp4",
    link: "https://example.com/project6",
    description: "Visually striking product showcase with detailed close-ups and dynamic transitions.",
    client: "Luxury Brand",
    date: "2023",
  },
  {
    id: 7,
    title: "Viral Marketing Campaign",
    type: "CAMPAIGN",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project7",
    description: "Trend-focused content that generated over 2 million views across platforms.",
    client: "Entertainment Company",
    date: "2023",
  },
  {
    id: 8,
    title: "Testimonial Series",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "video",
    videoUrl: "https://cdn.cuberto.com/cb/hello/overview/3.webm",
    link: "https://example.com/project8",
    description: "Authentic customer testimonials edited for maximum impact and engagement.",
    client: "Service Provider",
    date: "2022",
  },
  {
    id: 9,
    title: "Event Highlights",
    type: "EDIT",
    thumbnail: "https://placehold.co/800x600/png?text=Image+here",
    mediaType: "image",
    link: "https://example.com/project9",
    description: "Capturing the energy and excitement of a major product launch event.",
    client: "Tech Company",
    date: "2023",
  },
]

export const categories = ["ALL", "EDIT", "MOTION", "CAMPAIGN", "NARRATIVE", "COMMERCIAL"]
