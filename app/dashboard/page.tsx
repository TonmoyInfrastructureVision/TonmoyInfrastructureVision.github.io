import { Metadata } from "next";
import AnalyticsDashboard from "@/components/sections/analytics-dashboard";

export const metadata: Metadata = {
  title: "Infrastructure Dashboard | TonmoyInfrastructureVision",
  description: "Monitor and manage your infrastructure with real-time analytics and insights.",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Infrastructure Dashboard
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Real-time monitoring and analytics for your critical infrastructure systems
              </p>
            </div>
          </div>
        </div>
        
        <AnalyticsDashboard />
      </div>
    </div>
  );
} 