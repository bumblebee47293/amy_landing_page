"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-medium tracking-[0.3px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-navy text-cream hover:bg-navy-light shadow-soft hover:shadow-soft-lg hover:-translate-y-[2px]",
      secondary:
        "bg-transparent text-navy border border-navy hover:bg-navy/[0.03] hover:shadow-soft hover:-translate-y-[2px]",
      outline:
        "bg-transparent text-navy border border-navy hover:bg-navy/[0.03] hover:border-navy/70",
      ghost:
        "text-navy hover:bg-navy/[0.03]",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-8 py-4 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
