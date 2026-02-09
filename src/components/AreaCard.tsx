import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Users } from "lucide-react";

interface AreaCardProps {
  id: string;
  name: string;
  description: string;
  population?: string;
  featured?: boolean;
  image?: string;
}

export default function AreaCard({ id, name, description, population, featured, image }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${id}`}
      className={`group relative block overflow-hidden rounded-2xl card-3d ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={image}
            alt={`${name}, San Diego County`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-700 to-green-900" />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-primary-dark/90 group-hover:via-primary/50 group-hover:to-primary/30 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="relative min-h-[280px] flex flex-col justify-between p-6">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          {/* Location Badge */}
          <div className="glass-card flex items-center gap-2 px-3 py-2 rounded-full">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-800">San Diego County</span>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="glass-green px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-white">Popular</span>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">
            {name}
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
            {description}
          </p>

          {/* Population */}
          {population && (
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Users className="w-4 h-4" />
              <span>Population: {population}</span>
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center justify-between pt-2">
            <span className="inline-flex items-center text-accent-light font-medium group-hover:gap-2 transition-all">
              View Services
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>

            {/* Glow Indicator */}
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow-green" />
    </Link>
  );
}
