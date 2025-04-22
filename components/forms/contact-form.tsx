"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { CatButton } from "@/components/ui/cat-button";
import { CatBadge } from "@/components/ui/cat-badge";
import { 
  CatCard, 
  CatCardHeader, 
  CatCardTitle, 
  CatCardContent 
} from "@/components/ui/cat-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CatGradientText from "@/components/cat-gradient-text";
import CatLoading from "@/components/cat-loading";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        company: values.company || "Not provided",
        subject: values.subject,
        message: values.message,
        to_name: "Tonmoy Talukdar",
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Show success message
      toast.success("Your message has been sent successfully!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // If form was successfully submitted, show success message
  if (isSubmitted) {
    return (
      <CatCard variant="glass" shadow="glow" className="w-full p-8">
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="h-20 w-20 rounded-full bg-blue/10 flex items-center justify-center mb-6">
            <CheckCircle className="h-10 w-10 text-blue" />
          </div>
          <CatGradientText 
            variant="mauve-lavender" 
            animate 
            size="2xl" 
            weight="bold" 
            className="mb-4"
          >
            Message Received!
          </CatGradientText>
          <p className="text-muted-foreground max-w-md mb-6">
            Thank you for reaching out. We will get back to you as soon as possible.
          </p>
          <CatBadge variant="lavender" size="lg" pill glow className="animate-pulse">
            We appreciate your interest!
          </CatBadge>
        </div>
      </CatCard>
    );
  }

  return (
    <CatCard variant="glass" shadow="md" className="w-full">
      <CatCardHeader>
        <CatCardTitle>
          <CatGradientText variant="mauve-lavender" size="2xl">
            Send Us a Message
          </CatGradientText>
        </CatCardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll respond within 24 hours
        </p>
      </CatCardHeader>
      <CatCardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="bg-background/50 border-mauve/20 backdrop-blur-sm" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your email address" 
                        {...field} 
                        className="bg-background/50 border-mauve/20 backdrop-blur-sm" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your company name" 
                      {...field} 
                      className="bg-background/50 border-mauve/20 backdrop-blur-sm" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Message subject" 
                      {...field} 
                      className="bg-background/50 border-mauve/20 backdrop-blur-sm" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className="min-h-[150px] bg-background/50 border-mauve/20 backdrop-blur-sm" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Share details about your project or inquiries you may have.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <CatButton 
              type="submit" 
              variant="lavender"
              glow
              animated
              size="lg"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <CatLoading variant="spinner" size="sm" color="lavender" /> 
                  <span className="ml-2">Sending...</span>
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </CatButton>
          </form>
        </Form>
      </CatCardContent>
    </CatCard>
  );
}