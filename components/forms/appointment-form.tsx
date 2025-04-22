"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon, CheckCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { z } from "zod";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import CatGradientText from "@/components/cat-gradient-text";
import CatLoading from "@/components/cat-loading";

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  phone: z.string().min(7, {
    message: "Please enter a valid phone number.",
  }),
  date: z.date({
    required_error: "Please select a date for the meeting.",
  }),
  time: z.string({
    required_error: "Please select a time slot.",
  }),
  topic: z.string({
    required_error: "Please select a meeting topic.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Time slots
const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
];

// Meeting topics
const meetingTopics = [
  "Initial Consultation",
  "Infrastructure Assessment",
  "Security Analysis",
  "Performance Optimization",
  "Cloud Migration Strategy",
  "DevOps Implementation",
  "Disaster Recovery Planning",
  "Other (Please specify in message)",
];

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        company: values.company || "Not provided",
        phone: values.phone,
        meeting_date: format(values.date, "PPP"),
        meeting_time: values.time,
        meeting_topic: values.topic,
        message: values.message,
        to_name: "Eshan Roy",
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_APPOINTMENT_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Show success message
      toast.success("Your appointment request has been sent successfully!");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send your appointment request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // If form was successfully submitted, show success message
  if (isSubmitted) {
    return (
      <CatCard variant="glass" shadow="glow" className="w-full max-w-4xl mx-auto p-8">
        <div className="flex flex-col items-center justify-center text-center py-10">
          <div className="h-24 w-24 rounded-full bg-green/10 flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green" />
          </div>
          <CatGradientText 
            variant="green-teal" 
            animate 
            size="3xl" 
            weight="bold" 
            className="mb-4"
          >
            Request Received!
          </CatGradientText>
          <p className="text-lg text-muted-foreground max-w-md mb-6">
            Your appointment request has been successfully submitted. We will contact you shortly to confirm your meeting with Eshan.
          </p>
          <CatBadge variant="success" size="lg" pill glow className="animate-pulse">
            Thank you for reaching out!
          </CatBadge>
        </div>
      </CatCard>
    );
  }

  return (
    <CatCard variant="glass" shadow="md" className="w-full">
      <CatCardHeader>
        <CatCardTitle>
          <CatGradientText variant="blue-sapphire" size="2xl">
            Schedule Your Appointment
          </CatGradientText>
        </CatCardTitle>
        <p className="text-muted-foreground">
          Fill out the form below to request a meeting with Eshan Roy
        </p>
      </CatCardHeader>
      <CatCardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company Field */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Meeting Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <CatButton
                            variant="outline"
                            type="button"
                            className={`w-full pl-3 text-left font-normal ${
                              !field.value ? "text-muted-foreground" : ""
                            }`}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </CatButton>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Time Slot Field */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time Slot</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Meeting Topic Field */}
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meeting Topic</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {meetingTopics.map((topic) => (
                          <SelectItem key={topic} value={topic}>
                            {topic}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Message Field - Full Width */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please provide any additional details about your needs or specific questions you'd like to discuss during the meeting."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    This helps us prepare for our meeting and make it more productive.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <CatButton 
              type="submit" 
              variant="default"
              glow
              animated
              size="lg"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <CatLoading variant="spinner" size="sm" color="lavender" /> 
                  <span className="ml-2">Sending Request...</span>
                </>
              ) : (
                "Request Appointment"
              )}
            </CatButton>
          </form>
        </Form>
      </CatCardContent>
    </CatCard>
  );
} 