import { Metadata } from "next";
import Image from "next/image";
import { CalendarClock, Mail, Shield, ArrowRight, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { AppointmentForm } from "@/components/forms/appointment-form";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";
import { CatBadge } from "@/components/ui/cat-badge";
import { 
  CatCard, 
  CatCardContent 
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";

export const metadata: Metadata = {
  title: "Schedule a Meeting with Our CEO | Tonmoy Infrastructure & Vision",
  description: "Book a one-on-one consultation with Eshan Roy, CEO of Tonmoy Infrastructure Vision, to discuss your infrastructure needs.",
};

export default function ScheduleMeetingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="py-16 md:py-24 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-dot-pattern bg-dot-sm opacity-20"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <CatBadge variant="lavender" pill className="mb-2">Executive Consultation</CatBadge>
              <TextReveal 
                element="h1" 
                text="Schedule a Meeting with Our CEO"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-heading"
              />
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Book a personalized consultation to discuss your infrastructure challenges and solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16">
              <div className="lg:col-span-2">
                <div className="sticky top-20">
                  <div className="flex flex-col items-center lg:items-start space-y-8">
                    <FloatingElement offset={6} duration={6}>
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-mauve/20 shadow-cat-glow">
                        <Image 
                          src="/images/ceo-portrait.jpg" 
                          alt="Tonmoy Talukdar, CEO" 
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mauve/30 to-transparent opacity-60"></div>
                      </div>
                    </FloatingElement>
                    
                    <div className="text-center lg:text-left">
                      <h2 className="text-2xl font-bold font-heading">Eshan Roy</h2>
                      <CatGradientText variant="mauve-lavender" weight="medium">Founder & CEO</CatGradientText>
                    </div>
                    
                    <p className="text-muted-foreground max-w-md text-center lg:text-left">
                      With over 15 years of experience in infrastructure engineering and cybersecurity, 
                      Eshan has helped Fortune 500 companies optimize their digital infrastructure and 
                      implement robust security frameworks.
                    </p>
                    
                    <Separator className="my-4 bg-mauve/20" />
                    
                    <div className="grid grid-cols-1 gap-4 w-full">
                      <CatCard variant="glass" shadow="md">
                        <CatCardContent className="p-4 flex items-center">
                          <Mail className="h-5 w-5 text-blue mr-3" />
                          <span>ceo@tivision.tech</span>
                        </CatCardContent>
                      </CatCard>
                      
                      <CatCard variant="glass" shadow="md">
                        <CatCardContent className="p-4 flex flex-col space-y-2">
                          <div className="flex items-center">
                            <CalendarClock className="h-5 w-5 text-mauve mr-3" />
                            <span className="font-medium">Availability</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">
                            Monday to Friday, 9:00 AM - 5:00 PM ET
                          </p>
                        </CatCardContent>
                      </CatCard>
                      
                      <CatCard variant="glass" shadow="md">
                        <CatCardContent className="p-4 flex flex-col space-y-2">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-teal mr-3" />
                            <span className="font-medium">Meeting Duration</span>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">
                            45 minutes (30 min consultation + 15 min Q&A)
                          </p>
                        </CatCardContent>
                      </CatCard>
                    </div>
                    
                    <CatCard variant="glass" shadow="glow">
                      <CatCardContent className="p-4 flex items-start">
                        <div className="mr-3 mt-0.5 relative">
                          <Shield className="h-5 w-5 text-lavender z-10 relative" />
                          <div className="absolute inset-0 animate-pulse-ring bg-lavender rounded-full"></div>
                        </div>
                        <div>
                          <p className="font-medium">Confidentiality Guaranteed</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            All discussions are covered under our standard NDA to protect your business information.
                          </p>
                        </div>
                      </CatCardContent>
                    </CatCard>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 glass backdrop-blur-sm p-6 md:p-8 rounded-xl border border-mauve/20 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 to-blue/5 opacity-50"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <CatGradientText variant="blue-sapphire" size="2xl" className="mb-2 font-heading">
                      Request an Appointment
                    </CatGradientText>
                    <p className="text-muted-foreground">
                      Fill out the form below to schedule a personalized meeting with our CEO. 
                      We'll get back to you within 24 hours to confirm your appointment.
                    </p>
                  </div>
                  
                  <AppointmentForm />
                </div>
              </div>
            </div>
            
            <div className="mt-24 glass backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mauve/5 to-sapphire/5 opacity-40"></div>
              <div className="relative z-10">
                <TextReveal 
                  element="h3" 
                  text="What to Expect in Your Meeting"
                  className="text-2xl font-bold mb-8 font-heading text-center"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="glass rounded-full w-10 h-10 flex items-center justify-center mr-3 text-blue border border-blue/20">
                        <span className="font-bold">1</span>
                      </div>
                      <h4 className="font-bold font-heading">Assessment</h4>
                    </div>
                    <p className="text-muted-foreground ml-13">
                      A deep dive into your current infrastructure setup and challenges you're facing.
                    </p>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="glass rounded-full w-10 h-10 flex items-center justify-center mr-3 text-mauve border border-mauve/20">
                        <span className="font-bold">2</span>
                      </div>
                      <h4 className="font-bold font-heading">Strategic Insights</h4>
                    </div>
                    <p className="text-muted-foreground ml-13">
                      Expert recommendations tailored to your specific business needs and goals.
                    </p>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center mb-3">
                      <div className="glass rounded-full w-10 h-10 flex items-center justify-center mr-3 text-teal border border-teal/20">
                        <span className="font-bold">3</span>
                      </div>
                      <h4 className="font-bold font-heading">Action Plan</h4>
                    </div>
                    <p className="text-muted-foreground ml-13">
                      Clear next steps and potential solutions that can be implemented right away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 