import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import AreaCard from "@/components/AreaCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { SERVICES, SERVICE_AREAS, TESTIMONIALS, STATS, COMPANY_INFO } from "@/lib/constants";

const homeFAQs = [
  {
    question: "What landscaping services does HP Landscaping offer in San Diego?",
    answer: `HP Landscaping provides comprehensive landscaping services throughout San Diego County including landscape design, irrigation system installation and repair, hardscaping (patios, walkways, retaining walls), lawn care and maintenance, tree services, and outdoor lighting. We specialize in drought-tolerant designs suited to San Diego's Mediterranean climate.`
  },
  {
    question: "What areas in San Diego County does HP Landscaping serve?",
    answer: `We serve all of San Diego County including San Diego, Chula Vista, Oceanside, Escondido, Carlsbad, El Cajon, Vista, San Marcos, Encinitas, National City, La Mesa, Santee, Poway, Del Mar, and Coronado. Our team travels throughout the region to provide professional landscaping services.`
  },
  {
    question: "How much does landscaping cost in San Diego?",
    answer: `Landscaping costs in San Diego vary based on project scope. Basic lawn maintenance starts around $100-200/month. Landscape design projects typically range from $5,000 to $50,000+ depending on size and complexity. Irrigation systems range from $2,500 to $10,000. We provide free, no-obligation estimates for all projects.`
  },
  {
    question: "Do you offer drought-tolerant landscaping for San Diego homes?",
    answer: `Yes! We specialize in drought-tolerant and water-wise landscaping perfect for San Diego's climate. We use California native plants, succulents, and Mediterranean species that thrive with minimal water. Our smart irrigation systems further reduce water usage by up to 50%.`
  },
  {
    question: "Is HP Landscaping licensed and insured?",
    answer: `Yes, HP Landscaping is fully licensed (License #${COMPANY_INFO.licenseNumber}) and insured in California. We carry comprehensive liability insurance and workers' compensation coverage for your protection. Our team includes certified arborists and irrigation specialists.`
  },
  {
    question: "How do I get a free landscaping estimate?",
    answer: `Getting a free estimate is easy! Call us at ${COMPANY_INFO.phone} or fill out our online contact form. We'll schedule a convenient time to visit your property, discuss your vision, and provide a detailed written estimate within 48 hours.`
  }
];

export default function Home() {
  const featuredAreas = SERVICE_AREAS.filter(area => area.featured);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 glass-card rounded-3xl p-10 -mt-24 relative z-10 glow-green">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Entity-rich content for AI/LLM SEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">About HP Landscaping</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                San Diego&apos;s Trusted Landscaping Experts Since {COMPANY_INFO.foundedYear}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                HP Landscaping is a family-owned landscaping company serving homeowners and businesses throughout San Diego County. For over 15 years, we&apos;ve been transforming outdoor spaces with beautiful, sustainable designs that complement Southern California&apos;s unique climate.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of certified landscape professionals, irrigation specialists, and arborists brings expertise in drought-tolerant landscaping, smart irrigation systems, and California native plant selection. We&apos;re committed to creating outdoor spaces that are not only beautiful but also water-efficient and environmentally responsible.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Certified Arborists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Irrigation Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Satisfaction Guaranteed</span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-green-100 rounded-2xl p-6 text-center">
                  <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">Award Winning</h3>
                  <p className="text-sm text-gray-600">Best Landscaper SD 2023</p>
                </div>
                <div className="bg-gray-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🌿</div>
                    <p className="text-sm text-gray-600">Eco-Friendly Practices</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-10 h-10 text-green-600 mx-auto mb-3" />
                    <p className="font-semibold text-gray-900">50+ Team Members</p>
                  </div>
                </div>
                <div className="bg-green-600 rounded-2xl p-6 text-center text-white">
                  <Clock className="w-10 h-10 mx-auto mb-3" />
                  <h3 className="font-semibold">Quick Response</h3>
                  <p className="text-sm text-green-100">24-48hr Estimates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 gradient-nature relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block glass-green px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Landscaping Services in San Diego
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom landscape design to ongoing maintenance, we offer comprehensive services to create and maintain your perfect outdoor space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center glass-green hover:scale-105 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 glow-hover group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block glass-green px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
              Service Areas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Serving All of San Diego County
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the coast to the inland valleys, HP Landscaping provides expert landscaping services throughout San Diego County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAreas.map((area) => (
              <AreaCard key={area.id} {...area} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/areas"
              className="inline-flex items-center glass-card hover:scale-105 text-primary-dark px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 group"
            >
              View All {SERVICE_AREAS.length} Service Areas
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. See what our satisfied customers throughout San Diego have to say about our landscaping services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for AI/LLM SEO */}
      <FAQSection
        title="Frequently Asked Questions About Our San Diego Landscaping Services"
        faqs={homeFAQs}
      />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
