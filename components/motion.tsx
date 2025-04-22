"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useRef, useEffect } from "react";

type MotionProps = {
  children: ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  viewport?: { once?: boolean; margin?: string };
  transition?: Record<string, any>;
  className?: string;
};

export const motion = {
  div: function MotionDiv({
    children,
    initial = {},
    animate = {},
    whileInView,
    viewport = { once: false },
    transition = { duration: 0.5 },
    className = "",
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLDivElement>) {
    const ref = useRef<HTMLDivElement>(null);
    const initialRef = useRef(initial);
    
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      let observer: IntersectionObserver | null = null;
      
      // Apply initial styles
      Object.entries(initialRef.current).forEach(([key, value]) => {
        if (key === "opacity") {
          el.style.opacity = String(value);
        } else if (key === "x" || key === "y") {
          el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
        }
      });
      
      // If using whileInView
      if (whileInView) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Apply animation
                el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
                
                setTimeout(() => {
                  Object.entries(whileInView).forEach(([key, value]) => {
                    if (key === "opacity") {
                      el.style.opacity = String(value);
                    } else if (key === "x" || key === "y") {
                      el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
                    }
                  });
                }, 50);
                
                if (viewport.once) observer?.disconnect();
              }
            });
          },
          { 
            threshold: 0.1,
            rootMargin: viewport.margin || "0px" 
          }
        );
        
        observer.observe(el);
      } else if (animate) {
        // Apply animation without intersection
        el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
        
        setTimeout(() => {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === "opacity") {
              el.style.opacity = String(value);
            } else if (key === "x" || key === "y") {
              el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
            }
          });
        }, 50);
      }
      
      return () => {
        if (observer) observer.disconnect();
      };
    }, [animate, whileInView, viewport, transition]);
    
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  },
  
  // Add more components as needed (p, section, etc.)
  p: function MotionP({
    children,
    initial = {},
    animate = {},
    whileInView,
    viewport = { once: false },
    transition = { duration: 0.5 },
    className = "",
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLParagraphElement>) {
    const ref = useRef<HTMLParagraphElement>(null);
    const initialRef = useRef(initial);
    
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      let observer: IntersectionObserver | null = null;
      
      // Apply initial styles
      Object.entries(initialRef.current).forEach(([key, value]) => {
        if (key === "opacity") {
          el.style.opacity = String(value);
        } else if (key === "x" || key === "y") {
          el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
        }
      });
      
      // If using whileInView
      if (whileInView) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Apply animation
                el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
                
                setTimeout(() => {
                  Object.entries(whileInView).forEach(([key, value]) => {
                    if (key === "opacity") {
                      el.style.opacity = String(value);
                    } else if (key === "x" || key === "y") {
                      el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
                    }
                  });
                }, 50);
                
                if (viewport.once) observer?.disconnect();
              }
            });
          },
          { 
            threshold: 0.1,
            rootMargin: viewport.margin || "0px" 
          }
        );
        
        observer.observe(el);
      } else if (animate) {
        // Apply animation without intersection
        el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
        
        setTimeout(() => {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === "opacity") {
              el.style.opacity = String(value);
            } else if (key === "x" || key === "y") {
              el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
            }
          });
        }, 50);
      }
      
      return () => {
        if (observer) observer.disconnect();
      };
    }, [animate, whileInView, viewport, transition]);
    
    return (
      <p ref={ref} className={cn(className)} {...props}>
        {children}
      </p>
    );
  },
  
  li: function MotionLi({
    children,
    initial = {},
    animate = {},
    whileInView,
    viewport = { once: false },
    transition = { duration: 0.5 },
    className = "",
    ...props
  }: MotionProps & React.HTMLAttributes<HTMLLIElement>) {
    const ref = useRef<HTMLLIElement>(null);
    const initialRef = useRef(initial);
    
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      
      let observer: IntersectionObserver | null = null;
      
      // Apply initial styles
      Object.entries(initialRef.current).forEach(([key, value]) => {
        if (key === "opacity") {
          el.style.opacity = String(value);
        } else if (key === "x" || key === "y") {
          el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
        }
      });
      
      // If using whileInView
      if (whileInView) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Apply animation
                el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
                
                setTimeout(() => {
                  Object.entries(whileInView).forEach(([key, value]) => {
                    if (key === "opacity") {
                      el.style.opacity = String(value);
                    } else if (key === "x" || key === "y") {
                      el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
                    }
                  });
                }, 50);
                
                if (viewport.once) observer?.disconnect();
              }
            });
          },
          { 
            threshold: 0.1,
            rootMargin: viewport.margin || "0px" 
          }
        );
        
        observer.observe(el);
      } else if (animate) {
        // Apply animation without intersection
        el.style.transition = `transform ${transition.duration}s, opacity ${transition.duration}s`;
        
        setTimeout(() => {
          Object.entries(animate).forEach(([key, value]) => {
            if (key === "opacity") {
              el.style.opacity = String(value);
            } else if (key === "x" || key === "y") {
              el.style.transform = `translate${key.toUpperCase()}(${value}px)`;
            }
          });
        }, 50);
      }
      
      return () => {
        if (observer) observer.disconnect();
      };
    }, [animate, whileInView, viewport, transition]);
    
    return (
      <li ref={ref} className={cn(className)} {...props}>
        {children}
      </li>
    );
  }
};