"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Terminal className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            BlackBox
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/docs"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Documentation
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/download"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Download
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium" >
          <Link
            href="download"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Download Alpha
          </Link>
        </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 text-primary focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 py-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/docs"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/download"
              className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
            <Link
              href="download"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
            >
              Download Alpha
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}