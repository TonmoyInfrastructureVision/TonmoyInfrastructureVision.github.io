import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CatBadge } from "@/components/ui/cat-badge";
import { 
  CatCard, 
  CatCardContent 
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";
import TextReveal from "@/components/text-reveal";
import FloatingElement from "@/components/floating-element";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Eshan Roy",
      role: "Founder & CEO",
      bio: "Eshan leads our vision for innovative technological solutions.",
      image: "https://avatars.githubusercontent.com/u/59612243"
    }
  ];
  
  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new technologies and methodologies to stay at the forefront of infrastructure solutions.",
      color: "blue"
    },
    {
      title: "Security",
      description: "We embed security principles at every level, ensuring our solutions protect sensitive data and critical systems.",
      color: "red"
    },
    {
      title: "Reliability",
      description: "We build infrastructure that's resilient, scalable, and maintainable for long-term operational success.",
      color: "green"
    },
    {
      title: "Transparency",
      description: "We believe in clear communication and sharing knowledge openly with our clients and the tech community.",
      color: "sapphire"
    },
    {
      title: "Community",
      description: "We actively contribute to open-source projects and support the growth of the wider technology ecosystem.",
      color: "mauve"
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every aspect of our work, from code quality to client relationships.",
      color: "peach"
    }
  ];

  return (
    <div className="pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <CatBadge variant="lavender" pill className="mb-3">About Us</CatBadge>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6 font-heading">
            Our <CatGradientText variant="mauve-lavender" animate>Story</CatGradientText>
          </h1>
          <p className="text-xl text-muted-foreground">
            Building the backbone of modern technological ecosystems with innovation and expertise.
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <FloatingElement>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 rounded-xl border border-mauve/20 z-10"></div>
              <Image 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Infrastructure visualization"
                fill
                className="object-cover"
              />
            </div>
          </FloatingElement>
          
          <div>
            <TextReveal 
              element="h2"
              text="Our Mission"
              className="text-3xl font-bold tracking-tight mb-6 font-heading"
            />
            <p className="text-lg mb-8">
              At Tonmoy Infrastructure & Vision, our mission is to fuse visionary ideas with practical engineering, 
              empowering startups, enterprises, and communities with cutting-edge tools, frameworks, and automation 
              solutions. We're dedicated to building technological foundations that enable organizations to thrive 
              in an increasingly digital world.
            </p>
            <TextReveal 
              element="h2"
              text="Our Vision"
              className="text-3xl font-bold tracking-tight mb-6 font-heading"
            />
            <p className="text-lg">
              We envision a future where infrastructure is intelligent, resilient, and secure by design. 
              Every project we build is crafted with precision, scalability, and long-term sustainability 
              in mind, setting new standards for what's possible in technological infrastructure.
            </p>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <CatGradientText variant="blue-sapphire" size="3xl" className="mb-4">
              Our Core Values
            </CatGradientText>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These guiding principles inform everything we do, from the code we write to the relationships we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <CatCard 
                key={index} 
                variant="glass" 
                shadow="md" 
                hover 
                animated
                className="h-full"
              >
                <CatCardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className={`h-6 w-6 text-${value.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-heading">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CatCardContent>
              </CatCard>
            ))}
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <CatGradientText variant="peach-yellow" size="3xl" className="mb-4">
              Our Team
            </CatGradientText>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experts behind Tonmoy Infrastructure & Vision who bring diverse skills and deep expertise to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 place-items-center">
            <div className="max-w-sm w-full">
              {teamMembers.map((member, index) => (
                <FloatingElement key={index}>
                  <div className="group glass p-6 rounded-xl border border-mauve/20">
                    <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                      <Image 
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 font-heading">{member.name}</h3>
                    <CatGradientText variant="blue-sapphire" weight="medium" className="mb-2">
                      {member.role}
                    </CatGradientText>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}