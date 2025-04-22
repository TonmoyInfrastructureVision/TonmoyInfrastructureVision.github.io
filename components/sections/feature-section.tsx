"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "@/components/motion";
import CatGradientText from "@/components/cat-gradient-text";
import { CatCard } from "@/components/ui/cat-card";

export default function FeatureSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-6 font-heading">
              Our Open-Source <CatGradientText variant="blue-sapphire">Philosophy</CatGradientText>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We believe in the power of community-driven innovation. Our repositories are
              crafted not just to solve problems, but to educate, empower, and evolve the
              tech ecosystem around us.
            </p>
            
            <ul className="space-y-4">
              {[
                "Community collaboration and knowledge sharing",
                "High-quality, well-documented code",
                "Focus on security and best practices",
                "Modular, reusable components",
                "Continuous improvement and evolution"
              ].map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-green flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <CatCard className="h-full w-full p-0 overflow-hidden" variant="glass" shadow="glow">
              <Image
                src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg"
                alt="Code collaboration"
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/70 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <CatGradientText variant="blue-sapphire" size="xl" className="mb-2">
                  GitHub Contributions
                </CatGradientText>
                <p className="text-sm opacity-90">
                  Explore our open-source projects on GitHub and become part of our
                  collaborative ecosystem.
                </p>
              </div>
            </CatCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}