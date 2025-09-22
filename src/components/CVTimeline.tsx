import { useState } from "react";

// Timeline data and types
import { timelineData } from "@/data/cv-timeline";
import { NewTimelineEntry } from "./NewTimelineEntry";
import { TimelineContainer, LayoutMode } from "./TimelineContainer";
import { TimelineLayout } from "./TimelineLayout";

// Icons for social links and UI elements
import { Github, Linkedin } from "lucide-react";

// UI components
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

/**
 * CVTimeline Component
 * 
 * Main component that renders the professional timeline interface.
 * Features:
 * - Responsive design (mobile-first)
 * - Dark/light theme support
 * - Social media links
 * - Category legend
 * - Chronological timeline with alternating layout
 */
export const CVTimeline = () => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('narrow-mobile');
  // Filter out any timeline entries marked as hidden
  const visibleTimelineData = timelineData.filter(entry => !entry.hidden);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-end mb-4">
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

      {/* Legend */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-6 bg-card/50 backdrop-blur-sm border rounded-lg px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Workplace</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground">Other</span>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineContainer onLayoutChange={setLayoutMode}>
        <TimelineLayout layoutMode={layoutMode}>
          {visibleTimelineData.map((entry, index) => {
            const isMobile = layoutMode === 'narrow-mobile' || layoutMode === 'wide-mobile';
            const isTablet = layoutMode === 'tablet';
            
            // Determine position based on layout mode
            let position: 'left' | 'right' | 'mobile';
            if (isMobile) {
              position = 'mobile';
            } else if (isTablet) {
              // For tablet, alternate but bias towards right column for better balance
              position = index % 3 === 0 ? 'left' : 'right';
            } else {
              // Desktop: traditional alternating
              position = index % 2 === 0 ? 'left' : 'right';
            }
            
            return (
              <NewTimelineEntry
                key={index}
                entry={entry}
                layoutMode={layoutMode}
                position={position}
                isLast={index === visibleTimelineData.length - 1}
              />
            );
          })}
        </TimelineLayout>
      </TimelineContainer>

      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-border">
        <p className="text-muted-foreground">
          Built with passion for robotics and innovation 🤖
        </p>
      </div>
    </div>
  );
};