"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-green-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>{COMPANY_INFO.hours}</span>
          <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-green-200 transition-colors">
            <Phone size={14} />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">HP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-gray-900">HP Landscaping</span>
              <span className="block text-xs text-green-600">San Diego County</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
