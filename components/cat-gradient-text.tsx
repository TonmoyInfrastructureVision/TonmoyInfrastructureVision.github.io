"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type GradientVariant = 
  | "mauve-lavender" 
  | "blue-sapphire" 
  | "red-maroon" 
  | "peach-yellow" 
  | "green-teal"
  | "custom";

interface CatGradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: GradientVariant;
  from?: string;
  to?: string;
  animate?: boolean;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  animated?: boolean;
}

export default function CatGradientText({
  children,
  className = "",
  variant = "mauve-lavender",
  from,
  to,
  animate = false,
  weight = "bold",
  size = "base",
  animated = false,
}: CatGradientTextProps) {
  const gradients = {
    "mauve-lavender": "from-mauve to-lavender",
    "blue-sapphire": "from-blue to-sapphire",
    "red-maroon": "from-red to-maroon",
    "peach-yellow": "from-peach to-yellow",
    "green-teal": "from-green to-teal",
    "custom": `${from} ${to}`,
  };

  const fontWeights = {
    "light": "font-light",
    "normal": "font-normal",
    "medium": "font-medium",
    "semibold": "font-semibold",
    "bold": "font-bold",
  };

  const fontSizes = {
    "xs": "text-xs",
    "sm": "text-sm",
    "base": "text-base",
    "lg": "text-lg",
    "xl": "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const classes = cn(
    "inline-block bg-clip-text text-transparent bg-gradient-to-r",
    gradients[variant],
    fontWeights[weight],
    fontSizes[size],
    animate && "animate-gradient-x bg-[length:200%_auto]",
    className
  );

  if (animated) {
    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={classes}
      >
        {children}
      </motion.span>
    );
  }

  return <span className={classes}>{children}</span>;
} 