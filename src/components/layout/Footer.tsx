import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { COMPANY_INFO, SERVICES, SERVICE_AREAS, LOGO_URL } from "@/lib/constants";

export default function Footer() {
  const featuredAreas = SERVICE_AREAS.filter((area) => area.featured).slice(
    0,
    6
  );
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg bg-white">
                <Image
                  src={LOGO_URL}
                  alt="HP Landscaping"
                  fill
                  className="object-contain p-1"
                  unoptimized
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white">
                  HP Landscaping
                </span>
                <span className="block text-xs text-[#32CD32]">
                  Since {COMPANY_INFO.foundedYear}
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional landscaping services for San Diego County. Creating
              beautiful, sustainable outdoor spaces that enhance your property
              and lifestyle.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#228B22] transition-all shadow-md"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#228B22] transition-all shadow-md"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#228B22] transition-all shadow-md"
              >
                <Twitter size={18} />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#32CD32] rounded-full"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-[#32CD32] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#32CD32] transition-colors"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#32CD32] hover:text-[#228B22] transition-colors font-medium inline-flex items-center gap-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#32CD32] rounded-full"></div>
              Service Areas
            </h3>
            <ul className="space-y-3">
              {featuredAreas.map((area) => (
                <li key={area.id}>
                  <Link
                    href={`/areas/${area.id}`}
                    className="hover:text-[#32CD32] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#32CD32] transition-colors"></span>
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-[#32CD32] hover:text-[#228B22] transition-colors font-medium inline-flex items-center gap-1"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#32CD32] rounded-full"></div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone
                  size={18}
                  className="text-[#32CD32] mt-1 group-hover:scale-110 transition-transform"
                />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="hover:text-[#32CD32] transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Call for a free quote
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail
                  size={18}
                  className="text-[#32CD32] mt-1 group-hover:scale-110 transition-transform"
                />
                <div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="hover:text-[#32CD32] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Email us anytime
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin
                  size={18}
                  className="text-[#32CD32] mt-1 group-hover:scale-110 transition-transform"
                />
                <div>
                  <span>{COMPANY_INFO.address}</span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Serving all of San Diego County
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock
                  size={18}
                  className="text-[#32CD32] mt-1 group-hover:scale-110 transition-transform"
                />
                <div>
                  <span>{COMPANY_INFO.hours}</span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Emergency service available
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:text-[#32CD32] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm hover:text-[#32CD32] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
              <span className="mx-2">|</span>
              License #{COMPANY_INFO.licenseNumber}
            </p>
            <p className="text-gray-600 text-sm">
              Built with care for San Diego County
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
