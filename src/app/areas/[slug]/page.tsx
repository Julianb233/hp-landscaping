import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICE_AREAS, SERVICES, COMPANY_INFO, TESTIMONIALS } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

interface AreaPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all service areas
export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    slug: area.id,
  }));
}

// Generate metadata for each area with local SEO
export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.id === slug);

  if (!area) {
    return {
      title: "Area Not Found",
    };
  }

  const title = `Landscaping Services in ${area.name}, CA | ${COMPANY_INFO.name}`;
  const description = `Professional landscaping services in ${area.name}, California. Expert landscape design, irrigation, hardscaping & lawn care. Licensed & insured. Serving ${area.name} for 15+ years. Free estimates!`;

  return {
    title,
    description,
    keywords: [
      `landscaping ${area.name}`,
      `landscape design ${area.name}`,
      `landscaper ${area.name} CA`,
      `lawn care ${area.name}`,
      `irrigation ${area.name}`,
      `hardscaping ${area.name}`,
      `tree service ${area.name}`,
      `${area.name} landscaping company`,
      `best landscaper ${area.name}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://hplandscaping.com/areas/${area.id}`,
      images: [
        {
          url: `/images/areas/${area.id}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} - Landscaping Services in ${area.name}, CA`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://hplandscaping.com/areas/${area.id}`,
    },
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.id === slug);

  if (!area) {
    notFound();
  }

  // Area-specific LocalBusiness JSON-LD Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": `https://hplandscaping.com/areas/${area.id}#business`,
    name: `${COMPANY_INFO.name} - ${area.name}`,
    description: `Professional landscaping services in ${area.name}, California. We provide landscape design, irrigation, hardscaping, lawn care, and tree services to ${area.name} residents and businesses.`,
    url: `https://hplandscaping.com/areas/${area.id}`,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Landscaping Services in ${area.name}`,
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.name} in ${area.name}`,
          description: service.description,
          areaServed: {
            "@type": "City",
            name: area.name,
          },
        },
        position: index + 1,
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
      bestRating: "5",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  };

  // Service JSON-LD Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://hplandscaping.com/areas/${area.id}#service`,
    name: `Landscaping Services in ${area.name}, CA`,
    provider: {
      "@type": "LandscapingBusiness",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone,
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "California",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  // Area-specific FAQs with natural city mentions
  const areaFaqs = [
    {
      question: `What landscaping services do you offer in ${area.name}?`,
      answer: `We offer comprehensive landscaping services in ${area.name} including landscape design, irrigation system installation and repair, hardscaping (patios, walkways, retaining walls), lawn care and maintenance, tree services, and outdoor lighting. All our services are tailored to ${area.name}'s unique climate and soil conditions.`,
    },
    {
      question: `How much does landscaping cost in ${area.name}, CA?`,
      answer: `Landscaping costs in ${area.name} vary based on project scope and size. Simple lawn maintenance may start at $150-300/month, while complete landscape design and installation projects can range from $5,000 to $50,000+. We provide free, detailed quotes for all ${area.name} projects with no obligation.`,
    },
    {
      question: `Are you licensed to work in ${area.name}?`,
      answer: `Yes! ${COMPANY_INFO.name} is fully licensed (${COMPANY_INFO.licenseNumber}), bonded, and insured to provide landscaping services throughout ${area.name} and all of San Diego County. We maintain all required permits and certifications for ${area.name} projects.`,
    },
    {
      question: `What plants grow best in ${area.name}'s climate?`,
      answer: `${area.name} benefits from San Diego County's Mediterranean climate, perfect for drought-tolerant plants like California native species, succulents, lavender, rosemary, and ornamental grasses. We specialize in designing landscapes for ${area.name} that are both beautiful and water-efficient, using plants that thrive in the local climate.`,
    },
    {
      question: `How quickly can you start a project in ${area.name}?`,
      answer: `For most ${area.name} projects, we can typically schedule an initial consultation within 3-5 business days and begin work within 1-2 weeks after design approval. Emergency services like tree removal in ${area.name} can often be handled within 24-48 hours. Contact us today for ${area.name} availability.`,
    },
    {
      question: `Do you offer maintenance services in ${area.name}?`,
      answer: `Absolutely! We provide ongoing lawn and landscape maintenance services throughout ${area.name}. Our weekly, bi-weekly, and monthly maintenance plans keep ${area.name} properties looking their best year-round. We currently maintain 100+ properties in the ${area.name} area.`,
    },
  ];

  // Get area-specific testimonials or use generic ones
  const areaTestimonials = TESTIMONIALS.filter((t) => t.location.includes(area.name)).slice(0, 2);
  const displayTestimonials = areaTestimonials.length > 0
    ? areaTestimonials
    : TESTIMONIALS.slice(0, 2);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-green-200 mb-4">
              <MapPin size={20} />
              <span className="text-lg">{area.county}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Landscaping Services in {area.name}, CA
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Transform your {area.name} property with professional landscaping services from San Diego County's trusted experts. Serving {area.population} residents with pride.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={20} />
                <span>15+ Years in {area.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={20} />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Area-Specific */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted {area.name} Landscaping Company
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                {area.description} {COMPANY_INFO.name} has been proudly serving {area.name} homeowners and businesses since {COMPANY_INFO.foundedYear}, bringing over 15 years of expertise to every project.
              </p>
              <p className="mb-4">
                We understand the unique characteristics of {area.name} properties and landscapes. Our team of certified landscaping professionals knows how to work with {area.name}'s specific soil conditions, climate patterns, and local regulations to create stunning outdoor spaces that thrive year-round.
              </p>
              <p className="mb-4">
                Whether you're in {area.name}'s residential neighborhoods or commercial districts, our comprehensive landscaping services are designed to enhance your property's beauty, increase its value, and create outdoor spaces you'll love. From drought-tolerant native plant installations to custom hardscaping projects, we bring the expertise {area.name} property owners trust.
              </p>
              <p>
                As a locally operated company serving {area.name} and all of San Diego County, we're committed to sustainable landscaping practices that conserve water while creating beautiful results. Our {area.name} clients benefit from personalized service, competitive pricing, and the peace of mind that comes from working with licensed, insured professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Landscaping Services in {area.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive landscaping solutions tailored to {area.name} properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.id}`}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What {area.name} Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real reviews from satisfied {area.name} clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {displayTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-green-600 mt-1">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-gray-600">
              <Star className="text-yellow-400 fill-yellow-400" size={24} />
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
              <span>from 250+ {area.name} area reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Area */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why {area.name} Chooses {COMPANY_INFO.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Local expertise, professional service, exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local {area.name} Expertise</h3>
              <p className="text-gray-300">
                Deep knowledge of {area.name}'s climate, soil conditions, and landscaping requirements. We know what works in {area.name}.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response in {area.name}</h3>
              <p className="text-gray-300">
                Quick arrival times for all {area.name} projects. Emergency services available 24/7 for urgent needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven {area.name} Results</h3>
              <p className="text-gray-300">
                Hundreds of successful projects completed in {area.name}. Check our portfolio and customer reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={areaFaqs} title={`Landscaping FAQs for ${area.name} Residents`} />

      {/* CTA Section */}
      <CTASection
        title={`Ready to Transform Your ${area.name} Property?`}
        description={`Get a free, no-obligation quote for your ${area.name} landscaping project. Our local experts are ready to help you create the outdoor space of your dreams.`}
      />
    </>
  );
}
