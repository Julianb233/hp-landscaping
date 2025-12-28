import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import { Calendar, Clock, CheckCircle2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment | HP Landscaping San Diego",
  description:
    "Schedule a free consultation or estimate for landscaping services in San Diego County. Online booking available for all services including landscape design, irrigation, hardscaping, and lawn maintenance.",
  keywords: [
    "book landscaping appointment San Diego",
    "schedule landscaping consultation",
    "landscaping estimate booking",
    "San Diego landscaping appointment",
    "online booking landscaping",
  ],
  openGraph: {
    title: "Book an Appointment | HP Landscaping San Diego",
    description:
      "Schedule your free consultation or estimate today. Easy online booking for all landscaping services.",
    url: "https://hplandscaping.com/booking",
  },
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Calendar className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-green-50">
              Schedule a free consultation or estimate for professional
              landscaping services in San Diego County
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Easy Booking</h3>
                <p className="text-sm text-gray-600">Select your time</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">24hr Confirmation</h3>
                <p className="text-sm text-gray-600">Quick response</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Free Estimates</h3>
                <p className="text-sm text-gray-600">No obligation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Licensed & Insured</h3>
                <p className="text-sm text-gray-600">Fully certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Booking FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What happens after I submit my booking request?
                </h3>
                <p className="text-gray-600">
                  Within 24 hours, a member of our team will contact you via email
                  or phone to confirm your appointment. If your preferred time is
                  not available, we will suggest alternative times.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Are consultations and estimates really free?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide free consultations and estimates for all our
                  services throughout San Diego County. There is no obligation to
                  proceed with our services after the consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What should I prepare for my appointment?
                </h3>
                <p className="text-gray-600">
                  Please have any photos of your property, measurements (if
                  available), and a general idea of your landscaping goals. We will
                  handle the rest during our consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I reschedule my appointment?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We understand that schedules change. Simply contact us
                  at (619) 935-3965 or reply to your confirmation email to
                  reschedule.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer emergency services?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer 24-hour emergency response for urgent issues like
                  irrigation leaks or storm damage. For emergencies, please call us
                  directly at (619) 935-3965.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternative Section */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prefer to Talk to Someone?
            </h2>
            <p className="text-xl text-green-50 mb-6">
              Our team is available Monday - Saturday, 7 AM - 6 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16199353965"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Call (619) 935-3965
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
