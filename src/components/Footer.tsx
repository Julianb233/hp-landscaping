import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { COMPANY_INFO, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const featuredAreas = SERVICE_AREAS.filter((area) => area.featured).slice(0, 6);

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">HP</span>
              </div>
              <span className="font-bold text-xl text-white">HP Landscaping</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional landscaping services for San Diego County. Creating beautiful outdoor spaces since {COMPANY_INFO.foundedYear}.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`} className="hover:text-green-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {featuredAreas.map((area) => (
                <li key={area.id}>
                  <Link href={`/areas/${area.id}`} className="hover:text-green-400 transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="text-green-400 hover:text-green-300 transition-colors">
                  View All Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-400 mt-1" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-green-400 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-400 mt-1" />
                <div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-green-400 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-400 mt-1" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-green-400 mt-1" />
                <span>{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. License #{COMPANY_INFO.licenseNumber}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-green-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
