import type { MetadataRoute } from 'next';
import { SERVICES, SERVICE_AREAS, COMPANY_INFO } from '@/lib/constants';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://hplandscaping.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Service area pages
  const areaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${BASE_URL}/areas/${area.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: area.featured ? 0.8 : 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
