"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMMERCIAL_PACKAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Packages() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Commercial Maintenance Contracts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Level of{" "}
            <span className="text-[#228B22]">Time Freedom</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop spending 4-6 hours per month managing landscaping vendors.
            Pick the package that matches your portfolio size and let us handle the rest.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMERCIAL_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-300",
                pkg.popular
                  ? "bg-gradient-to-br from-[#228B22] to-green-700 text-white shadow-2xl scale-105 z-10"
                  : "bg-white border-2 border-gray-200 hover:border-[#32CD32] hover:shadow-xl"
              )}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-lime-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Package Name */}
              <h3
                className={cn(
                  "text-2xl font-bold mb-2",
                  pkg.popular ? "text-white" : "text-gray-900"
                )}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span
                  className={cn(
                    "text-5xl font-bold",
                    pkg.popular ? "text-white" : "text-[#228B22]"
                  )}
                >
                  {pkg.price}
                </span>
                <span
                  className={cn(
                    "text-lg",
                    pkg.popular ? "text-green-100" : "text-gray-500"
                  )}
                >
                  {pkg.period}
                </span>
              </div>

              {/* Description */}
              <p
                className={cn(
                  "mb-6",
                  pkg.popular ? "text-green-100" : "text-gray-600"
                )}
              >
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        pkg.popular ? "bg-lime-400" : "bg-green-100"
                      )}
                    >
                      <Check
                        className={cn(
                          "w-3 h-3",
                          pkg.popular ? "text-green-900" : "text-[#228B22]"
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-sm",
                        pkg.popular ? "text-white" : "text-gray-700"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={cn(
                  "group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300",
                  pkg.popular
                    ? "bg-white text-[#228B22] hover:bg-lime-50 shadow-lg"
                    : "bg-[#228B22] text-white hover:bg-green-700"
                )}
              >
                {pkg.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            All packages include our{" "}
            <span className="font-semibold text-[#228B22]">
              SLA-backed performance guarantee
            </span>
            . Custom enterprise solutions available.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 text-[#228B22] font-medium hover:underline"
          >
            Need a custom quote? Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
