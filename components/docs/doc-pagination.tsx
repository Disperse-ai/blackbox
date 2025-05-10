import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocPaginationProps {
  prevDoc?: {
    title: string;
    slug: string;
  };
  nextDoc?: {
    title: string;
    slug: string;
  };
}

export function DocPagination({ prevDoc, nextDoc }: DocPaginationProps) {
  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-border/50">
      {prevDoc ? (
        <Link href={`/docs/${prevDoc.slug}`} className="group flex-1">
          <Button variant="ghost" className="flex items-center gap-2 text-left">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-medium">{prevDoc.title}</div>
            </div>
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextDoc ? (
        <Link
          href={`/docs/${nextDoc.slug}`}
          className="group flex-1 ml-auto text-right"
        >
          <Button variant="ghost" className="flex items-center gap-2 ml-auto">
            <div>
              <div className="text-xs text-muted-foreground">Next</div>
              <div className="font-medium">{nextDoc.title}</div>
            </div>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
