import Link from "next/link";
import { CircuitBoard, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6" />
              <span className="font-bold text-lg">Tonmoy I&V</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Innovating Tomorrow's Foundations — Today. Building the backbone of modern technological and digital ecosystems.
            </p>
            <div className="flex items-center space-x-3">
              <Link href="https://github.com/TonmoyInfrastructureVision" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:contact@tonmoyiv.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#cloud-infrastructure" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cloud Infrastructure & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#cybersecurity" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cybersecurity & Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/services#devops" className="text-muted-foreground hover:text-foreground transition-colors">
                  DevOps & CI/CD Toolchains
                </Link>
              </li>
              <li>
                <Link href="/services#ai-powered" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI-Powered Systems
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-base font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tonmoy Infrastructure & Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}