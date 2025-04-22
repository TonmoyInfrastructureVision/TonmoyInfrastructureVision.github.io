"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code, Server, Shield, Cpu } from "lucide-react";
import { motion } from "@/components/motion";

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Innovating{" "}
              <span className="text-primary">Tomorrow's&nbsp;Foundations</span>{" "}
              <br className="hidden md:inline" />—&nbsp;Today
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            We build the backbone of modern technological ecosystems—from robust DevOps
            pipelines to scalable cloud infrastructure and comprehensive security solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Floating icons */}
        <div className="relative h-64 md:h-80 mx-auto max-w-4xl mt-8">
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
            <div className="bg-card p-4 rounded-xl shadow-lg border">
              <Server className="h-8 w-8 text-blue-500" />
            </div>
          </motion.div>
          
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
            <div className="bg-card p-4 rounded-xl shadow-lg border">
              <Shield className="h-8 w-8 text-teal-500" />
            </div>
          </motion.div>
          
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
            <div className="bg-card p-4 rounded-xl shadow-lg border">
              <Code className="h-8 w-8 text-orange-500" />
            </div>
          </motion.div>
          
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
            <div className="bg-card p-4 rounded-xl shadow-lg border">
              <Cpu className="h-8 w-8 text-purple-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}