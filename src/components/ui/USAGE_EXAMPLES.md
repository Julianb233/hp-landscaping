# UI Component Usage Examples

Quick reference guide for using HP Landscaping UI components in your Next.js pages.

## Basic Import

```tsx
// Import individual components
import { Button, Card, CardHeader, CardTitle, Input } from "@/components/ui";

// Or import specific components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
```

## Real-World Examples

### 1. Service Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "@/components/ui";
import { Leaf } from "lucide-react";

export function ServiceCard({ title, description, features, price }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2">
          <Badge variant="accent">Popular</Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-slate-600">
          {features.map((feature) => (
            <li key={feature}>✓ {feature}</li>
          ))}
        </ul>
        <p className="mt-4 text-2xl font-bold text-[var(--hp-forest)]">{price}</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" className="w-full">
          <Leaf />
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### 2. Contact Form

```tsx
"use client";

import { useState } from "react";
import { Button, Input, Textarea, Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui";
import { Mail, Phone } from "lucide-react";

export function ContactForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic
  };

  return (
    <Card className="max-w-2xl">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Request a Free Quote</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            placeholder="John Smith"
            error={errors.name}
            required
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            error={errors.email}
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="(619) 555-0123"
            helperText="We'll call you back within 24 hours"
          />

          <Textarea
            label="Project Details"
            name="message"
            placeholder="Tell us about your landscaping project..."
            helperText="Include property size, desired services, and timeline"
            required
          />
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button type="submit" variant="primary" size="lg" className="flex-1">
            <Mail />
            Send Request
          </Button>
          <Button type="button" variant="outline">
            <Phone />
            Call Instead
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
```

### 3. Service Filter with Badges

```tsx
import { Badge } from "@/components/ui";

const services = [
  "Landscape Design",
  "Irrigation",
  "Hardscaping",
  "Maintenance",
  "Seasonal Cleanup",
  "Tree Services"
];

export function ServiceFilter({ selectedServices, onToggle }) {
  return (
    <div className="flex flex-wrap gap-2">
      {services.map((service) => (
        <button
          key={service}
          onClick={() => onToggle(service)}
          className="cursor-pointer"
        >
          <Badge
            variant={selectedServices.includes(service) ? "primary" : "outline"}
          >
            {service}
          </Badge>
        </button>
      ))}
    </div>
  );
}
```

### 4. Call-to-Action Section

```tsx
import { Button, Card, CardContent } from "@/components/ui";
import { Phone, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <Card className="bg-gradient-to-r from-[var(--hp-forest)] to-[var(--hp-lime)] text-white">
      <CardContent className="py-12 text-center">
        <h2 className="mb-4 text-4xl font-bold">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Get a free consultation and quote from San Diego's trusted landscaping experts
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="secondary" size="xl">
            <Phone />
            Call (619) 555-0123
          </Button>
          <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-[var(--hp-forest)]">
            <Calendar />
            Schedule Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

### 5. Testimonial Card

```tsx
import { Card, CardContent, Badge } from "@/components/ui";
import { Star } from "lucide-react";

export function TestimonialCard({ name, location, rating, text, service }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-slate-900">{name}</h4>
            <p className="text-sm text-slate-600">{location}</p>
          </div>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[var(--hp-lime)] text-[var(--hp-lime)]" />
            ))}
          </div>
        </div>
        <p className="mb-4 text-slate-600">{text}</p>
        <Badge variant="primary">{service}</Badge>
      </CardContent>
    </Card>
  );
}
```

### 6. Search Bar with Button

```tsx
import { Input, Button } from "@/components/ui";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Search services, areas..."
        className="flex-1"
      />
      <Button variant="primary" size="icon">
        <Search />
      </Button>
    </div>
  );
}
```

### 7. Pricing Table

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "@/components/ui";

export function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "$199/mo",
      description: "Perfect for small residential properties",
      features: ["Weekly mowing", "Edge trimming", "Debris removal"],
      badge: null,
      variant: "outline"
    },
    {
      name: "Premium",
      price: "$399/mo",
      description: "Comprehensive care for your landscape",
      features: ["Everything in Basic", "Fertilization", "Weed control", "Seasonal cleanup"],
      badge: "Most Popular",
      variant: "primary"
    },
    {
      name: "Deluxe",
      price: "$599/mo",
      description: "Full-service landscape management",
      features: ["Everything in Premium", "Irrigation management", "Tree & shrub care", "Monthly reports"],
      badge: "Best Value",
      variant: "accent"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <Card key={plan.name} className={plan.badge ? "border-2 border-[var(--hp-lime)]" : ""}>
          <CardHeader>
            {plan.badge && (
              <Badge variant="accent" className="mb-2 w-fit">
                {plan.badge}
              </Badge>
            )}
            <CardTitle>{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <p className="text-3xl font-bold text-[var(--hp-forest)]">{plan.price}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant={plan.variant} className="w-full">
              Choose Plan
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
```

### 8. Newsletter Signup

```tsx
"use client";

import { useState } from "react";
import { Input, Button, Card, CardContent } from "@/components/ui";
import { Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    // Submit logic
  };

  return (
    <Card className="bg-[var(--hp-forest)] text-white">
      <CardContent className="py-8">
        <h3 className="mb-2 text-2xl font-bold">Get Landscaping Tips</h3>
        <p className="mb-6 text-slate-100">
          Join our newsletter for seasonal advice and exclusive offers
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            className="flex-1 bg-white"
          />
          <Button variant="accent" type="submit">
            <Mail />
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

## Component Patterns

### Loading States

```tsx
<Button variant="primary" disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Processing...
</Button>
```

### Icon Buttons

```tsx
<Button variant="primary" size="icon">
  <Phone />
</Button>
```

### Button Groups

```tsx
<div className="flex gap-2">
  <Button variant="primary">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="ghost">Reset</Button>
</div>
```

### Inline Badges

```tsx
<h2 className="flex items-center gap-2">
  Landscape Design
  <Badge variant="accent">New</Badge>
</h2>
```

### Form Validation

```tsx
const [errors, setErrors] = useState({});

<Input
  label="Email"
  error={errors.email}
  onChange={() => setErrors({ ...errors, email: "" })}
/>
```

## Best Practices

1. **Always provide labels for form inputs** - Improves accessibility and UX
2. **Use appropriate button variants** - Primary for main actions, outline for secondary
3. **Show loading states** - Disable buttons during async operations
4. **Validate forms** - Display error messages inline
5. **Use semantic HTML** - Cards for content grouping, buttons for actions
6. **Mobile-first responsive design** - Components are responsive by default
7. **Test keyboard navigation** - Ensure all interactive elements are accessible

## Accessibility Checklist

- [ ] All inputs have labels
- [ ] Form errors are announced to screen readers
- [ ] Buttons have descriptive text or aria-labels
- [ ] Color is not the only indicator of state
- [ ] Focus indicators are visible
- [ ] Interactive elements are keyboard accessible
- [ ] ARIA attributes are used correctly

## Common Mistakes to Avoid

```tsx
// ❌ Bad - No label
<Input placeholder="Name" />

// ✅ Good - With label
<Input label="Name" placeholder="John Smith" />

// ❌ Bad - Using div as button
<div onClick={handleClick}>Click me</div>

// ✅ Good - Using Button component
<Button onClick={handleClick}>Click me</Button>

// ❌ Bad - No error handling
<Input type="email" />

// ✅ Good - With error state
<Input type="email" error={emailError} />
```
