import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface AreaCardProps {
  id: string;
  name: string;
  description: string;
  population?: string;
  featured?: boolean;
}

export default function AreaCard({ id, name, description, population, featured }: AreaCardProps) {
  return (
    <Link
      href={`/areas/${id}`}
      className={`group block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${
        featured ? "border-green-200 bg-green-50/30" : "border-gray-100"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
            {name}
          </h3>
        </div>
        {featured && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
            Popular
          </span>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-3">{description}</p>

      {population && (
        <p className="text-xs text-gray-400 mb-3">Population: {population}</p>
      )}

      <span className="inline-flex items-center text-green-600 text-sm font-medium group-hover:text-green-700">
        View Services
        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
