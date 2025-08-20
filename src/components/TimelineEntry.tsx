import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Users, ExternalLink, Github, Play, Globe } from 'lucide-react';

// Import all timeline images
import robotWallImg from "@/assets/robot-wall.jpg";
import droneImg from "@/assets/drone.jpg";
import circuitBoardImg from "@/assets/circuit-board.jpg";
import codeMonitorImg from "@/assets/code-monitor.jpg";
import manipulatorArmImg from "@/assets/manipulator-arm.jpg";
import laserScannerImg from "@/assets/laser-scanner.jpg";
import devopsPipelineImg from "@/assets/devops-pipeline.jpg";
import classroomRoboticsImg from "@/assets/classroom-robotics.jpg";
import swarmRobotsImg from "@/assets/swarm-robots.jpg";
import manufacturingLineImg from "@/assets/manufacturing-line.jpg";
import formulaCarImg from "@/assets/formula-car.jpg";
import dslProgrammingImg from "@/assets/dsl-programming.jpg";
import errorRecoveryImg from "@/assets/error-recovery.jpg";
import flexibleManufacturingImg from "@/assets/flexible-manufacturing.jpg";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLast: boolean;
  index: number;
}

export const TimelineEntry = ({ entry, isLast, index }: TimelineEntryProps) => {
  const getLocalImage = (imageName: string) => {
    const imageMap: Record<string, string> = {
      "robot-wall.jpg": robotWallImg,
      "drone.jpg": droneImg,
      "circuit-board.jpg": circuitBoardImg,
      "code-monitor.jpg": codeMonitorImg,
      "manipulator-arm.jpg": manipulatorArmImg,
      "laser-scanner.jpg": laserScannerImg,
      "devops-pipeline.jpg": devopsPipelineImg,
      "classroom-robotics.jpg": classroomRoboticsImg,
      "swarm-robots.jpg": swarmRobotsImg,
      "manufacturing-line.jpg": manufacturingLineImg,
      "formula-car.jpg": formulaCarImg,
      "dsl-programming.jpg": dslProgrammingImg,
      "error-recovery.jpg": errorRecoveryImg,
      "flexible-manufacturing.jpg": flexibleManufacturingImg,
    };
    return imageMap[imageName] || robotWallImg; // fallback to robot-wall if not found
  };

  const formatDate = () => {
    if (entry.startDate) {
      return `${entry.startDate} - ${entry.date}`;
    }
    return entry.date;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work': return <Briefcase className="h-3 w-3" />;
      case 'research': return <Code className="h-3 w-3" />;
      case 'community': return <Users className="h-3 w-3" />;
      default: return null;
    }
  };

  const getDotColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-500 border-blue-200';
      case 'research': return 'bg-green-500 border-green-200';
      case 'community': return 'bg-purple-500 border-purple-200';
      default: return 'bg-gradient-to-br from-tech-blue to-tech-cyan border-background';
    }
  };

  const getCategoryAccent = (category: string) => {
    switch (category) {
      case 'work': return 'border-l-blue-500';
      case 'research': return 'border-l-green-500';
      case 'community': return 'border-l-purple-500';
      default: return 'border-l-tech-blue';
    }
  };

  const getLinkIcon = (type?: string) => {
    switch (type) {
      case 'github': return <Github className="h-3 w-3" />;
      case 'video': return <Play className="h-3 w-3" />;
      case 'website': return <Globe className="h-3 w-3" />;
      default: return <ExternalLink className="h-3 w-3" />;
    }
  };

  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full mb-6 md:mb-3">
      {/* Timeline dot - centered on desktop, left on mobile */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-10">
        <div className={`w-3 h-3 ${getDotColor(entry.category)} rounded-full border-2 shadow-md`} />
      </div>

      {/* Connecting line from dot to content - hidden on mobile */}
      <div className={`hidden md:block absolute top-1.5 ${isLeft ? 'right-1/2 mr-1.5' : 'left-1/2 ml-1.5'} w-12 h-0.5 bg-timeline-line z-5`} />

      {/* Content - stacked on mobile, alternating on desktop */}
      <div className={`flex pl-12 md:pl-0 ${isLeft ? 'md:justify-start md:pr-16' : 'md:justify-end md:pl-16'} ${index > 0 ? 'md:-mt-20' : ''}`}>
        <div className={`w-full max-w-l ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
          <div className={`bg-card rounded-lg border border-border dark:border-border/70 border-l-4 ${getCategoryAccent(entry.category)} shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}>
            {/* Image - compact */}
            <div className="h-24 w-full bg-muted overflow-hidden">
              <img
                src={getLocalImage(entry.image)}
                alt={entry.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Content */}
            <div className="p-3">
              <div className="flex flex-col gap-1.5 mb-2">
                <div className="flex items-center gap-1.5">
                  {getCategoryIcon(entry.category)}
                  <h3 className="text-base font-semibold text-foreground leading-tight">{entry.title}</h3>
                </div>
                <span className="text-xs font-medium text-tech-blue bg-tech-blue/10 px-2 py-0.5 rounded-full self-start">
                  {formatDate()}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-2 text-xs">
                {entry.text}
              </p>
              
              {/* Links */}
              {entry.links && entry.links.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {entry.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-md transition-colors"
                    >
                      {getLinkIcon(link.type)}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Tags */}
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs px-1.5 py-0.5">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
