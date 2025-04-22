import { ArrowRight, Server, Shield, Code, Cpu, Bot, GitBranch } from "lucide-react";
import Link from "next/link";
import { CatBadge } from "@/components/ui/cat-badge";
import { CatButton } from "@/components/ui/cat-button";
import { CatCard } from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";

export default function ServicesPage() {
  const services = [
    {
      id: "cloud-infrastructure",
      icon: <Server className="h-12 w-12 text-blue" />,
      title: "Cloud Infrastructure & Automation",
      description: "We design, implement, and optimize cloud infrastructure across AWS, Azure, GCP, and hybrid environments. Our automation frameworks streamline deployment, scaling, and management processes.",
      features: [
        "Multi-cloud architecture design",
        "Infrastructure as Code (IaC) implementation",
        "Containerization and orchestration solutions",
        "Automated deployment pipelines",
        "Cost optimization strategies",
        "High-availability and disaster recovery planning"
      ],
      color: "blue"
    },
    {
      id: "cybersecurity",
      icon: <Shield className="h-12 w-12 text-red" />,
      title: "Cybersecurity & Red Teaming",
      description: "Our cybersecurity services identify vulnerabilities and strengthen your systems against potential threats. We implement industry-best security practices and conduct thorough penetration testing.",
      features: [
        "Comprehensive security audits",
        "Penetration testing and vulnerability assessment",
        "Security posture evaluation",
        "Threat modeling and risk analysis",
        "Security compliance framework implementation",
        "Incident response planning"
      ],
      color: "red"
    },
    {
      id: "devops",
      icon: <Code className="h-12 w-12 text-green" />,
      title: "DevOps & CI/CD Toolchains",
      description: "We implement and optimize DevOps practices and CI/CD pipelines to accelerate your development lifecycle, improve quality, and increase deployment frequency.",
      features: [
        "CI/CD pipeline design and implementation",
        "Development workflow optimization",
        "Release management automation",
        "Monitoring and logging integration",
        "Testing automation frameworks",
        "DevSecOps implementation"
      ],
      color: "green"
    },
    {
      id: "ai-powered",
      icon: <Bot className="h-12 w-12 text-mauve" />,
      title: "AI-Powered Systems",
      description: "We develop intelligent monitoring and automation systems that leverage artificial intelligence to predict issues, optimize performance, and streamline operations.",
      features: [
        "Predictive analytics systems",
        "Anomaly detection frameworks",
        "Automated incident response",
        "Performance optimization tools",
        "Natural language processing integration",
        "Machine learning operations (MLOps)"
      ],
      color: "mauve"
    },
    {
      id: "system-design",
      icon: <Cpu className="h-12 w-12 text-peach" />,
      title: "System Design & Kernel Tools",
      description: "We architect high-performance systems with optimized design patterns and kernel-level tools for maximum efficiency, scalability, and reliability.",
      features: [
        "High-performance architecture design",
        "Kernel-level optimization",
        "Scalability planning and implementation",
        "System bottleneck identification and resolution",
        "Resource optimization frameworks",
        "Custom kernel module development"
      ],
      color: "peach"
    },
    {
      id: "digital-infrastructure",
      icon: <GitBranch className="h-12 w-12 text-sapphire" />,
      title: "Digital Infrastructure Solutions",
      description: "We provide enterprise-grade digital infrastructure solutions that form the foundation for modern business operations, ensuring security, compliance, and performance.",
      features: [
        "Enterprise network architecture",
        "Identity and access management systems",
        "Data storage and management solutions",
        "API gateway and management platforms",
        "Integration frameworks",
        "Monitoring and observability stacks"
      ],
      color: "sapphire"
    }
  ];

  return (
    <div className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <CatBadge variant="lavender" pill className="mb-3">Our Services</CatBadge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 font-heading">
            What We <CatGradientText variant="mauve-lavender" animate>Do</CatGradientText>
          </h1>
          <p className="text-xl text-muted-foreground">
            We engineer, secure, and streamline the future of infrastructure with cutting-edge
            tools, frameworks, and automation solutions.
          </p>
        </div>
        
        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <FloatingElement offset={(index + 1) * 2}>
                    <CatCard variant="glass" shadow="md" className="backdrop-blur-sm">
                      <div className="p-8">
                        <TextReveal
                          element="h3"
                          text="Key Features"
                          className="text-xl font-medium mb-6 font-heading"
                        />
                        <ul className="space-y-4">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ArrowRight className={`h-5 w-5 text-${service.color} flex-shrink-0 mt-0.5`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CatCard>
                  </FloatingElement>
                </div>
                
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="inline-block mb-2">
                      {service.icon}
                    </div>
                    <div id={service.id}>
                      <TextReveal
                        element="h2"
                        text={service.title}
                        className="text-3xl font-bold tracking-tight font-heading"
                      />
                    </div>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 glass border border-mauve/20 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 font-heading">
            Ready to <CatGradientText variant="blue-sapphire" animate>Transform</CatGradientText> Your Infrastructure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your organization
            build robust, secure, and scalable technological foundations.
          </p>
          <CatButton asChild size="lg" variant="lavender" glow animated>
            <Link href="/contact">Get in Touch</Link>
          </CatButton>
        </div>
      </div>
    </div>
  );
}