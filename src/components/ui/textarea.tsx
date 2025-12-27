import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || `textarea-${React.useId()}`;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperTextId = helperText ? `${textareaId}-helper` : undefined;

    const textarea = (
      <textarea
        id={textareaId}
        className={cn(
          "flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hp-forest)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          error &&
            "border-red-500 focus-visible:ring-red-500 focus-visible:ring-offset-0",
          className
        )}
        ref={ref}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={cn(errorId, helperTextId)}
        {...props}
      />
    );

    if (!label && !error && !helperText) {
      return textarea;
    }

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-slate-900"
          >
            {label}
            {props.required && (
              <span className="ml-1 text-red-500" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        {textarea}
        {error && (
          <p id={errorId} className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperTextId} className="text-sm text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
