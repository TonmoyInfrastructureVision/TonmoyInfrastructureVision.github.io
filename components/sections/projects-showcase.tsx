"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CatButton } from "@/components/ui/cat-button";
import { CatBadge } from "@/components/ui/cat-badge";
import { CatCard, CatCardContent } from "@/components/ui/cat-card";
import { motion } from "framer-motion";
import { ArrowRight, Github, Star, GitFork, Code } from "lucide-react";
import CatGradientText from "@/components/cat-gradient-text";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";
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
  language: string | null;
}

// GitHub Organization Username
const GITHUB_ORG = "TonmoyInfrastructureVision";

// Featured project names that should be displayed
const FEATURED_PROJECT_NAMES = [
  "CloudOrchestrator",
  "SecureShield",
  "DevOpsAccelerator"
];

// Language colors mapping
const LANGUAGE_COLORS: Record<string, string> = {
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
};

export default function ProjectsShowcase() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        
        // Check GitHub API rate limit first
        const rateLimit = await fetch("https://api.github.com/rate_limit");
        const rateLimitData = await rateLimit.json();
        
        if (rateLimitData.resources?.core?.remaining === 0) {
          throw new Error("GitHub API rate limit exceeded");
        }
        
        const response = await fetch(`https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&direction=desc`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`GitHub organization not found`);
          } else if (response.status === 403) {
            throw new Error("Rate limit exceeded");
          } else {
            throw new Error(`API error: ${response.status}`);
          }
        }
        
        const data: GitHubRepo[] = await response.json();
        
        // Filter to featured projects
        const featuredRepos = data.filter(repo => 
          FEATURED_PROJECT_NAMES.includes(repo.name)
        ).sort((a, b) => 
          FEATURED_PROJECT_NAMES.indexOf(a.name) - FEATURED_PROJECT_NAMES.indexOf(b.name)
        );
        
        // If we couldn't find our featured repos, use fallback data
        if (featuredRepos.length === 0) {
          throw new Error("Featured repositories not found");
        }
        
        setRepos(featuredRepos.slice(0, 3)); // Limit to 3 projects
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        
        // Use fallback data
        setRepos([
          {
            id: 1,
            name: "CloudOrchestrator",
            description: "Automated multi-cloud infrastructure deployment and management toolkit",
            html_url: "https://github.com/TonmoyInfrastructureVision/cloud-orchestrator",
            homepage: "#",
            stargazers_count: 42,
            forks_count: 12,
            topics: ["cloud", "infrastructure", "automation"],
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
            language: "Python"
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Get color for language
  const getLanguageColor = (language: string | null) => {
    if (!language) return "text-muted-foreground";
    return LANGUAGE_COLORS[language] || "text-muted-foreground";
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background/80 -z-10"></div>
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-5 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <CatBadge variant="lavender" pill className="mb-3">Our Projects</CatBadge>
            <TextReveal
              element="h2"
              text="Featured Open-Source Work"
              className="text-3xl font-bold tracking-tight md:text-4xl mb-3 font-heading"
            />
            <p className="text-muted-foreground max-w-2xl">
              Explore our innovative open-source projects that power modern infrastructure solutions.
            </p>
          </div>
          <Link 
            href={`https://github.com/${GITHUB_ORG}`} 
            className="mt-4 md:mt-0 inline-flex items-center hover:text-foreground text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" /> Visit our GitHub
          </Link>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-16">
            <CatLoading variant="dots" size="lg" color="lavender" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((project, index) => (
              <FloatingElement key={project.id} offset={8} delay={index * 0.1}>
                <CatCard 
                  variant="glass" 
                  shadow="md" 
                  hover 
                  animated
                  className="h-full flex flex-col overflow-hidden"
                >
                  <div className="relative h-40 bg-gradient-to-br from-mauve/10 to-blue/10 flex items-center justify-center">
                    <Code className="h-16 w-16 text-mauve/40" />
                  </div>
                  <CatCardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 font-heading">{project.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description || "No description available."}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.topics || []).slice(0, 3).map((tag, i) => (
                        <CatBadge key={i} variant="secondary" className="capitalize">
                          {tag.replace(/-/g, ' ')}
                        </CatBadge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          <span>{project.stargazers_count}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork className="h-4 w-4 mr-1" />
                          <span>{project.forks_count}</span>
                        </div>
                      </div>
                      
                      {project.language && (
                        <div className="flex items-center text-sm">
                          <div className={`h-3 w-3 rounded-full ${getLanguageColor(project.language)} mr-1`}></div>
                          <span>{project.language}</span>
                        </div>
                      )}
                    </div>
                    
                    <CatButton asChild variant="lavender" size="sm" className="w-full group">
                      <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CatButton>
                  </CatCardContent>
                </CatCard>
              </FloatingElement>
            ))}
          </div>
        )}
        
        <div className="text-center mt-16">
          <CatButton asChild size="lg" variant="outline" glow animated>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </CatButton>
        </div>
      </div>
    </section>
  );
}