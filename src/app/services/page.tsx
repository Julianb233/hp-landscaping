import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Landscaping Services",
  description: "HP Landscaping offers comprehensive landscaping services in San Diego County including landscape design, irrigation systems, hardscaping, lawn care, tree services, and outdoor lighting. Free estimates available.",
  keywords: [
    "landscaping services San Diego",
    "landscape design",
    "irrigation installation",
    "hardscaping services",
    "lawn maintenance San Diego",
    "tree trimming San Diego",
    "outdoor lighting installation",
    "professional landscaper",
    "San Diego landscaping company",
  ],
  openGraph: {
    title: "Professional Landscaping Services | HP Landscaping San Diego",
    description: "Expert landscaping services for residential and commercial properties throughout San Diego County. 15+ years experience.",
    url: "https://hplandscaping.com/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "HP Landscaping Services",
      },
    ],
  },
  alternates: {
    canonical: "https://hplandscaping.com/services",
  },
};

// Service Catalog Schema for AI/LLM SEO
const serviceCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HP Landscaping Services",
  description: "Comprehensive landscaping services offered by HP Landscaping in San Diego County",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `https://hplandscaping.com/services/${service.id}`,
      name: service.name,
      description: service.description,
      provider: {
        "@type": "LandscapingBusiness",
        name: COMPANY_INFO.name,
        telephone: COMPANY_INFO.phone,
      },
      areaServed: {
        "@type": "State",
        name: "California",
      },
      serviceType: service.name,
    },
  })),
};

const faqs = [
  {
    question: "What landscaping services do you offer in San Diego County?",
    answer: "We offer comprehensive landscaping services including landscape design, irrigation system installation and repair, hardscaping (patios, walkways, retaining walls), lawn care and maintenance, tree services, and outdoor lighting installation. All services are tailored to San Diego's unique climate and water conservation requirements.",
  },
  {
    question: "Do you provide free estimates for landscaping projects?",
    answer: "Yes! We provide free, no-obligation estimates for all landscaping projects. Our experts will visit your property, assess your needs, and provide a detailed quote outlining the scope of work and pricing. Contact us today to schedule your free consultation.",
  },
  {
    question: "Are your landscaping services eco-friendly?",
    answer: "Absolutely. We specialize in drought-tolerant landscaping using native California plants, smart irrigation systems that conserve water, and sustainable practices that reduce water consumption while maintaining beautiful landscapes. We're committed to environmentally responsible landscaping.",
  },
  {
    question: "How long does a typical landscaping project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects like irrigation repairs may take 1-2 days, while complete landscape renovations can take 2-4 weeks. During your consultation, we'll provide a detailed timeline specific to your project.",
  },
  {
    question: "Do you offer maintenance services after installation?",
    answer: "Yes! We offer comprehensive maintenance programs to keep your landscape looking its best year-round. Services include weekly lawn mowing, seasonal cleanups, irrigation system maintenance, fertilization, pest control, and more. We can customize a maintenance plan to fit your needs and budget.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes, HP Landscaping is fully licensed (License #${COMPANY_INFO.licenseNumber}) and insured. We carry comprehensive liability insurance and workers' compensation coverage for your protection and peace of mind.`,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Landscaping Services in San Diego County
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Transform your outdoor space with our expert landscaping solutions.
              From design to maintenance, we handle every aspect of your landscape.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Landscaping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of professional landscaping services designed to enhance
              the beauty, functionality, and value of your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                name={service.name}
                shortDescription={service.shortDescription}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HP Landscaping?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional expertise and dedication make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Skilled professionals with 15+ years of landscaping experience in San Diego County.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Materials
              </h3>
              <p className="text-gray-600">
                We use only the highest quality materials and plants suited for San Diego's climate.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Water Efficiency
              </h3>
              <p className="text-gray-600">
                Specialized in drought-tolerant designs and smart irrigation systems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                98% customer satisfaction rate with comprehensive warranties on all work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} schemaType="FAQPage" />

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today for a free consultation and estimate. Let's transform your outdoor space together!"
      />
    </>
  );
}
