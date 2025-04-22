"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

export default function ContactPage() {
  const { toast } = useToast();
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "contact@tonmoyiv.com",
      link: "mailto:contact@tonmoyiv.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "123 Tech Plaza, Suite 400, San Francisco, CA 94103",
      link: "https://maps.google.com"
    }
  ];

  return (
    <div className="pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or want to learn more about our services? 
                Reach out to us and we'll get back to you soon.
              </p>
            </div>
            
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div className="lg:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mb-10">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <a 
                          href={item.link} 
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="border bg-card overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle>Our Location</CardTitle>
                <CardDescription>
                  Visit our headquarters in San Francisco
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.07476231367!2d-122.47261804672964!3d37.77895771132536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090002d304f%3A0x70b0c8d84e4324dc!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2snl!4v1702399545529!5m2!1sen!2snl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}