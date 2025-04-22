"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
  readTime: number;
  author: {
    name: string;
    avatar: string;
  };
  slug: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Securing Kubernetes Clusters: Best Practices for Enterprise Deployments",
    description: "Learn how to implement robust security measures for your Kubernetes infrastructure with our comprehensive guide to best practices.",
    category: "Security",
    date: new Date("2023-10-15"),
    readTime: 8,
    author: {
      name: "Rohan Sharma",
      avatar: "/authors/rohan-sharma.jpg"
    },
    slug: "securing-kubernetes-clusters"
  },
  {
    id: "2",
    title: "How We Reduced AWS Costs by 60% with Infrastructure Optimization",
    description: "Discover the strategies and tools we used to dramatically cut cloud costs while improving performance for a financial services client.",
    category: "Cloud",
    date: new Date("2023-11-03"),
    readTime: 6,
    author: {
      name: "Priya Malik",
      avatar: "/authors/priya-malik.jpg"
    },
    slug: "reducing-aws-costs-infrastructure-optimization"
  },
  {
    id: "3",
    title: "Building a Modern CI/CD Pipeline with GitHub Actions and Terraform",
    description: "A step-by-step guide to creating an efficient CI/CD pipeline that automates your infrastructure provisioning and application deployment.",
    category: "DevOps",
    date: new Date("2023-11-28"),
    readTime: 10,
    author: {
      name: "Tonmoy Talukdar",
      avatar: "/authors/tonmoy-talukdar.jpg"
    },
    slug: "modern-cicd-pipeline-github-terraform"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-3">Insights & Updates</Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Expert insights, technical deep dives, and industry trends to help you stay ahead in the world of infrastructure and cybersecurity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>{format(post.date, "MMM d, yyyy")}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center">
                    <div className="flex items-center text-sm text-muted-foreground mr-4">
                      <User className="mr-1 h-3 w-3" />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-primary p-0 h-auto" asChild>
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 