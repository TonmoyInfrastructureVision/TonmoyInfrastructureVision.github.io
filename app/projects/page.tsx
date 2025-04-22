"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, ArrowRight, Code, Star, GitFork, Calendar, AlertCircle } from "lucide-react";
import { CatBadge } from "@/components/ui/cat-badge";
import { CatButton } from "@/components/ui/cat-button";
import { 
  CatCard, 
  CatCardContent, 
  CatCardDescription, 
  CatCardFooter, 
  CatCardHeader, 
  CatCardTitle 
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";
import ParallaxBackground from "@/components/parallax-background";
import CatLoading from "@/components/cat-loading";

// GitHub API types (simplified for our use case)
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  language: string | null;
}

// Organization Username
const GITHUB_ORG = "TonmoyInfrastructureVision";

export default function ProjectsPage() {
  const [featuredRepos, setFeaturedRepos] = useState<GitHubRepo[]>([]);
  const [otherRepos, setOtherRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Featured project names that should be displayed at the top
  const featuredProjectNames = [
    "CloudOrchestrator",
    "SecureShield",
    "DevOpsAccelerator"
  ];

  // Map languages to colors
  const languageColors: Record<string, string> = {
    "JavaScript": "text-yellow",
    "TypeScript": "text-blue",
    "Python": "text-green",
    "Go": "text-teal",
    "Rust": "text-red",
    "Java": "text-peach",
    "C++": "text-mauve",
    "C#": "text-sapphire",
    "PHP": "text-lavender",
    "Ruby": "text-maroon",
    "HTML": "text-red",
    "CSS": "text-blue",
    "Shell": "text-green"
  };

  // Get color for language
  const getLanguageColor = (language: string | null) => {
    if (!language) return "text-muted-foreground";
    return languageColors[language] || "text-muted-foreground";
  };

  // Format date to readable string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Fetch repositories on component mount
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Check GitHub API rate limit first
        const rateLimit = await fetch("https://api.github.com/rate_limit");
        const rateLimitData = await rateLimit.json();
        
        if (rateLimitData.resources?.core?.remaining === 0) {
          const resetTime = new Date(rateLimitData.resources.core.reset * 1000);
          throw new Error(`GitHub API rate limit exceeded. Resets at ${resetTime.toLocaleTimeString()}`);
        }
        
        // Fetch repos from GitHub API
        const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&direction=desc`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`GitHub organization "${GITHUB_ORG}" not found`);
          } else if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded. Please try again later.");
          } else {
            throw new Error(`Failed to fetch repositories: ${response.status}`);
          }
        }
        
        const data: GitHubRepo[] = await response.json();
        
        // Split repos into featured and other
        const featured: GitHubRepo[] = [];
        const others: GitHubRepo[] = [];
        
        data.forEach(repo => {
          if (featuredProjectNames.includes(repo.name)) {
            featured.push(repo);
          } else {
            others.push(repo);
          }
        });
        
        // Sort featured repos to match the order in featuredProjectNames
        featured.sort((a, b) => {
          return featuredProjectNames.indexOf(a.name) - featuredProjectNames.indexOf(b.name);
        });
        
        setFeaturedRepos(featured);
        setOtherRepos(others.slice(0, 6)); // Limit to 6 other projects
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        
        // Set fallback data for demos
        setFeaturedRepos([
          {
            id: 1,
            name: "CloudOrchestrator",
            description: "Automated multi-cloud infrastructure deployment and management toolkit",
            html_url: "https://github.com/TonmoyInfrastructureVision/cloud-orchestrator",
            homepage: "#",
            stargazers_count: 42,
            forks_count: 12,
            topics: ["cloud", "infrastructure", "automation"],
            created_at: "2023-01-01T00:00:00Z",
            language: "TypeScript"
          },
          {
            id: 2,
            name: "SecureShield",
            description: "Open-source security framework for vulnerability assessment and mitigation",
            html_url: "https://github.com/TonmoyInfrastructureVision/secure-shield",
            homepage: "#",
            stargazers_count: 35,
            forks_count: 8,
            topics: ["security", "devsecops", "compliance"],
            created_at: "2023-02-15T00:00:00Z",
            language: "Go"
          },
          {
            id: 3,
            name: "DevOpsAccelerator",
            description: "CI/CD pipeline generation and optimization tools for efficient DevOps workflows",
            html_url: "https://github.com/TonmoyInfrastructureVision/devops-accelerator",
            homepage: "#",
            stargazers_count: 28,
            forks_count: 6,
            topics: ["devops", "ci-cd", "automation"],
            created_at: "2023-03-30T00:00:00Z",
            language: "Python"
          }
        ]);
        
        setOtherRepos([
          {
            id: 4,
            name: "MonitoringStack",
            description: "Scalable monitoring and alerting infrastructure with AI-powered anomaly detection",
            html_url: "https://github.com/TonmoyInfrastructureVision/monitoring-stack",
            homepage: "",
            stargazers_count: 18,
            forks_count: 3,
            topics: ["monitoring", "ai", "observability"],
            created_at: "2023-04-20T00:00:00Z",
            language: "JavaScript"
          },
          {
            id: 5,
            name: "InfraScanner",
            description: "Infrastructure security scanning and compliance verification tool",
            html_url: "https://github.com/TonmoyInfrastructureVision/infra-scanner",
            homepage: "",
            stargazers_count: 22,
            forks_count: 5,
            topics: ["security", "compliance", "infrastructure"],
            created_at: "2023-05-15T00:00:00Z",
            language: "Go"
          },
          {
            id: 6,
            name: "NetworkAutomation",
            description: "Network configuration and management automation toolkit",
            html_url: "https://github.com/TonmoyInfrastructureVision/network-automation",
            homepage: "",
            stargazers_count: 15,
            forks_count: 2,
            topics: ["networking", "automation", "configuration"],
            created_at: "2023-06-10T00:00:00Z",
            language: "Python"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Render loading state
  if (isLoading) {
    return (
      <div className="pt-28 pb-16 flex flex-col items-center justify-center min-h-[50vh]">
        <CatLoading variant="dots" size="lg" color="lavender" className="mb-4" />
        <p className="text-muted-foreground">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <ParallaxBackground />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <CatBadge variant="lavender" pill className="mb-3">Our Projects</CatBadge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 font-heading">
            Open-Source <CatGradientText variant="mauve-lavender" animate>Initiatives</CatGradientText>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our innovative open-source projects crafted to educate, empower, and evolve
            the tech ecosystem around us.
          </p>
          <div className="mt-8">
            <CatButton asChild variant="outline" glow animated>
              <Link href={`https://github.com/${GITHUB_ORG}`} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View our GitHub organization
              </Link>
            </CatButton>
          </div>
        </div>
        
        {/* Error message if GitHub API failed */}
        {error && (
          <CatCard variant="glass" shadow="md" className="mb-12 border-red/20">
            <CatCardContent className="p-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-red mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red mb-1">Error fetching projects</h3>
                <p className="text-muted-foreground">{error}</p>
                <p className="text-sm mt-2">Showing fallback project data instead.</p>
              </div>
            </CatCardContent>
          </CatCard>
        )}
        
        {/* Featured Projects */}
        <div className="mb-24">
          <TextReveal 
            element="h2"
            text="Featured Projects"
            className="text-2xl font-bold mb-8 font-heading"
          />
          <div className="grid grid-cols-1 gap-8">
            {featuredRepos.map((project, index) => (
              <FloatingElement key={project.id} offset={3} delay={index * 0.2}>
                <CatCard variant="glass" shadow="md" hover animated className="overflow-hidden transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="md:col-span-2 relative h-64 md:h-full bg-gradient-to-br from-mauve/10 to-blue/10 flex items-center justify-center">
                      <Code className="h-24 w-24 text-mauve/40" />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <CatCardHeader className="px-0 pt-0">
                        <CatCardTitle className="text-2xl flex items-center gap-2">
                          {project.name}
                        </CatCardTitle>
                        <CatCardDescription className="text-base">
                          {project.description || "No description available."}
                        </CatCardDescription>
                      </CatCardHeader>
                      <CatCardContent className="px-0 py-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(project.topics || []).map((tag, i) => (
                            <CatBadge key={i} variant="secondary" className="capitalize">
                              {tag.replace(/-/g, ' ')}
                            </CatBadge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            <span>{project.stargazers_count}</span>
                          </div>
                          <div className="flex items-center">
                            <GitFork className="h-4 w-4 mr-1" />
                            <span>{project.forks_count}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Created: {formatDate(project.created_at)}</span>
                          </div>
                          {project.language && (
                            <div className="flex items-center">
                              <div className={`h-3 w-3 rounded-full ${getLanguageColor(project.language)} mr-1`}></div>
                              <span>{project.language}</span>
                            </div>
                          )}
                        </div>
                      </CatCardContent>
                      <CatCardFooter className="px-0 pt-0 flex flex-wrap gap-4">
                        <CatButton asChild variant="lavender" glow>
                          <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> View on GitHub
                          </Link>
                        </CatButton>
                        {project.homepage && project.homepage !== "" && project.homepage !== "#" && (
                          <CatButton asChild variant="outline">
                            <Link href={project.homepage} target="_blank" rel="noopener noreferrer">
                              Demo <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </CatButton>
                        )}
                      </CatCardFooter>
                    </div>
                  </div>
                </CatCard>
              </FloatingElement>
            ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div>
          <TextReveal 
            element="h2"
            text="More Open-Source Projects"
            className="text-2xl font-bold mb-8 font-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherRepos.map((project, index) => (
              <FloatingElement key={project.id} offset={4} delay={index * 0.1}>
                <CatCard 
                  variant="glass" 
                  shadow="md" 
                  hover 
                  animated 
                  className="h-full flex flex-col transition-all duration-300"
                >
                  <CatCardHeader>
                    <CatCardTitle>{project.name}</CatCardTitle>
                    <CatCardDescription className="text-base">
                      {project.description || "No description available."}
                    </CatCardDescription>
                  </CatCardHeader>
                  <CatCardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.topics || []).slice(0, 3).map((tag, i) => (
                        <CatBadge key={i} variant="secondary" className="capitalize">
                          {tag.replace(/-/g, ' ')}
                        </CatBadge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-4 w-4 mr-1" />
                        <span>{project.forks_count}</span>
                      </div>
                      {project.language && (
                        <div className="flex items-center">
                          <div className={`h-3 w-3 rounded-full ${getLanguageColor(project.language)} mr-1`}></div>
                          <span>{project.language}</span>
                        </div>
                      )}
                    </div>
                  </CatCardContent>
                  <CatCardFooter>
                    <CatButton asChild variant="outline" glow className="w-full">
                      <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </CatButton>
                  </CatCardFooter>
                </CatCard>
              </FloatingElement>
            ))}
          </div>
        </div>
        
        {/* View More Link */}
        <div className="text-center mt-12">
          <CatButton 
            asChild 
            variant="lavender" 
            size="lg" 
            glow 
            animated
          >
            <Link href={`https://github.com/${GITHUB_ORG}?tab=repositories`} target="_blank" rel="noopener noreferrer">
              View All Repositories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CatButton>
        </div>
      </div>
    </div>
  );
}