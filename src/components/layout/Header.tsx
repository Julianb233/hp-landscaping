"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      )}
    >
      {/* Top bar */}
      <motion.div
        initial={{ height: "auto" }}
        animate={{ height: scrolled ? 0 : "auto" }}
        className="bg-[#228B22] text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-sm">
          <span>{COMPANY_INFO.hours}</span>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 hover:text-[#32CD32] transition-colors"
          >
            <Phone size={14} />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </motion.div>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-[#228B22] to-[#32CD32] rounded-full flex items-center justify-center shadow-md"
            >
              <span className="text-white font-bold text-lg">HP</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-900 group-hover:text-[#228B22] transition-colors">
                HP Landscaping
              </span>
              <span className="block text-xs text-[#228B22]">
                San Diego County
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-700 hover:text-[#228B22] font-medium transition-colors">
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition-transform",
                        servicesDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="block px-4 py-3 hover:bg-[#228B22]/10 transition-colors group"
                            >
                              <div className="font-medium text-gray-900 group-hover:text-[#228B22] transition-colors">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-600 mt-0.5">
                                {service.shortDescription}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href="/services"
                          className="block px-4 py-3 bg-[#228B22]/5 text-[#228B22] font-medium hover:bg-[#228B22]/10 transition-colors text-center"
                        >
                          View All Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#228B22] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#228B22] to-[#32CD32] hover:from-[#1a6b1a] hover:to-[#28b828] text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Get Free Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t overflow-hidden"
            >
              <div className="py-4 flex flex-col gap-2">
                {NAV_LINKS.map((link) =>
                  link.label === "Services" ? (
                    <div key={link.href}>
                      <button
                        onClick={() =>
                          setServicesDropdownOpen(!servicesDropdownOpen)
                        }
                        className="w-full text-left flex items-center justify-between px-4 py-2 text-gray-700 hover:text-[#228B22] font-medium"
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform",
                            servicesDropdownOpen && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            {SERVICES.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                className="block px-8 py-2 text-sm text-gray-600 hover:text-[#228B22]"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-4 py-2 text-gray-700 hover:text-[#228B22] font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href="/contact"
                  className="mx-4 mt-2 bg-gradient-to-r from-[#228B22] to-[#32CD32] text-white px-6 py-2.5 rounded-lg font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
