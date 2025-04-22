import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Server, Code, Cpu, Bot, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/sections/hero-section";
import ServiceCard from "@/components/cards/service-card";
import FeatureSection from "@/components/sections/feature-section";
import CtaSection from "@/components/sections/cta-section";
import ProjectsShowcase from "@/components/sections/projects-showcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3">Our Services</Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We engineer, secure, and streamline the future of infrastructure with cutting-edge tools and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Server className="h-10 w-10" />}
              title="Cloud Infrastructure"
              description="Build robust, scalable cloud architectures with automated deployment and management."
              link="/services#cloud-infrastructure"
            />
            <ServiceCard 
              icon={<Shield className="h-10 w-10" />}
              title="Cybersecurity"
              description="Comprehensive security solutions with red teaming, vulnerability assessment, and threat modeling."
              link="/services#cybersecurity"
            />
            <ServiceCard 
              icon={<Code className="h-10 w-10" />}
              title="DevOps & CI/CD"
              description="Streamline your development workflow with efficient CI/CD pipelines and DevOps best practices."
              link="/services#devops"
            />
            <ServiceCard 
              icon={<Bot className="h-10 w-10" />}
              title="AI-Powered Systems"
              description="Implement intelligent monitoring and automation using cutting-edge AI technologies."
              link="/services#ai-powered"
            />
            <ServiceCard 
              icon={<Cpu className="h-10 w-10" />}
              title="System Design"
              description="Architect high-performance systems with optimized design patterns and kernel-level tools."
              link="/services#system-design"
            />
            <ServiceCard 
              icon={<GitBranch className="h-10 w-10" />}
              title="Digital Infrastructure"
              description="Enterprise-grade digital infrastructure solutions for maximum efficiency and security."
              link="/services#digital-infrastructure"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Projects Showcase */}
      <ProjectsShowcase />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}