import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";
import { Badge } from "@/components/ui/badge";

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

  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full pb-3">
      {/* Timeline dot - centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-3 h-3 bg-gradient-to-br from-tech-blue to-tech-cyan rounded-full border-2 border-background shadow-md" />
      </div>

      {/* Connecting line from dot to content */}
      <div className={`absolute top-1.5 ${isLeft ? 'right-1/2 mr-1.5' : 'left-1/2 ml-1.5'} w-8 h-0.5 bg-timeline-line z-5`} />

      {/* Content - alternating sides with overlap */}
      <div className={`flex ${isLeft ? 'justify-start pr-12' : 'justify-end pl-12'} ${isLeft && index > 0 ? '-mt-8' : ''} ${!isLeft && index > 0 ? '-mt-12' : ''}`}>
        <div className={`w-full max-w-sm ${isLeft ? 'mr-12' : 'ml-12'}`}>
          <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
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
                <h3 className="text-base font-semibold text-foreground leading-tight">{entry.title}</h3>
                <span className="text-xs font-medium text-tech-blue bg-tech-blue/10 px-2 py-0.5 rounded-full self-start">
                  {formatDate()}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-2 text-xs">
                {entry.text}
              </p>
              
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