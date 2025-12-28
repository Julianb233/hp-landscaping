import type { Metadata } from "next";
import { COMPANY_INFO, STATS, SERVICES } from "@/lib/constants";
import { Award, Users, Heart, Leaf, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - 25+ Years of Commercial Landscaping Excellence",
  description: `HP Landscaping: San Diego's most reliable commercial landscaping contractor since ${COMPANY_INFO.foundedYear}. SLA-backed contracts, 99.4% on-time reliability, and dedicated account managers for property managers and HOAs.`,
  keywords: [
    "about HP Landscaping",
    "San Diego landscaper",
    "landscaping company San Diego",
    "professional landscapers",
    "licensed landscaper San Diego",
    "sustainable landscaping",
  ],
  openGraph: {
    title: "About HP Landscaping - San Diego's Trusted Landscaping Experts",
    description: "15+ years of excellence in landscape design, installation, and maintenance throughout San Diego County.",
    url: "https://hplandscaping.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://hplandscaping.com/about",
  },
};

// AboutPage Schema for AI/LLM SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About HP Landscaping",
  description: "HP Landscaping has been serving San Diego County since 2010 with professional landscaping services. Our team of 50+ experts specializes in sustainable, drought-tolerant landscape design and maintenance.",
  url: "https://hplandscaping.com/about",
  mainEntity: {
    "@type": "LandscapingBusiness",
    "@id": "https://hplandscaping.com/#organization",
    name: COMPANY_INFO.name,
    foundingDate: COMPANY_INFO.foundedYear.toString(),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 50,
    },
    slogan: COMPANY_INFO.tagline,
    knowsAbout: [
      "Landscape Design",
      "Sustainable Landscaping",
      "Drought Tolerant Plants",
      "Water Conservation",
      "Native California Plants",
      "Hardscape Installation",
      "Irrigation Systems",
      "Lawn Care",
    ],
  },
};

