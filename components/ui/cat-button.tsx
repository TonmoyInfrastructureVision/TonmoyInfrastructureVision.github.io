"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-mauve text-mantle hover:bg-mauve/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-red text-mantle hover:bg-red/90",
        outline: "border border-mauve/30 dark:border-mauve/20 bg-background hover:bg-accent/10 hover:border-accent",
        secondary: "bg-teal text-mantle hover:bg-teal/90",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        lavender: "bg-lavender text-mantle hover:bg-lavender/90",
        sapphire: "bg-sapphire text-mantle hover:bg-sapphire/90",
        sky: "bg-sky text-mantle hover:bg-sky/90",
        peach: "bg-peach text-mantle hover:bg-peach/90",
        green: "bg-green text-mantle hover:bg-green/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
      glow: {
        true: "shadow-cat-glow",
        false: "",
      },
      animated: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: false,
      animated: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const CatButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, animated, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    if (animated) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Comp
            className={cn(buttonVariants({ variant, size, glow, animated, className }))}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, glow, animated, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

CatButton.displayName = "CatButton";

export { CatButton, buttonVariants }; 