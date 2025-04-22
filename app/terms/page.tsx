import type { Metadata } from 'next';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our Terms of Service to understand the rules and guidelines for using Tonmoy Infrastructure & Vision services.',
  openGraph: {
    title: 'Terms of Service | Tonmoy Infrastructure & Vision',
    description: 'Read our Terms of Service to understand the rules and guidelines for using Tonmoy Infrastructure & Vision services.',
  },
};

export default function TermsOfServicePage() {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing or using the services, website, and software provided by Tonmoy Infrastructure & Vision (\"Company,\" \"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "Services Description",
      content: "We provide infrastructure, security, and DevOps solutions including cloud infrastructure management, cybersecurity services, CI/CD pipeline development, and related consulting services. The specific deliverables, timelines, and payment terms for custom services will be detailed in separate agreements or statements of work between you and the Company."
    },
    {
      title: "Account Registration",
      content: "To access certain features of our services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account credentials and for all activities that occur under your account."
    },
    {
      title: "Intellectual Property Rights",
      content: "Unless otherwise specified in a separate agreement, the Company retains all right, title, and interest in and to our services, including all intellectual property rights. You may not use, copy, modify, distribute, or create derivative works based upon our content without our express written permission. Open-source components provided by us are subject to their respective licenses."
    },
    {
      title: "User Responsibilities",
      content: "When using our services, you agree not to: (a) violate any applicable laws or regulations; (b) infringe upon the rights of others; (c) attempt to gain unauthorized access to our systems or other users' accounts; (d) interfere with or disrupt the integrity or performance of our services; (e) engage in fraudulent, deceptive, or misleading practices; or (f) transmit any viruses, malware, or other harmful code."
    },
    {
      title: "Payment Terms",
      content: "For paid services, you agree to pay all fees specified in the applicable order form or statement of work. Unless otherwise specified, all fees are non-refundable and quoted in U.S. dollars. You are responsible for all taxes associated with your purchase. Late payments may incur interest charges, and we reserve the right to suspend services for non-payment."
    },
    {
      title: "Confidentiality",
      content: "Each party agrees to keep confidential any non-public information disclosed by the other party in connection with the services, including but not limited to technical information, business plans, and customer data. This obligation does not apply to information that is publicly available, independently developed, or rightfully received from a third party."
    },
    {
      title: "Warranty Disclaimer",
      content: "EXCEPT AS EXPRESSLY PROVIDED HEREIN, OUR SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT."
    },
    {
      title: "Limitation of Liability",
      content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless the Company and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any rights of another; or (d) your breach of any separate agreement between you and the Company."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of the State of California without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in San Francisco County, California."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    },
    {
      title: "Entire Agreement",
      content: "These Terms, together with any separate agreements between you and the Company regarding specific services, constitute the entire agreement between you and the Company regarding your use of our services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning their subject matter."
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Badge variant="outline" className="mb-3">Legal</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            The rules and guidelines for using our services.
          </p>
        </div>
        
        {/* Last Updated */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/" 
              className="text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" /> Back to home
            </Link>
            <p className="text-sm text-muted-foreground">
              Last Updated: June 15, 2025
            </p>
          </div>
        </div>
        
        {/* Introduction */}
        <Card className="max-w-3xl mx-auto mb-10">
          <CardContent className="pt-6">
            <p className="mb-4">
              Welcome to Tonmoy Infrastructure & Vision. By accessing or using our services, you agree to be bound by these Terms of Service ("Terms").
            </p>
            <p>
              Please read these Terms carefully before using our website or services. These Terms apply to all visitors, users, and others who access or use our services.
            </p>
          </CardContent>
        </Card>
        
        {/* Terms Sections */}
        <div className="max-w-3xl mx-auto space-y-8">
          {termsSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground mb-6">{section.content}</p>
              
              {index < termsSections.length - 1 && <Separator className="my-6" />}
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <Card className="max-w-3xl mx-auto mt-12">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="space-y-2">
              <li>By email: <a href="mailto:legal@tonmoyiv.com" className="text-primary hover:underline">legal@tonmoyiv.com</a></li>
              <li>By mail: Tonmoy Infrastructure & Vision, 123 Tech Plaza, Suite 400, San Francisco, CA 94103</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}