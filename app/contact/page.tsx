"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";
import { 
  CatCard, 
  CatCardHeader, 
  CatCardTitle, 
  CatCardDescription, 
  CatCardContent 
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";
import TextReveal from "@/components/text-reveal";
import { CatBadge } from "@/components/ui/cat-badge";
import ParallaxBackground from "@/components/parallax-background";
import FloatingElement from "@/components/floating-element";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue" />,
      title: "Email",
      details: "contact@tonmoyiv.com",
      link: "mailto:contact@tonmoyiv.com",
      gradientType: "blue-sapphire" as const
    },
    {
      icon: <Phone className="h-6 w-6 text-green" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      gradientType: "green-teal" as const
    },
    {
      icon: <MapPin className="h-6 w-6 text-peach" />,
      title: "Address",
      details: "123 Tech Plaza, Suite 400, San Francisco, CA 94103",
      link: "https://maps.google.com",
      gradientType: "peach-yellow" as const
    }
  ];

  return (
    <div className="pt-28 pb-16 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 opacity-5">
        <ParallaxBackground />
      </div>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <CatBadge variant="lavender" pill className="mb-3">Contact Us</CatBadge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-heading">
            Get in <CatGradientText variant="mauve-lavender" animate>Touch</CatGradientText>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? 
            Reach out to us and we'll get back to you soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="lg:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <CatCard key={index} variant="glass" shadow="md" animated>
                  <CatCardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <CatGradientText variant={item.gradientType} weight="medium" size="base" className="mb-1">
                          {item.title}
                        </CatGradientText>
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.details}
                        </a>
                      </div>
                    </div>
                  </CatCardContent>
                </CatCard>
              ))}
            </div>
            
            <FloatingElement offset={10} className="relative z-10">
              <CatCard variant="glass" shadow="glow" className="overflow-hidden">
                <CatCardHeader className="pb-0">
                  <CatCardTitle>Our Location</CatCardTitle>
                  <CatCardDescription>
                    Visit our headquarters in San Francisco
                  </CatCardDescription>
                </CatCardHeader>
                <CatCardContent className="p-0 h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.07476231367!2d-122.47261804672964!3d37.77895771132536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090002d304f%3A0x70b0c8d84e4324dc!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2snl!4v1702399545529!5m2!1sen!2snl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </CatCardContent>
              </CatCard>
            </FloatingElement>
          </div>
        </div>
      </div>
    </div>
  );
}