# UI Component API Reference

Complete TypeScript API documentation for all HP Landscaping UI components.

## Button

### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "default" | "lg" | "xl" | "icon";
  asChild?: boolean;
}
```

### Variant Details

| Variant | Background | Text Color | Use Case |
|---------|-----------|------------|----------|
| `primary` | Forest Green (#228B22) | White | Main CTAs, primary actions |
| `accent` | Lime (#32CD32) | Slate-900 | Highlighted actions, promotions |
| `secondary` | Slate-100 | Slate-900 | Secondary actions |
| `outline` | Transparent | Forest Green | Alternative actions, filters |
| `ghost` | Transparent | Forest Green | Tertiary actions, navigation |
| `link` | Transparent | Forest Green | Text links |
| `destructive` | Red-600 | White | Delete, remove actions |

### Size Details

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `sm` | 36px | 12px | 12px | Compact spaces, inline actions |
| `default` | 44px | 24px | 14px | Standard buttons |
| `lg` | 48px | 32px | 16px | Primary CTAs |
| `xl` | 56px | 40px | 18px | Hero sections, emphasis |
| `icon` | 40px | - | - | Icon-only buttons |

### Examples

```typescript
// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="accent" size="lg">Get Started</Button>

// As link using asChild
<Button asChild>
  <Link href="/contact">Contact Us</Link>
</Button>

// With icon
<Button variant="primary">
  <Mail className="mr-2 h-4 w-4" />
  Send Email
</Button>

// Disabled state
<Button disabled>Processing...</Button>

// Icon only
<Button variant="primary" size="icon">
  <Search />
</Button>
```

---

## Card

### Components

```typescript
Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>
CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>
CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement>>
CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement>>
CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>
CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement>>
```

### Default Styling

| Component | Default Classes |
|-----------|----------------|
| `Card` | `rounded-lg border border-slate-200 bg-white shadow-sm` |
| `CardHeader` | `flex flex-col space-y-1.5 p-6` |
| `CardTitle` | `text-2xl font-bold leading-none tracking-tight text-slate-900` |
| `CardDescription` | `text-sm text-slate-600` |
| `CardContent` | `p-6 pt-0` |
| `CardFooter` | `flex items-center p-6 pt-0` |

### Examples

```typescript
// Complete card
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Minimal card
<Card>
  <CardContent className="p-6">
    Simple content
  </CardContent>
</Card>

// Custom styling
<Card className="border-2 border-[var(--hp-lime)]">
  <CardHeader className="bg-slate-50">
    <CardTitle className="text-3xl">Large Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

---

## Input

### Props

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
```

### Prop Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above input |
| `error` | `string` | - | Error message (red text, changes border color) |
| `helperText` | `string` | - | Helper text below input (gray text) |
| `required` | `boolean` | `false` | Shows red asterisk next to label |
| `disabled` | `boolean` | `false` | Disables input with opacity |

### States

| State | Border | Ring | Text |
|-------|--------|------|------|
| Default | `border-slate-300` | - | `text-slate-900` |
| Focus | `border-slate-300` | `ring-2 ring-[var(--hp-forest)]` | `text-slate-900` |
| Error | `border-red-500` | `ring-2 ring-red-500` | `text-slate-900` |
| Disabled | `border-slate-300` | - | `text-slate-900` (opacity-50) |

### Examples

```typescript
// Basic input
<Input placeholder="Enter text..." />

// With label
<Input label="Full Name" placeholder="John Smith" />

// Required field
<Input label="Email" type="email" required />

// With helper text
<Input
  label="Password"
  type="password"
  helperText="Must be at least 8 characters"
/>

// With error
<Input
  label="Email"
  type="email"
  value={email}
  error="Please enter a valid email address"
/>

// Disabled
<Input label="Account Type" value="Premium" disabled />

// Custom validation
const [error, setError] = useState("");

<Input
  label="Phone"
  type="tel"
  error={error}
  onChange={(e) => {
    setError("");
    validatePhone(e.target.value);
  }}
/>
```

### Accessibility Features

- Automatic ID generation for label association
- `aria-invalid="true"` when error is present
- `aria-describedby` links to error/helper text
- `aria-label="required"` for asterisk
- Proper keyboard navigation
- Screen reader announcements for errors

---

## Textarea

### Props

```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}
```

### Prop Details

Same as Input component. All props and behaviors are identical except:

| Difference | Input | Textarea |
|------------|-------|----------|
| Default height | 44px | 120px |
| Element | `<input>` | `<textarea>` |
| Rows | - | Adjustable via `rows` prop |

### Examples

```typescript
// Basic
<Textarea placeholder="Enter your message..." />

// With label and helper text
<Textarea
  label="Project Details"
  placeholder="Describe your project..."
  helperText="Please include property size and timeline"
/>

// With error
<Textarea
  label="Comments"
  error="This field is required"
  value={comments}
/>

// Custom height
<Textarea
  label="Description"
  className="min-h-[200px]"
  rows={8}
/>

// Character counter example
const [text, setText] = useState("");
const maxLength = 500;

<Textarea
  label="Message"
  value={text}
  onChange={(e) => setText(e.target.value)}
  helperText={`${text.length}/${maxLength} characters`}
  maxLength={maxLength}
