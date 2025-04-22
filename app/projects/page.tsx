import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "CloudOrchestrator",
      description: "Automated multi-cloud infrastructure deployment and management toolkit",
      longDescription: "A comprehensive toolkit for managing infrastructure across multiple cloud providers. Features automated provisioning, configuration management, scaling policies, and cost optimization.",
      tags: ["Cloud", "Infrastructure", "Automation"],
      image: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg",
      githubUrl: "https://github.com/TonmoyInfrastructureVision/cloud-orchestrator",
      demoUrl: "#"
    },
    {
      title: "SecureShield",
      description: "Open-source security framework for vulnerability assessment and mitigation",
      longDescription: "A robust security framework that helps identify, assess, and mitigate security vulnerabilities in infrastructure and applications. Includes penetration testing tools, compliance checking, and remediation assistance.",
      tags: ["Security", "DevSecOps", "Compliance"],
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      githubUrl: "https://github.com/TonmoyInfrastructureVision/secure-shield",
      demoUrl: "#"
    },
    {
      title: "DevOpsAccelerator",
      description: "CI/CD pipeline generation and optimization tools for efficient DevOps workflows",
      longDescription: "A suite of tools designed to generate, optimize, and manage CI/CD pipelines across various platforms. Features include pipeline templating, workflow optimization, and integration with common DevOps tools.",
      tags: ["DevOps", "CI/CD", "Automation"],
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      githubUrl: "https://github.com/TonmoyInfrastructureVision/devops-accelerator",
      demoUrl: "#"
    }
  ];
  
  const otherProjects = [
    {
      title: "MonitoringStack",
      description: "Scalable monitoring and alerting infrastructure with AI-powered anomaly detection",
      tags: ["Monitoring", "AI", "Observability"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/monitoring-stack"
    },
    {
      title: "InfraScanner",
      description: "Infrastructure security scanning and compliance verification tool",
      tags: ["Security", "Compliance", "Infrastructure"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/infra-scanner"
    },
    {
      title: "NetworkAutomation",
      description: "Network configuration and management automation toolkit",
      tags: ["Networking", "Automation", "Configuration"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/network-automation"
    },
    {
      title: "KubernetesExtensions",
      description: "Custom Kubernetes controllers and extensions for enhanced cluster management",
      tags: ["Kubernetes", "Extensions", "Container Orchestration"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/kubernetes-extensions"
    },
    {
      title: "DataPipelineTool",
      description: "Tools for building and managing data processing pipelines",
      tags: ["Data Processing", "Pipeline", "ETL"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/data-pipeline-tool"
    },
    {
      title: "TestingFramework",
      description: "Comprehensive testing framework for infrastructure validation",
      tags: ["Testing", "Infrastructure", "Validation"],
      githubUrl: "https://github.com/TonmoyInfrastructureVision/testing-framework"
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-3">Our Projects</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Open-Source Initiatives
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our innovative open-source projects crafted to educate, empower, and evolve
            the tech ecosystem around us.
          </p>
          <div className="mt-8">
            <Link href="https://github.com/TonmoyInfrastructureVision" className="inline-flex items-center text-primary hover:underline">
              <Github className="mr-2 h-5 w-5" /> View our GitHub organization
            </Link>
          </div>
        </div>
        
        {/* Featured Projects */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-64 md:h-full">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-6">
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-0 py-4">
                      <p className="mb-4">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-0 flex gap-4">
                      <Button asChild>
                        <Link href={project.githubUrl}>
                          <Github className="mr-2 h-4 w-4" /> View on GitHub
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={project.demoUrl}>
                          Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">More Open-Source Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={project.githubUrl}>
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}