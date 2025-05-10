"use client";

import React, { useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedText from "@/components/ui/animated-text";

const faqs = [
  {
    question: "What makes BlackBox different from other AI tools?",
    answer: "BlackBox runs entirely on your local machine, ensuring privacy and eliminating cloud dependency. It consolidates multiple models into one interface and allows extension through plugins. Unlike most solutions, BlackBox focuses on local execution while maintaining a streamlined, user-friendly experience."
  },
  {
    question: "What kind of AI models does BlackBox support?",
    answer: "BlackBox supports a wide range of models through Ollama integration and direct loading, including large language models (LLMs), image generation, video generation, audio synthesis, and more. If Ollama supports it, BlackBox supports it, plus we're continuously adding direct support for other model formats."
  },
  {
    question: "Do I need specialized hardware to run BlackBox?",
    answer: "While BlackBox works on most modern computers, performance depends on the models you run. For basic text models, a decent CPU is sufficient. For larger LLMs or image generation, a modern GPU with 8GB+ VRAM is recommended. BlackBox optimizes models for your specific hardware configuration."
  },
  {
    question: "Is BlackBox fully offline or does it require internet access?",
    answer: "BlackBox is designed to function 100% offline once set up. Initial model downloads require internet, but after that, all processing happens locally. Some plugins may require internet for specific functionalities, but core features work without any connection."
  },
  {
    question: "How do I create custom plugins for BlackBox?",
    answer: "BlackBox provides a developer SDK that allows you to build plugins using TypeScript/JavaScript. Documentation includes templates and examples to get started quickly. The plugin system uses a standardized API that makes it easy to extend functionality while maintaining security and stability."
  },
  {
    question: "Is BlackBox open source?",
    answer: "The core BlackBox application is open source under the MIT license. We believe in transparency and community collaboration. Premium plugins and enterprise features may have separate licensing terms, but the foundation of BlackBox remains open and freely available."
  },
];

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  
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
    
    const accordionObserver = new IntersectionObserver(
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
    
    if (accordionRef.current) {
      accordionObserver.observe(accordionRef.current);
    }
    
    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (accordionRef.current) {
        accordionObserver.unobserve(accordionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="faq" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),rgba(139,92,246,0)_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <div
          ref={titleRef} 
          className="max-w-xl mx-auto text-center mb-16 md:mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <AnimatedText 
              text="Frequently Asked Questions" 
              className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400" 
            />
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about BlackBox and how it can transform your AI workflow.
          </p>
        </div>
        
        <div
          ref={accordionRef} 
          className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-700 delay-300"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}