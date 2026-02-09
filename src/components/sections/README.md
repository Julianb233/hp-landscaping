# Section Components

Modern, animated section components for the HP Landscaping website.

## Components

### Hero.tsx
Full viewport hero section with:
- Animated blob backgrounds (forest green, lime green)
- Framer Motion text reveal animations
- Bold headline and subheadline
- Dual CTAs (Get Free Quote, View Our Work)
- Scroll indicator with bounce animation
- Trust badges with stagger animations
- Wave divider at bottom

### Services.tsx
Services overview grid with:
- 4 featured service cards
- Lucide React icons
- Hover effects with lime accent
- Stagger animations
- Links to service detail pages
- "View All Services" CTA

### Testimonials.tsx
Customer testimonials section with:
- 4-column responsive grid
- Star ratings with stagger animations
- Customer avatars
- Service tags
- Stats row with metrics
- Quote icon decoration

### CTA.tsx
Call-to-action section with:
- Gradient forest green background
- Animated blobs
- Contact info cards (Phone, Hours, Service Area)
- Dual CTAs (Get Free Quote, Call Now)
- Trust indicators
- Wave divider at bottom

## Usage

### Import Individual Components

```tsx
import { Hero, Services, Testimonials, CTA } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
```

### Or Import Separately

```tsx
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
```

## Features

- **Framer Motion Animations**: Smooth, performant animations on scroll
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Brand Colors**: Uses HP Landscaping brand tokens from globals.css
- **TypeScript**: Full type safety
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Performance**: Optimized animations with viewport detection
- **SEO Friendly**: Proper heading hierarchy and semantic structure

## Dependencies

- `framer-motion`: Animations and transitions
- `lucide-react`: Icon components
- `@/lib/constants`: Company info, services, testimonials
- `@/lib/utils`: cn() utility for className merging

## Customization

All components use:
- CSS custom properties for colors
- Tailwind utility classes
- Responsive breakpoints (sm, md, lg, xl)
- Hover and focus states
- Animation delays and durations

Modify animations in the component files:
```tsx
// Adjust animation timing
transition={{ duration: 0.6, delay: 0.2 }}

// Change stagger children timing
transition={{ staggerChildren: 0.15 }}

// Modify blob animations
animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
transition={{ duration: 8, repeat: Infinity }}
```

## Browser Support

- Modern browsers with CSS Grid and Flexbox
- Framer Motion animations with fallbacks
- Responsive images and SVGs
- Progressive enhancement for older browsers
