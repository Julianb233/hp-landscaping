import Link from "next/link";
import { Phone, ArrowRight, Calendar } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import BookingButton from "@/components/BookingButton";

interface CTASectionProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
  showBooking?: boolean;
}

export default function CTASection({
  title = "Ready to Transform Your Outdoor Space?",
  description = "Get a free, no-obligation quote for your landscaping project. Our experts are ready to help you create the outdoor space of your dreams.",
  showPhone = true,
  showBooking = true
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showBooking && (
            <BookingButton
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold"
            >
              Book Appointment
            </BookingButton>
          )}

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors group"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          {showPhone && (
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              <Phone className="mr-2" size={20} />
              Call {COMPANY_INFO.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
