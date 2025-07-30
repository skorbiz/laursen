import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";
import { Badge } from "@/components/ui/badge";

interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLast: boolean;
}

export const TimelineEntry = ({ entry, isLast }: TimelineEntryProps) => {
  const getUnsplashUrl = (photoId: string) => {
    return `https://images.unsplash.com/${photoId}?w=400&h=300&fit=crop&auto=format`;
  };

  const formatDate = () => {
    if (entry.startDate) {
      return `${entry.startDate} - ${entry.date}`;
    }
    return entry.date;
  };

  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-to-br from-tech-blue to-tech-cyan rounded-full border-4 border-background shadow-lg z-10" />
        {!isLast && (
          <div className="w-0.5 h-full bg-timeline-line mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          {/* Image */}
          <div className="aspect-video w-full bg-muted overflow-hidden">
            <img
              src={getUnsplashUrl(entry.image)}
              alt={entry.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <h3 className="text-xl font-semibold text-foreground">{entry.title}</h3>
              <span className="text-sm font-medium text-tech-blue bg-tech-blue/10 px-3 py-1 rounded-full">
                {formatDate()}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              {entry.text}
            </p>
            
            {/* Tags */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};