"use client";

import React from "react";
import { Metadata } from "next";
import { CatButton } from "@/components/ui/cat-button";
import { CatBadge } from "@/components/ui/cat-badge";
import { 
  CatCard, 
  CatCardHeader, 
  CatCardTitle, 
  CatCardDescription, 
  CatCardContent,
  CatCardFooter 
} from "@/components/ui/cat-card";
import CatGradientText from "@/components/cat-gradient-text";
import CatLoading from "@/components/cat-loading";
import TextReveal from "@/components/text-reveal";
import { Separator } from "@/components/ui/separator";
import FloatingElement from "@/components/floating-element";

export const metadata: Metadata = {
  title: "Catppuccin Theme",
  description: "Showcasing the Catppuccin theme components",
};

export default function CatppuccinPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <CatBadge variant="mauve" pill className="mb-2">Beautiful Themes</CatBadge>
        <TextReveal
          element="h1"
          text="Catppuccin Components"
          className="text-4xl font-bold mb-3 font-heading md:text-5xl"
        />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A soothing pastel theme for the high-spirited!
        </p>
      </div>

      {/* Buttons Showcase */}
      <section className="mb-16">
        <CatGradientText variant="mauve-lavender" size="2xl" className="mb-6">
          Buttons
        </CatGradientText>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <CatButton variant="default">Default</CatButton>
          <CatButton variant="primary">Primary</CatButton>
          <CatButton variant="secondary">Secondary</CatButton>
          <CatButton variant="destructive">Destructive</CatButton>
          <CatButton variant="outline">Outline</CatButton>
          <CatButton variant="ghost">Ghost</CatButton>
          <CatButton variant="link">Link</CatButton>
          <CatButton variant="lavender">Lavender</CatButton>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CatButton variant="sapphire" glow animated>Sapphire Glow</CatButton>
          <CatButton variant="peach" glow animated>Peach Glow</CatButton>
          <CatButton variant="green" glow animated>Green Glow</CatButton>
          <CatButton variant="lavender" glow animated>Lavender Glow</CatButton>
        </div>
      </section>
      
      <Separator className="my-12" />

      {/* Badges Showcase */}
      <section className="mb-16">
        <CatGradientText variant="blue-sapphire" size="2xl" className="mb-6">
          Badges
        </CatGradientText>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <CatBadge variant="default">Default</CatBadge>
          <CatBadge variant="secondary">Secondary</CatBadge>
          <CatBadge variant="destructive">Destructive</CatBadge>
          <CatBadge variant="outline">Outline</CatBadge>
          <CatBadge variant="success">Success</CatBadge>
          <CatBadge variant="info">Info</CatBadge>
          <CatBadge variant="warning">Warning</CatBadge>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <CatBadge variant="mauve" pill>Mauve</CatBadge>
          <CatBadge variant="lavender" pill glow>Lavender</CatBadge>
          <CatBadge variant="teal" pill glow>Teal</CatBadge>
          <CatBadge variant="info" pill animated>Animated</CatBadge>
          <CatBadge variant="outline" size="lg">Large</CatBadge>
          <CatBadge variant="mauve" size="sm">Small</CatBadge>
        </div>
      </section>
      
      <Separator className="my-12" />

      {/* Cards Showcase */}
      <section className="mb-16">
        <CatGradientText variant="green-teal" size="2xl" className="mb-6">
          Cards
        </CatGradientText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CatCard>
            <CatCardHeader>
              <CatCardTitle>Default Card</CatCardTitle>
              <CatCardDescription>Basic card with no styling</CatCardDescription>
            </CatCardHeader>
            <CatCardContent>
              <p>This is the default card style</p>
            </CatCardContent>
            <CatCardFooter>
              <CatButton variant="outline" size="sm">Learn More</CatButton>
            </CatCardFooter>
          </CatCard>
          
          <CatCard variant="glass" shadow="lg">
            <CatCardHeader>
              <CatCardTitle>Glass Card</CatCardTitle>
              <CatCardDescription>Stylish glass effect with blur</CatCardDescription>
            </CatCardHeader>
            <CatCardContent>
              <p>This card has a glass morphism effect</p>
            </CatCardContent>
            <CatCardFooter>
              <CatButton variant="sapphire" size="sm">Explore</CatButton>
            </CatCardFooter>
          </CatCard>
          
          <CatCard variant="bordered" shadow="glow">
            <CatCardHeader>
              <CatCardTitle>Bordered Card</CatCardTitle>
              <CatCardDescription>With border and glow effect</CatCardDescription>
            </CatCardHeader>
            <CatCardContent>
              <p>This card has a border and glow effect</p>
            </CatCardContent>
            <CatCardFooter>
              <CatButton variant="lavender" size="sm">View Details</CatButton>
            </CatCardFooter>
          </CatCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <CatCard variant="colored" color="blue" animated hover>
            <CatCardHeader>
              <CatCardTitle>Animated Card</CatCardTitle>
              <CatCardDescription>Colorful with hover animation</CatCardDescription>
            </CatCardHeader>
            <CatCardContent>
              <p>This card has color and animations when hovered</p>
            </CatCardContent>
            <CatCardFooter>
              <CatButton variant="primary" size="sm">Hover Me</CatButton>
            </CatCardFooter>
          </CatCard>
          
          <CatCard variant="colored" color="mauve" animated hover>
            <CatCardHeader>
              <CatCardTitle>Mauve Card</CatCardTitle>
              <CatCardDescription>Mauve gradient with hover effect</CatCardDescription>
            </CatCardHeader>
            <CatCardContent>
              <p>This card uses mauve colors from Catppuccin</p>
            </CatCardContent>
            <CatCardFooter>
              <CatButton variant="lavender" size="sm">Try Now</CatButton>
            </CatCardFooter>
          </CatCard>
        </div>
      </section>
      
      <Separator className="my-12" />

      {/* Gradient Text Showcase */}
      <section className="mb-16">
        <CatGradientText variant="peach-yellow" size="2xl" className="mb-6">
          Gradient Text
        </CatGradientText>
        
        <div className="space-y-4">
          <CatGradientText variant="mauve-lavender" size="3xl">Mauve to Lavender</CatGradientText>
          <CatGradientText variant="blue-sapphire" size="3xl">Blue to Sapphire</CatGradientText>
          <CatGradientText variant="red-maroon" size="3xl">Red to Maroon</CatGradientText>
          <CatGradientText variant="peach-yellow" size="3xl">Peach to Yellow</CatGradientText>
          <CatGradientText variant="green-teal" size="3xl">Green to Teal</CatGradientText>
          <CatGradientText variant="mauve-lavender" size="3xl" animate>Animated Gradient</CatGradientText>
          <CatGradientText variant="custom" from="from-pink" to="to-red" size="3xl">Custom Gradient</CatGradientText>
        </div>
      </section>
      
      <Separator className="my-12" />

      {/* Loading Indicators */}
      <section className="mb-16">
        <CatGradientText variant="red-maroon" size="2xl" className="mb-6">
          Loading Indicators
        </CatGradientText>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center justify-center">
          <FloatingElement>
            <CatLoading variant="dots" color="lavender" text="Loading..." />
          </FloatingElement>
          
          <FloatingElement offset={5}>
            <CatLoading variant="spinner" color="blue" text="Spinner" />
          </FloatingElement>
          
          <FloatingElement offset={8}>
            <CatLoading variant="pulse" color="pink" text="Pulse" />
          </FloatingElement>
          
          <FloatingElement offset={6}>
            <CatLoading variant="gradient" color="green" text="Gradient" />
          </FloatingElement>
          
          <FloatingElement offset={7}>
            <CatLoading variant="bouncing" color="peach" text="Bouncing" />
          </FloatingElement>
        </div>
      </section>
      
      <div className="text-center mt-24">
        <CatGradientText variant="blue-sapphire" size="xl" animated>
          Crafted with ❤️ using Catppuccin themes
        </CatGradientText>
      </div>
    </div>
  );
} 