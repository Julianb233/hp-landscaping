"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  CheckCircle,
  XCircle,
  Users,
  TrendingUp,
  Phone,
  ArrowRight,
  Calendar,
  FileText,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Packages from "@/components/sections/Packages";
import Guarantee from "@/components/sections/Guarantee";
import { COMPANY_INFO, STATS, LOGO_URL } from "@/lib/constants";

export default function CommercialPage() {
  const painPoints = [
    { icon: XCircle, text: "4-6 hours per month coordinating services" },
    { icon: XCircle, text: "Tenant complaints about missed mowing" },
    { icon: XCircle, text: "Emergency scrambles when vendors don't show" },
    { icon: XCircle, text: "No accountability when quality slips" },
  ];

  const solutions = [
    { icon: Calendar, text: "Fixed service windows you can count on" },
    { icon: Users, text: "Dedicated account manager for your portfolio" },
    { icon: FileText, text: "Monthly photo reports and documentation" },
    { icon: Headphones, text: "We handle tenant communication directly" },
  ];

  const clientTypes = [
    {
      icon: Building2,
      title: "Property Managers",
      description: "Managing 3-50+ properties? We coordinate across your entire portfolio.",
    },
    {
      icon: Users,
      title: "HOA Boards",
      description: "Keep your community pristine without the management headaches.",
    },
    {
      icon: TrendingUp,
      title: "Commercial Owners",
      description: "Office parks, retail centers, and industrial properties.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-green-600/30 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center bg-green-600/30 border border-green-500/30 rounded-full px-4 py-2 text-sm backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2 animate-pulse" />
              Commercial Maintenance Contracts
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We Become Your
              <span className="block text-lime-300 mt-2">Landscaping Department</span>
            </h1>

            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-8">
              {COMPANY_INFO.valueProposition}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-white text-green-800 hover:bg-lime-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Book Your Time Buyback Analysis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group inline-flex items-center justify-center border-2 border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <Phone className="mr-2" size={20} />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#228B22] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Current Landscaping Vendor is
              <span className="text-red-600"> Costing You More Than You Think</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your &quot;vendor management tax&quot; and see how much time you&apos;re really losing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Pain Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Sound familiar?
              </h3>
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                >
                  <point.icon className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-[#228B22] mb-6">
                The HP Landscaping difference:
              </h3>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-green-50 border border-green-100 rounded-xl"
                >
                  <solution.icon className="w-6 h-6 text-[#228B22] flex-shrink-0" />
                  <span className="text-gray-700">{solution.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for <span className="text-[#228B22]">Busy Professionals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commercial contracts are designed for decision-makers who value their time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#32CD32] transition-all"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <client.icon className="w-7 h-7 text-[#228B22]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {client.title}
                </h3>
                <p className="text-gray-600">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <Packages />

      {/* Guarantee Section */}
      <Guarantee />

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Reclaim Your Time?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              In 15 minutes, we&apos;ll show you exactly how many hours you&apos;ll save each month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-[#228B22] text-white hover:bg-green-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Book Your Free Time Buyback Analysis
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              No obligation. No sales pressure. Just real numbers for your portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
