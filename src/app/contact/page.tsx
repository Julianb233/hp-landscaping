import type { Metadata } from "next";
import { COMPANY_INFO, SERVICES } from "@/lib/constants";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Landscaping Estimate",
  description: `Contact HP Landscaping for a free estimate on landscaping services in San Diego County. Call ${COMPANY_INFO.phone} or fill out our contact form. Licensed & insured with 15+ years experience.`,
  keywords: [
    "contact landscaper San Diego",
    "free landscaping estimate",
    "landscaping quote San Diego",
    "San Diego landscape consultation",
    "HP Landscaping contact",
  ],
  openGraph: {
    title: "Contact HP Landscaping - Free Estimates in San Diego",
    description: "Get your free landscaping estimate today. Professional service throughout San Diego County.",
    url: "https://hplandscaping.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://hplandscaping.com/contact",
  },
};

// ContactPage Schema for AI/LLM SEO
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact HP Landscaping",
  description: "Get in touch with HP Landscaping for professional landscaping services in San Diego County. We offer free estimates and consultations.",
  url: "https://hplandscaping.com/contact",
  mainEntity: {
    "@type": "LandscapingBusiness",
    name: COMPANY_INFO.name,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  },
};

// FAQPage Schema for Contact Page
const contactFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get a free landscaping estimate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `You can get a free estimate by calling us at ${COMPANY_INFO.phone}, emailing ${COMPANY_INFO.email}, or filling out our contact form. We'll schedule a convenient time to visit your property and provide a detailed quote.`,
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all of San Diego County including San Diego, Chula Vista, Oceanside, Escondido, Carlsbad, and surrounding cities.",
      },
    },
    {
      "@type": "Question",
      name: "What are your business hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're open Monday through Saturday, 7:00 AM to 6:00 PM. Emergency tree services available 24/7.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFAQSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Your Free Landscaping Estimate
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Let's transform your outdoor space together. Contact us today for a free consultation!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-green-700 hover:text-green-800 text-lg"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-green-700 hover:text-green-800 text-lg"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-700">{COMPANY_INFO.hours}</p>
                    <p className="text-gray-600 text-sm mt-1">Emergency services available 24/7</p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                    <p className="text-gray-700">{COMPANY_INFO.address}</p>
                    <p className="text-gray-600 text-sm mt-1">Serving all of San Diego County</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Box */}
              <div className="mt-8 bg-green-50 border-l-4 border-green-700 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Why Choose HP Landscaping?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>15+ years of professional experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Licensed & insured (CA-LIC-{COMPANY_INFO.licenseNumber})</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Free estimates & consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>98% customer satisfaction rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-700 mt-1">✓</span>
                    <span>Eco-friendly & drought-tolerant solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Estimate</h2>

                <form className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                      placeholder="(619) 555-0123"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                      <option value="other">Other / Multiple Services</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project... What are your goals? Any specific requirements or timeline?"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-700 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Get My Free Estimate
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by HP Landscaping regarding your project.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serving San Diego County</h2>
            <p className="text-xl text-gray-600">
              From the coast to the inland valleys, we bring professional landscaping services to your neighborhood.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-700 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-lg">San Diego County Service Area</p>
                <p className="text-gray-600 mt-2">Interactive map coming soon</p>
              </div>
            </div>
          </div>

          {/* Service Coverage */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-green-700 font-bold text-2xl mb-2">Coastal</div>
                <p className="text-gray-600">San Diego, Carlsbad, Oceanside, Encinitas, Del Mar</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-green-700 font-bold text-2xl mb-2">Central</div>
                <p className="text-gray-600">La Mesa, El Cajon, Santee, Poway</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-green-700 font-bold text-2xl mb-2">South Bay</div>
                <p className="text-gray-600">Chula Vista, National City, Coronado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us today for your free, no-obligation estimate. Let's create the landscape of your dreams!
          </p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-lg"
          >
            Call Now: {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
