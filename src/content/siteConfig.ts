export interface SiteConfig {
  company: {
    name: string;
    tagline: string;
    description: string;
    founded: string;
    licensedInsured: boolean;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      full: string;
    };
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  serviceAreas: {
    primary: string[];
    secondary: string[];
    county: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    yelp?: string;
    google?: string;
  };
  certifications: string[];
  affiliations: string[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "HP Landscaping",
    tagline: "Transforming San Diego Outdoor Spaces Since 2010",
    description: "Premium landscaping design, installation, and maintenance services throughout San Diego County. Specializing in drought-tolerant landscapes, smart irrigation systems, water features, and outdoor living spaces.",
    founded: "2010",
    licensedInsured: true
  },
  contact: {
    phone: "+1-858-555-0123",
    phoneDisplay: "(858) 555-0123",
    email: "info@hplandscaping.com",
    address: {
      street: "1234 Torrey Pines Road",
      city: "La Jolla",
      state: "CA",
      zip: "92037",
      full: "1234 Torrey Pines Road, La Jolla, CA 92037"
    }
  },
  hours: {
    weekdays: "Monday - Friday: 7:00 AM - 6:00 PM",
    saturday: "Saturday: 8:00 AM - 4:00 PM",
    sunday: "Sunday: Closed"
  },
  serviceAreas: {
    primary: [
      "La Jolla",
      "Del Mar",
      "Rancho Santa Fe",
      "Carlsbad",
      "Encinitas",
      "Solana Beach",
      "Cardiff-by-the-Sea",
      "Leucadia"
    ],
    secondary: [
      "San Diego",
      "Poway",
      "Rancho Bernardo",
      "Escondido",
      "Oceanside",
      "Vista",
      "San Marcos",
      "Fairbanks Ranch"
    ],
    county: "San Diego County"
  },
  social: {
    facebook: "https://facebook.com/hplandscaping",
    instagram: "https://instagram.com/hplandscaping",
    yelp: "https://yelp.com/biz/hp-landscaping-san-diego",
    google: "https://g.page/hp-landscaping"
  },
  certifications: [
    "California Contractor's License #123456",
    "Certified Irrigation Designer",
    "Water Efficient Landscape Professional",
    "Licensed Landscape Architect",
    "ICPI Certified Installer"
  ],
  affiliations: [
    "California Landscape Contractors Association (CLCA)",
    "Irrigation Association",
    "San Diego County Water Authority Partner",
    "National Association of Landscape Professionals (NALP)",
    "Better Business Bureau (A+ Rating)"
  ]
};

export const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    { name: "Landscaping Design", href: "/services/landscaping-design-installation" },
    { name: "Irrigation Systems", href: "/services/irrigation-systems" },
    { name: "Water Features", href: "/services/water-features-fountains" },
    { name: "Maintenance", href: "/services/landscape-maintenance" },
    { name: "Outdoor Lighting", href: "/services/outdoor-lighting" },
    { name: "Hardscaping", href: "/services/hardscaping-outdoor-living" }
  ],
  footer: {
    services: [
      { name: "Landscape Design", href: "/services/landscaping-design-installation" },
      { name: "Smart Irrigation", href: "/services/irrigation-systems" },
      { name: "Water Features", href: "/services/water-features-fountains" },
      { name: "Maintenance Plans", href: "/services/landscape-maintenance" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/gallery" },
      { name: "Service Areas", href: "/service-areas" },
      { name: "Testimonials", href: "/testimonials" }
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Water Rebates", href: "/water-rebates" },
      { name: "Maintenance Tips", href: "/tips" }
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Accessibility", href: "/accessibility" }
    ]
  }
};

export const features = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed California contractors with comprehensive insurance coverage",
    icon: "Shield"
  },
  {
    title: "Water-Smart Designs",
    description: "Drought-tolerant landscapes that thrive in San Diego's climate",
    icon: "Droplets"
  },
  {
    title: "15+ Years Experience",
    description: "Trusted by hundreds of San Diego County homeowners since 2010",
    icon: "Award"
  },
  {
    title: "Free Consultations",
    description: "Complimentary on-site evaluations and project estimates",
    icon: "Calendar"
  }
];

export const statsCounters = [
  {
    value: "500+",
    label: "Projects Completed",
    description: "Residential and commercial landscapes transformed"
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Serving San Diego County since 2010"
  },
  {
    value: "50%",
    label: "Water Savings",
    description: "Average reduction with our smart irrigation systems"
  },
  {
    value: "100%",
    label: "Satisfaction",
    description: "Guaranteed quality workmanship on every project"
  }
];
