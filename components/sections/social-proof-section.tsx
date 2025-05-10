"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "Acme Corp", width: 120 },
  { name: "Globex", width: 110 },
  { name: "Soylent", width: 130 },
  { name: "Initech", width: 120 },
  { name: "Umbrella", width: 140 },
  { name: "Cyberdyne", width: 150 },
];

export default function SocialProofSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10");
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80 border-y border-border/20">
      <div 
        ref={containerRef} 
        className="container mx-auto px-4 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-medium mb-10">
            Trusted by AI enthusiasts worldwide
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={cn(
                  "text-xl md:text-2xl font-bold bg-clip-text text-transparent", 
                  index % 2 === 0 
                    ? "bg-gradient-to-r from-blue-400 to-purple-400" 
                    : "bg-gradient-to-r from-purple-400 to-cyan-400"
                )}
                style={{ width: company.width }}
              >
                {company.name}
              </div>
            ))}
          </div>
          
          <div className="mt-12 md:mt-16 flex justify-center gap-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-slate-700 to-slate-800"
                  />
                ))}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">2,500+</p>
                <p className="text-xs text-muted-foreground">Alpha Users</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-400" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">4.9/5</p>
                <p className="text-xs text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}