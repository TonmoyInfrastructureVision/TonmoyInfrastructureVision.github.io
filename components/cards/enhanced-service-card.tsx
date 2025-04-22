"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EnhancedServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
  gradient?: string;
  className?: string;
}

export default function EnhancedServiceCard({ 
  icon, 
  title, 
  description, 
  link, 
  delay = 0,
  gradient = "from-blue-500/20 to-indigo-500/20 dark:from-blue-600/20 dark:to-indigo-600/20",
  className 
}: EnhancedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className={cn("group relative rounded-2xl overflow-hidden", className)}
    >
      {/* Background effects */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50 z-0`} />
      <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
      
      {/* Card content */}
      <div className="relative z-10 p-6 md:p-8 backdrop-blur-sm rounded-2xl glass h-full flex flex-col">
        {/* Icon with ring effect */}
        <div className="relative mb-5">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 backdrop-blur-sm text-primary">
            {icon}
          </div>
          <motion.div 
            className="absolute inset-0 rounded-xl border border-primary/50"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight mb-3 font-heading text-foreground">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground flex-grow mb-6">
          {description}
        </p>
        
        {/* Link */}
        <Link 
          href={link} 
          className="flex items-center font-medium text-primary hover:underline"
        >
          <span className="mr-2">Learn more</span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
} 