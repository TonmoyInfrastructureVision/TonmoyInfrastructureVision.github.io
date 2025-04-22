"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LoadingVariant = 
  | "dots" 
  | "spinner" 
  | "pulse" 
  | "gradient" 
  | "bouncing";

type LoadingColor = 
  | "mauve" 
  | "blue" 
  | "green" 
  | "peach" 
  | "red" 
  | "teal" 
  | "lavender" 
  | "sapphire"
  | "pink";

interface CatLoadingProps {
  variant?: LoadingVariant;
  color?: LoadingColor;
  size?: "sm" | "md" | "lg" | "xl";
  text?: string;
  className?: string;
}

export default function CatLoading({
  variant = "dots",
  color = "lavender",
  size = "md",
  text,
  className,
}: CatLoadingProps) {
  // Size classes
  const sizes = {
    sm: "w-5 h-5",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  // Color classes
  const colors = {
    mauve: "bg-mauve",
    blue: "bg-blue",
    green: "bg-green",
    peach: "bg-peach",
    red: "bg-red",
    teal: "bg-teal",
    lavender: "bg-lavender",
    sapphire: "bg-sapphire",
    pink: "bg-pink",
  };

  // Dot size based on the overall size
  const dotSizes = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3",
    xl: "w-4 h-4",
  };

  // Gradient backgrounds
  const gradients = {
    mauve: "from-mauve to-lavender",
    blue: "from-blue to-sapphire",
    green: "from-green to-teal",
    peach: "from-peach to-yellow",
    red: "from-red to-maroon",
    teal: "from-teal to-sky",
    lavender: "from-lavender to-mauve",
    sapphire: "from-sapphire to-blue",
    pink: "from-pink to-mauve",
  };

  // Render loading variants
  const renderLoadingIndicator = () => {
    switch (variant) {
      case "dots":
        return (
          <div className={cn("flex space-x-2 justify-center", className)}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className={cn(
                  "rounded-full",
                  colors[color],
                  dotSizes[size]
                )}
                initial={{ y: 0, opacity: 0.5 }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      case "spinner":
        return (
          <div className={cn("relative", sizes[size], className)}>
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full border-t-2 border-b-2",
                `border-${color}`
              )}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className={cn(
                "absolute inset-1 rounded-full border-r-2 border-l-2",
                `border-${color}`
              )}
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        );

      case "pulse":
        return (
          <div className={cn("relative", sizes[size], className)}>
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full",
                colors[color],
                "opacity-75"
              )}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className={cn(
              "absolute inset-[25%] rounded-full",
              colors[color]
            )} />
          </div>
        );

      case "gradient":
        return (
          <div className={cn("relative", sizes[size], className)}>
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-r",
                gradients[color]
              )}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="absolute inset-[15%] rounded-full bg-background" />
          </div>
        );

      case "bouncing":
        return (
          <div className={cn("flex space-x-2 justify-center", className)}>
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={cn(
                  "rounded-full",
                  colors[color],
                  dotSizes[size]
                )}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      {renderLoadingIndicator()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mt-3 text-center"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
} 