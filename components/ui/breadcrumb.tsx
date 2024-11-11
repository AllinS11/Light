import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center space-x-2 text-sm", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <React.Fragment key={item.title}>
            {item.href ? (
              <a
                href={item.href}
                className={cn(
                  "hover:text-primary transition-colors",
                  isLast ? "text-foreground font-medium" : "text-muted-foreground"
                )}
              >
                {item.title}
              </a>
            ) : (
              <span className={cn(
                isLast ? "text-foreground font-medium" : "text-muted-foreground"
              )}>
                {item.title}
              </span>
            )}
            
            {!isLast && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}