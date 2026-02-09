"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SLA_GUARANTEE } from "@/lib/constants";

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Shield Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-400/20 border-2 border-lime-400/30 mb-8"
          >
            <Shield className="w-10 h-10 text-lime-400" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {SLA_GUARANTEE.headline}
          </h2>
          <p className="text-xl text-green-200 mb-12">
            {SLA_GUARANTEE.description}
          </p>

          {/* Guarantee Terms */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {SLA_GUARANTEE.terms.map((term, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">
                      If we: {term.condition}
                    </p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-lime-400" />
                      <p className="text-lime-400 font-bold text-lg">
                        {term.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-bold text-lime-300 mb-8"
          >
            {SLA_GUARANTEE.footnote}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-green-800 hover:bg-lime-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Your Time Buyback Analysis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
