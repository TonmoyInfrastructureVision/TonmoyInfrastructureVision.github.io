"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Server, Shield, Cpu } from "lucide-react";
import { motion } from "@/components/motion";
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] overflow-hidden z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mauve/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading">
              Innovating{" "}
              <CatGradientText variant="blue-sapphire" animate>Tomorrow's&nbsp;Foundations</CatGradientText>{" "}
              <br className="hidden md:inline" />—&nbsp;Today
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextReveal
              element="p"
              text="We build the backbone of modern technological ecosystems—from robust DevOps pipelines to scalable cloud infrastructure and comprehensive security solutions."
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CatButton asChild size="lg" variant="sapphire" glow animated>
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CatButton>
            <CatButton asChild variant="outline" size="lg" animated>
              <Link href="/contact">Contact Us</Link>
            </CatButton>
          </motion.div>
        </div>
        
        {/* Floating icons */}
        <div className="relative h-64 md:h-80 mx-auto max-w-4xl mt-8">
          <FloatingElement offset={4}>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              className="absolute left-1/4 top-0 transform -translate-x-1/2"
            >
              <div className="glass p-4 rounded-xl shadow-lg border border-blue/20">
                <Server className="h-8 w-8 text-blue" />
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
                stiffness: 100 
              }}
              className="absolute top-1/3 left-3/4 transform -translate-x-1/2"
            >
              <div className="glass p-4 rounded-xl shadow-lg border border-teal/20">
                <Shield className="h-8 w-8 text-teal" />
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
                stiffness: 100 
              }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            >
              <div className="glass p-4 rounded-xl shadow-lg border border-peach/20">
                <Code className="h-8 w-8 text-peach" />
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
                stiffness: 100 
              }}
              className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2"
            >
              <div className="glass p-4 rounded-xl shadow-lg border border-mauve/20">
                <Cpu className="h-8 w-8 text-mauve" />
              </div>
            </motion.div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}