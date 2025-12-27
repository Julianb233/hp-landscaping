"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-green-700" />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-lime-500/20 rounded-full filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-600/30 rounded-full filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="block text-lime-300 mt-2">
                Outdoor Living Space?
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Get your free, no-obligation quote today. Our expert team is ready to
            bring your landscape vision to life.
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {/* Phone */}
            <div
              className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "rounded-2xl p-6",
                "hover:bg-white/15 transition-all duration-300",
                "hover:scale-105 transform"
              )}
            >
              <Phone className="w-8 h-8 text-lime-400 mx-auto mb-3" />
              <p className="text-sm text-green-100 mb-2">Call Us Now</p>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-xl font-bold hover:text-lime-300 transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Hours */}
            <div
              className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "rounded-2xl p-6",
                "hover:bg-white/15 transition-all duration-300",
                "hover:scale-105 transform"
              )}
            >
              <Clock className="w-8 h-8 text-lime-400 mx-auto mb-3" />
              <p className="text-sm text-green-100 mb-2">Business Hours</p>
              <p className="text-xl font-bold">{COMPANY_INFO.hours}</p>
            </div>

            {/* Service Area */}
            <div
              className={cn(
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "rounded-2xl p-6",
                "hover:bg-white/15 transition-all duration-300",
                "hover:scale-105 transform"
              )}
            >
              <MapPin className="w-8 h-8 text-lime-400 mx-auto mb-3" />
              <p className="text-sm text-green-100 mb-2">Service Area</p>
              <p className="text-xl font-bold">San Diego County</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center justify-center",
                "bg-white text-green-800 hover:bg-lime-50",
                "px-8 py-5 rounded-xl font-bold text-lg",
                "shadow-2xl hover:shadow-3xl",
                "transition-all duration-300",
                "hover:scale-110 transform"
              )}
            >
              Get Free Quote
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={cn(
                "group inline-flex items-center justify-center",
                "border-2 border-white/40 hover:border-white",
                "hover:bg-white/10 backdrop-blur-sm",
                "px-8 py-5 rounded-xl font-bold text-lg",
                "transition-all duration-300",
                "hover:scale-110 transform"
              )}
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-green-100"
          >
            {[
              "✓ Licensed & Insured",
              "✓ Free Estimates",
              "✓ 100% Satisfaction Guaranteed",
              "✓ Same-Day Response",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-lime-400 font-bold text-lg">✓</span>
                <span className="font-medium">{feature.replace("✓ ", "")}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 30.2C384 27.7 480 31.3 576 38.5C672 45.7 768 56.3 864 58.8C960 61.3 1056 55.7 1152 50C1248 44.3 1344 38.7 1392 35.8L1440 33V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
