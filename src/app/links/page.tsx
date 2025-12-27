"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Palette,
  Droplets,
  Layers,
  Scissors,
  TreePine,
  Lightbulb,
  Waves,
  Instagram,
  Facebook,
  ExternalLink,
  Calendar,
  Star,
  Clock,
} from "lucide-react"

const LOGO_URL = "https://storage.googleapis.com/msgsndr/T5QQu0Akcy942Ox0QIk7/media/67e5bda482c9d83767bffe13.png"

const services = [
  { name: "Landscape Design", href: "/services/landscape-design", icon: Palette, color: "from-emerald-500 to-teal-500" },
  { name: "Irrigation Systems", href: "/services/irrigation-systems", icon: Droplets, color: "from-blue-500 to-cyan-500" },
  { name: "Hardscaping", href: "/services/hardscaping", icon: Layers, color: "from-amber-500 to-orange-500" },
  { name: "Lawn Care & Maintenance", href: "/services/lawn-care", icon: Scissors, color: "from-green-500 to-emerald-500" },
  { name: "Tree Services", href: "/services/tree-services", icon: TreePine, color: "from-lime-600 to-green-600" },
  { name: "Outdoor Lighting", href: "/services/outdoor-lighting", icon: Lightbulb, color: "from-yellow-500 to-amber-500" },
  { name: "Water Features", href: "/services/water-features", icon: Waves, color: "from-sky-500 to-blue-500" },
]

const quickLinks = [
  { name: "Get Free Quote", href: "/contact", icon: Calendar, featured: true },
  { name: "View Our Work", href: "/gallery", icon: Star },
  { name: "Service Areas", href: "/areas", icon: MapPin },
  { name: "About Us", href: "/about", icon: ExternalLink },
]

const contactInfo = [
  { icon: Phone, text: "(619) 935-3965", href: "tel:+16199353965" },
  { icon: Mail, text: "info@hplandscapingmaintenance.com", href: "mailto:info@hplandscapingmaintenance.com" },
  { icon: Clock, text: "Mon-Sat: 7AM - 6PM", href: null },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/hplandscaping", color: "from-purple-500 to-pink-500" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/hplandscaping", color: "from-blue-600 to-blue-500" },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 py-8 px-4">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-md mx-auto">
        {/* Logo & Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-28 h-28 mx-auto mb-4 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-xl opacity-50" />
            <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-xl border border-white/20 p-2 overflow-hidden">
              <Image
                src={LOGO_URL}
                alt="HP Landscaping"
                fill
                className="object-contain p-2"
                unoptimized
              />
            </div>
          </motion.div>

          <h1 className="text-2xl font-bold text-white mb-1">HP Landscaping</h1>
          <p className="text-emerald-400 text-sm">Professional Landscaping in San Diego</p>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-1 mt-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/10"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-white/80 ml-1">5.0 Rating</span>
          </motion.div>
        </motion.div>

        {/* Featured CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 p-[2px]"
            >
              <div className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500">
                <Calendar className="w-5 h-5 text-white" />
                <span className="text-lg font-bold text-white">Get Your Free Quote</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-1">Our Services</h2>
          <div className="space-y-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="flex-1 text-white font-medium">{service.name}</span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-1">Quick Links</h2>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.slice(1).map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <Link href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <link.icon className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm text-white/80">{link.name}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-1">Contact</h2>
          <div className="p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-3">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-emerald-400" />
                {item.href ? (
                  <a href={item.href} className="text-white/80 hover:text-white text-sm transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-white/80 text-sm">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3 px-1">Follow Us</h2>
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-white/30 text-xs">
            San Diego County&apos;s Premier Landscaping Company
          </p>
          <p className="text-white/20 text-xs mt-1">
            CA License #123456 | Est. 2010
          </p>
        </motion.div>
      </div>
    </div>
  )
}
