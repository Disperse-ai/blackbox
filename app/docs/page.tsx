import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Book, Code, Puzzle, ArrowRight } from "lucide-react";

const guides = [
  {
    title: "Getting Started",
    description: "Learn the basics of BlackBox and set up your first AI model.",
    icon: Book,
    color: "blue",
  },
  {
    title: "Plugin Development",
    description: "Create custom plugins to extend BlackBox's capabilities.",
    icon: Puzzle,
    color: "purple",
  },
  {
    title: "API Reference",
    description: "Detailed documentation of BlackBox's API and SDK.",
    icon: Code,
    color: "cyan",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),rgba(139,92,246,0)_50%)]"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to build with BlackBox.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full h-12 pl-12 pr-4 rounded-full bg-card/50 border border-border/50 focus:border-purple-500/50 focus:ring focus:ring-purple-500/20 transition-all duration-300"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={`/docs/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                className={`bg-card/50 border border-border/50 rounded-xl p-8 hover:border-${guide.color}-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300`}
              >
                <div className={`bg-${guide.color}-500/10 text-${guide.color}-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6`}>
                  <guide.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-muted-foreground">{guide.description}</p>
              </Link>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
              <ul className="space-y-4">
                <li>
                  <span className="text-sm text-muted-foreground">2025-01-15</span>
                  <h3 className="font-medium">Plugin SDK Beta Release</h3>
                  <p className="text-muted-foreground">New tools and APIs for plugin development</p>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">2025-01-10</span>
                  <h3 className="font-medium">Multi-Agent Support</h3>
                  <p className="text-muted-foreground">Coordinate multiple AI agents in workflows</p>
                </li>
              </ul>
              <Button variant="outline" className="mt-6 w-full">
                View All Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-card/50 border border-border/50 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Community</h2>
              <p className="text-muted-foreground mb-6">
                Join our community to get help, share your projects, and connect with other developers.
              </p>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Join Discord
                </Button>
                <Button variant="outline" className="w-full">
                  GitHub Discussions
                </Button>
                <Button variant="outline" className="w-full">
                  Stack Overflow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}