"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter, Cpu, Lock, Zap } from "lucide-react";
import AnimatedText from "@/components/ui/animated-text";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),rgba(59,130,246,0)_70%)]"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={contentRef}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-blue-500/20 shadow-[0_0_70px_rgba(59,130,246,0.15)] bg-gradient-to-br from-slate-900 to-slate-950 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),rgba(59,130,246,0)_60%)]"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Cpu className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-sm text-blue-400">Local Inference</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <Lock className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-sm text-purple-400">100% Private</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-sm text-cyan-400">Extensible</span>
                </div>
              </div>
              
              <div className="mb-8 max-w-3xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                  <AnimatedText 
                    text="Ready to transform your" 
                    className="block mb-2" 
                    speed={60}
                  />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                    <AnimatedText 
                      text="AI workflow?" 
                      speed={60} 
                      delay={1500}
                    />
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Join our alpha program today and be among the first to experience the future of local AI inference. Get early access to BlackBox and help shape its development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 h-auto">
                    Get Early Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 px-8 py-6 h-auto">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub Repo
                  </Button>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-blue-500/20">
                <p className="text-sm text-muted-foreground mb-4">Join the community</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="rounded-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300">
                    Discord
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}