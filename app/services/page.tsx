import { Badge } from "@/components/ui/badge";
import { ArrowRight, Server, Shield, Code, Cpu, Bot, GitBranch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      id: "cloud-infrastructure",
      icon: <Server className="h-12 w-12" />,
      title: "Cloud Infrastructure & Automation",
      description: "We design, implement, and optimize cloud infrastructure across AWS, Azure, GCP, and hybrid environments. Our automation frameworks streamline deployment, scaling, and management processes.",
      features: [
        "Multi-cloud architecture design",
        "Infrastructure as Code (IaC) implementation",
        "Containerization and orchestration solutions",
        "Automated deployment pipelines",
        "Cost optimization strategies",
        "High-availability and disaster recovery planning"
      ]
    },
    {
      id: "cybersecurity",
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity & Red Teaming",
      description: "Our cybersecurity services identify vulnerabilities and strengthen your systems against potential threats. We implement industry-best security practices and conduct thorough penetration testing.",
      features: [
        "Comprehensive security audits",
        "Penetration testing and vulnerability assessment",
        "Security posture evaluation",
        "Threat modeling and risk analysis",
        "Security compliance framework implementation",
        "Incident response planning"
      ]
    },
    {
      id: "devops",
      icon: <Code className="h-12 w-12" />,
      title: "DevOps & CI/CD Toolchains",
      description: "We implement and optimize DevOps practices and CI/CD pipelines to accelerate your development lifecycle, improve quality, and increase deployment frequency.",
      features: [
        "CI/CD pipeline design and implementation",
        "Development workflow optimization",
        "Release management automation",
        "Monitoring and logging integration",
        "Testing automation frameworks",
        "DevSecOps implementation"
      ]
    },
    {
      id: "ai-powered",
      icon: <Bot className="h-12 w-12" />,
      title: "AI-Powered Systems",
      description: "We develop intelligent monitoring and automation systems that leverage artificial intelligence to predict issues, optimize performance, and streamline operations.",
      features: [
        "Predictive analytics systems",
        "Anomaly detection frameworks",
        "Automated incident response",
        "Performance optimization tools",
        "Natural language processing integration",
        "Machine learning operations (MLOps)"
      ]
    },
    {
      id: "system-design",
      icon: <Cpu className="h-12 w-12" />,
      title: "System Design & Kernel Tools",
      description: "We architect high-performance systems with optimized design patterns and kernel-level tools for maximum efficiency, scalability, and reliability.",
      features: [
        "High-performance architecture design",
        "Kernel-level optimization",
        "Scalability planning and implementation",
        "System bottleneck identification and resolution",
        "Resource optimization frameworks",
        "Custom kernel module development"
      ]
    },
    {
      id: "digital-infrastructure",
      icon: <GitBranch className="h-12 w-12" />,
      title: "Digital Infrastructure Solutions",
      description: "We provide enterprise-grade digital infrastructure solutions that form the foundation for modern business operations, ensuring security, compliance, and performance.",
      features: [
        "Enterprise network architecture",
        "Identity and access management systems",
        "Data storage and management solutions",
        "API gateway and management platforms",
        "Integration frameworks",
        "Monitoring and observability stacks"
      ]
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-3">Our Services</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            What We Do
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
                  <div className="bg-card rounded-xl p-8 border shadow-sm">
                    <h3 className="text-xl font-medium mb-6">Key Features</h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="inline-block text-primary mb-2">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight" id={service.id}>
                      {service.title}
                    </h2>
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
        <div className="mt-24 bg-card border rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your organization
            build robust, secure, and scalable technological foundations.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}