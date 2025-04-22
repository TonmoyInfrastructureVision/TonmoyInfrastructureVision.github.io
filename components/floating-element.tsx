"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  horizontal?: boolean;
}

export default function FloatingElement({
  children,
  className = "",
  delay = 0,
  duration = 4,
  offset = 10,
  horizontal = false,
}: FloatingElementProps) {
  const animationProps = horizontal
    ? {
        x: [-offset, offset, -offset],
        transition: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        },
      }
    : {
        y: [-offset, offset, -offset],
        transition: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: duration,
          ease: "easeInOut",
          delay: delay,
        },
      };

  return (
    <motion.div animate={animationProps} className={className}>
      {children}
    </motion.div>
  );
} 