export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  icon: string;
  image: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: "landscaping-design",
    title: "Landscaping Design & Installation",
    shortTitle: "Landscaping",
    description: "Transform your outdoor space with custom landscape design tailored to San Diego's unique climate and your lifestyle.",
    longDescription: "Our expert landscape designers create stunning outdoor environments that thrive in San Diego's Mediterranean climate. From drought-tolerant native plantings to lush tropical gardens, we design and install landscapes that enhance your property's beauty while conserving water. Each project begins with a comprehensive site analysis, considering sun exposure, soil conditions, drainage, and your vision for the space.",
    features: [
      "Custom landscape design consultation",
      "3D renderings and detailed plans",
      "Drought-tolerant and native plant selection",
      "Hardscape integration (patios, walkways, retaining walls)",
      "Soil preparation and grading",
      "Complete plant installation and mulching",
      "Lighting design for nighttime ambiance",
      "Sustainable landscaping practices"
    ],
    benefits: [
      "Increase property value by up to 15%",
      "Reduce water consumption with smart plant choices",
      "Create outdoor living spaces for year-round enjoyment",
      "Low-maintenance designs for busy lifestyles",
      "Enhance curb appeal and neighborhood aesthetics"
    ],
    icon: "Trees",
    image: "/images/landscaping.jpg",
    slug: "landscaping-design-installation"
  },
  {
    id: "irrigation-systems",
    title: "Smart Irrigation Systems",
    shortTitle: "Irrigation",
    description: "Water-efficient irrigation solutions designed for San Diego's climate, featuring smart controllers and drip systems.",
    longDescription: "Our advanced irrigation systems deliver water precisely where and when your landscape needs it. We specialize in water-smart technology that reduces consumption by up to 50% while keeping your plants healthier. From drip irrigation for gardens to multi-zone spray systems for lawns, we design, install, and maintain systems that comply with San Diego County water regulations and help you save on utility bills.",
    features: [
      "Smart WiFi-enabled irrigation controllers",
      "Weather-based automatic scheduling",
      "Drip irrigation for gardens and planters",
      "High-efficiency spray heads and rotors",
      "Zoned watering for different plant needs",
      "Rain and moisture sensors",
      "Backflow prevention installation",
      "System winterization and maintenance"
    ],
    benefits: [
      "Save 30-50% on water bills",
      "Comply with San Diego water restrictions",
      "Control your system from anywhere via smartphone",
      "Prevent overwatering and plant disease",
      "Qualify for water district rebates",
      "Extend the life of your landscape investment"
    ],
    icon: "Droplets",
    image: "/images/irrigation.jpg",
    slug: "irrigation-systems"
  },
  {
    id: "water-features",
    title: "Water Features & Fountains",
    shortTitle: "Water Features",
    description: "Custom water features that add elegance and tranquility to your outdoor space while conserving water.",
    longDescription: "Transform your garden into a peaceful retreat with custom water features designed for San Diego's environment. We create everything from contemporary fountains to natural stone waterfalls, koi ponds, and modern water walls. Our water-efficient designs incorporate recirculating systems and smart technology to minimize water waste while maximizing visual and auditory impact. Each feature is custom-designed to complement your landscape architecture and personal style.",
    features: [
      "Custom fountain design and installation",
      "Natural stone waterfalls and streams",
      "Koi ponds with filtration systems",
      "Modern water walls and spillways",
      "Recirculating pump systems",
      "Underwater LED lighting",
      "Automatic water leveling systems",
      "Low-maintenance, water-efficient designs"
    ],
    benefits: [
      "Create a peaceful, meditative atmosphere",
      "Mask traffic and neighborhood noise",
      "Attract birds and beneficial wildlife",
      "Increase property value and uniqueness",
      "Enjoy water features year-round in San Diego's climate",
      "Energy-efficient operation with minimal maintenance"
    ],
    icon: "Waves",
    image: "/images/water-features.jpg",
    slug: "water-features-fountains"
  },
  {
    id: "maintenance",
    title: "Landscape Maintenance & Care",
    shortTitle: "Maintenance",
    description: "Professional landscape maintenance services to keep your San Diego property looking pristine year-round.",
    longDescription: "Maintain the beauty and health of your landscape with our comprehensive maintenance programs. Our experienced team understands San Diego's unique growing seasons and provides tailored care for your specific plants and hardscape features. From weekly mowing to seasonal pruning, fertilization, and pest management, we offer flexible maintenance plans that keep your property looking its best while you enjoy more free time.",
    features: [
      "Weekly or bi-weekly lawn mowing and edging",
      "Seasonal pruning and shaping",
      "Weed control and prevention",
      "Fertilization and soil amendments",
      "Mulch replenishment",
      "Irrigation system inspection and repairs",
      "Pest and disease management",
      "Seasonal color rotation",
      "Hardscape cleaning and maintenance",
      "Debris and leaf removal"
    ],
    benefits: [
      "Consistent, professional appearance year-round",
      "Prevent costly plant replacement",
      "Early detection of irrigation or pest issues",
      "Flexible service schedules to fit your budget",
      "Fully insured and bonded service",
      "More time to enjoy your outdoor space"
    ],
    icon: "Leaf",
    image: "/images/maintenance.jpg",
    slug: "landscape-maintenance"
  },
  {
    id: "outdoor-lighting",
    title: "Outdoor Landscape Lighting",
    shortTitle: "Lighting",
    description: "Professional landscape lighting design that enhances safety, security, and nighttime beauty.",
    longDescription: "Extend your outdoor living hours and showcase your landscape's beauty after dark with professional lighting design. Our low-voltage LED systems provide energy-efficient illumination that highlights architectural features, illuminates pathways, and creates stunning nighttime ambiance. Each lighting plan is custom-designed to enhance your property's unique features while providing safety and security.",
    features: [
      "Custom lighting design and layout",
      "Energy-efficient LED fixtures",
      "Path and walkway illumination",
      "Uplighting for trees and architectural features",
      "Moonlighting for natural overhead glow",
      "Water feature lighting",
      "Smart controls and timers",
      "Low-voltage systems for safety and efficiency"
    ],
    benefits: [
      "Enhance safety and security",
      "Extend outdoor entertaining into evening hours",
      "Highlight your landscape's best features",
      "Increase property value and curb appeal",
      "Low energy costs with LED technology",
      "Create dramatic visual effects"
    ],
    icon: "Lightbulb",
    image: "/images/lighting.jpg",
    slug: "outdoor-lighting"
  },
  {
    id: "hardscaping",
    title: "Hardscaping & Outdoor Living",
    shortTitle: "Hardscaping",
    description: "Custom patios, walkways, retaining walls, and outdoor kitchens for San Diego outdoor living.",
    longDescription: "Create functional and beautiful outdoor living spaces with expert hardscaping. We design and build custom patios, outdoor kitchens, fire features, retaining walls, and walkways using premium materials suited to San Diego's climate. Our hardscape installations enhance your landscape's usability while adding structural interest and long-lasting value to your property.",
    features: [
      "Custom patio design and installation",
      "Natural stone and paver walkways",
      "Retaining walls and terracing",
      "Outdoor kitchen and BBQ islands",
      "Fire pits and fireplaces",
      "Pergolas and shade structures",
      "Seating walls and planters",
      "Decorative concrete and stamped finishes"
    ],
    benefits: [
      "Expand your usable outdoor living space",
      "Entertain guests in style year-round",
      "Solve drainage and slope issues",
      "Durable materials built for California weather",
      "Increase home value significantly",
      "Low maintenance with long-lasting appeal"
    ],
    icon: "Home",
    image: "/images/hardscaping.jpg",
    slug: "hardscaping-outdoor-living"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
