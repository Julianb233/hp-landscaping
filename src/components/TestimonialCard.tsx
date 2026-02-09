import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export default function TestimonialCard({ name, location, rating, text, service }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
          />
        ))}
      </div>

      <blockquote className="text-gray-700 mb-4 italic">&ldquo;{text}&rdquo;</blockquote>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
          {service}
        </span>
      </div>
    </div>
  );
}
