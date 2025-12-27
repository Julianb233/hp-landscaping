import Link from "next/link";
import { ArrowRight, Palette, Droplets, Layers, Scissors, TreePine, Lightbulb, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Droplets,
  Layers,
  Scissors,
  TreePine,
  Lightbulb,
};

interface ServiceCardProps {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  features?: string[];
}

export default function ServiceCard({ id, name, shortDescription, icon, features }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Palette;

  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
        <IconComponent className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{shortDescription}</p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/services/${id}`}
        className="inline-flex items-center text-green-600 font-medium hover:text-green-700 group/link"
      >
        Learn More
        <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
