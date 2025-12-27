# Layout Components

Professional layout components for HP Landscaping website with animations and modern design.

## Components

### Header

Sticky navigation header with:
- Glass-morphism effect on scroll
- Animated services dropdown menu
- Mobile hamburger menu with smooth transitions
- Gradient CTA button
- Brand colors (Forest Green #228B22, Lime #32CD32)

**Features:**
- Fixed positioning with backdrop blur
- Framer Motion animations
- Responsive design (mobile/desktop)
- Services dropdown with all services listed
- Auto-hiding top bar on scroll

**Usage:**
```tsx
import { Header } from "@/components/layout";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
    </>
  );
}
```

### Footer

Professional footer with:
- Company information and branding
- Quick links to services and areas
- Contact information with icons
- Social media links with hover animations
- Legal links and copyright

**Features:**
- Gradient background (gray-900 to gray-800)
- Animated social icons
- Organized link sections
- Contact details with descriptive text
- Mobile responsive grid layout

**Usage:**
```tsx
import { Footer } from "@/components/layout";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
```

### Container

Responsive max-width wrapper component:

**Props:**
- `size`: "sm" | "md" | "lg" | "xl" | "full" (default: "lg")
- `padding`: "none" | "sm" | "md" | "lg" (default: "md")
- `as`: "div" | "section" | "article" | "main" (default: "div")
- `className`: Additional Tailwind classes

**Sizes:**
- `sm`: max-w-3xl (768px)
- `md`: max-w-5xl (1024px)
- `lg`: max-w-7xl (1280px)
- `xl`: max-w-[1440px]
- `full`: max-w-full

**Usage:**
```tsx
import { Container } from "@/components/layout";

// Default (lg size, md padding)
<Container>
  <h1>Content here</h1>
</Container>

// Custom size and padding
<Container size="xl" padding="lg">
  <h1>Wide content</h1>
</Container>

// As section with no padding
<Container as="section" padding="none" className="bg-gray-50">
  <div>Custom content</div>
</Container>
```

## Complete Layout Example

```tsx
import { Header, Footer, Container } from "@/components/layout";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
}
```

## Brand Colors

- **Forest Green**: #228B22 (primary)
- **Lime**: #32CD32 (accent)
- **White**: #FFFFFF (background)

## Dependencies

- `framer-motion` - Animations
- `lucide-react` - Icons
- `@/lib/utils` - cn() utility
- `@/lib/constants` - Company data

## Animations

### Header
- Scroll-triggered glass morphism
- Auto-hiding top bar
- Smooth dropdown transitions
- Mobile menu slide-in

### Footer
- Social icon hover scale
- Link hover color transitions
- Icon scale on hover

### Container
- Responsive padding
- Flexible sizing system
