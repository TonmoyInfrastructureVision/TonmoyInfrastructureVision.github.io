import Link from "next/link";
import { CircuitBoard, Github, Twitter, Linkedin, Mail } from "lucide-react";
import CatGradientText from "@/components/cat-gradient-text";
import { CatBadge } from "@/components/ui/cat-badge";

export default function Footer() {
  return (
    <footer className="w-full border-t border-mauve/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-10"></div>
      <div className="container mx-auto px-4 py-12 md:px-6 relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-lavender" />
              <CatGradientText variant="mauve-lavender" weight="bold" size="lg">
                Tonmoy I&V
              </CatGradientText>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Innovating Tomorrow's Foundations — Today. Building the backbone of modern technological and digital ecosystems.
            </p>
            <div className="flex items-center space-x-3">
              <Link href="https://github.com/TonmoyInfrastructureVision" className="text-muted-foreground hover:text-mauve transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-blue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-sapphire transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@tonmoyiv.com" className="text-muted-foreground hover:text-peach transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <CatGradientText variant="blue-sapphire" weight="medium" size="base">
              Services
            </CatGradientText>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#cloud-infrastructure" className="text-muted-foreground hover:text-blue transition-colors">
                  Cloud Infrastructure & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="text-muted-foreground hover:text-red transition-colors">
                  Cybersecurity & Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/services#devops" className="text-muted-foreground hover:text-green transition-colors">
                  DevOps & CI/CD Toolchains
                </Link>
              </li>
              <li>
                <Link href="/services#ai-powered" className="text-muted-foreground hover:text-mauve transition-colors">
                  AI-Powered Systems
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <CatGradientText variant="green-teal" weight="medium" size="base">
              Company
            </CatGradientText>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-green transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-green transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <CatGradientText variant="peach-yellow" weight="medium" size="base">
              Legal
            </CatGradientText>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-peach transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-peach transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-mauve/20 pt-6">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <CatBadge variant="lavender" size="sm" pill>Catppuccin Theme</CatBadge>
            <CatBadge variant="info" size="sm" pill>Next.js</CatBadge>
            <CatBadge variant="teal" size="sm" pill>Tailwind CSS</CatBadge>
            <CatBadge variant="warning" size="sm" pill>React</CatBadge>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tonmoy Infrastructure & Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}