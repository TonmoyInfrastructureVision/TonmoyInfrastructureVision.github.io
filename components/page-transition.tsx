"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={isFirstMount ? "enter" : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 0.3
        }}
        className="w-full h-full"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
} 