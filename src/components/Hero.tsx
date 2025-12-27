import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Shield, Star, Wallet } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface HeroProps {
  backgroundImage?: string;
}

export default function Hero({ backgroundImage = "/images/hero/main-hero.jpg" }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Beautiful San Diego landscaping by HP Landscaping"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-primary-dark/60 to-primary/40" />
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-light/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center glass px-5 py-2.5 rounded-full">
              <span className="w-2.5 h-2.5 bg-accent rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium">Serving San Diego County Since {COMPANY_INFO.foundedYear}</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Transform Your
              <span className="block text-gradient bg-gradient-to-r from-accent-light via-accent to-primary-light bg-clip-text text-transparent">
                Outdoor Space
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed">
              Professional landscaping, irrigation, and hardscaping services for homes and businesses throughout San Diego County. Beautiful, sustainable landscapes built to last.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center glass-card bg-white/95 text-primary-dark hover:bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 glow-hover overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="group inline-flex items-center justify-center glass hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                <div className="w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-light" />
                </div>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                <div className="w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent-light" />
                </div>
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-3 glass px-4 py-2 rounded-full">
                <div className="w-10 h-10 bg-accent/30 rounded-full flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-accent-light" />
                </div>
                <span className="text-sm font-medium">Free Estimates</span>
              </div>
            </div>
          </div>

          {/* Right Side - Glass Card Stats */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Floating Stats Cards */}
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-2xl animate-float">
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <div className="text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="glass-card p-8 rounded-2xl animate-float animation-delay-2000 ml-12">
                  <div className="text-5xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="glass-card p-8 rounded-2xl animate-float animation-delay-4000">
                  <div className="text-5xl font-bold text-primary mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Customer Satisfaction</div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-light rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L48 55C96 50 192 40 288 38C384 36 480 42 576 52C672 62 768 76 864 78C960 80 1056 70 1152 62C1248 54 1344 48 1392 45L1440 42V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
