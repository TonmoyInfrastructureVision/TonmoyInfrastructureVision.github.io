"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const cardVariants = cva(
  "rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-surface0/40 dark:bg-surface0/60",
        solid: "bg-surface0 dark:bg-surface0",
        glass: "glass",
        bordered: "border dark:border-mauve/20 border-lavender/10 bg-surface0/20 dark:bg-surface0/40",
        colored: "",
      },
      shadow: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        glow: "shadow-cat-glow",
      },
      color: {
        mauve: "bg-gradient-to-br from-mauve/20 to-lavender/20 dark:from-mauve/10 dark:to-lavender/10",
        blue: "bg-gradient-to-br from-blue/20 to-sapphire/20 dark:from-blue/10 dark:to-sapphire/10",
        green: "bg-gradient-to-br from-green/20 to-teal/20 dark:from-green/10 dark:to-teal/10",
        peach: "bg-gradient-to-br from-peach/20 to-yellow/20 dark:from-peach/10 dark:to-yellow/10",
        red: "bg-gradient-to-br from-red/20 to-maroon/20 dark:from-red/10 dark:to-maroon/10",
      },
      hover: {
        true: "hover:shadow-cat-glow hover:-translate-y-1",
        false: "",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      shadow: "md",
      hover: false,
      animated: false,
    },
    compoundVariants: [
      {
        variant: "colored",
        className: "border-none",
      },
    ],
  }
);

export interface CatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const CatCard = React.forwardRef<HTMLDivElement, CatCardProps>(
  ({ className, variant, shadow, color, hover, animated, ...props }, ref) => {
    if (animated) {
      return (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={hover ? { y: -8 } : {}}
          className={cn(cardVariants({ variant, shadow, color, hover, animated, className }))}
          {...props}
        />
      );
    }
    
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, shadow, color, hover, animated, className }))}
        {...props}
      />
    );
  }
);
CatCard.displayName = "CatCard";

const CatCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CatCardHeader.displayName = "CatCardHeader";

const CatCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold tracking-tight font-heading", className)}
    {...props}
  />
));
CatCardTitle.displayName = "CatCardTitle";

const CatCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CatCardDescription.displayName = "CatCardDescription";

const CatCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CatCardContent.displayName = "CatCardContent";

const CatCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CatCardFooter.displayName = "CatCardFooter";

export {
  CatCard,
  CatCardHeader,
  CatCardFooter,
  CatCardTitle,
  CatCardDescription,
  CatCardContent,
  cardVariants,
}; 