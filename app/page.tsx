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
      <section id="services" className="py-24 bg-muted/20 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-20 dark:opacity-15"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-mauve/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <CatBadge variant="mauve" pill className="mb-4">Our Services</CatBadge>
            <TextReveal 
              element="h2" 
              text="What We Do"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
            />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              We engineer, secure, and streamline the future of infrastructure with cutting-edge tools and frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <EnhancedServiceCard 
              icon={<Server className="h-12 w-12" />}
              title="Cloud Infrastructure"
              description="Build robust, scalable cloud architectures with automated deployment and management systems designed for the AI era."
              link="/services#cloud-infrastructure"
              gradient="from-blue-500/20 to-indigo-500/20 dark:from-blue-600/20 dark:to-indigo-600/20"
              delay={0.1}
            />
            <EnhancedServiceCard 
              icon={<Shield className="h-12 w-12" />}
              title="Cybersecurity"
              description="Comprehensive security solutions with red teaming, vulnerability assessment, and advanced threat intelligence systems."
              link="/services#cybersecurity"
              gradient="from-red-500/20 to-rose-500/20 dark:from-red-600/20 dark:to-rose-600/20"
              delay={0.2}
            />
            <EnhancedServiceCard 
              icon={<Code className="h-12 w-12" />}
              title="DevOps & CI/CD"
              description="Streamline your development workflow with efficient CI/CD pipelines, containerization, and DevOps best practices."
              link="/services#devops"
              gradient="from-emerald-500/20 to-teal-500/20 dark:from-emerald-600/20 dark:to-teal-600/20"
              delay={0.3}
            />
            <EnhancedServiceCard 
              icon={<Bot className="h-12 w-12" />}
              title="AI-Powered Systems"
              description="Implement intelligent monitoring and automation using cutting-edge AI technologies and machine learning pipelines."
              link="/services#ai-powered"
              gradient="from-purple-500/20 to-violet-500/20 dark:from-purple-600/20 dark:to-violet-600/20"
              delay={0.4}
            />
            <EnhancedServiceCard 
              icon={<Cpu className="h-12 w-12" />}
              title="System Design"
              description="Architect high-performance systems with optimized design patterns, microservices architectures, and kernel-level tools."
              link="/services#system-design"
              gradient="from-amber-500/20 to-orange-500/20 dark:from-amber-600/20 dark:to-orange-600/20"
              delay={0.5}
            />
            <EnhancedServiceCard 
              icon={<GitBranch className="h-12 w-12" />}
              title="Digital Infrastructure"
              description="Enterprise-grade digital infrastructure solutions with high availability, fault tolerance, and maximum security."
              link="/services#digital-infrastructure"
              gradient="from-cyan-500/20 to-sky-500/20 dark:from-cyan-600/20 dark:to-sky-600/20"
              delay={0.6}
            />
          </div>
          
          {/* New testimonial callout */}
          <div className="relative rounded-2xl overflow-hidden bg-background/50 backdrop-blur-md border border-muted shadow-lg p-8 mb-16">
            <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-10"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue/10 via-transparent to-transparent"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3">
                <blockquote className="italic text-xl md:text-2xl font-medium text-foreground/90 mb-4">
                  "The infrastructure design and implementation provided by the team was transformative for our AI systems. We've seen a 40% improvement in deployment speed and significantly enhanced security posture."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-mauve/20 flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-mauve">AB</span>
                  </div>
                  <div>
                    <p className="font-medium">Alex Browning</p>
                    <p className="text-sm text-muted-foreground">CTO, Neural Dynamics</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <CatButton asChild size="lg" variant="lavender" className="h-14 px-8 text-lg">
                  <Link href="/testimonials" className="group flex items-center">
                    Read Success Stories
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CatButton>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <FloatingElement>
              <CatButton asChild size="lg" variant="lavender" glow animated className="group h-14 px-8 text-lg">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
      <section className="py-24 bg-muted/50 relative overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center mb-16">
            <CatBadge variant="mauve" pill className="mb-4">Interactive Dashboard</CatBadge>
            <TextReveal 
              element="h2" 
              text="Monitor Your Infrastructure in Real-Time"
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading"
            />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-8">
              Get comprehensive analytics and insights with our powerful infrastructure monitoring dashboard.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="px-4 py-2 bg-background/70 backdrop-blur-sm rounded-full border border-border/50 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-green mr-2"></div>
                <span className="text-sm">Real-time metrics</span>
              </div>
              <div className="px-4 py-2 bg-background/70 backdrop-blur-sm rounded-full border border-border/50 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-sapphire mr-2"></div>
                <span className="text-sm">Customizable views</span>
              </div>
              <div className="px-4 py-2 bg-background/70 backdrop-blur-sm rounded-full border border-border/50 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-peach mr-2"></div>
                <span className="text-sm">Security alerts</span>
              </div>
              <div className="px-4 py-2 bg-background/70 backdrop-blur-sm rounded-full border border-border/50 inline-flex items-center">
                <div className="w-2 h-2 rounded-full bg-mauve mr-2"></div>
                <span className="text-sm">AI recommendations</span>
              </div>
            </div>
          </div>
          
          {/* Dashboard preview with highlights */}
          <div className="relative mx-auto max-w-5xl mb-16">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border/50 relative group">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-mauve/30 to-blue/30 opacity-75 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-90 z-10"></div>
              
              {/* Dashboard image */}
              <div className="aspect-video bg-gradient-to-br from-background to-muted relative">
                <img 
                  src="/images/dashboard-preview.jpg" 
                  alt="Infrastructure Dashboard" 
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Highlight points on the dashboard */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-blue/30 backdrop-blur-md border border-blue/50 flex items-center justify-center relative animate-pulse">
                    <span className="text-xs font-medium text-white">1</span>
                    <div className="absolute left-full ml-2 whitespace-nowrap px-3 py-1 rounded-md bg-background/80 backdrop-blur-md text-sm border border-blue/30">
                      Resource utilization metrics
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-peach/30 backdrop-blur-md border border-peach/50 flex items-center justify-center relative animate-pulse">
                    <span className="text-xs font-medium text-white">2</span>
                    <div className="absolute right-full mr-2 whitespace-nowrap px-3 py-1 rounded-md bg-background/80 backdrop-blur-md text-sm border border-peach/30">
                      Security vulnerability scanner
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-mauve/30 backdrop-blur-md border border-mauve/50 flex items-center justify-center relative animate-pulse">
                    <span className="text-xs font-medium text-white">3</span>
                    <div className="absolute left-full ml-2 whitespace-nowrap px-3 py-1 rounded-md bg-background/80 backdrop-blur-md text-sm border border-mauve/30">
                      AI-powered recommendations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to action button centered below the dashboard */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
              <CatButton size="lg" variant="sapphire" asChild glow className="h-14 px-8 glass backdrop-blur-md shadow-lg">
                <Link href="/dashboard" className="flex items-center gap-2">
                  <CatGradientText variant="blue-sapphire" animate={true}>Explore the Dashboard</CatGradientText> 
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CatButton>
            </div>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <CatCard variant="glass" shadow="lg" className="border border-border/50 backdrop-blur-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue/50 to-sapphire/50"></div>
              <CatCardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue">
                    <path d="M3 3v18h18"></path>
                    <path d="M7 12l4 4 8-8"></path>
                  </svg>
                </div>
                <CatCardTitle>Real-Time Monitoring</CatCardTitle>
                <CatCardDescription className="text-md">
                  Track performance metrics and resource utilization with live updates and customizable alerts.
                </CatCardDescription>
              </CatCardHeader>
              <CatCardContent className="pt-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                    CPU & memory utilization tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                    Network traffic analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue mr-2"></div>
                    Custom threshold alerting
                  </li>
                </ul>
              </CatCardContent>
            </CatCard>
            
            <CatCard variant="glass" shadow="lg" className="border border-border/50 backdrop-blur-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-peach/50 to-yellow/50"></div>
              <CatCardHeader>
                <div className="w-12 h-12 rounded-xl bg-peach/10 flex items-center justify-center mb-4 group-hover:bg-peach/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-peach">
                    <path d="M10 16l-4-4 4-4"></path>
                    <path d="M12.5 12H20"></path>
                    <path d="M8 22h8"></path>
                    <path d="M12 22v-9"></path>
                    <path d="M8 2v9a3 3 0 0 0 3 3h6"></path>
                  </svg>
                </div>
                <CatCardTitle>Security Analysis</CatCardTitle>
                <CatCardDescription className="text-md">
                  Identify vulnerabilities and threats with comprehensive security scans and detailed reports.
                </CatCardDescription>
              </CatCardHeader>
              <CatCardContent className="pt-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-peach mr-2"></div>
                    Vulnerability detection & prioritization
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-peach mr-2"></div>
                    Real-time threat intelligence
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-peach mr-2"></div>
                    Compliance monitoring & reporting
                  </li>
                </ul>
              </CatCardContent>
            </CatCard>
            
            <CatCard variant="glass" shadow="lg" className="border border-border/50 backdrop-blur-md overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mauve/50 to-lavender/50"></div>
              <CatCardHeader>
                <div className="w-12 h-12 rounded-xl bg-mauve/10 flex items-center justify-center mb-4 group-hover:bg-mauve/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mauve">
                    <path d="M21 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4"></path>
                    <line x1="9" x2="9" y1="2" y2="10"></line>
                    <line x1="15" x2="15" y1="2" y2="10"></line>
                    <line x1="9" x2="15" y1="6" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                </div>
                <CatCardTitle>Resource Optimization</CatCardTitle>
                <CatCardDescription className="text-md">
                  Optimize costs and performance with intelligent resource allocation recommendations.
                </CatCardDescription>
              </CatCardHeader>
              <CatCardContent className="pt-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-mauve mr-2"></div>
                    Cost optimization suggestions
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-mauve mr-2"></div>
                    Performance bottleneck detection
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-mauve mr-2"></div>
                    Automated scaling recommendations
                  </li>
                </ul>
              </CatCardContent>
            </CatCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-mauve/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <CatBadge variant="mauve" pill className="mb-6">Get Started Today</CatBadge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-heading">
              Ready to Transform Your <CatGradientText variant="blue-sapphire" animate>Infrastructure</CatGradientText>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's build the foundation for your next-generation systems together. Our team of experts is ready to help you design, implement, and secure your infrastructure.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <CatButton asChild size="lg" variant="sapphire" className="h-14 px-8 text-lg" glow>
                <Link href="/contact" className="group flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </CatButton>
              <CatButton asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                <Link href="/services" className="flex items-center">
                  Explore Services
                </Link>
              </CatButton>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
                <div className="w-24 h-12 backdrop-blur-md rounded-md bg-background/20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-muted/30 rounded"></div>
                </div>
                <div className="w-24 h-12 backdrop-blur-md rounded-md bg-background/20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-muted/30 rounded"></div>
                </div>
                <div className="w-24 h-12 backdrop-blur-md rounded-md bg-background/20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-muted/30 rounded"></div>
                </div>
                <div className="w-24 h-12 backdrop-blur-md rounded-md bg-background/20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-muted/30 rounded"></div>
                </div>
                <div className="w-24 h-12 backdrop-blur-md rounded-md bg-background/20 flex items-center justify-center">
                  <div className="w-16 h-8 bg-muted/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}