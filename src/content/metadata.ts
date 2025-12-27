export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: string;
    image?: string;
    url?: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image?: string;
  };
  canonical?: string;
  alternates?: {
    canonical: string;
  };
}

export interface SiteMetadata {
  home: PageMetadata;
  services: PageMetadata;
  about: PageMetadata;
  contact: PageMetadata;
  gallery: PageMetadata;
  servicePages: {
    [key: string]: PageMetadata;
  };
}

const baseUrl = "https://hplandscaping.com";
const defaultImage = `${baseUrl}/images/og-image.jpg`;

export const siteMetadata: SiteMetadata = {
  home: {
    title: "HP Landscaping | San Diego Landscape Design & Maintenance",
    description: "Premium landscaping services in San Diego County. Expert design, installation, irrigation systems, water features & maintenance. Licensed, insured, 15+ years experience. Free consultation!",
    keywords: [
      "San Diego landscaping",
      "landscape design San Diego",
      "landscaping company San Diego",
      "La Jolla landscaping",
      "Del Mar landscaping",
      "Rancho Santa Fe landscaping",
      "drought tolerant landscaping",
      "irrigation systems San Diego",
      "landscape maintenance",
      "water features San Diego",
      "outdoor living San Diego",
      "hardscaping San Diego"
    ],
    openGraph: {
      title: "HP Landscaping | Transform Your San Diego Outdoor Space",
      description: "Award-winning landscape design, installation & maintenance throughout San Diego County. Drought-tolerant designs, smart irrigation, water features & more.",
      type: "website",
      image: defaultImage,
      url: baseUrl
    },
    twitter: {
      card: "summary_large_image",
      title: "HP Landscaping | San Diego Landscape Experts",
      description: "Premium landscaping services in San Diego County. Licensed, insured, 15+ years experience.",
      image: defaultImage
    },
    canonical: baseUrl
  },

  services: {
    title: "Landscaping Services San Diego | HP Landscaping",
    description: "Complete landscaping services: design & installation, smart irrigation, water features, maintenance, outdoor lighting & hardscaping. Serving all San Diego County. Free estimates!",
    keywords: [
      "landscaping services San Diego",
      "landscape installation",
      "irrigation installation San Diego",
      "water feature installation",
      "landscape maintenance San Diego",
      "outdoor lighting San Diego",
      "hardscaping services",
      "patio installation San Diego",
      "retaining walls San Diego",
      "landscape contractor"
    ],
    openGraph: {
      title: "Professional Landscaping Services in San Diego County",
      description: "From design to maintenance, we offer comprehensive landscaping solutions for residential and commercial properties throughout San Diego.",
      type: "website",
      image: `${baseUrl}/images/services-og.jpg`,
      url: `${baseUrl}/services`
    },
    twitter: {
      card: "summary_large_image",
      title: "Complete Landscaping Services | HP Landscaping",
      description: "Expert landscaping, irrigation, water features & maintenance in San Diego County.",
      image: `${baseUrl}/images/services-og.jpg`
    },
    canonical: `${baseUrl}/services`
  },

  about: {
    title: "About HP Landscaping | San Diego's Trusted Landscape Company",
    description: "Family-owned landscaping company serving San Diego County since 2010. Licensed, insured, award-winning designs. Meet our team and discover why homeowners trust HP Landscaping.",
    keywords: [
      "about HP Landscaping",
      "San Diego landscape company",
      "licensed landscaper San Diego",
      "landscape contractor San Diego",
      "family owned landscaping",
      "landscaping reviews San Diego",
      "best landscaper San Diego"
    ],
    openGraph: {
      title: "About HP Landscaping | San Diego's Premier Landscape Company",
      description: "15+ years of transforming San Diego outdoor spaces. Meet our team of licensed professionals dedicated to creating beautiful, sustainable landscapes.",
      type: "website",
      image: `${baseUrl}/images/team-og.jpg`,
      url: `${baseUrl}/about`
    },
    twitter: {
      card: "summary_large_image",
      title: "About HP Landscaping | San Diego Landscape Experts",
      description: "Family-owned, licensed & insured. Serving San Diego County since 2010.",
      image: `${baseUrl}/images/team-og.jpg`
    },
    canonical: `${baseUrl}/about`
  },

  contact: {
    title: "Contact HP Landscaping | Free Landscape Consultation San Diego",
    description: "Get your free landscape consultation in San Diego County. Call (858) 555-0123 or request a quote online. Serving La Jolla, Del Mar, Carlsbad, Encinitas & all San Diego areas.",
    keywords: [
      "contact landscaper San Diego",
      "free landscape consultation",
      "landscape quote San Diego",
      "landscaping estimate",
      "La Jolla landscaper contact",
      "Del Mar landscaping company"
    ],
    openGraph: {
      title: "Contact HP Landscaping | Free Consultation & Estimates",
      description: "Ready to transform your outdoor space? Contact us for a free consultation. Serving all San Diego County with expert landscaping services.",
      type: "website",
      image: defaultImage,
      url: `${baseUrl}/contact`
    },
    twitter: {
      card: "summary",
      title: "Contact HP Landscaping | Free Consultation",
      description: "Call (858) 555-0123 for your free landscape consultation in San Diego County.",
      image: defaultImage
    },
    canonical: `${baseUrl}/contact`
  },

  gallery: {
    title: "Landscape Gallery | HP Landscaping Projects San Diego",
    description: "Browse our portfolio of completed landscape projects throughout San Diego County. See stunning designs, water features, outdoor living spaces, and more. Get inspired for your project!",
    keywords: [
      "landscape portfolio San Diego",
      "landscaping photos San Diego",
      "landscape design ideas",
      "San Diego landscape gallery",
      "outdoor living photos",
      "water feature gallery",
      "hardscape photos"
    ],
    openGraph: {
      title: "Landscape Project Gallery | HP Landscaping San Diego",
      description: "Explore our portfolio of beautiful landscape transformations throughout San Diego County. From modern designs to classic elegance.",
      type: "website",
      image: `${baseUrl}/images/gallery-og.jpg`,
      url: `${baseUrl}/gallery`
    },
    twitter: {
      card: "summary_large_image",
      title: "Landscape Gallery | HP Landscaping Projects",
      description: "Stunning landscape transformations throughout San Diego County.",
      image: `${baseUrl}/images/gallery-og.jpg`
    },
    canonical: `${baseUrl}/gallery`
  },

  servicePages: {
    "landscaping-design-installation": {
      title: "Landscape Design & Installation San Diego | HP Landscaping",
      description: "Custom landscape design and installation in San Diego County. Drought-tolerant gardens, native plants, hardscape integration. Licensed designers, 15+ years experience. Free consultation!",
      keywords: [
        "landscape design San Diego",
        "landscape installation",
        "custom landscape design",
        "drought tolerant landscaping",
        "native plant landscaping",
        "San Diego landscape architect",
        "residential landscape design",
        "commercial landscaping San Diego"
      ],
      openGraph: {
        title: "Expert Landscape Design & Installation | San Diego County",
        description: "Transform your property with custom landscape design tailored to San Diego's climate. Drought-tolerant, beautiful, sustainable designs.",
        type: "website",
        image: `${baseUrl}/images/landscaping-og.jpg`,
        url: `${baseUrl}/services/landscaping-design-installation`
      },
      twitter: {
        card: "summary_large_image",
        title: "Landscape Design & Installation | HP Landscaping",
        description: "Custom designs for San Diego's unique climate. Drought-tolerant, beautiful landscapes.",
        image: `${baseUrl}/images/landscaping-og.jpg`
      },
      canonical: `${baseUrl}/services/landscaping-design-installation`
    },

    "irrigation-systems": {
      title: "Smart Irrigation Systems San Diego | Water-Efficient Sprinklers",
      description: "Smart irrigation system installation in San Diego. WiFi controllers, drip irrigation, water-saving technology. Save 30-50% on water bills. Qualify for rebates. Licensed installers.",
      keywords: [
        "irrigation systems San Diego",
        "smart irrigation installation",
        "drip irrigation San Diego",
        "sprinkler system installation",
        "WiFi irrigation controller",
        "water efficient irrigation",
        "irrigation repair San Diego",
        "backflow testing San Diego"
      ],
      openGraph: {
        title: "Smart Irrigation Systems | San Diego Water-Efficient Solutions",
        description: "Advanced irrigation technology that saves water and money. Smart controllers, drip systems, and expert installation throughout San Diego County.",
        type: "website",
        image: `${baseUrl}/images/irrigation-og.jpg`,
        url: `${baseUrl}/services/irrigation-systems`
      },
      twitter: {
        card: "summary_large_image",
        title: "Smart Irrigation Systems | HP Landscaping",
        description: "Save 30-50% on water bills with smart irrigation technology in San Diego.",
        image: `${baseUrl}/images/irrigation-og.jpg`
      },
      canonical: `${baseUrl}/services/irrigation-systems`
    },

    "water-features-fountains": {
      title: "Water Features & Fountains San Diego | Custom Design & Installation",
      description: "Custom water features, fountains, waterfalls & koi ponds in San Diego. Professional design & installation. Water-efficient recirculating systems. Transform your outdoor space today!",
      keywords: [
        "water features San Diego",
        "fountain installation",
        "waterfall installation San Diego",
        "koi pond San Diego",
        "custom water features",
        "outdoor fountains",
        "pondless waterfalls",
        "water wall installation"
      ],
      openGraph: {
        title: "Custom Water Features & Fountains | San Diego Installation",
        description: "Add elegance and tranquility with custom water features. From modern fountains to natural waterfalls and koi ponds throughout San Diego County.",
        type: "website",
        image: `${baseUrl}/images/water-features-og.jpg`,
        url: `${baseUrl}/services/water-features-fountains`
      },
      twitter: {
        card: "summary_large_image",
        title: "Water Features & Fountains | HP Landscaping",
        description: "Custom fountains, waterfalls & koi ponds in San Diego County.",
        image: `${baseUrl}/images/water-features-og.jpg`
      },
      canonical: `${baseUrl}/services/water-features-fountains`
    },

    "landscape-maintenance": {
      title: "Landscape Maintenance San Diego | Professional Lawn & Garden Care",
      description: "Professional landscape maintenance throughout San Diego County. Weekly mowing, seasonal pruning, irrigation repair, pest control. Residential & commercial. Keep your property pristine!",
      keywords: [
        "landscape maintenance San Diego",
        "lawn care San Diego",
        "garden maintenance",
        "landscape service San Diego",
        "commercial landscape maintenance",
        "residential lawn care",
        "pruning services San Diego",
        "landscape upkeep"
      ],
      openGraph: {
        title: "Professional Landscape Maintenance | San Diego County",
        description: "Keep your landscape beautiful year-round with professional maintenance services. Flexible plans for residential and commercial properties.",
        type: "website",
        image: `${baseUrl}/images/maintenance-og.jpg`,
        url: `${baseUrl}/services/landscape-maintenance`
      },
      twitter: {
        card: "summary_large_image",
        title: "Landscape Maintenance Services | HP Landscaping",
        description: "Professional lawn and garden care throughout San Diego County.",
        image: `${baseUrl}/images/maintenance-og.jpg`
      },
      canonical: `${baseUrl}/services/landscape-maintenance`
    },

    "outdoor-lighting": {
      title: "Outdoor Landscape Lighting San Diego | LED Lighting Installation",
      description: "Professional landscape lighting design & installation in San Diego. Energy-efficient LED systems, path lights, uplighting, smart controls. Enhance beauty, safety & security.",
      keywords: [
        "landscape lighting San Diego",
        "outdoor lighting installation",
        "LED landscape lights",
        "pathway lighting",
        "uplighting San Diego",
        "outdoor lighting design",
        "security lighting",
        "low voltage lighting"
      ],
      openGraph: {
        title: "Outdoor Landscape Lighting Design | San Diego Installation",
        description: "Illuminate your landscape with professional LED lighting. Custom designs for safety, security, and stunning nighttime beauty.",
        type: "website",
        image: `${baseUrl}/images/lighting-og.jpg`,
        url: `${baseUrl}/services/outdoor-lighting`
      },
      twitter: {
        card: "summary_large_image",
        title: "Outdoor Landscape Lighting | HP Landscaping",
        description: "Professional LED lighting design and installation in San Diego County.",
        image: `${baseUrl}/images/lighting-og.jpg`
      },
      canonical: `${baseUrl}/services/outdoor-lighting`
    },

    "hardscaping-outdoor-living": {
      title: "Hardscaping & Outdoor Living San Diego | Patios, Walkways & More",
      description: "Custom hardscaping in San Diego: patios, outdoor kitchens, fire features, retaining walls, walkways. Premium materials, expert installation. Create your dream outdoor living space!",
      keywords: [
        "hardscaping San Diego",
        "patio installation San Diego",
        "outdoor kitchen San Diego",
        "retaining walls San Diego",
        "fire pit installation",
        "paver installation",
        "outdoor living spaces",
        "stone walkways San Diego"
      ],
      openGraph: {
        title: "Hardscaping & Outdoor Living | San Diego Custom Installation",
        description: "Build beautiful outdoor living spaces with expert hardscaping. Custom patios, outdoor kitchens, fire features, and more throughout San Diego County.",
        type: "website",
        image: `${baseUrl}/images/hardscaping-og.jpg`,
        url: `${baseUrl}/services/hardscaping-outdoor-living`
      },
      twitter: {
        card: "summary_large_image",
        title: "Hardscaping & Outdoor Living | HP Landscaping",
        description: "Custom patios, outdoor kitchens & fire features in San Diego County.",
        image: `${baseUrl}/images/hardscaping-og.jpg`
      },
      canonical: `${baseUrl}/services/hardscaping-outdoor-living`
    }
  }
};

// Schema.org structured data for SEO
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LandscapeCompany",
  "name": "HP Landscaping",
  "image": defaultImage,
  "url": baseUrl,
  "telephone": "+1-858-555-0123",
  "email": "info@hplandscaping.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Torrey Pines Road",
    "addressLocality": "La Jolla",
    "addressRegion": "CA",
    "postalCode": "92037",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.8328,
    "longitude": -117.2713
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "La Jolla"
    },
    {
      "@type": "City",
      "name": "Del Mar"
    },
    {
      "@type": "City",
      "name": "Rancho Santa Fe"
    },
    {
      "@type": "City",
      "name": "Carlsbad"
    },
    {
      "@type": "City",
      "name": "Encinitas"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/hplandscaping",
    "https://instagram.com/hplandscaping"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": baseUrl,
  "name": "HP Landscaping",
  "image": defaultImage,
  "description": "Premium landscaping design, installation, and maintenance services throughout San Diego County.",
  "url": baseUrl,
  "telephone": "+1-858-555-0123",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Torrey Pines Road",
    "addressLocality": "La Jolla",
    "addressRegion": "CA",
    "postalCode": "92037",
    "addressCountry": "US"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "150"
  }
};