/>
```

---

## Badge

### Props

```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "accent" | "secondary" | "outline" | "success" | "warning" | "destructive";
}
```

### Variant Details

| Variant | Background | Text Color | Border | Use Case |
|---------|-----------|------------|--------|----------|
| `default` | Slate-900 | White | Transparent | General tags |
| `primary` | Forest Green | White | Transparent | Service categories |
| `accent` | Lime | Slate-900 | Transparent | Featured items, new |
| `secondary` | Slate-100 | Slate-900 | Transparent | Secondary tags |
| `outline` | Transparent | Forest Green | Forest Green | Filters, selections |
| `success` | Green-500 | White | Transparent | Success states |
| `warning` | Yellow-500 | Slate-900 | Transparent | Warnings, pending |
| `destructive` | Red-500 | White | Transparent | Errors, deletions |

### Examples

```typescript
// Basic
<Badge>Default</Badge>

// Service tags
<Badge variant="primary">Landscape Design</Badge>
<Badge variant="primary">Irrigation</Badge>

// Status indicators
<Badge variant="success">Available</Badge>
<Badge variant="warning">Limited Availability</Badge>
<Badge variant="destructive">Sold Out</Badge>

// Featured marker
<Badge variant="accent">New Service</Badge>

// Interactive badges (with click handler)
<button onClick={() => toggleFilter("design")}>
  <Badge variant={isSelected ? "primary" : "outline"}>
    Landscape Design
  </Badge>
</button>

// With icon
<Badge variant="primary">
  <Star className="mr-1 h-3 w-3" />
  Featured
</Badge>

// Custom styling
<Badge className="text-base px-4 py-1">
  Large Badge
</Badge>
```

---

## TypeScript Usage

### Import Types

```typescript
import type { ButtonProps } from "@/components/ui/button";
import type { InputProps } from "@/components/ui/input";
import type { TextareaProps } from "@/components/ui/textarea";
import type { BadgeProps } from "@/components/ui/badge";
```

### Extend Components

```typescript
// Custom button component
interface PrimaryButtonProps extends ButtonProps {
  loading?: boolean;
}

export function PrimaryButton({ loading, children, ...props }: PrimaryButtonProps) {
  return (
    <Button variant="primary" disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}

// Custom input with validation
interface ValidatedInputProps extends InputProps {
  validationRules?: Record<string, (value: string) => string | undefined>;
}

export function ValidatedInput({ validationRules, ...props }: ValidatedInputProps) {
  const [error, setError] = useState<string>("");

  const handleValidation = (value: string) => {
    if (!validationRules) return;

    for (const [rule, validator] of Object.entries(validationRules)) {
      const errorMessage = validator(value);
      if (errorMessage) {
        setError(errorMessage);
        return;
      }
    }
    setError("");
  };

  return (
    <Input
      {...props}
      error={error}
      onChange={(e) => {
        handleValidation(e.target.value);
        props.onChange?.(e);
      }}
    />
  );
}
```

### Type-Safe Variants

```typescript
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

const variants: ButtonVariant[] = ["primary", "accent", "outline"];

// Type-safe dynamic buttons
{variants.map((variant) => (
  <Button key={variant} variant={variant}>
    {variant}
  </Button>
))}
```

---

## Form Integration Examples

### React Hook Form

```typescript
import { useForm } from "react-hook-form";
import { Input, Textarea, Button } from "@/components/ui";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactFormWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Submit logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register("name", { required: "Name is required" })}
        label="Name"
        error={errors.name?.message}
      />

      <Input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          }
        })}
        label="Email"
        type="email"
        error={errors.email?.message}
      />

      <Textarea
        {...register("message", {
          required: "Message is required",
          minLength: { value: 10, message: "Message too short" }
        })}
        label="Message"
        error={errors.message?.message}
      />

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
```

### Zod Validation

```typescript
import { z } from "zod";
import { useState } from "react";
import { Input, Button } from "@/components/ui";

const emailSchema = z.string().email("Invalid email address");

export function EmailInput() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const result = emailSchema.safeParse(value);
    setError(result.success ? "" : result.error.errors[0].message);
  };

  return (
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={handleChange}
      error={error}
    />
  );
}
```

---

## Performance Optimization

### Code Splitting

```typescript
// Lazy load showcase
import dynamic from 'next/dynamic';

const UIShowcase = dynamic(() => import('@/components/ui/showcase'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### Memoization

```typescript
import { memo } from 'react';
import { Button } from '@/components/ui';

const MemoizedButton = memo(Button);

// Only re-renders when props actually change
<MemoizedButton variant="primary" onClick={handleClick}>
  Click me
</MemoizedButton>
```

---

## Testing

### Jest + React Testing Library

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, Input } from '@/components/ui';

describe('Button', () => {
  it('renders with correct variant', () => {
    render(<Button variant="primary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-[var(--hp-forest)]');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Input', () => {
  it('shows error message', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
  });

  it('links label to input', () => {
    render(<Input label="Name" />);
    const input = screen.getByLabelText('Name');
    expect(input).toBeInTheDocument();
  });
});
```
