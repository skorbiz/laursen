// Timeline data types
import { TimelineEntry as TimelineEntryType } from "@/data/cv-timeline";

// UI components  
import { Badge } from "@/components/ui/badge";
import { ImageModal } from "./ImageModal";

// React hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { useEditMode } from "./EditModeProvider";

// Icons for categories and external links
import { Briefcase, Code, Users, ExternalLink, Github, Play, Globe, Edit } from 'lucide-react';

// UI components
import { Button } from "@/components/ui/button";

/**
 * Dynamic Asset Import System
 * 
 * Uses Vite's import.meta.glob to automatically import all images from the assets folder.
 * This eliminates the need to manually import each image file.
 */
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

interface TimelineEntryProps {
  entry: TimelineEntryType;
  index: number;
  side: 'left' | 'right';
}

/**
 * TimelineEntry Component
 * 
 * Renders a single timeline entry using CSS Grid for robust positioning:
 * - Mobile: Single column with left-aligned timeline
 * - Desktop: Alternating left/right layout using grid columns
 */
export const TimelineEntry = ({ entry, index, side }: TimelineEntryProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { editMode } = useEditMode();
  const navigate = useNavigate();

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

  /**
   * Category styling using semantic design tokens
   */
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'work': return {
        dot: 'bg-category-work border-category-work-light',
        accent: 'border-l-category-work'
      };
      case 'project': return {
        dot: 'bg-category-project border-category-project-light',
        accent: 'border-l-category-project'
      };
      case 'community': return {
        dot: 'bg-category-community border-category-community-light',
        accent: 'border-l-category-community'
      };
      default: return {
        dot: 'bg-gradient-to-br from-tech-blue to-tech-cyan border-background',
        accent: 'border-l-tech-blue'
      };
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

  const isLeft = side === 'left';
  const styles = getCategoryStyles(entry.category);

  // Card content - shared between mobile and desktop
  const cardContent = (
    <div className={`bg-card rounded-lg border border-border dark:border-border/70 border-l-4 ${styles.accent} shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}>
      {/* Image */}
      <div 
        className={`w-full bg-muted overflow-hidden cursor-pointer ${entry.largeBanner ? 'h-48' : 'h-24'}`} 
        onClick={() => setIsImageModalOpen(true)}
      >
        <img
          src={getLocalImage(entry.image)}
          alt={entry.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          style={{ objectPosition: entry.imagePosition || 'center' }}
          onError={(e) => {
            e.currentTarget.src = assetImages['robot-wall.jpg'] || '/placeholder.svg';
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-3">
        <div className="flex flex-col gap-1.5 mb-2">
          <div className="flex items-center gap-1.5 justify-between">
            <div className="flex items-center gap-1.5">
              {getCategoryIcon(entry.category)}
              <h3 className="text-base font-semibold text-foreground leading-tight">{entry.title}</h3>
            </div>
            {editMode && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => navigate(`/edit/${index}`)}
                className="h-7 w-7 p-0"
              >
                <Edit className="h-3 w-3" />
              </Button>
            )}
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
  );

  return (
    <>
      {/* Mobile Layout - Single column */}
      <div className="md:hidden relative pl-10">
        {/* Timeline dot */}
        <div className="absolute left-4 top-3 -translate-x-1/2 z-10">
          <div className={`w-3 h-3 ${styles.dot} rounded-full border-2 shadow-md`} />
        </div>
        {/* Connecting line */}
        <div className="absolute left-[18px] top-3 w-4 h-0.5 bg-timeline-line" />
        {cardContent}
      </div>

      {/* Desktop Layout - Independent column stacking */}
      <div className="hidden md:block relative">
        {/* Timeline dot - positioned at edge of column */}
        <div className={`absolute top-3 z-10 ${isLeft ? '-right-6' : '-left-6'}`}>
          <div className={`w-3 h-3 ${styles.dot} rounded-full border-2 shadow-md`} />
        </div>
        {/* Connecting line to timeline */}
        <div className={`absolute top-4 h-0.5 bg-timeline-line ${isLeft ? '-right-6 w-6' : '-left-6 w-6'}`} />
        {cardContent}
      </div>

      {/* Image Modal */}
      <ImageModal
        src={getLocalImage(entry.image)}
        alt={entry.title}
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
      />
    </>
  );
};