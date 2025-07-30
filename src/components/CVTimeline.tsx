import { timelineData } from "@/data/cv-timeline";
import { TimelineEntry } from "./TimelineEntry";

export const CVTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent mb-4">
          Robotics Engineer
        </h1>
        <h2 className="text-2xl text-muted-foreground mb-2">Professional Timeline</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-cyan mx-auto rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-timeline-line z-0"></div>
        
        {timelineData.map((entry, index) => (
          <TimelineEntry
            key={index}
            entry={entry}
            index={index}
            isLast={index === timelineData.length - 1}
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