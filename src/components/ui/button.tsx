import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--hp-forest)] text-white shadow hover:bg-[var(--hp-forest)]/90 focus-visible:ring-[var(--hp-forest)]",
        secondary:
          "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:ring-slate-400",
        accent:
          "bg-[var(--hp-lime)] text-slate-900 shadow hover:bg-[var(--hp-lime)]/90 focus-visible:ring-[var(--hp-lime)]",
        outline:
          "border-2 border-[var(--hp-forest)] bg-transparent text-[var(--hp-forest)] shadow-sm hover:bg-[var(--hp-forest)] hover:text-white focus-visible:ring-[var(--hp-forest)]",
        ghost:
          "text-[var(--hp-forest)] hover:bg-[var(--hp-forest)]/10 focus-visible:ring-[var(--hp-forest)]",
        link: "text-[var(--hp-forest)] underline-offset-4 hover:underline",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:ring-red-600",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
