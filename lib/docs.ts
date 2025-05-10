export interface DocSection {
  title: string;
  slug: string;
}

export interface DocCategory {
  title: string;
  description: string;
  icon: any;
  color: string;
  sections: DocSection[];
}

export const docCategories: DocCategory[] = [
  {
    title: "Getting Started",
    description: "Learn the basics of BlackBox and set up your first AI model.",
    icon: "Book",
    color: "blue",
    sections: [
      { title: "Installation", slug: "installation" },
      { title: "Quick Start", slug: "quick-start" },
      { title: "Basic Concepts", slug: "basic-concepts" },
      { title: "Configuration", slug: "configuration" },
    ],
  },
  {
    title: "Plugin Development",
    description: "Create custom plugins to extend BlackBox's capabilities.",
    icon: "Puzzle",
    color: "purple",
    sections: [
      { title: "Plugin Architecture", slug: "plugin-architecture" },
      { title: "Creating Plugins", slug: "creating-plugins" },
      { title: "Plugin API", slug: "plugin-api" },
      { title: "Publishing", slug: "publishing" },
    ],
  },
  {
    title: "API Reference",
    description: "Detailed documentation of BlackBox's API and SDK.",
    icon: "Code",
    color: "cyan",
    sections: [
      { title: "Core API", slug: "core-api" },
      { title: "Model API", slug: "model-api" },
      { title: "Plugin API", slug: "plugin-api" },
      { title: "WebSocket API", slug: "websocket-api" },
    ],
  },
  {
    title: "Advanced Topics",
    description:
      "Dive deeper into BlackBox's advanced features and capabilities.",
    icon: "Zap",
    color: "amber",
    sections: [
      { title: "Custom Models", slug: "custom-models" },
      { title: "Multi-Agent Systems", slug: "multi-agent-systems" },
      { title: "Performance Optimization", slug: "performance-optimization" },
      { title: "Security Best Practices", slug: "security-best-practices" },
    ],
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for common BlackBox use cases.",
    icon: "GraduationCap",
    color: "green",
    sections: [
      { title: "Building a Chatbot", slug: "building-a-chatbot" },
      { title: "Image Generation", slug: "image-generation" },
      { title: "Text Analysis", slug: "text-analysis" },
      { title: "Voice Interfaces", slug: "voice-interfaces" },
    ],
  },
];

export function getAllDocSlugs(): string[] {
  return docCategories.flatMap((category) =>
    category.sections.map((section) => section.slug),
  );
}

export function getDocBySlug(
  slug: string,
): { doc: DocSection; category: DocCategory } | null {
  for (const category of docCategories) {
    const doc = category.sections.find((section) => section.slug === slug);
    if (doc) {
      return { doc, category };
    }
  }
  return null;
}

export function getAdjacentDocs(slug: string): {
  prev: DocSection | null;
  next: DocSection | null;
} {
  const allSections = docCategories.flatMap((category) => category.sections);
  const currentIndex = allSections.findIndex(
    (section) => section.slug === slug,
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  const prev = currentIndex > 0 ? allSections[currentIndex - 1] : null;
  const next =
    currentIndex < allSections.length - 1
      ? allSections[currentIndex + 1]
      : null;

  return { prev, next };
}
