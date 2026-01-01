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
 * 
 * Benefits:
 * - Automatic discovery of new images
 * - Type-safe access to assets
 * - Fallback handling for missing images
 */
const importAssets = () => {
  // Eagerly import all files from the assets directory
  const images = import.meta.glob('@/assets/*', { eager: true });
  const imageMap: Record<string, string> = {};
  
  // Transform the import paths into a filename-to-URL mapping
  Object.entries(images).forEach(([path, module]) => {
    const filename = path.split('/').pop(); // Extract just the filename
    if (filename && (module as any).default) {
      imageMap[filename] = (module as any).default;
    }
  });
  
  return imageMap;
};

// Pre-load all assets for use in components
const assetImages = importAssets();

// Component props interface
interface TimelineEntryProps {
  entry: TimelineEntryType;
  isLast: boolean;
  index: number;
}

/**
 * TimelineEntry Component
 * 
 * Renders a single timeline entry with responsive design:
 * - Mobile: Stacked layout with left-aligned timeline
 * - Desktop: Alternating left/right layout with centered timeline
 * 
 * Features:
 * - Category-based styling (work/project/community)
 * - Dynamic image loading with fallbacks
 * - External links with appropriate icons
 * - Responsive hover effects
 */
export const TimelineEntry = ({ entry, isLast, index }: TimelineEntryProps) => {
  // State for image modal
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { editMode } = useEditMode();
  const navigate = useNavigate();
  /**
   * Image resolution helper
   * Uses the pre-loaded asset map to find images, with graceful fallbacks
   */
  const getLocalImage = (imageName: string) => {
    return assetImages[imageName] || assetImages['robot-wall.jpg'] || '/placeholder.svg';
  };

  /**
   * Date formatting helper
   * Supports both single dates and date ranges (startDate - endDate)
   */
  const formatDate = () => {
    if (entry.startDate) {
      return `${entry.startDate} - ${entry.date}`;
    }
    return entry.date;
  };

  /**
   * Category icon mapping
   * Each category (work/project/community) has a distinct icon
   */
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work': return <Briefcase className="h-3 w-3" />;
      case 'project': return <Code className="h-3 w-3" />;
      case 'personal': return <Users className="h-3 w-3" />;
      default: return null;
    }
  };

  /**
   * Timeline dot color based on entry category
   * Uses semantic colors to distinguish between work, projects, and community activities
   */
  const getDotColor = (category: string) => {
    switch (category) {
      case 'work': return 'bg-blue-500 border-blue-200';
      case 'project': return 'bg-green-500 border-green-200';
      case 'personal': return 'bg-purple-500 border-purple-200';
      default: return 'bg-gradient-to-br from-tech-blue to-tech-cyan border-background';
    }
  };

  /**
   * Left border accent color for timeline cards
   * Provides visual consistency with the timeline dots
   */
  const getCategoryAccent = (category: string) => {
    switch (category) {
      case 'work': return 'border-l-blue-500';
      case 'project': return 'border-l-green-500';
      case 'personal': return 'border-l-purple-500';
      default: return 'border-l-tech-blue';
    }
  };

  /**
   * Link icon resolver based on link type
   * Provides appropriate icons for different external link types
   */
  const getLinkIcon = (type?: string) => {
    switch (type) {
      case 'github': return <Github className="h-3 w-3" />;
      case 'video': return <Play className="h-3 w-3" />;
      case 'website': return <Globe className="h-3 w-3" />;
      default: return <ExternalLink className="h-3 w-3" />;
    }
  };

  // Determine layout side for desktop alternating layout (even = left, odd = right)
  const isLeft = index % 2 === 0;

  return (
    <div className="relative w-full mb-6 md:mb-3">
      {/* Timeline dot - centered on desktop, left on mobile */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center z-10">
        <div className={`w-3 h-3 ${getDotColor(entry.category)} rounded-full border-2 shadow-md`} />
      </div>

      {/* Connecting line from dot to content - hidden on mobile */}
      <div className={`hidden md:block absolute top-1.5 ${isLeft ? 'right-1/2 mr-1.5' : 'left-1/2 ml-1.5'} w-6 h-0.5 bg-timeline-line z-5`} />

      {/* Content - stacked on mobile, alternating on desktop */}
      <div className={`flex pl-12 md:pl-0 ${isLeft ? 'md:justify-start md:pr-16' : 'md:justify-end md:pl-16'} ${index > 0 ? 'md:-mt-20' : ''}`}>
        <div className={`w-full max-w-lg ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
          <div className={`bg-card rounded-lg border border-border dark:border-border/70 border-l-4 ${getCategoryAccent(entry.category)} shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden`}>
            {/* Image - compact and clickable for full view, with dynamic height */}
            <div className={`w-full bg-muted overflow-hidden cursor-pointer ${entry.largeBanner ? 'h-48' : 'h-24'}`} onClick={() => setIsImageModalOpen(true)}>
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
