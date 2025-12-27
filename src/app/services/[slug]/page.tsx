import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, COMPANY_INFO } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, ArrowLeft } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} Services in San Diego County`,
    description: `${service.description} Professional ${service.name.toLowerCase()} services throughout San Diego County. Licensed, insured, and experienced. Free estimates available.`,
    keywords: [
      `${service.name.toLowerCase()} San Diego`,
      `${service.name.toLowerCase()} services`,
      `professional ${service.name.toLowerCase()}`,
      `San Diego ${service.name.toLowerCase()}`,
      "San Diego County landscaping",
      ...service.features.map(f => f.toLowerCase()),
    ],
    openGraph: {
      title: `${service.name} Services | HP Landscaping San Diego`,
      description: service.description,
      url: `https://hplandscaping.com/services/${service.id}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.name} - HP Landscaping`,
        },
      ],
    },
    alternates: {
      canonical: `https://hplandscaping.com/services/${service.id}`,
    },
  };
}

// Service-specific FAQs
const serviceFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  "landscape-design": [
    {
      question: "How much does landscape design cost in San Diego?",
      answer: "Landscape design costs vary based on property size and project complexity. Simple designs start around $1,500-$3,000, while comprehensive designs for larger properties can range from $5,000-$15,000+. We offer free consultations to provide accurate estimates for your specific project.",
    },
    {
      question: "What plants work best in San Diego's climate?",
      answer: "San Diego's Mediterranean climate is perfect for drought-tolerant plants like California native succulents, lavender, sage, ornamental grasses, and Mediterranean plants. We specialize in selecting beautiful, water-wise plants that thrive in our local conditions.",
    },
    {
      question: "How long does the landscape design process take?",
      answer: "The design process typically takes 2-4 weeks from initial consultation to final design delivery. This includes site analysis, concept development, revisions, and final design documentation. Rush services are available for time-sensitive projects.",
    },
    {
      question: "Do you provide 3D renderings of the design?",
      answer: "Yes! We use advanced 3D design software to create realistic visualizations of your future landscape. This helps you see exactly how your outdoor space will look before any construction begins.",
    },
  ],
  "irrigation-systems": [
    {
      question: "How much water can a smart irrigation system save?",
      answer: "Smart irrigation systems can reduce water usage by 30-50% compared to traditional systems. They automatically adjust watering schedules based on weather, soil moisture, and plant needs, preventing overwatering and reducing your water bills significantly.",
    },
    {
      question: "What is drip irrigation and when should I use it?",
      answer: "Drip irrigation delivers water directly to plant roots through a network of tubes and emitters. It's ideal for gardens, shrubs, and trees, offering 90%+ water efficiency. We recommend drip irrigation for all non-lawn areas in San Diego to maximize water conservation.",
    },
    {
      question: "How often should irrigation systems be serviced?",
      answer: "We recommend professional irrigation system maintenance at least twice per year - once in spring before the growing season and once in fall before winter. Regular maintenance prevents leaks, ensures optimal performance, and extends system lifespan.",
    },
    {
      question: "Can you retrofit my existing irrigation system?",
      answer: "Absolutely! We can upgrade your existing system with smart controllers, efficient sprinkler heads, drip irrigation zones, and rain sensors. Retrofitting is often more cost-effective than complete replacement while still achieving significant water savings.",
    },
  ],
  "hardscaping": [
    {
      question: "What materials do you use for hardscaping projects?",
      answer: "We work with a wide variety of premium materials including natural stone, concrete pavers, travertine, flagstone, decomposed granite, and decorative concrete. We'll help you select materials that complement your home's architecture and fit your budget.",
    },
    {
      question: "How long do hardscape features last?",
      answer: "Quality hardscaping is extremely durable. Properly installed pavers can last 25-50+ years, retaining walls 50+ years, and decorative concrete 20-30+ years with minimal maintenance. We use professional installation techniques and quality materials to ensure longevity.",
    },
    {
      question: "Do I need permits for hardscaping work?",
      answer: "Some hardscape projects require permits, particularly retaining walls over 4 feet, structures near property lines, or extensive grading. We handle all permit applications and ensure all work meets San Diego County building codes.",
    },
    {
      question: "Can you build outdoor kitchens and fire features?",
      answer: "Yes! We design and build complete outdoor living spaces including custom outdoor kitchens with grills, countertops, and storage, as well as fire pits, fireplaces, and seating areas. We'll create the perfect space for outdoor entertaining.",
    },
  ],
  "lawn-care": [
    {
      question: "What does your lawn maintenance service include?",
      answer: "Our comprehensive lawn care includes weekly mowing, edging, blowing, seasonal fertilization, weed control, aeration, overseeding, pest management, and debris removal. We customize service plans to maintain your lawn's health year-round.",
    },
    {
      question: "How often should I fertilize my San Diego lawn?",
      answer: "San Diego lawns typically benefit from fertilization 3-4 times per year - early spring, late spring, summer, and fall. We use slow-release, organic-based fertilizers that provide sustained nutrition while being environmentally friendly.",
    },
    {
      question: "What's the best grass type for San Diego?",
      answer: "For San Diego's climate, we recommend warm-season grasses like hybrid Bermuda, Zoysia, or St. Augustine for full sun areas, and cool-season grasses like tall fescue for shaded areas. Drought-tolerant varieties are increasingly popular.",
    },
    {
      question: "Can you help with lawn disease and pest problems?",
      answer: "Yes! Our team is trained to identify and treat common lawn diseases, fungal issues, and pest infestations. We use integrated pest management (IPM) techniques to address problems while minimizing chemical use.",
    },
  ],
  "tree-services": [
    {
      question: "When is the best time to trim trees in San Diego?",
      answer: "The ideal time for tree trimming in San Diego is late winter to early spring (January-March) before new growth begins. However, dead or hazardous branches should be removed immediately regardless of season. We provide year-round emergency tree services.",
    },
    {
      question: "Do you have certified arborists on staff?",
      answer: "Yes! Our team includes ISA Certified Arborists with extensive knowledge of tree biology, health, and proper care techniques. They assess tree health, diagnose problems, and recommend appropriate treatments.",
    },
    {
      question: "How much does tree removal cost?",
      answer: "Tree removal costs vary based on tree size, location, and complexity. Small trees (under 30 feet) typically cost $300-$800, medium trees (30-60 feet) $800-$2,500, and large trees (60+ feet) $2,500-$5,000+. We provide free estimates with detailed pricing.",
    },
    {
      question: "What do you do with removed trees?",
      answer: "We practice eco-friendly tree removal. Wood is recycled for mulch, firewood, or lumber when possible. Debris is properly disposed of or recycled. We also offer stump grinding to completely remove tree remnants from your property.",
    },
  ],
  "outdoor-lighting": [
    {
      question: "What are the benefits of landscape lighting?",
      answer: "Landscape lighting enhances curb appeal, improves safety on pathways and stairs, deters intruders, extends outdoor living hours, and highlights architectural and landscape features. LED systems also add value to your property.",
    },
    {
      question: "How much does outdoor lighting installation cost?",
      answer: "Basic outdoor lighting systems start around $2,000-$3,500 for 8-12 fixtures. Comprehensive landscape lighting for larger properties can range from $5,000-$15,000+. LED systems have higher upfront costs but save significantly on energy bills.",
    },
    {
      question: "Are LED landscape lights worth the investment?",
      answer: "Absolutely! LED landscape lights use 75% less energy, last 25+ years versus 1-2 years for halogen, require minimal maintenance, and produce better light quality. The energy savings typically pay for the system within 5-7 years.",
    },
    {
      question: "Can outdoor lighting be controlled remotely?",
      answer: "Yes! We install smart lighting systems that can be controlled via smartphone apps, voice assistants (Alexa, Google Home), or programmed schedules. You can adjust brightness, change colors, and create custom scenes from anywhere.",
    },
  ],
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Get related services (exclude current service)
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  // Get service-specific FAQs
  const faqs = serviceFAQs[service.id] || [];

  // Service Schema for AI/LLM SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://hplandscaping.com/services/${service.id}`,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LandscapingBusiness",
      "@id": "https://hplandscaping.com/#organization",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
      containsPlace: {
        "@type": "City",
        name: "San Diego",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
      },
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hplandscaping.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://hplandscaping.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `https://hplandscaping.com/services/${service.id}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-green-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-gray-600 hover:text-green-600">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{service.name}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-end text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.name} - HP Landscaping San Diego`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
          {/* Mesh Gradient Accent */}
          <div className="absolute inset-0 gradient-mesh opacity-40" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/services"
            className="inline-flex items-center glass px-4 py-2 rounded-full text-white hover:bg-white/20 mb-8 transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl animate-fade-in-up stagger-1">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center glass-card bg-white/95 text-primary-dark hover:bg-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 glow-hover"
              >
                Get Free Estimate
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive {service.name.toLowerCase()} services include:
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={`${service.name} - HP Landscaping San Diego`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HP Landscaping for {service.name}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that expertise and dedication make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                15+ Years Experience
              </h3>
              <p className="text-gray-600">
                Proven expertise in {service.name.toLowerCase()} throughout San Diego County.
                We've completed thousands of successful projects.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed (#{COMPANY_INFO.licenseNumber}) with comprehensive insurance.
                Your property and investment are protected.
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
                We stand behind our work with comprehensive warranties and a 98% customer
                satisfaction rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <FAQSection
          title={`${service.name} FAQs`}
          faqs={faqs}
          schemaType="Service"
        />
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore our other professional landscaping services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <ServiceCard
                  key={relatedService.id}
                  id={relatedService.id}
                  name={relatedService.name}
                  shortDescription={relatedService.shortDescription}
                  icon={relatedService.icon}
                  features={relatedService.features}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title={`Ready for Professional ${service.name}?`}
        description="Contact us today for a free consultation and estimate. Let our experts transform your outdoor space."
      />
    </>
  );
}
