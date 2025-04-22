"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const badgeVariants = cva(
  "inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 border-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-secondary/20",
        destructive:
          "bg-red text-white hover:bg-red/80 border-red/20",
        outline:
          "text-foreground border-mauve/30 dark:border-mauve/20 bg-transparent hover:bg-accent/10",
        success:
          "bg-green text-white hover:bg-green/80 border-green/20",
        info:
          "bg-sapphire text-white hover:bg-sapphire/80 border-sapphire/20",
        warning:
          "bg-peach text-white hover:bg-peach/80 border-peach/20",
        mauve:
          "bg-mauve text-white hover:bg-mauve/80 border-mauve/20",
        lavender:
          "bg-lavender text-white hover:bg-lavender/80 border-lavender/20",
        teal:
          "bg-teal text-white hover:bg-teal/80 border-teal/20",
      },
      glow: {
        true: "shadow-cat-glow",
        false: "",
      },
      size: {
        default: "h-6 text-xs",
        sm: "h-5 text-[10px] px-1.5",
        lg: "h-7 text-sm px-3",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      glow: false,
      size: "default",
      pill: false,
      animated: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof badgeVariants>, "animated"> {
  animated?: boolean;
}

function CatBadge({
  className,
  variant,
  glow,
  size,
  pill,
  animated = false,
  ...props
}: BadgeProps) {
  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(badgeVariants({ variant, glow, size, pill, className }))}
        {...props}
      />
    );
  }
  
  return (
    <div
      className={cn(badgeVariants({ variant, glow, size, pill, className }))}
      {...props}
    />
  );
}

export { CatBadge, badgeVariants }; 