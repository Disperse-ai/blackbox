"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  cursorClassName?: string;
  showCursor?: boolean;
}

export default function AnimatedText({
  text,
  className,
  speed = 50,
  delay = 0,
  onComplete,
  cursorClassName,
  showCursor = true,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showTypingCursor, setShowTypingCursor] = useState(showCursor);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    
    // Reset and delay before starting
    setDisplayedText("");
    
    const startTyping = () => {
      if (currentIndex <= text.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            startTyping();
          } else {
            if (onComplete) onComplete();
            if (!showCursor) setShowTypingCursor(false);
          }
        }, speed);
      }
    };
    
    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay, onComplete, showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showTypingCursor && (
        <span 
          className={cn(
            "animate-pulse inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px]", 
            cursorClassName
          )}
        />
      )}
    </span>
  );
}