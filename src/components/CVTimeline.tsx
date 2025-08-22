import { timelineData } from "@/data/cv-timeline";
import { TimelineEntry } from "./TimelineEntry";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const CVTimeline = () => {
  // Filter out hidden entries
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

      {/* Timeline */}
      <div className="relative">
        {/* Central timeline line - hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-timeline-line z-0"></div>
        {/* Mobile timeline line - left aligned */}
        <div className="md:hidden absolute left-4 transform -translate-x-0.5 w-0.5 h-full bg-timeline-line z-0"></div>
        
        {visibleTimelineData.map((entry, index) => (
          <TimelineEntry
            key={index}
            entry={entry}
            index={index}
            isLast={index === visibleTimelineData.length - 1}
          />
        ))}
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