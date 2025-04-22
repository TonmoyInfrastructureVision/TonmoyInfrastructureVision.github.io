"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  once?: boolean;
  delay?: number;
}

export default function TextReveal({
  text,
  className = "",
  element = "p",
  once = true,
  delay = 0,
}: TextRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Element = motion[element];

  return (
    <Element
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1 whitespace-pre"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </Element>
  );
} 