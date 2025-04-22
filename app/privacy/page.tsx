import type { Metadata } from 'next';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Tonmoy Infrastructure & Vision collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy | Tonmoy Infrastructure & Vision',
    description: 'Learn how Tonmoy Infrastructure & Vision collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  },
};

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      title: "Information Collection",
      content: "We collect information when you register on our site, place an order, subscribe to a newsletter, or fill out a form. When ordering or registering on our site, you may be asked to enter your name, email address, company information, or other details to help you with your experience. We also collect information automatically through cookies and similar technologies about your browsing behavior and device information."
    },
    {
      title: "Use of Information",
      content: "We may use the information we collect from you for the following purposes: To personalize your experience; To improve our website and services; To process transactions; To send periodic emails regarding your projects or other products and services; To follow up with you after correspondence; and To comply with legal obligations."
    },
    {
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information. We use advanced encryption for sensitive data transmission, secure servers, and follow industry-standard security practices. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems."
    },
    {
      title: "Third-Party Services",
      content: "We may employ third-party companies and individuals due to the following reasons: To facilitate our services; To perform service-related services; To assist us in analyzing how our services are used; or To assist us in marketing, advertising, and distribution. These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose."
    },
    {
      title: "Cookies & Tracking",
      content: "Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interactions."
    },
    {
      title: "User Rights",
      content: "You have the right to access, correct, delete, or export your personal data. You may also object to or restrict certain processing of your data or withdraw consent where previously provided. To exercise any of these rights, please contact us using the information provided in the 'Contact Us' section below."
    },
    {
      title: "Data Retention",
      content: "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies."
    },
    {
      title: "International Transfers",
      content: "Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information."
    },
    {
      title: "Changes to Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. You are advised to review this Privacy Policy periodically for any changes."
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <Badge variant="outline" className="mb-3">Legal</Badge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your information.
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
              At Tonmoy Infrastructure & Vision ("we," "us," or "our"), we respect your privacy and are committed to protecting it through our compliance with this policy.
            </p>
            <p className="mb-4">
              This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website <span className="font-medium">tonmoyiv.com</span> (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
            </p>
            <p>
              Please read this policy carefully to understand our policies and practices regarding your information. By accessing or using our Website, you agree to this Privacy Policy. If you do not agree with our policies and practices, your choice is not to use our Website.
            </p>
          </CardContent>
        </Card>
        
        {/* Privacy Sections */}
        <div className="max-w-3xl mx-auto space-y-8">
          {privacySections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground mb-6">{section.content}</p>
              
              {index < privacySections.length - 1 && <Separator className="my-6" />}
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <Card className="max-w-3xl mx-auto mt-12">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2">
              <li>By email: <a href="mailto:privacy@tonmoyiv.com" className="text-primary hover:underline">privacy@tonmoyiv.com</a></li>
              <li>By mail: Tonmoy Infrastructure & Vision, 123 Tech Plaza, Suite 400, San Francisco, CA 94103</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}