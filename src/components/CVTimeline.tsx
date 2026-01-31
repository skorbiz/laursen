// Timeline data and types
import { useState } from "react";
import { timelineData } from "@/data/cv-timeline";
import { TimelineEntry } from "./TimelineEntry";

// Icons for social links and UI elements
import { Github, Linkedin } from "lucide-react";

// UI components
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { EditModeToggle } from "./EditModeToggle";

type CategoryFilter = 'work' | 'project' | 'community';

/**
 * CVTimeline Component
 * 
 * Main component that renders the professional timeline interface.
 * Features:
 * - Responsive design (mobile-first)
 * - Dark/light theme support
 * - Social media links
 * - Category legend with toggle functionality
 * - Chronological timeline with alternating layout
 */
export const CVTimeline = () => {
  // Track which categories are visible (all visible by default)
  const [visibleCategories, setVisibleCategories] = useState<Set<CategoryFilter>>(
    new Set(['work', 'project', 'community'])
  );

  const toggleCategory = (category: CategoryFilter) => {
    setVisibleCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  // Filter out hidden entries and by selected categories
  const visibleTimelineData = timelineData.filter(
    entry => !entry.hidden && visibleCategories.has(entry.category)
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-end gap-2 mb-4">
          <EditModeToggle />
          <ThemeToggle />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent mb-4">
          Robotics Engineer
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-2">Professional Timeline</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-cyan mx-auto rounded-full mb-8"></div>
        
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-muted-foreground leading-relaxed mb-6">
            Experienced software developer and robotics engineer with a diverse background, including multi-year
            research, ad-hoc consultancy, short-term projects, and ongoing maintenance of complex software stacks.
            Specialized in high-level software for autonomous robots, including navigation, perception, and control.
            Professionally curious and loves engaging in discussions about ideas and solutions.
          </p>
          <p className="text-sm text-muted-foreground/80 mb-6 italic">
            This timeline represents my introduction into AI-agent based programming. Learning and experimenting with Lovable
            to showcase some of my fun highlights in an interactive format.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
              <a href="https://github.com/skorbiz" target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
              <a href="https://www.linkedin.com/in/johan-sund-laursen/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Legend - Clickable category toggles */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-6 bg-card/50 backdrop-blur-sm border rounded-lg px-4 py-2">
          <button
            onClick={() => toggleCategory('work')}
            className={`flex items-center gap-2 transition-opacity ${
              visibleCategories.has('work') ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-3 h-3 bg-category-work rounded-full"></div>
            <span className="text-sm text-muted-foreground">Workplace</span>
          </button>
          <button
            onClick={() => toggleCategory('project')}
            className={`flex items-center gap-2 transition-opacity ${
              visibleCategories.has('project') ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-3 h-3 bg-category-project rounded-full"></div>
            <span className="text-sm text-muted-foreground">Projects</span>
          </button>
          <button
            onClick={() => toggleCategory('community')}
            className={`flex items-center gap-2 transition-opacity ${
              visibleCategories.has('community') ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-3 h-3 bg-category-community rounded-full"></div>
            <span className="text-sm text-muted-foreground">Community</span>
          </button>
        </div>
      </div>

      {/* Timeline - Two Column Layout */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-timeline-line z-0" />
        
        {/* Mobile: Single column */}
        <div className="md:hidden flex flex-col gap-6">
          {visibleTimelineData.map((entry, index) => (
            <TimelineEntry
              key={index}
              entry={entry}
              index={index}
              side="left"
            />
          ))}
        </div>

        {/* Desktop: Two independent columns */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12">
          {/* Left column - even indices */}
          <div className="flex flex-col gap-24 pr-6">
            {visibleTimelineData
              .map((entry, originalIndex) => ({ entry, originalIndex }))
              .filter((_, i) => i % 2 === 0)
              .map(({ entry, originalIndex }) => (
                <TimelineEntry
                  key={originalIndex}
                  entry={entry}
                  index={originalIndex}
                  side="left"
                />
              ))}
          </div>
          
          {/* Right column - odd indices, offset for asymmetry */}
          <div className="flex flex-col gap-24 pl-6 mt-24">
            {visibleTimelineData
              .map((entry, originalIndex) => ({ entry, originalIndex }))
              .filter((_, i) => i % 2 === 1)
              .map(({ entry, originalIndex }) => (
                <TimelineEntry
                  key={originalIndex}
                  entry={entry}
                  index={originalIndex}
                  side="right"
                />
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-border">
        <p className="text-muted-foreground">
          Built with passion for robotics and innovation 🤖
        </p>
      </div>
    </div>
  );
};