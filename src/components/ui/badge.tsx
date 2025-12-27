import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-white hover:bg-slate-800",
        primary:
          "border-transparent bg-[var(--hp-forest)] text-white hover:bg-[var(--hp-forest)]/90",
        accent:
          "border-transparent bg-[var(--hp-lime)] text-slate-900 hover:bg-[var(--hp-lime)]/90",
        secondary:
          "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
        outline: "border-[var(--hp-forest)] text-[var(--hp-forest)]",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning:
          "border-transparent bg-yellow-500 text-slate-900 hover:bg-yellow-600",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
