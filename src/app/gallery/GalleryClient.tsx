"use client";

import { SERVICES } from "@/lib/constants";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryProject {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  beforeImage?: string;
  tags?: string[];
}

interface GalleryClientProps {
  galleryProjects: GalleryProject[];
}

export default function GalleryClient({ galleryProjects }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showBeforeAfter, setShowBeforeAfter] = useState<{ [key: number]: boolean }>({});

  const filteredProjects = selectedCategory === "all"
    ? galleryProjects
    : galleryProjects.filter(project => project.category === selectedCategory);

  const toggleBeforeAfter = (projectId: number) => {
    setShowBeforeAfter(prev => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Portfolio of Excellence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Explore our recent projects across San Diego County. From elegant landscape designs to functional
              irrigation systems, see the quality and craftsmanship we bring to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter:</span>
            </div>

            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>

            {SERVICES.map(service => (
              <button
                key={service.id}
                onClick={() => setSelectedCategory(service.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === service.id
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-green-700">{filteredProjects.length}</span>{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
                {selectedCategory !== "all" && (
                  <span>
                    {" "}
                    in{" "}
                    <span className="font-semibold">
                      {SERVICES.find(s => s.id === selectedCategory)?.name}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden group">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
                      <div className="text-center p-4">
                        <div className="text-green-700 font-semibold text-lg mb-2">
                          {project.title}
                        </div>
                        <div className="text-green-600 text-sm">{project.location}</div>
                      </div>
                    </div>

                    {/* Before/After Toggle for projects with before images */}
                    {project.beforeImage && (
                      <button
                        onClick={() => toggleBeforeAfter(project.id)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-white transition-colors z-10 flex items-center gap-2"
                      >
                        {showBeforeAfter[project.id] ? (
                          <>
                            <ChevronLeft className="w-4 h-4" />
                            Before
                          </>
                        ) : (
                          <>
                            After
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    )}

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {SERVICES.find(s => s.id === project.category)?.name}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-green-700 font-medium mb-3">{project.location}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No projects found in this category.</p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-4 text-green-700 hover:text-green-800 font-semibold"
                >
                  View All Projects
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Before & After Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Dramatic Transformations
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              See the incredible before and after transformations we've created for our San Diego County clients.
            </p>

            {/* Featured Before/After Projects */}
            <div className="space-y-12">
              {galleryProjects
                .filter(p => p.beforeImage)
                .slice(0, 3)
                .map(project => (
                  <div key={`ba-${project.id}`} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Before */}
                      <div className="relative aspect-[4/3] bg-gray-300">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-500">
                          <div className="text-white font-bold text-2xl">BEFORE</div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="relative aspect-[4/3] bg-green-200">
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-300 to-green-400">
                          <div className="text-green-900 font-bold text-2xl">AFTER</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-green-700 font-medium mb-2">{project.location}</p>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Recent Work by the Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SERVICES.map(service => {
                const count = galleryProjects.filter(p => p.category === service.id).length;
                return (
                  <div key={service.id} className="text-center">
                    <div className="text-4xl font-bold text-green-700 mb-2">{count}</div>
                    <div className="text-gray-600 text-sm">{service.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Get your free estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Estimate
            </a>
            <a
              href="/services"
              className="inline-block bg-green-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-green-500 transition-colors shadow-lg border-2 border-white"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
