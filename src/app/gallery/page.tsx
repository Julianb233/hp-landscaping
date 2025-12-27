import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Project Gallery - See Our Landscaping Work in San Diego",
  description: "Browse HP Landscaping's portfolio of completed projects across San Diego County. View landscape designs, irrigation systems, hardscaping, and more. Get inspired for your next project!",
  keywords: [
    "landscaping portfolio San Diego",
    "landscape design gallery",
    "San Diego landscaping projects",
    "before and after landscaping",
    "hardscaping photos",
    "irrigation installation photos",
    "landscape transformation",
  ],
  openGraph: {
    title: "HP Landscaping Gallery - San Diego Projects",
    description: "Explore our portfolio of beautiful landscapes, hardscaping, and irrigation projects throughout San Diego County.",
    url: "https://hplandscaping.com/gallery",
    type: "website",
  },
  alternates: {
    canonical: "https://hplandscaping.com/gallery",
  },
};

// ImageGallery Schema for AI/LLM SEO
const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "HP Landscaping Project Gallery",
  description: "Browse our portfolio of completed landscaping projects across San Diego County, including landscape design, hardscaping, irrigation systems, and more.",
  url: "https://hplandscaping.com/gallery",
  image: "https://hplandscaping.com/gallery-preview.jpg",
};

const galleryProjects = [
  // Landscape Design Projects
  {
    id: 1,
    title: "Modern Drought-Tolerant Front Yard",
    category: "landscape-design",
    location: "La Jolla, San Diego",
    description: "Complete front yard transformation with California native plants and modern hardscaping.",
    image: "/images/gallery/landscape-1.jpg",
    beforeImage: "/images/gallery/landscape-1-before.jpg",
    tags: ["drought-tolerant", "modern", "native-plants"],
  },
  {
    id: 2,
    title: "Mediterranean Backyard Oasis",
    category: "landscape-design",
    location: "Carlsbad",
    description: "Luxurious Mediterranean-style landscape with water features and entertaining areas.",
    image: "/images/gallery/landscape-2.jpg",
    beforeImage: "/images/gallery/landscape-2-before.jpg",
    tags: ["mediterranean", "water-feature", "entertainment"],
  },
  {
    id: 3,
    title: "Coastal Garden Redesign",
    category: "landscape-design",
    location: "Encinitas",
    description: "Salt-tolerant plants and sustainable design for coastal living.",
    image: "/images/gallery/landscape-3.jpg",
    beforeImage: "/images/gallery/landscape-3-before.jpg",
    tags: ["coastal", "sustainable", "low-maintenance"],
  },

  // Irrigation Systems
  {
    id: 4,
    title: "Smart Drip Irrigation Installation",
    category: "irrigation-systems",
    location: "Escondido",
    description: "WiFi-enabled smart irrigation system reducing water usage by 50%.",
    image: "/images/gallery/irrigation-1.jpg",
    tags: ["smart-tech", "water-efficient", "drip-irrigation"],
  },
  {
    id: 5,
    title: "Large Property Sprinkler System",
    category: "irrigation-systems",
    location: "Poway",
    description: "Comprehensive sprinkler system for 2-acre estate with zone control.",
    image: "/images/gallery/irrigation-2.jpg",
    tags: ["sprinkler", "large-property", "zone-control"],
  },

  // Hardscaping Projects
  {
    id: 6,
    title: "Travertine Paver Patio & Fire Pit",
    category: "hardscaping",
    location: "Del Mar",
    description: "Elegant outdoor living space with built-in fire pit and seating walls.",
    image: "/images/gallery/hardscape-1.jpg",
    beforeImage: "/images/gallery/hardscape-1-before.jpg",
    tags: ["patio", "fire-pit", "travertine"],
  },
  {
    id: 7,
    title: "Multi-Level Retaining Walls",
    category: "hardscaping",
    location: "San Diego",
    description: "Functional and beautiful tiered retaining walls creating usable space.",
    image: "/images/gallery/hardscape-2.jpg",
    beforeImage: "/images/gallery/hardscape-2-before.jpg",
    tags: ["retaining-wall", "terracing", "slope-solution"],
  },
  {
    id: 8,
    title: "Outdoor Kitchen & Entertainment Area",
    category: "hardscaping",
    location: "Coronado",
    description: "Complete outdoor kitchen with pergola, countertops, and built-in grill.",
    image: "/images/gallery/hardscape-3.jpg",
    tags: ["outdoor-kitchen", "pergola", "entertainment"],
  },
  {
    id: 9,
    title: "Flagstone Pathway & Garden Steps",
    category: "hardscaping",
    location: "Chula Vista",
    description: "Natural flagstone pathways connecting different garden areas.",
    image: "/images/gallery/hardscape-4.jpg",
    tags: ["pathway", "flagstone", "natural-stone"],
  },

  // Lawn Care
  {
    id: 10,
    title: "Lawn Renovation & Maintenance",
    category: "lawn-care",
    location: "Santee",
    description: "Complete lawn transformation with aeration, overseeding, and fertilization program.",
    image: "/images/gallery/lawn-1.jpg",
    beforeImage: "/images/gallery/lawn-1-before.jpg",
    tags: ["renovation", "aeration", "fertilization"],
  },
  {
    id: 11,
    title: "Artificial Turf Installation",
    category: "lawn-care",
    location: "Vista",
    description: "Low-maintenance artificial turf for water conservation.",
    image: "/images/gallery/lawn-2.jpg",
    tags: ["artificial-turf", "water-conservation", "low-maintenance"],
  },

  // Tree Services
  {
    id: 12,
    title: "Palm Tree Maintenance",
    category: "tree-services",
    location: "Oceanside",
    description: "Professional palm tree trimming and health assessment.",
    image: "/images/gallery/tree-1.jpg",
    tags: ["palm-tree", "trimming", "maintenance"],
  },
  {
    id: 13,
    title: "Oak Tree Pruning & Care",
    category: "tree-services",
    location: "San Marcos",
    description: "Expert pruning to maintain tree health and aesthetics.",
    image: "/images/gallery/tree-2.jpg",
    tags: ["oak-tree", "pruning", "tree-health"],
  },

  // Outdoor Lighting
  {
    id: 14,
    title: "Pathway & Accent Lighting",
    category: "outdoor-lighting",
    location: "La Mesa",
    description: "LED landscape lighting highlighting architectural features and pathways.",
    image: "/images/gallery/lighting-1.jpg",
    tags: ["led", "pathway-lighting", "accent-lighting"],
  },
  {
    id: 15,
    title: "Complete Garden Lighting System",
    category: "outdoor-lighting",
    location: "National City",
    description: "Comprehensive lighting design for security and ambiance.",
    image: "/images/gallery/lighting-2.jpg",
    tags: ["security", "garden-lighting", "smart-lighting"],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <GalleryClient galleryProjects={galleryProjects} />
    </>
  );
}
