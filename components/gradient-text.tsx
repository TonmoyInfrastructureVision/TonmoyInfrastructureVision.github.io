"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  from?: string;
  to?: string;
  animate?: boolean;
}

export default function GradientText({
  children,
  className = "",
  from = "from-primary",
  to = "to-indigo-500",
  animate = false,
}: GradientTextProps) {
  const classes = cn(
    "inline-block font-bold bg-clip-text text-transparent bg-gradient-to-r",
    from,
    to,
    animate && "animate-gradient-x bg-[length:200%_auto]",
    className
  );

  return <span className={classes}>{children}</span>;
}

// Add gradient animation to global CSS in globals.css
// @keyframes gradient-x {
//   0% {
//     background-position: 0% center;
//   }
//   50% {
//     background-position: 100% center;
//   }
//   100% {
//     background-position: 0% center;
//   }
// }
// 
// .animate-gradient-x {
//   animation: gradient-x 5s ease infinite;
// } 