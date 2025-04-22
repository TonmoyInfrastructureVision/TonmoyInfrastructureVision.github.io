import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <CardHeader className="pb-4">
          <motion.div 
            className="mb-3 text-primary"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Link 
            href={link} 
            className="text-primary font-medium text-sm flex items-center hover:underline"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}