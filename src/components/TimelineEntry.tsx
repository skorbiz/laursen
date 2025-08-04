import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";
import { Badge } from "@/components/ui/badge";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLast: boolean;
  index: number;
}

export const TimelineEntry = ({ entry, isLast, index }: TimelineEntryProps) => {
  const getUnsplashUrl = (photoId: string) => {
    return `https://images.unsplash.com/${photoId}?w=200&h=150&fit=crop&auto=format`;
  };

  const formatDate = () => {
    if (entry.startDate) {
      return `${entry.startDate} - ${entry.date}`;
    }
    return entry.date;
  };

  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full pb-16">
      {/* Timeline dot - centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-4 h-4 bg-gradient-to-br from-tech-blue to-tech-cyan rounded-full border-4 border-background shadow-lg" />
      </div>

      {/* Connecting line from dot to content */}
      <div className={`absolute top-2 ${isLeft ? 'right-1/2 mr-2' : 'left-1/2 ml-2'} w-12 h-0.5 bg-timeline-line z-5`} />

      {/* Content - alternating sides with overlap */}
      <div className={`flex ${isLeft ? 'justify-start pr-16' : 'justify-end pl-16'} ${!isLeft && index > 0 ? '-mt-8' : ''}`}>
        <div className={`w-full max-w-md ${isLeft ? 'mr-16' : 'ml-16'}`}>
          <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* Image - smaller */}
            <div className="h-32 w-full bg-muted overflow-hidden">
              <img
                src={getUnsplashUrl(entry.image)}
                alt={entry.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Content */}
            <div className="p-4">
              <div className="flex flex-col gap-2 mb-3">
                <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                <span className="text-sm font-medium text-tech-blue bg-tech-blue/10 px-3 py-1 rounded-full self-start">
                  {formatDate()}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                {entry.text}
              </p>
              
              {/* Tags */}
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {entry.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
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