import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Apple,
  Link as Linux,
  AppWindow as Windows,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import { PageTransition } from "@/components/ui/page-transition";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),rgba(56,189,248,0)_50%)]"></div>

      <PageTransition>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Download BlackBox
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with BlackBox today. Available for macOS, Windows, and
              Linux.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/50 border border-border/50 rounded-xl p-8 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300">
                <div className="bg-blue-500/10 text-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Apple className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">macOS</h3>
                <p className="text-muted-foreground mb-6">
                  Intel & Apple Silicon
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Download for macOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-xl p-8 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300">
                <div className="bg-purple-500/10 text-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Windows className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Windows</h3>
                <p className="text-muted-foreground mb-6">
                  Windows 10/11 64-bit
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                  Download for Windows
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-card/50 border border-border/50 rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300">
                <div className="bg-cyan-500/10 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Linux className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Linux</h3>
                <p className="text-muted-foreground mb-6">AppImage & .deb</p>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600">
                  Download for Linux
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-16 p-8 bg-card/50 border border-border/50 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                System Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-2">Minimum</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>8GB RAM</li>
                    <li>4-core CPU</li>
                    <li>2GB free storage</li>
                    <li>OpenGL 3.3+</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Recommended</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>16GB RAM</li>
                    <li>8-core CPU</li>
                    <li>NVIDIA GPU (8GB+ VRAM)</li>
                    <li>10GB free storage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
