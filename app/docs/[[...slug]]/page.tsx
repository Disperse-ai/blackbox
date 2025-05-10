import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Search,
  Book,
  Code,
  Puzzle,
  ArrowRight,
  Zap,
  GraduationCap
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import { DocPagination } from "@/components/docs/doc-pagination";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { DocContent } from "@/components/docs/doc-content";
import { PageTransition } from "@/components/ui/page-transition";
import { docCategories, getDocBySlug, getAdjacentDocs } from "@/lib/docs";

export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.[0];

  // If a specific doc is requested but not found, show 404
  if (
    slug &&
    !docCategories.some((category) =>
      category.sections.some((section) => section.slug === slug)
    )
  ) {
    notFound();
  }

  // Get adjacent docs for pagination
  const adjacentDocs = slug ? getAdjacentDocs(slug) : { prev: null, next: null };
  
  // Get current doc and its category
  const currentDoc = slug ? getDocBySlug(slug) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.1),rgba(139,92,246,0)_50%)]"></div>

      <PageTransition>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar */}
              <div className="col-span-12 md:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search docs..."
                      className="w-full h-9 pl-9 pr-4 rounded-md bg-card/50 border border-border/50 focus:border-purple-500/50 focus:ring focus:ring-purple-500/20 transition-all duration-300 text-sm"
                    />
                  </div>

                  <div className="space-y-6">
                    {docCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground">{category.title}</h3>
                        <ul className="space-y-1">
                          {category.sections.map((section, i) => (
                            <li key={i}>
                              <Link
                                href={`/docs/${section.slug}`}
                                className={`text-sm ${
                                  slug === section.slug
                                    ? "text-purple-400 font-medium"
                                    : "text-muted-foreground hover:text-foreground"
                                } transition-colors block py-1 px-2 rounded-md ${
                                  slug === section.slug ? "bg-purple-500/10" : ""
                                }`}
                              >
                                {section.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-9">
                {!slug ? (
                  <>
                    <div className="text-center mb-16">
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                        Documentation
                      </h1>
                      <p className="text-xl text-muted-foreground">
                        Everything you need to build with BlackBox.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {docCategories.map((category, index) => {
                        const IconComponent = {
                          Book,
                          Code,
                          Puzzle,
                          Zap,
                          GraduationCap
                        }[category.icon as keyof typeof { Book: any, Code: any, Puzzle: any, Zap: any, GraduationCap: any }];
                        
                        return (
                          <div
                            key={index}
                            className={`bg-card/50 border border-border/50 rounded-xl p-8 hover:border-${category.color}-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300`}
                          >
                            <div
                              className={`bg-${category.color}-500/10 text-${category.color}-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
                            >
                              {IconComponent && <IconComponent className="w-6 h-6" />}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                              {category.title}
                            </h3>
                            <p className="text-muted-foreground mb-6">
                              {category.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                              {category.sections.slice(0, 3).map((section, i) => (
                                <li key={i} className="flex items-center text-sm">
                                  <ChevronRight className="h-4 w-4 text-muted-foreground mr-2" />
                                  <Link
                                    href={`/docs/${section.slug}`}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                  >
                                    {section.title}
                                  </Link>
                                </li>
                              ))}
                              {category.sections.length > 3 && (
                                <li className="text-sm text-muted-foreground pl-6">
                                  +{category.sections.length - 3} more
                                </li>
                              )}
                            </ul>
                            <Link href={`/docs/${category.sections[0].slug}`}>
                              <Button variant="outline" className="w-full">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-card/50 border border-border/50 rounded-xl p-8">
                        <h2 className="text-2xl font-semibold mb-4">
                          Latest Updates
                        </h2>
                        <ul className="space-y-4">
                          <li>
                            <span className="text-sm text-muted-foreground">
                              2025-01-15
                            </span>
                            <h3 className="font-medium">
                              Plugin SDK Beta Release
                            </h3>
                            <p className="text-muted-foreground">
                              New tools and APIs for plugin development
                            </p>
                          </li>
                          <li>
                            <span className="text-sm text-muted-foreground">
                              2025-01-10
                            </span>
                            <h3 className="font-medium">Multi-Agent Support</h3>
                            <p className="text-muted-foreground">
                              Coordinate multiple AI agents in workflows
                            </p>
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
                          Join our community to get help, share your projects, and
                          connect with other developers.
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
                  </>
                ) : (
                  <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    <div className="lg:col-span-3">
                      {/* Breadcrumb */}
                      <div className="mb-6 flex items-center text-sm text-muted-foreground">
                        <Link href="/docs" className="hover:text-foreground transition-colors">
                          Docs
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        {currentDoc && (
                          <>
                            <span className="text-muted-foreground">{currentDoc.category.title}</span>
                            <ChevronRight className="h-4 w-4 mx-2" />
                            <span className="text-foreground">{currentDoc.doc.title}</span>
                          </>
                        )}
                      </div>
                      
                      {/* Document Content */}
                      <DocContent slug={slug} />
                      
                      {/* Pagination */}
                      <DocPagination 
                        prevDoc={adjacentDocs.prev} 
                        nextDoc={adjacentDocs.next} 
                      />
                    </div>
                    
                    {/* Table of Contents - Desktop */}
                    <div className="hidden lg:block">
                      <div className="sticky top-24">
                        <TableOfContents />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
