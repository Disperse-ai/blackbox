"use client";

import React, { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedText from "@/components/ui/animated-text";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "BlackBox has transformed how I use AI models. I can run everything locally with complete privacy, and the unified interface makes switching between tasks effortless.",
    author: "Sarah Chen",
    title: "AI Research Engineer",
    avatarColor: "from-blue-400 to-purple-500",
  },
  {
    id: 2,
    quote: "As someone who works with sensitive data, BlackBox's local-first approach gives me peace of mind. I can leverage powerful AI without compromising client confidentiality.",
    author: "Michael Rodriguez",
    title: "Data Privacy Consultant",
    avatarColor: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    quote: "The plugin system is a game changer. I've built custom workflows that integrate perfectly with my existing tools, saving hours of development time.",
    author: "Jamie Walsh",
    title: "Software Developer",
    avatarColor: "from-cyan-400 to-blue-500",
  },
];

export default function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
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
    
    const testimonialsObserver = new IntersectionObserver(
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
    
    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (testimonialsRef.current) {
        testimonialsObserver.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="case-studies" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05),rgba(14,165,233,0)_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={titleRef} 
          className="max-w-xl mx-auto text-center mb-16 md:mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="Success Stories" 
              className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400" 
            />
            <span className="text-foreground">From Our Community</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how professionals across industries are using BlackBox to transform their AI workflows.
          </p>
        </div>
        
        <div
          ref={testimonialsRef} 
          className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-300"
        >
          <div className="relative">
            <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-24 h-24 text-blue-500/10 rotate-180" />
              
              <div className="relative z-10">
                <div className="min-h-[160px] mb-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "transition-all duration-500 absolute w-full",
                        activeIndex === index 
                          ? "opacity-100 translate-x-0" 
                          : activeIndex > index 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )}
                      style={{ 
                        display: Math.abs(activeIndex - index) <= 1 ? "block" : "none" 
                      }}
                    >
                      <p className="text-xl md:text-2xl italic mb-4">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg",
                      testimonials[activeIndex].avatarColor
                    )}>
                      {testimonials[activeIndex].author.charAt(0)}
                    </div>
                    
                    <div>
                      <p className="font-semibold">{testimonials[activeIndex].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-9 w-9 rounded-full" 
                      onClick={goToPrev}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-9 w-9 rounded-full" 
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full mx-1 transition-all duration-300",
                    activeIndex === index 
                      ? "bg-blue-500 w-6" 
                      : "bg-blue-500/30"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">500+</div>
              <p className="text-muted-foreground">AI Models Supported</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">25+</div>
              <p className="text-muted-foreground">Custom Plugins</p>
            </div>
            <div className="bg-card/50 border border-border/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">2,500+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}