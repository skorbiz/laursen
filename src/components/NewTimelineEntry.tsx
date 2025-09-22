import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageModal } from "@/components/ImageModal";
import { ExternalLink, Github, Play, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { LayoutMode } from './TimelineContainer';
import { TimelineConnector } from './TimelineConnector';
import type { TimelineEntry } from '@/data/cv-timeline';

// Asset loading functionality
const importAssets = import.meta.glob('@/assets/*', { eager: true, as: 'url' });
const assetImages: Record<string, string> = {};

Object.entries(importAssets).forEach(([path, module]) => {
  const filename = path.split('/').pop() || '';
  assetImages[filename] = module;
});

const getLocalImage = (imageName: string): string => {
  if (!imageName) return '';
  
  const exactMatch = assetImages[imageName];
  if (exactMatch) return exactMatch;
  
  const nameWithoutExt = imageName.replace(/\.[^/.]+$/, "");
  const possibleExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
  
  for (const ext of possibleExtensions) {
    const withExt = `${nameWithoutExt}.${ext}`;
    if (assetImages[withExt]) return assetImages[withExt];
  }
  
  return '';
};

// Helper functions
const formatDate = (dateStr: string): string => {
  if (dateStr === 'Present') return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'work': return '💼';
    case 'project': return '🚀';
    case 'community': return '🤝';
    default: return '📍';
  }
};

const getDotColor = (category: string): string => {
  switch (category) {
    case 'work': return 'border-blue-500';
    case 'project': return 'border-purple-500';  
    case 'community': return 'border-green-500';
    default: return 'border-gray-400';
  }
};

const getCategoryAccent = (category: string): string => {
  switch (category) {
    case 'work': return 'bg-blue-500/10 border-blue-500/20';
    case 'project': return 'bg-purple-500/10 border-purple-500/20';
    case 'community': return 'bg-green-500/10 border-green-500/20';
    default: return 'bg-gray-500/10 border-gray-500/20';
  }
};

const getLinkIcon = (url: string) => {
  if (url.includes('github.com')) return <Github className="w-4 h-4" />;
  if (url.includes('youtube.com') || url.includes('youtu.be')) return <Play className="w-4 h-4" />;
  return <Globe className="w-4 h-4" />;
};

interface NewTimelineEntryProps {
  entry: TimelineEntry;
  layoutMode: LayoutMode;
  position: 'left' | 'right' | 'mobile';
  isLast: boolean;
}

export const NewTimelineEntry = ({ entry, layoutMode, position, isLast }: NewTimelineEntryProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const isMobile = layoutMode === 'narrow-mobile' || layoutMode === 'wide-mobile';
  const isTablet = layoutMode === 'tablet';

  const handleImageClick = (imageName: string) => {
    const imageUrl = getLocalImage(imageName);
    if (imageUrl) {
      setSelectedImage(imageUrl);
      setIsImageModalOpen(true);
    }
  };

  return (
    <div
      className={cn(
        "relative transition-all duration-300 ease-in-out",
        // Mobile: Full width with left padding for timeline
        isMobile && "pl-16 pr-4",
        // Tablet: Positioning based on asymmetric grid
        isTablet && position === 'left' && "col-start-1 pr-4",
        isTablet && position === 'right' && "col-start-2 pl-4",
        // Desktop: Alternating positioning
        !isMobile && !isTablet && position === 'left' && "pr-8",
        !isMobile && !isTablet && position === 'right' && "pl-8",
        // Bottom margin except for last item
        !isLast && "mb-12"
      )}
    >
      {/* Timeline Connector */}
      <TimelineConnector
        layoutMode={layoutMode}
        position={position}
        categoryColor={getDotColor(entry.category)}
        isLast={isLast}
      />

      {/* Content Card */}
      <div
        className={cn(
          "relative bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300",
          getCategoryAccent(entry.category),
          // Responsive sizing
          layoutMode === 'narrow-mobile' && "text-sm",
          layoutMode === 'wide-mobile' && "text-base",
          layoutMode === 'tablet' && "text-base",
          layoutMode === 'desktop' && "text-base",
          layoutMode === 'wide-desktop' && "text-lg"
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">{getCategoryIcon(entry.category)}</span>
            <Badge variant="secondary" className="text-xs">
              {entry.category}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            {entry.startDate ? formatDate(entry.startDate) : formatDate(entry.date)}
            {entry.startDate && entry.date !== entry.startDate && ` - ${formatDate(entry.date)}`}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 leading-tight">
          {entry.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {entry.text}
        </p>

        {/* Image */}
        {entry.image && (
          <div className="mb-4">
            <img
              src={getLocalImage(entry.image)}
              alt={entry.title}
              className="w-full h-48 object-cover rounded-md cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleImageClick(entry.image!)}
              loading="lazy"
            />
          </div>
        )}

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {entry.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Links */}
        {entry.links && entry.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {entry.links.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="h-8 px-3 text-xs"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5"
                >
                  {getLinkIcon(link.url)}
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        src={selectedImage}
        alt={entry.title}
      />
    </div>
  );
};