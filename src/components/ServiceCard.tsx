import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Palette, Droplets, Layers, Scissors, TreePine, Lightbulb, Waves, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Droplets,
  Layers,
  Scissors,
  TreePine,
  Lightbulb,
  Waves,
};

interface ServiceCardProps {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  features?: string[];
  image?: string;
}

export default function ServiceCard({ id, name, shortDescription, icon, features, image }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Palette;

  return (
    <Link
      href={`/services/${id}`}
      className="group relative block overflow-hidden rounded-2xl card-3d glow-hover"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-green-900" />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Glass Card Content */}
      <div className="relative h-full min-h-[360px] flex flex-col justify-end p-6">
        {/* Icon Badge */}
        <div className="absolute top-6 left-6 glass-card w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
          <IconComponent className="w-7 h-7 text-primary" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">
            {name}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            {shortDescription}
          </p>

          {features && features.length > 0 && (
            <ul className="space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="inline-flex items-center text-accent-light font-medium pt-2 group-hover:gap-2 transition-all">
            Learn More
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Shimmer Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </Link>
  );
}
