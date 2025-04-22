import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Resilient Infrastructure: Best Practices for High Availability",
      excerpt: "Learn how to design and implement infrastructure that maintains operations even during failures, with practical examples and architectural patterns.",
      date: "June 15, 2025",
      author: "Jane Smith",
      authorRole: "Founder & CEO",
      category: "Infrastructure",
      tags: ["High Availability", "Cloud Architecture", "Resilience"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      slug: "building-resilient-infrastructure"
    },
    {
      title: "Security by Design: Embedding Cybersecurity in Your DevOps Pipeline",
      excerpt: "Discover how to integrate security practices throughout your development lifecycle to create more secure applications from the ground up.",
      date: "May 28, 2025",
      author: "Aisha Patel",
      authorRole: "Head of Cybersecurity",
      category: "Cybersecurity",
      tags: ["DevSecOps", "Security", "CI/CD"],
      image: "https://images.pexels.com/photos/5380651/pexels-photo-5380651.jpeg",
      slug: "security-by-design"
    },
    {
      title: "Scaling Kubernetes: From Prototype to Production",
      excerpt: "A comprehensive guide to scaling your Kubernetes clusters efficiently as your application grows, with real-world lessons and optimization techniques.",
      date: "May 10, 2025",
      author: "Michael Chen",
      authorRole: "CTO",
      category: "Kubernetes",
      tags: ["Kubernetes", "Scaling", "Container Orchestration"],
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg",
      slug: "scaling-kubernetes"
    },
    {
      title: "Automated Infrastructure Testing: Ensuring Quality at Scale",
      excerpt: "Explore frameworks and methodologies for testing infrastructure code to catch issues before they impact your production environments.",
      date: "April 22, 2025",
      author: "Robert Kang",
      authorRole: "Lead DevOps Engineer",
      category: "DevOps",
      tags: ["Testing", "Automation", "Quality Assurance"],
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg",
      slug: "automated-infrastructure-testing"
    },
    {
      title: "CI/CD Pipeline Optimization: Accelerating Your Development Lifecycle",
      excerpt: "Practical techniques for optimizing your CI/CD pipelines to reduce build times, improve reliability, and accelerate your development workflow.",
      date: "April 8, 2025",
      author: "Robert Kang",
      authorRole: "Lead DevOps Engineer",
      category: "DevOps",
      tags: ["CI/CD", "Optimization", "Development Workflow"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      slug: "cicd-pipeline-optimization"
    },
    {
      title: "The Future of Infrastructure: AI-Powered Operations and Monitoring",
      excerpt: "How artificial intelligence and machine learning are transforming infrastructure management, with case studies and implementation strategies.",
      date: "March 25, 2025",
      author: "Jane Smith",
      authorRole: "Founder & CEO",
      category: "AI",
      tags: ["Artificial Intelligence", "Monitoring", "Future Tech"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      slug: "future-of-infrastructure-ai"
    }
  ];
  
  const categories = [
    "Infrastructure",
    "Cybersecurity",
    "DevOps",
    "Kubernetes",
    "AI",
    "Cloud",
    "Networking"
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-3">Our Blog</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Technical Insights & Expertise
          </h1>
          <p className="text-xl text-muted-foreground">
            Dive into our latest articles, tutorials, and thought leadership on infrastructure,
            security, DevOps, and more.
          </p>
        </div>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          <Button variant="outline" asChild className="rounded-full">
            <Link href="/blog">All Topics</Link>
          </Button>
          
          {categories.map((category, index) => (
            <Button key={index} variant="outline" asChild className="rounded-full">
              <Link href={`/blog/category/${category.toLowerCase()}`}>{category}</Link>
            </Button>
          ))}
        </div>
        
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center mt-1">
                  By {post.author}, {post.authorRole}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              
              <CardFooter>
                <Button variant="ghost" asChild className="p-0 h-auto">
                  <Link href={`/blog/${post.slug}`} className="flex items-center text-primary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Newsletter */}
        <div className="mt-20 bg-card border rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to receive the latest articles, tutorials, and updates
                from our team of experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="sm:flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            
            <div className="hidden md:block relative h-64">
              <Image 
                src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg"
                alt="Newsletter"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}