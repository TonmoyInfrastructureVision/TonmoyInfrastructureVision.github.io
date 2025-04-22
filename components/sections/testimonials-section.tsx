"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Mitchell",
    role: "CTO",
    company: "TechVantage Solutions",
    avatar: "/avatars/alex-mitchell.jpg",
    content: "TIVision transformed our cloud infrastructure, reducing costs by 40% while improving performance. Their team's expertise in AWS architecture is unmatched.",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Security",
    company: "FinSecure Inc.",
    avatar: "/avatars/sarah-johnson.jpg",
    content: "Their security audit uncovered critical vulnerabilities that our previous assessments missed. The remediation strategy was practical and effective.",
  },
  {
    name: "Michael Zhang",
    role: "DevOps Lead",
    company: "InnovateTech",
    avatar: "/avatars/michael-zhang.jpg",
    content: "Implementing their CI/CD pipeline recommendations cut our deployment time from hours to minutes. The automation workflows they designed are elegant.",
  },
  {
    name: "Priya Sharma",
    role: "VP of Engineering",
    company: "DataStream Systems",
    avatar: "/avatars/priya-sharma.jpg",
    content: "Their AI monitoring solution has given us unprecedented visibility into our infrastructure. We can now predict and prevent issues before they impact users.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it—hear from organizations who've transformed their infrastructure with our solutions.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="h-6 w-6 text-primary mb-4" />
                        <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
} 