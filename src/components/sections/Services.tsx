"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Palette,
  Droplets,
  Layers,
  Scissors,
  TreePine,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Palette: Palette,
  Droplets: Droplets,
  Layers: Layers,
  Scissors: Scissors,
  TreePine: TreePine,
  Lightbulb: Lightbulb,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  // Get first 4 services for overview
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscaping solutions tailored to San Diego&apos;s unique
            climate and your vision
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div key={service.id} variants={item}>
                <Link
                  href={`/services#${service.id}`}
                  className={cn(
                    "group block h-full",
                    "bg-white rounded-2xl p-6 lg:p-8",
                    "border-2 border-gray-100",
                    "hover:border-lime-400 hover:shadow-xl",
                    "transition-all duration-300",
                    "hover:-translate-y-2 transform"
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-xl mb-5",
                      "bg-gradient-to-br from-green-100 to-lime-50",
                      "flex items-center justify-center",
                      "group-hover:from-lime-400 group-hover:to-green-500",
                      "transition-all duration-300"
                    )}
                  >
                    <Icon
                      className="w-8 h-8 text-green-700 group-hover:text-white transition-colors"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Link Arrow */}
                  <div className="flex items-center text-green-700 font-semibold group-hover:text-lime-500 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Hover Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-lime-400 to-green-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className={cn(
              "group inline-flex items-center justify-center",
              "bg-gradient-to-r from-green-700 to-green-600",
              "hover:from-green-800 hover:to-green-700",
              "text-white px-8 py-4 rounded-xl font-semibold text-lg",
              "shadow-lg hover:shadow-xl",
              "transition-all duration-300",
              "hover:scale-105 transform"
            )}
          >
            View All Services
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 h-1 w-32 mx-auto bg-gradient-to-r from-green-700 via-lime-500 to-green-700 rounded-full"
        />
      </div>
    </section>
  );
}
