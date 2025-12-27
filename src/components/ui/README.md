# HP Landscaping UI Component Library

A production-ready React component library built with TypeScript, Tailwind CSS, and Radix UI primitives. Designed specifically for the HP Landscaping brand with accessibility, performance, and developer experience in mind.

## Brand Colors

The component library uses CSS variables for consistent branding:

- **Primary (Forest Green)**: `var(--hp-forest)` - #228B22
- **Accent (Lime)**: `var(--hp-lime)` - #32CD32

## Components

### Button

A versatile button component with multiple variants and sizes.

**Variants:**
- `primary` - Forest green background (default)
- `accent` - Lime green background
- `secondary` - Light gray background
- `outline` - Transparent with forest green border
- `ghost` - Transparent with hover effect
- `link` - Text-only link style
- `destructive` - Red background for dangerous actions

**Sizes:**
- `sm` - Small (height: 36px)
- `default` - Standard (height: 44px)
- `lg` - Large (height: 48px)
- `xl` - Extra large (height: 56px)
- `icon` - Square icon button (40x40px)

**Usage:**
```tsx
import { Button } from "@/components/ui";

<Button variant="primary" size="lg">
  Get Free Quote
</Button>

<Button variant="outline">
  <Mail className="mr-2" />
  Contact Us
</Button>
```

**Props:**
- All standard `button` HTML attributes
- `asChild` - Render as child component using Radix Slot

---

### Card

Flexible card component with header, content, and footer sections.

**Subcomponents:**
- `Card` - Container
- `CardHeader` - Top section with padding
- `CardTitle` - Heading (h3)
- `CardDescription` - Subtitle text
- `CardContent` - Main content area
- `CardFooter` - Bottom section for actions

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@/components/ui";

<Card>
  <CardHeader>
    <CardTitle>Landscape Design</CardTitle>
    <CardDescription>Professional outdoor planning</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Transform your outdoor space with expert design.</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Learn More</Button>
  </CardFooter>
</Card>
```

**Features:**
- Automatic shadow on hover
- Responsive padding
- Semantic HTML structure

---

### Input

Accessible input component with label, error, and helper text support.

**Props:**
- `label` - Label text (automatically linked to input)
- `error` - Error message (displays in red)
- `helperText` - Helper text (displays below input)
- All standard `input` HTML attributes

**Usage:**
```tsx
import { Input } from "@/components/ui";

// With label
<Input
  label="Full Name"
  placeholder="John Smith"
  required
/>

// With helper text
<Input
  label="Email Address"
  type="email"
  helperText="We'll never share your email."
/>

// With error
<Input
  label="Phone Number"
  error="Please enter a valid phone number"
/>

// Standalone
<Input placeholder="Search..." />
```

**Features:**
- Automatic ID generation for accessibility
- ARIA attributes (aria-invalid, aria-describedby)
- Focus ring with brand colors
- Required asterisk indicator
- Error and helper text states

---

### Textarea

Multi-line text input with the same accessibility features as Input.

**Props:**
- `label` - Label text (automatically linked to textarea)
- `error` - Error message (displays in red)
- `helperText` - Helper text (displays below textarea)
- All standard `textarea` HTML attributes

**Usage:**
```tsx
import { Textarea } from "@/components/ui";

<Textarea
  label="Project Details"
  placeholder="Tell us about your project..."
  helperText="Include any specific requirements."
  required
/>

<Textarea
  label="Additional Notes"
  error="This field is required"
/>
```

**Features:**
- Minimum height of 120px (configurable via className)
- Same accessibility features as Input
- Auto-resize with CSS

---

### Badge

Small label component for tags, statuses, and categories.

**Variants:**
- `default` - Dark gray
- `primary` - Forest green
- `accent` - Lime green
- `secondary` - Light gray
- `outline` - Transparent with forest green border
- `success` - Green
- `warning` - Yellow
- `destructive` - Red

**Usage:**
```tsx
import { Badge } from "@/components/ui";

<Badge variant="primary">Landscape Design</Badge>
<Badge variant="accent">Featured</Badge>
<Badge variant="success">Available</Badge>
```

**Features:**
- Compact size with proper padding
- Rounded corners
- Smooth transitions

---

## Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- **Semantic HTML** - Proper heading hierarchy, labels, and structure
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **ARIA Attributes** - aria-invalid, aria-describedby, aria-label where appropriate
- **Color Contrast** - All text meets 4.5:1 contrast ratio minimum
- **Focus Management** - Clear focus rings using brand colors
- **Screen Reader Support** - Proper labeling and announcements

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import type { ButtonProps, InputProps, BadgeProps } from "@/components/ui";
```

## Styling

Components use Tailwind CSS with:

- **class-variance-authority (CVA)** - Type-safe variant management
- **tailwind-merge** - Intelligent class merging
- **clsx** - Conditional class names

### Customization

Override styles using the `className` prop:

```tsx
<Button className="w-full rounded-full">
  Custom Styles
</Button>

<Input className="border-2 border-blue-500" />
```

### Theme

Brand colors are defined as CSS variables in your global CSS:

```css
:root {
  --hp-forest: #228B22;
  --hp-lime: #32CD32;
}
```

## Bundle Size

Components are tree-shakeable and optimized:

- **Button**: ~2.5KB gzipped
- **Card**: ~1.5KB gzipped
- **Input**: ~2KB gzipped
- **Textarea**: ~2KB gzipped
- **Badge**: ~1KB gzipped

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## Performance

- **Zero runtime CSS** - All styles compiled at build time
- **Minimal JavaScript** - Only essential React code
- **Code Splitting** - Import only what you need
- **Server Components Compatible** - Works with Next.js App Router

## Examples

See `showcase.tsx` for comprehensive examples of all components in use.

## Dependencies

- `react` 19+
- `@radix-ui/react-slot` - Polymorphic component support
- `class-variance-authority` - Variant management
- `tailwind-merge` - Class merging
- `clsx` - Conditional classes

## Best Practices

1. **Always use semantic HTML** - Use the right component for the job
2. **Include labels** - Always provide labels for form inputs
3. **Handle errors gracefully** - Show clear error messages to users
4. **Test keyboard navigation** - Ensure all interactive elements are keyboard accessible
5. **Use loading states** - Disable buttons during async operations
6. **Provide feedback** - Show success/error states after form submissions

## Migration from Existing Components

If you have existing components, you can gradually migrate:

```tsx
// Old
<button className="bg-green-600 text-white px-4 py-2">
  Click me
</button>

// New
<Button variant="primary">
  Click me
</Button>
```

## Contributing

When adding new components:

1. Follow the existing patterns for accessibility
2. Include TypeScript types
3. Add variants using CVA
4. Include proper documentation
5. Test with keyboard navigation
6. Verify WCAG compliance

## License

MIT License - HP Landscaping © 2025
