import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/animated-text";
import { ArrowRight, Terminal, Server, Cpu, Lock } from "lucide-react";
import ParticleBackground from "@/components/ui/particle-background";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroSection() {
  const mockupRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-y-0", "opacity-100");
        }
      },
      { threshold: 0.1 }
    );
    
    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }
    
    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors border-blue-500/20">
            Alpha Release Coming Soon
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            <AnimatedText 
              text="All Your AI Models." 
              className="block mb-2" 
              speed={60}
            />
            <AnimatedText 
              text="One Powerful Interface." 
              className="block" 
              speed={60} 
              delay={1500}
            />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            BlackBox runs all your local AI models from a single interface. From image generation to synthetic voices, whatever model you have, we'll run it.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/download">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 h-auto">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 px-8 py-6 h-auto">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div 
          ref={mockupRef}
          className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] border border-slate-800 translate-y-10 opacity-0 transition-all duration-1000"
        >
          <div className="bg-slate-900 p-2 flex items-center gap-2 border-b border-slate-800">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-md flex-grow text-center">
              BlackBox - Local AI Interface
            </div>
          </div>
          <div className="bg-[#0d1117] p-4 md:p-6">
            <div className="grid grid-cols-12 gap-4 h-[280px] md:h-[400px]">
              <div className="col-span-3 border-r border-slate-800 pr-4">
                <div className="space-y-4">
                  <div className="h-8 bg-slate-800 rounded-md"></div>
                  <div className="space-y-2">
                    <div className="h-6 bg-blue-500/20 rounded-md flex items-center px-2">
                      <span className="text-xs text-blue-400">ChatGPT</span>
                    </div>
                    <div className="h-6 bg-slate-800/60 rounded-md"></div>
                    <div className="h-6 bg-slate-800/60 rounded-md"></div>
                    <div className="h-6 bg-slate-800/60 rounded-md"></div>
                  </div>
                  <div className="h-px bg-slate-800"></div>
                  <div className="h-7 bg-slate-800/60 rounded-md"></div>
                </div>
              </div>
              <div className="col-span-9 flex flex-col h-full">
                <div className="h-8 bg-slate-800 rounded-md mb-4"></div>
                <div className="flex-grow space-y-4 overflow-hidden">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-800 flex-shrink-0"></div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="h-4 bg-slate-800 rounded-md w-24"></div>
                      <div className="h-20 bg-slate-800 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="space-y-2 max-w-[80%]">
                      <div className="h-4 bg-blue-900/40 rounded-md w-24 ml-auto"></div>
                      <div className="h-16 bg-blue-900/40 rounded-md"></div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-blue-500/30 flex-shrink-0"></div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-800 flex-shrink-0"></div>
                    <div className="space-y-2 max-w-[80%]">
                      <div className="h-4 bg-slate-800 rounded-md w-24"></div>
                      <div className="h-28 bg-slate-800 rounded-md"></div>
                      <div className="flex gap-2">
                        <div className="h-24 w-24 bg-slate-700 rounded-md"></div>
                        <div className="h-24 w-24 bg-slate-700 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-12 bg-slate-800/60 rounded-md mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Terminal className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="font-medium">Local Inference</h3>
          </div>
          <div className="text-center">
            <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Server className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="font-medium">Plugin System</h3>
          </div>
          <div className="text-center">
            <div className="bg-cyan-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cpu className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="font-medium">Multi-Agent</h3>
          </div>
          <div className="text-center">
            <div className="bg-amber-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-amber-400" />
            </div>
            <h3 className="font-medium">Full Privacy</h3>
          </div>
        </div>
      </div>
    </section>
  );
}