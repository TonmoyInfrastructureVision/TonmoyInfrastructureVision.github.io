import Link from "next/link";
import { Shield, Server, Code, Cpu, Bot, GitBranch, ArrowRight } from "lucide-react";
import HeroSection from "@/components/sections/hero-section";
import FeatureSection from "@/components/sections/feature-section";
import CtaSection from "@/components/sections/cta-section";
import ProjectsShowcase from "@/components/sections/projects-showcase";
import TestimonialsSection from "@/components/sections/testimonials-section";
import BlogPreview from "@/components/sections/blog-preview";
import EnhancedServiceCard from "@/components/cards/enhanced-service-card";
import TextReveal from "@/components/text-reveal";
import GradientText from "@/components/gradient-text";
import FloatingElement from "@/components/floating-element";
import { CatButton } from "@/components/ui/cat-button";
import { CatBadge } from "@/components/ui/cat-badge";
import { 
  CatCard, 
  CatCardHeader, 
  CatCardTitle, 
  CatCardDescription, 
  CatCardContent,
  CatCardFooter
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <CatBadge variant="mauve" pill className="mb-3">Our Services</CatBadge>
            <TextReveal 
              element="h2" 
              text="What We Do"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-heading"
            />
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We engineer, secure, and streamline the future of infrastructure with cutting-edge tools and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EnhancedServiceCard 
              icon={<Server className="h-10 w-10" />}
              title="Cloud Infrastructure"
              description="Build robust, scalable cloud architectures with automated deployment and management."
              link="/services#cloud-infrastructure"
              gradient="from-blue-500/20 to-indigo-500/20 dark:from-blue-600/20 dark:to-indigo-600/20"
              delay={0.1}
            />
            <EnhancedServiceCard 
              icon={<Shield className="h-10 w-10" />}
              title="Cybersecurity"
              description="Comprehensive security solutions with red teaming, vulnerability assessment, and threat modeling."
              link="/services#cybersecurity"
              gradient="from-red-500/20 to-rose-500/20 dark:from-red-600/20 dark:to-rose-600/20"
              delay={0.2}
            />
            <EnhancedServiceCard 
              icon={<Code className="h-10 w-10" />}
              title="DevOps & CI/CD"
              description="Streamline your development workflow with efficient CI/CD pipelines and DevOps best practices."
              link="/services#devops"
              gradient="from-emerald-500/20 to-teal-500/20 dark:from-emerald-600/20 dark:to-teal-600/20"
              delay={0.3}
            />
            <EnhancedServiceCard 
              icon={<Bot className="h-10 w-10" />}
              title="AI-Powered Systems"
              description="Implement intelligent monitoring and automation using cutting-edge AI technologies."
              link="/services#ai-powered"
              gradient="from-purple-500/20 to-violet-500/20 dark:from-purple-600/20 dark:to-violet-600/20"
              delay={0.4}
            />
            <EnhancedServiceCard 
              icon={<Cpu className="h-10 w-10" />}
              title="System Design"
              description="Architect high-performance systems with optimized design patterns and kernel-level tools."
              link="/services#system-design"
              gradient="from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20"
              delay={0.5}
            />
            <EnhancedServiceCard 
              icon={<GitBranch className="h-10 w-10" />}
              title="Digital Infrastructure"
              description="Enterprise-grade digital infrastructure solutions for maximum efficiency and security."
              link="/services#digital-infrastructure"
              gradient="from-cyan-500/20 to-sky-500/20 dark:from-cyan-600/20 dark:to-sky-600/20"
              delay={0.6}
            />
          </div>
          
          <div className="text-center mt-12">
            <FloatingElement>
              <CatButton asChild size="lg" variant="lavender" glow animated className="group">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CatButton>
            </FloatingElement>
          </div>
        </div>
      </section>
      
      {/* Feature Section */}
      <FeatureSection />
      
      {/* Blog Preview */}
      <BlogPreview />
      
      {/* Projects Showcase */}
      <ProjectsShowcase />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-12">
            <CatBadge variant="mauve" pill className="mb-3">Interactive Dashboard</CatBadge>
            <TextReveal 
              element="h2" 
              text="Monitor Your Infrastructure in Real-Time"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-heading"
            />
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Get comprehensive analytics and insights with our powerful infrastructure monitoring dashboard.
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl mb-10 shadow-xl rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-mauve/30 to-blue/30 opacity-75 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90"></div>
            <div className="aspect-video bg-gradient-to-br from-mauve/80 to-lavender rounded-xl">
              <img 
                src="/images/dashboard-preview.jpg" 
                alt="Infrastructure Dashboard" 
                className="w-full h-full object-cover rounded-xl opacity-90 mix-blend-overlay"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <CatButton size="lg" variant="secondary" asChild glow className="glass backdrop-blur-md">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <CatGradientText variant="mauve-lavender" animate={true}>Explore the Dashboard</CatGradientText> <ArrowRight className="h-4 w-4" />
                </Link>
              </CatButton>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
            <CatCard variant="glass" shadow="md" className="md:w-1/3">
              <CatCardHeader>
                <CatCardTitle>Real-Time Monitoring</CatCardTitle>
              </CatCardHeader>
              <CatCardContent>
                <p>Track performance metrics and resource utilization with live updates and alerts.</p>
              </CatCardContent>
            </CatCard>
            <CatCard variant="glass" shadow="md" className="md:w-1/3">
              <CatCardHeader>
                <CatCardTitle>Security Analysis</CatCardTitle>
              </CatCardHeader>
              <CatCardContent>
                <p>Identify vulnerabilities and threats with comprehensive security scans and reports.</p>
              </CatCardContent>
            </CatCard>
            <CatCard variant="glass" shadow="md" className="md:w-1/3">
              <CatCardHeader>
                <CatCardTitle>Resource Optimization</CatCardTitle>
              </CatCardHeader>
              <CatCardContent>
                <p>Optimize costs and performance with intelligent resource allocation recommendations.</p>
              </CatCardContent>
            </CatCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}