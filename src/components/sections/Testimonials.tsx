"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what San Diego homeowners
            are saying about our work
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className={cn(
                "relative bg-gradient-to-br from-green-50 to-lime-50/50",
                "rounded-2xl p-6 lg:p-8",
                "border-2 border-green-100",
                "hover:border-lime-300",
                "hover:shadow-xl",
                "transition-all duration-300",
                "hover:-translate-y-1 transform"
              )}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-green-700" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <Star
                      className="w-5 h-5 text-lime-500"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </blockquote>

              {/* Customer Info */}
              <div className="mt-auto">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full",
                      "bg-gradient-to-br from-green-600 to-lime-500",
                      "flex items-center justify-center",
                      "text-white font-bold text-lg"
                    )}
                  >
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Name & Location */}
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="mt-4 pt-4 border-t border-green-200">
                  <span
                    className={cn(
                      "inline-block text-xs font-semibold",
                      "bg-green-700 text-white",
                      "px-3 py-1 rounded-full"
                    )}
                  >
                    {testimonial.service}
                  </span>
                </div>
              </div>

              {/* Decorative gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-400/0 to-green-500/0 hover:from-lime-400/5 hover:to-green-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5000+", label: "Happy Customers" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-green-700 mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 h-1 w-32 mx-auto bg-gradient-to-r from-green-700 via-lime-500 to-green-700 rounded-full"
        />
      </div>
    </section>
  );
}
