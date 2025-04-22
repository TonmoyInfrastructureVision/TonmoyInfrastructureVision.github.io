"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "@/components/motion";
import { CatButton } from "@/components/ui/cat-button";
import CatGradientText from "@/components/cat-gradient-text";

export default function CtaSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-mauve/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 font-heading">
            Ready to <CatGradientText variant="mauve-lavender" animate>Transform</CatGradientText> Your Infrastructure?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8">
            Let's collaborate to build robust, scalable, and secure technological foundations
            for your organization's future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CatButton asChild size="lg" variant="lavender" glow animated>
              <Link href="/contact">Get in Touch</Link>
            </CatButton>
            <CatButton asChild variant="outline" size="lg" animated>
              <Link href="/services">Explore Solutions</Link>
            </CatButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}