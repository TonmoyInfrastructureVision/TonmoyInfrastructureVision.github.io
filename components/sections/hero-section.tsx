"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Server, Shield, Cpu, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { CatButton } from "@/components/ui/cat-button";
import CatGradientText from "@/components/cat-gradient-text";
import FloatingElement from "@/components/floating-element";
import TextReveal from "@/components/text-reveal";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen"></div>;
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-40 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-mauve/40 to-lavender/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute top-1/3 right-1/4 w-[25rem] h-[25rem] bg-gradient-to-tr from-blue/30 to-sapphire/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute bottom-1/4 right-1/3 w-[28rem] h-[28rem] bg-gradient-to-bl from-teal/20 to-green/20 rounded-full blur-3xl"
        />
      </div>

      {/* Animated mesh grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03] z-1"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-muted shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">Infrastructure for the AI Era</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading leading-tight">
              Innovating{" "}
              <CatGradientText variant="blue-sapphire" animate className="relative">
                Tomorrow's&nbsp;Foundations
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue animate-pulse"></span>
              </CatGradientText>{" "}
              <br className="hidden md:inline" />—&nbsp;Today
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextReveal
              element="p"
              text="We architect the backbone of tomorrow's technological ecosystems—from robust DevOps pipelines to scalable cloud infrastructure and comprehensive security solutions."
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <CatButton asChild size="lg" variant="sapphire" glow animated className="h-14 px-8 text-lg">
              <Link href="/services" className="group">
                Explore Services <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CatButton>
            <CatButton asChild variant="outline" size="lg" animated className="h-14 px-8 text-lg">
              <Link href="/contact" className="group">
                Contact Us <ExternalLink className="ml-2 h-4 w-4 transition-opacity opacity-70 group-hover:opacity-100" />
              </Link>
            </CatButton>
          </motion.div>
        </div>
        
        {/* Enhanced floating icons with glowing effect */}
        <div className="relative h-[26rem] mx-auto max-w-4xl mt-12">
          {/* Center circle with pulsing animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-background/80 backdrop-blur-md border border-mauve/30 flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 rounded-full border-2 border-dashed border-blue/40 absolute"
                />
                <img src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue/20 animate-pulse-ring"></div>
            </div>
          </motion.div>

          <FloatingElement offset={5}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 80 
              }}
              className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="glass p-6 rounded-xl shadow-lg border border-blue/20 backdrop-blur-md relative group">
                <Server className="h-10 w-10 text-blue" />
                <div className="absolute inset-0 rounded-xl bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-blue/30 to-sapphire/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
            </motion.div>
          </FloatingElement>
          
          <FloatingElement offset={6}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                type: "spring",
                stiffness: 80 
              }}
              className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"
            >
              <div className="glass p-6 rounded-xl shadow-lg border border-teal/20 backdrop-blur-md relative group">
                <Shield className="h-10 w-10 text-teal" />
                <div className="absolute inset-0 rounded-xl bg-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-teal/30 to-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
            </motion.div>
          </FloatingElement>
          
          <FloatingElement offset={5}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.9,
                type: "spring",
                stiffness: 80 
              }}
              className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
            >
              <div className="glass p-6 rounded-xl shadow-lg border border-peach/20 backdrop-blur-md relative group">
                <Code className="h-10 w-10 text-peach" />
                <div className="absolute inset-0 rounded-xl bg-peach/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-peach/30 to-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
            </motion.div>
          </FloatingElement>
          
          <FloatingElement offset={7}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.1,
                type: "spring",
                stiffness: 80 
              }}
              className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2"
            >
              <div className="glass p-6 rounded-xl shadow-lg border border-mauve/20 backdrop-blur-md relative group">
                <Cpu className="h-10 w-10 text-mauve" />
                <div className="absolute inset-0 rounded-xl bg-mauve/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-mauve/30 to-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
            </motion.div>
          </FloatingElement>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-20" viewBox="0 0 500 400">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 1.5 }}
              d="M125 100 L250 200 L375 100" 
              stroke="url(#blue-gradient)" 
              strokeWidth="1.5" 
              fill="none" 
              strokeDasharray="5,5"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: 1.8 }}
              d="M375 300 L250 200 L125 300" 
              stroke="url(#mauve-gradient)" 
              strokeWidth="1.5" 
              fill="none" 
              strokeDasharray="5,5"
            />
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#89b4fa" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#74c7ec" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="mauve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cba6f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#b4befe" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs text-muted-foreground mb-2">Scroll to discover</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 rounded-full border border-border flex items-center justify-center"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}