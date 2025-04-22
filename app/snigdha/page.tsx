import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ArrowRight } from "lucide-react";

export default function SnigdhaPage() {
  const features = [
    "Arch-based Linux distribution with focus on simplicity and performance",
    "Custom-built package management system",
    "Optimized system configurations for better resource utilization",
    "Enhanced security features and regular security updates",
    "User-friendly installation process",
    "Comprehensive documentation and community support"
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-3">Open Source Project</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Snigdha OS
          </h1>
          <p className="text-xl text-muted-foreground">
            A modern, secure, and user-friendly Arch-based Linux distribution that we proudly support and contribute to.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="https://github.com/snigdhaos" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="https://snigdhaos.org" target="_blank" rel="noopener noreferrer">
                Visit Website <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/snigdha-screenshot.jpg"
              alt="Snigdha OS Desktop Screenshot"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Snigdha OS</h2>
            <p className="text-lg text-muted-foreground">
              Snigdha OS is an innovative Arch-based Linux distribution that combines the power and flexibility of Arch Linux with user-friendly features and enhanced security. As proud contributors and sponsors, we help maintain and improve this distribution to provide a better computing experience for everyone.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Contribution */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Contribution</CardTitle>
            <CardDescription>
              How we support and contribute to the Snigdha OS project
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Infrastructure Support</h4>
                <p className="text-sm text-muted-foreground">
                  Providing hosting, CI/CD pipelines, and infrastructure maintenance for core services.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Contributing to core system components, package management, and security features.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Community Building</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting documentation, user forums, and community engagement initiatives.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in making Snigdha OS better! Whether you&apos;re a developer, designer, or enthusiast, 
            there are many ways to contribute to the project.
          </p>
          <Button asChild>
            <Link href="https://github.com/snigdhaos/contribute" target="_blank" rel="noopener noreferrer">
              Start Contributing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}