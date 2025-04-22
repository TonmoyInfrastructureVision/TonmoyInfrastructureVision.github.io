"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  color?: "mauve" | "blue" | "green" | "peach" | "red" | "teal" | "lavender";
  mixBlend?: boolean;
  trailEffect?: boolean;
}

export default function CustomCursor({
  color = "lavender",
  mixBlend = true,
  trailEffect = false,
}: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([]);

  // Color map for cursor
  const colorMap = {
    mauve: "bg-mauve",
    blue: "bg-blue",
    green: "bg-green",
    peach: "bg-peach",
    red: "bg-red", 
    teal: "bg-teal",
    lavender: "bg-lavender"
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (trailEffect) {
        setTrail(prev => {
          // Keep only last 5 positions for trail effect
          const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
          if (newTrail.length > 5) {
            return newTrail.slice(1);
          }
          return newTrail;
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "A" ||
         e.target.tagName === "BUTTON" ||
         e.target.closest("a") ||
         e.target.closest("button") ||
         e.target.getAttribute("role") === "button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [trailEffect]);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {trailEffect && trail.map((position, index) => (
        <motion.div
          key={index}
          className={`fixed w-3 h-3 rounded-full pointer-events-none z-[99] ${colorMap[color]} opacity-30 hidden md:block`}
          style={{
            x: position.x - 6,
            y: position.y - 6,
          }}
          animate={{
            opacity: 0,
            scale: 0.5,
          }}
          transition={{
            duration: 0.5,
          }}
        />
      ))}
      
      <motion.div
        className={`fixed w-6 h-6 rounded-full pointer-events-none z-[100] ${mixBlend ? 'mix-blend-difference bg-white' : colorMap[color]} hidden md:block`}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2 : 1,
          opacity: 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 500, damping: 28 },
          y: { type: "spring", stiffness: 500, damping: 28 },
          scale: { duration: 0.15 },
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
        
        a, button, [role="button"] {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          a, button, [role="button"] {
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
} 