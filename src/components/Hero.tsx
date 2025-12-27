import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-green-600/30 border border-green-500/30 rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Serving San Diego County Since {COMPANY_INFO.foundedYear}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <span className="block text-green-300">Outdoor Space</span>
            </h1>

            <p className="text-xl text-green-100 max-w-lg">
              Professional landscaping, irrigation, and hardscaping services for homes and businesses throughout San Diego County. Beautiful, sustainable landscapes built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-600/30 rounded-full flex items-center justify-center">
                  <span className="text-green-300 text-lg">&#10003;</span>
                </div>
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-600/30 rounded-full flex items-center justify-center">
                  <span className="text-green-300 text-lg">&#9733;</span>
                </div>
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-600/30 rounded-full flex items-center justify-center">
                  <span className="text-green-300 text-lg">&#128176;</span>
                </div>
                <span className="text-sm">Free Estimates</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent rounded-3xl border border-green-400/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-2xl font-semibold">Beautiful Landscapes</p>
                  <p className="text-green-200">For San Diego Homes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 50C1248 44.3 1344 38.7 1392 35.8L1440 33V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
