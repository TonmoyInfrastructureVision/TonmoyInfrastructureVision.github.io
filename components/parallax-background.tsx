"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const [windowHeight, setWindowHeight] = useState(0);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.3]);
  const y2 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.2]);
  const y3 = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.1]);
  
  const opacity1 = useTransform(scrollY, [0, windowHeight * 0.5], [0.7, 0.3]);
  const opacity2 = useTransform(scrollY, [0, windowHeight * 0.5], [0.6, 0.3]);
  const opacity3 = useTransform(scrollY, [0, windowHeight * 0.5], [0.5, 0.25]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      
      <motion.div
        style={{ y: y1, opacity: opacity1 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute top-[10%] left-[20%] w-40 h-40 rounded-full bg-mauve/20 dark:bg-mauve/10 blur-[60px]" />
        <div className="absolute top-[40%] right-[10%] w-60 h-60 rounded-full bg-blue/20 dark:bg-blue/10 blur-[80px]" />
      </motion.div>
      
      <motion.div
        style={{ y: y2, opacity: opacity2 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute top-[30%] left-[60%] w-32 h-32 rounded-full bg-sapphire/20 dark:bg-sapphire/10 blur-[70px]" />
        <div className="absolute bottom-[20%] left-[10%] w-52 h-52 rounded-full bg-lavender/10 dark:bg-lavender/5 blur-[60px]" />
      </motion.div>
      
      <motion.div
        style={{ y: y3, opacity: opacity3 }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute top-[5%] right-[30%] w-24 h-24 rounded-full bg-teal/20 dark:bg-teal/10 blur-[50px]" />
        <div className="absolute bottom-[10%] right-[20%] w-44 h-44 rounded-full bg-sky/10 dark:bg-sky/5 blur-[80px]" />
      </motion.div>
      
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
    </div>
  );
} 