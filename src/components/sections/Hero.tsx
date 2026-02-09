"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Clock, Users, Award } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Animated Blob Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-green-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-96 h-96 bg-lime-400/20 rounded-full mix-blend-multiply filter blur-3xl animation-delay-2000"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl animation-delay-4000"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center text-white">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center"
          >
            <div className="inline-flex items-center bg-green-600/30 border border-green-500/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse" />
              SLA-Backed Commercial Contracts • Since {COMPANY_INFO.foundedYear}
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            The Only Landscaping Company
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-lime-300 mt-2"
            >
              That Shows Up. Every. Single. Time.
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-xl sm:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed"
          >
            SLA-backed commercial maintenance contracts for San Diego businesses.
            <span className="block mt-2 font-semibold text-white">
              25 years. 50,000+ on-time services. Zero excuses.
            </span>
          </motion.p>

          {/* Value Proposition Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 inline-block bg-white/10 backdrop-blur-sm border border-lime-400/30 rounded-xl px-6 py-4"
          >
            <p className="text-lg text-lime-100">
              <span className="font-bold text-white">Stop managing vendors.</span> We become your landscaping department—scheduled, reliable, guaranteed.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center justify-center",
                "bg-white text-green-800 hover:bg-lime-50",
                "px-8 py-4 rounded-xl font-semibold text-lg",
                "transition-all duration-300 shadow-lg hover:shadow-xl",
                "hover:scale-105 transform"
              )}
            >
              Book Your Time Buyback Analysis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              href="/commercial"
              className={cn(
                "group inline-flex items-center justify-center",
                "border-2 border-white/40 hover:border-white",
                "hover:bg-white/10 backdrop-blur-sm",
                "px-8 py-4 rounded-xl font-semibold text-lg text-white",
                "transition-all duration-300",
                "hover:scale-105 transform"
              )}
            >
              View Commercial Packages
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          {/* Trust Badges - B2B Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            {[
              { icon: Shield, text: "SLA Guarantee" },
              { icon: Clock, text: "99.4% On-Time" },
              { icon: Users, text: "Dedicated Account Managers" },
              { icon: Award, text: "25+ Years Serving SD" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-600/30 border border-lime-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <badge.icon className="w-5 h-5 text-lime-300" />
                </div>
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 54.7C96 49.3 192 38.7 288 36.2C384 33.7 480 39.3 576 46.5C672 53.7 768 62.3 864 64.8C960 67.3 1056 63.7 1152 60C1248 56.3 1344 52.7 1392 50.8L1440 49V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
