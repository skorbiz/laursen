import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";
import { Badge } from "@/components/ui/badge";
import { ImageModal } from "./ImageModal";
import { useState } from "react";
import { Briefcase, Code, Users, ExternalLink, Github, Play, Globe } from 'lucide-react';

const importAssets = () => {
  const images = import.meta.glob('@/assets/*', { eager: true });
  const imageMap: Record<string, string> = {};
  
  Object.entries(images).forEach(([path, module]) => {
    const filename = path.split('/').pop();
    if (filename && (module as any).default) {
      imageMap[filename] = (module as any).default;
    }
  });
  
  return imageMap;
};

const assetImages = importAssets();

interface NewTimelineEntryProps {
  entry: TimelineEntryType;
  index: number;
}

export const NewTimelineEntry = ({ entry, index }: NewTimelineEntryProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const getLocalImage = (imageName: string) => {
    return assetImages[imageName] || assetImages['robot-wall.jpg'] || '/placeholder.svg';
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
      case 'project': return <Code className="h-3 w-3" />;
      case 'community': return <Users className="h-3 w-3" />;
      default: return null;
    }
  };

  const getDotColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-500 border-blue-200';
      case 'project': return 'bg-green-500 border-green-200';
      case 'community': return 'bg-purple-500 border-purple-200';
      default: return 'bg-gradient-to-br from-tech-blue to-tech-cyan border-background';
    }
  };

  const getCategoryAccent = (category: string) => {
    switch (category) {
      case 'work': return 'border-l-blue-500';
      case 'project': return 'border-l-green-500';
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

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center flex-shrink-0 relative">
        {/* Connecting line above (except for first item) */}
        {index > 0 && (
          <div className="w-0.5 bg-timeline-line h-6 sm:h-8 lg:h-10 -mb-1" />
        )}
        
        {/* Timeline dot */}
        <div className={`w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ${getDotColor(entry.category)} rounded-full border-2 shadow-sm flex-shrink-0 z-10`} />
        
        {/* Connecting line below (for all items) */}
        <div className="w-0.5 bg-timeline-line flex-1 min-h-8 sm:min-h-10 lg:min-h-12 -mt-1" />
      </div>

      {/* Content card */}
      <div className="flex-1 min-w-0 pb-4 sm:pb-6 lg:pb-8">
        <div className={`bg-card rounded-lg border border-border border-l-4 ${getCategoryAccent(entry.category)} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl`}>
          {/* Image */}
          <div 
            className={`w-full bg-muted overflow-hidden cursor-pointer transition-all duration-300 ${
              entry.largeBanner 
                ? 'h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64' 
                : 'h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36'
            }`} 
            onClick={() => setIsImageModalOpen(true)}
          >
            <img
              src={getLocalImage(entry.image)}
              alt={entry.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src = assetImages['robot-wall.jpg'] || '/placeholder.svg';
              }}
            />
          </div>
          
          {/* Content */}
          <div className="p-3 sm:p-4 lg:p-5">
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-center gap-2">
                {getCategoryIcon(entry.category)}
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground leading-tight">{entry.title}</h3>
              </div>
              <span className="text-xs sm:text-sm font-medium text-tech-blue bg-tech-blue/10 px-2 py-1 rounded-full self-start">
                {formatDate()}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-3 text-xs sm:text-sm lg:text-base">
              {entry.text}
            </p>
            
            {/* Links */}
            {entry.links && entry.links.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {entry.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary hover:text-primary/80 bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-md transition-colors"
                  >
                    {getLinkIcon(link.type)}
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Tags */}
            {entry.tags && entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {entry.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs px-2 py-1">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        src={getLocalImage(entry.image)}
        alt={entry.title}
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      />
    </div>
  );
};