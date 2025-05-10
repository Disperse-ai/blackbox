"use client";

import React, { useRef, useEffect } from "react";
import AnimatedText from "@/components/ui/animated-text";
import { ArrowRight, Download, Layers, MessageSquare, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Install BlackBox",
    description: "Download and install BlackBox on your machine. Available for macOS, Windows, and Linux.",
    icon: Download,
    colorClasses: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    number: "02",
    title: "Add Your Models",
    description: "Import your favorite models through Ollama or direct file imports. BlackBox auto-configures settings.",
    icon: Layers,
    colorClasses: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    number: "03",
    title: "Chat & Create",
    description: "Interact with your models through our intuitive chat interface or run them as tools.",
    icon: MessageSquare,
    colorClasses: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    number: "04",
    title: "Extend With Plugins",
    description: "Enhance capabilities with our growing plugin ecosystem for specialized tasks and workflows.",
    icon: Wand2,
    colorClasses: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10");
        }
      },
      { threshold: 0.1 }
    );
    
    const stepsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10");
        }
      },
      { threshold: 0.1 }
    );
    
    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    
    if (stepsRef.current) {
      stepsObserver.observe(stepsRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (stepsRef.current) {
        stepsObserver.unobserve(stepsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="how-it-works" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-background to-background/95 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),rgba(124,58,237,0)_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={titleRef} 
          className="max-w-xl mx-auto text-center mb-16 md:mb-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="How BlackBox Works" 
              className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400" 
            />
            <span className="text-foreground">Simple Yet Powerful</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started with BlackBox in just a few steps. Our intuitive interface makes working with complex AI models surprisingly simple.
          </p>
        </div>
        
        <div
          ref={stepsRef} 
          className="max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-300"
        >
          <div className="relative">
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-blue-500/30 to-transparent"></div>
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                  <div className={cn(
                    "w-16 h-16 md:w-24 md:h-24 rounded-xl flex items-center justify-center border flex-shrink-0 relative z-10 transition-colors duration-300",
                    step.colorClasses
                  )}>
                    <step.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  <div className="md:pt-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl md:text-2xl font-bold text-muted-foreground/50">{step.number}</span>
                      <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground max-w-xl">{step.description}</p>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center absolute left-8 md:left-12 mt-24 ml-0 md:ml-0">
                      <ArrowRight className="w-4 h-4 text-blue-400/30 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}