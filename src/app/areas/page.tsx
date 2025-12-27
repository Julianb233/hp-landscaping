import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, CheckCircle2 } from "lucide-react";
import { SERVICE_AREAS, COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas - San Diego County Landscaping",
  description: `${COMPANY_INFO.name} provides professional landscaping services throughout San Diego County. We serve ${SERVICE_AREAS.length}+ cities including San Diego, Chula Vista, Oceanside, Carlsbad, Escondido, and more.`,
  keywords: SERVICE_AREAS.map(area => `landscaping ${area.name}`).join(", "),
  openGraph: {
    title: "Service Areas - Professional Landscaping Across San Diego County",
    description: `Serving ${SERVICE_AREAS.length}+ cities in San Diego County with expert landscaping services.`,
    type: "website",
  },
  alternates: {
    canonical: "https://hplandscaping.com/areas",
  },
};

// ServiceArea JSON-LD Schema
const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hplandscaping.com/areas",
  name: "Landscaping Service Coverage",
  provider: {
    "@type": "LandscapingBusiness",
    name: COMPANY_INFO.name,
    telephone: COMPANY_INFO.phone,
    url: "https://hplandscaping.com",
  },
  areaServed: SERVICE_AREAS.map(area => ({
    "@type": "City",
    name: area.name,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: area.county,
    },
  })),
  serviceType: "Landscaping Services",
  description: "Professional landscaping services covering all of San Diego County",
};

export default function ServiceAreasPage() {
  const featuredAreas = SERVICE_AREAS.filter(area => area.featured);
  const otherAreas = SERVICE_AREAS.filter(area => !area.featured);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Serving All of San Diego County
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Professional landscaping services in {SERVICE_AREAS.length}+ cities across San Diego County. Find expert local service in your area.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={24} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={24} />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-300" size={24} />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete San Diego County Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From coastal communities to inland cities, we bring professional landscaping expertise to every corner of San Diego County. Select your city below to learn about our local services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Service Areas */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-500"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                        {area.name}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users size={16} className="mr-1" />
                        <span>{area.population} residents</span>
                      </div>
                    </div>
                    <MapPin className="text-green-600 group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {area.description}
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                    View {area.name} Services
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherAreas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.id}`}
                className="group bg-gray-50 hover:bg-white rounded-lg p-5 border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {area.name}
                  </h3>
                  <MapPin className="text-green-600 group-hover:scale-110 transition-transform" size={20} />
                </div>
                <p className="text-sm text-gray-500 mb-2">{area.population} residents</p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why San Diego County Trusts {COMPANY_INFO.name}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand the unique landscaping needs of each San Diego County community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-300">
                Deep understanding of San Diego's climate, soil conditions, and native plants in every community we serve
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Response Times</h3>
              <p className="text-gray-300">
                Local teams in multiple areas ensure quick response times and personalized service throughout the county
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-300">
                5000+ successful projects across San Diego County with 98% customer satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Find your city above or contact us directly for a free consultation. We serve all of San Diego County!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Free Quote
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