// Organization Schema with enhanced details
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  url: "https://hplandscaping.com",
  logo: "https://hplandscaping.com/logo.png",
  description: "Professional landscaping services in San Diego County specializing in sustainable, drought-tolerant landscape design and maintenance.",
  foundingDate: COMPANY_INFO.foundedYear.toString(),
  numberOfEmployees: "50+",
  slogan: COMPANY_INFO.tagline,
  award: [
    "Best of San Diego Landscaping 2023",
    "Eco-Friendly Business Award",
    "Customer Choice Award 2022",
  ],
  memberOf: {
    "@type": "Organization",
    name: "California Landscape Contractors Association",
  },
  seeks: {
    "@type": "Person",
    jobTitle: "Landscape Designer",
    description: "Seeking talented landscape professionals to join our growing team",
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Reliability First",
      description: "99.4% on-time record. SLA guarantees. Fixed service windows. We show up when we say we will.",
    },
    {
      icon: Heart,
      title: "Zero Headaches",
      description: "Dedicated account managers, tenant communication handling, and one point of contact for your entire portfolio.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly practices and drought-tolerant designs that reduce your water costs and environmental impact.",
    },
    {
      icon: Star,
      title: "Accountability",
      description: "Monthly photo reports, quarterly planning, and transparent communication. No excuses, no exceptions.",
    },
  ];

  const certifications = [
    {
      title: "Licensed & Insured",
      details: `CA License #${COMPANY_INFO.licenseNumber}`,
    },
    {
      title: "WaterSense Partner",
      details: "EPA certified for water efficiency",
    },
    {
      title: "CLCA Member",
      details: "California Landscape Contractors Association",
    },
    {
      title: "ISA Certified",
      details: "International Society of Arboriculture",
    },
  ];

  const team = [
    {
      name: "Michael Patterson",
      role: "Founder & CEO",
      bio: "With 20+ years in landscaping, Michael founded HP Landscaping to bring sustainable, beautiful landscapes to San Diego County.",
      expertise: "Landscape Architecture, Business Development",
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      bio: "Sarah's award-winning designs blend California native plants with modern aesthetics for stunning, eco-friendly landscapes.",
      expertise: "Landscape Design, Native Plants, 3D Visualization",
    },
    {
      name: "David Rodriguez",
      role: "Operations Manager",
      bio: "David ensures every project runs smoothly, from initial consultation to final walkthrough.",
      expertise: "Project Management, Quality Control",
    },
    {
      name: "Jennifer Martinez",
      role: "Chief Horticulturist",
      bio: "Jennifer's expertise in drought-tolerant plants and sustainable practices keeps San Diego landscapes thriving.",
      expertise: "Horticulture, Sustainable Practices, Water Management",
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-600/30 border border-green-500/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse" />
              Serving San Diego County Since {COMPANY_INFO.foundedYear}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              25 Years of Showing Up
              <span className="block text-lime-300 mt-2">On Time. Every Time.</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              {COMPANY_INFO.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Founded in {COMPANY_INFO.foundedYear}, HP Landscaping began with a simple promise: <strong>show up when
                we say we will, do what we say we'll do.</strong> Twenty-five years later, that promise has become
                our competitive advantage.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We've grown from a small crew into San Diego County's most reliable commercial landscaping contractor,
                with over 50 dedicated professionals and a 99.4% on-time service record across 50,000+ scheduled services.
                Property managers, HOA boards, and facilities directors trust us because we eliminate the headaches
                of vendor management.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our SLA-backed contracts aren't just marketing—they're a guarantee. We're so confident in our
                reliability that if we miss a service window, that week is free. Miss twice in 90 days, and
                you can cancel penalty-free while we pay your first month with a replacement vendor.
              </p>

              <p className="text-lg leading-relaxed">
                Today, we're proud to serve as the landscaping department for dozens of commercial properties across
                San Diego County. Our dedicated account managers, fixed service windows, and proactive communication
                give you back the 4-6 hours per month you used to spend chasing unreliable vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation to final project completion.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-10 h-10 text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-16 h-16 text-green-700 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals passionate about creating beautiful, sustainable landscapes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <div className="text-green-700 font-semibold mb-3">{member.role}</div>
                      <p className="text-gray-600 mb-3">{member.bio}</p>
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold">Expertise: </span>
                        {member.expertise}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-16 h-16 text-green-700 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Certifications & Awards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Recognized for excellence, sustainability, and customer satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 border-2 border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-700 mb-2">
                    <Award className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.details}</p>
                </div>
              ))}
            </div>

            {/* Awards List */}
            <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Recent Awards & Recognition</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Best of San Diego 2023</strong> - Landscaping Services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Eco-Friendly Business Award 2023</strong> - San Diego County
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Customer Choice Award 2022</strong> - Outstanding Service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>WaterSense Excellence Award</strong> - Water Conservation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Property Managers Choose HP Landscaping
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Time Buyback</h3>
                <p className="text-gray-600">
                  Our clients save an average of 4.2 hours per month on vendor management.
                  One point of contact, fixed service windows, zero chasing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                <h3 className="font-bold text-xl text-gray-900 mb-3">SLA-Backed Guarantee</h3>
                <p className="text-gray-600">
                  Miss a service? That week is free. Miss twice in 90 days? Cancel penalty-free
                  and we pay your first month with a replacement vendor.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Multi-Property Coordination</h3>
                <p className="text-gray-600">
                  Managing 3, 10, or 50 properties? We coordinate across your entire portfolio
                  with quarterly budget planning and monthly reporting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-700">
                <h3 className="font-bold text-xl text-gray-900 mb-3">Zero Tenant Complaints</h3>
                <p className="text-gray-600">
                  We handle tenant communication directly. When someone complains, they call us,
                  not you. Your phone stays quiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            In 15 minutes, we'll calculate your "vendor management tax" and show you
            exactly how many hours you'll save each month with an SLA-backed contract.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Book Your Time Buyback Analysis
            </a>
            <a
              href="/commercial"
              className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-500 transition-colors shadow-lg border-2 border-white"
            >
              View Commercial Packages
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
