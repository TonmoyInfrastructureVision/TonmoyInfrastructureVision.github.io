"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "@/components/motion";
import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    title: "CloudOrchestrator",
    description: "Automated multi-cloud infrastructure deployment and management toolkit",
    tags: ["Cloud", "Infrastructure", "Automation"],
    image: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
    link: "/projects/cloud-orchestrator"
  },
  {
    title: "SecureShield",
    description: "Open-source security framework for vulnerability assessment and mitigation",
    tags: ["Security", "DevSecOps", "Compliance"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
    link: "/projects/secure-shield"
  },
  {
    title: "DevOpsAccelerator",
    description: "CI/CD pipeline generation and optimization tools for efficient DevOps workflows",
    tags: ["DevOps", "CI/CD", "Automation"],
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
    link: "/projects/devops-accelerator"
  }
];

export default function ProjectsShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <Badge variant="outline" className="mb-3">Our Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">
              Featured Open-Source Work
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Explore our innovative open-source projects that power modern infrastructure solutions.
            </p>
          </div>
          <Link href="https://github.com/TonmoyInfrastructureVision" className="mt-4 md:mt-0 inline-flex items-center text-primary hover:underline">
            <Github className="mr-2 h-4 w-4" /> Visit our GitHub
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-md border transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={project.link}>
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}