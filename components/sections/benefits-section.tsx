"use client";

import React, { useRef, useEffect } from "react";
import { 
  Cpu, 
  PlugZap, 
  Unlock, 
  Shield, 
  Code, 
  FolderSync 
} from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedText from "@/components/ui/animated-text";

const benefits = [
  {
    title: "Local AI Inference",
    description: "Run AI models entirely on your machine. No data leaves your computer, ensuring complete privacy and control.",
    icon: Cpu,
    colorClasses: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-400 group-hover:text-blue-950",
    gradientClasses: "group-hover:from-blue-400 group-hover:to-blue-600",
  },
  {
    title: "Modular Plugin System",
    description: "Extend BlackBox's capabilities with plugins. Install new features as needed for a tailored AI experience.",
    icon: PlugZap,
    colorClasses: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-400 group-hover:text-purple-950",
    gradientClasses: "group-hover:from-purple-400 group-hover:to-purple-600",
  },
  {
    title: "Full Offline Functionality",
    description: "Work with AI even without an internet connection. Perfect for secure environments or on-the-go productivity.",
    icon: Unlock,
    colorClasses: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-cyan-950",
    gradientClasses: "group-hover:from-cyan-400 group-hover:to-cyan-600",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built with security at its core. Your data and models remain on your computer, with no external dependencies.",
    icon: Shield,
    colorClasses: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-amber-950",
    gradientClasses: "group-hover:from-amber-400 group-hover:to-amber-600",
  },
  {
    title: "Extensible Architecture",
    description: "Designed for developers to easily build upon. Create custom plugins and extensions to suit your workflow.",
    icon: Code,
    colorClasses: "bg-green-500/10 text-green-400 group-hover:bg-green-400 group-hover:text-green-950",
    gradientClasses: "group-hover:from-green-400 group-hover:to-green-600",
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Coordinate multiple AI agents to solve complex problems. Create workflows that combine specialized models.",
    icon: FolderSync,
    colorClasses: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-400 group-hover:text-rose-950",
    gradientClasses: "group-hover:from-rose-400 group-hover:to-rose-600",
  },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  
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
    
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    
    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="features" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0,rgba(56,189,248,0)_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={titleRef} 
          className="max-w-xl mx-auto text-center mb-16 md:mb-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="Beyond Just Chat" 
              className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400" 
            />
            <span className="text-foreground">A Complete AI Ecosystem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            BlackBox transforms how you interact with AI models, bringing powerful capabilities to your local machine with unmatched flexibility and privacy.
          </p>
        </div>
        
        <div
          ref={cardsRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-300"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-card/50 hover:bg-card border border-border/50 hover:border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                <div className={cn(
                  "w-12 h-12 rounded-lg mb-6 flex items-center justify-center transition-colors duration-300",
                  benefit.colorClasses
                )}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent to-transparent transition-all duration-300">
                <div className={cn(
                  "h-full w-0 group-hover:w-full bg-gradient-to-r transition-all duration-700 ease-out",
                  benefit.gradientClasses
                )}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}