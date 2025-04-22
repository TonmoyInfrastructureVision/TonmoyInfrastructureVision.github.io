import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Github, 
  ArrowRight, 
  Download, 
  Code, 
  Users, 
  Check, 
  Server, 
  Terminal, 
  Clock, 
  ExternalLink, 
  ChevronDown 
} from "lucide-react";

export default function SnigdhaPage() {
  const features = [
    {
      title: "High Performance",
      description: "Optimized system configurations for better resource utilization and faster boot times",
      icon: <Image src="/images/snigdha-performance.svg" width={40} height={40} alt="Performance Icon" />
    },
    {
      title: "Enhanced Security",
      description: "Built-in security features, regular updates, and secure default configurations",
      icon: <Image src="/images/snigdha-security.svg" width={40} height={40} alt="Security Icon" />
    },
    {
      title: "User-Friendly",
      description: "Intuitive interface, comprehensive documentation, and straightforward installation",
      icon: <Image src="/images/snigdha-usability.svg" width={40} height={40} alt="Usability Icon" />
    },
    {
      title: "Package Management",
      description: "Custom-built package management system with access to AUR and official repositories",
      icon: <Terminal className="h-10 w-10 text-primary" />
    },
    {
      title: "Community Support",
      description: "Active forums, chat groups, and collaborative development environment",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "Customizable",
      description: "Easily customize every aspect of your desktop environment and system settings",
      icon: <Code className="h-10 w-10 text-primary" />
    }
  ];
  
  const testimonials = [
    {
      quote: "Snigdha OS combines the power of Arch with the simplicity I've been looking for. It's now my daily driver.",
      author: "Alex Chen, Software Developer"
    },
    {
      quote: "The security features in Snigdha OS give me peace of mind for both personal and professional use.",
      author: "Samantha Taylor, Cybersecurity Analyst"
    },
    {
      quote: "Finally an Arch-based distro that I could install without spending hours reading documentation!",
      author: "Marcus Johnson, System Administrator"
    }
  ];
  
  const releases = [
    {
      version: "2.5.0",
      date: "April 2023",
      highlights: [
        "Kernel 6.3 with improved hardware support",
        "Redesigned installer interface",
        "New package management tools",
        "Updated desktop environments"
      ]
    },
    {
      version: "2.0.0",
      date: "October 2022",
      highlights: [
        "Major security enhancements",
        "Customized package repository",
        "Improved system performance",
        "New theme and visual identity"
      ]
    }
  ];

  const teamMembers = [
    {
      name: "Eshan Roy",
      role: "Lead Developer",
      github: "https://github.com/eshanized"
    },
    {
      name: "Celestifyx",
      role: "Infrastructure Management",
      github: "https://github.com/celestifyx"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-pattern.svg"
            alt="Background Pattern"
            fill
            className="opacity-5 object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-3">Open Source Project</Badge>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  Snigdha OS
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  A modern, secure, and user-friendly Arch-based Linux distribution that prioritizes performance, security, and ease of use.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" className="gap-2 text-base">
                  <Download className="h-5 w-5" /> Download Snigdha OS
                </Button>
                <Button variant="outline" asChild size="lg" className="gap-2 text-base">
                  <Link href="https://gitlab.com/snigdhaos" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" /> View on GitHub
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Free & Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Arch-based</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Regular Updates</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/images/snigdha-screenshot.svg"
                  alt="Snigdha OS Desktop Screenshot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl overflow-hidden shadow-xl border-4 border-background">
                <Image
                  src="/images/snigdha-logo.svg"
                  alt="Snigdha OS Logo"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">About Snigdha OS</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Snigdha OS is an innovative Arch-based Linux distribution that combines the power and flexibility of Arch Linux with user-friendly features and enhanced security. As proud contributors and sponsors, we help maintain and improve this distribution to provide a better computing experience for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Snigdha OS?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Snigdha OS combines the best aspects of Arch Linux with user-friendly features. Here's why you should consider using it.
            </p>
          </div>
          
          <Tabs defaultValue="desktop" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="desktop">Desktop Experience</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="servers">Server Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="border rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Elegant Desktop Experience</h3>
                  <p className="text-muted-foreground mb-4">
                    Snigdha OS provides a beautiful, intuitive desktop environment right out of the box. Choose between multiple preconfigured desktop environments including GNOME, KDE Plasma, and XFCE.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Stunning visual themes and customization options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pre-installed productivity applications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Seamless multimedia experience with codecs pre-installed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Optimized for laptops with battery management tools</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden bg-muted border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">Desktop Screenshot</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="development" className="border rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Developer-Friendly Environment</h3>
                  <p className="text-muted-foreground mb-4">
                    Snigdha OS comes with tools that developers love, configured and ready to use. From web development to system programming, everything is just a few clicks away.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Development tools and compilers pre-installed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Container and virtualization support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Easy access to programming language environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Optimized for code editors and IDEs</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden bg-muted border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">Development Environment</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="servers" className="border rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">Reliable Server Platform</h3>
                  <p className="text-muted-foreground mb-4">
                    Snigdha OS provides a lightweight and stable base for servers with enhanced security features and optimization for common server workloads.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minimal server installation option</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Advanced firewall configurations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Containerization and virtualization tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Server monitoring and management utilities</span>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-[300px] relative rounded-lg overflow-hidden bg-muted border border-border">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground">Server Configuration</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background border-border/50">
                <CardContent className="pt-8">
                  <div className="text-5xl text-primary mb-4">"</div>
                  <p className="mb-4 italic">{testimonial.quote}</p>
                  <p className="text-sm text-muted-foreground font-medium">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Release Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Latest Releases</h2>
            <Button variant="outline" asChild>
              <Link href="https://gitlab.com/snigdhaos/releases" target="_blank" rel="noopener noreferrer">
                View All Releases <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {releases.map((release, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Version {release.version}</CardTitle>
                    <Badge variant="secondary">{release.date}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {release.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Download <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-4">Core Team</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Meet the dedicated individuals working to make Snigdha OS better for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={member.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="text-center flex flex-col items-center justify-center border-dashed border-2">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Join the team and contribute to Snigdha OS</p>
                <Button variant="link" asChild className="mt-4">
                  <Link href="https://gitlab.com/snigdhaos/contribute" target="_blank" rel="noopener noreferrer">
                    Get Involved
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Contribution */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Our Contribution</h2>
          <Card className="border border-border/50">
            <CardHeader>
              <CardTitle>How We Support Snigdha OS</CardTitle>
              <CardDescription>
                Our team at Tonmoy Infrastructure Vision is proud to contribute to the Snigdha OS project in various ways.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Infrastructure Support</h3>
                  <p className="text-muted-foreground">
                    We provide hosting, CI/CD pipelines, and infrastructure maintenance for core services, ensuring Snigdha OS can be developed and distributed smoothly.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Development</h3>
                  <p className="text-muted-foreground">
                    Our developers contribute to core system components, package management, and security features, helping to improve the OS functionality and user experience.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Building</h3>
                  <p className="text-muted-foreground">
                    We actively support documentation, user forums, and community engagement initiatives, helping users get the most out of Snigdha OS.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Try Snigdha OS?</h2>
            <p className="text-muted-foreground mb-8">
              Download Snigdha OS today and experience the perfect balance of power, security, and ease of use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" /> Download
              </Button>
              <Button variant="outline" asChild size="lg" className="w-full sm:w-auto">
                <Link href="https://gitlab.com/snigdhaos/contribute" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" /> Contribute
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}