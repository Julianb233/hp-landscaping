"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  index?: number;
}

export default function ServiceCard({ id, name, shortDescription, icon, features, image, index = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Palette;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-colors duration-500" />
        </div>

        {/* Glass Card Content */}
        <div className="relative h-full min-h-[360px] flex flex-col justify-end p-6">
          {/* Icon Badge */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-6 glass-card w-14 h-14 rounded-xl flex items-center justify-center"
          >
            <IconComponent className="w-7 h-7 text-primary" />
          </motion.div>

          {/* Content */}
          <div className="space-y-3">
            <motion.h3
              className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {shortDescription}
            </p>

            {features && features.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: "auto" }}
                className="space-y-1.5 overflow-hidden"
              >
                {features.slice(0, 3).map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-sm text-gray-300"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"
                    />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            )}

            <motion.div
              whileHover={{ x: 4 }}
              className="inline-flex items-center text-accent-light font-medium pt-2"
            >
              Learn More
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-1 w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 shimmer" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
