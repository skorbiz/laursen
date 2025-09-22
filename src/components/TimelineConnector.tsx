import { cn } from '@/lib/utils';
import { LayoutMode } from './TimelineContainer';

interface TimelineConnectorProps {
  layoutMode: LayoutMode;
  position: 'left' | 'right' | 'mobile';
  categoryColor: string;
  isLast?: boolean;
}

export const TimelineConnector = ({ 
  layoutMode, 
  position, 
  categoryColor, 
  isLast = false 
}: TimelineConnectorProps) => {
  const isMobile = layoutMode === 'narrow-mobile' || layoutMode === 'wide-mobile';
  const isTablet = layoutMode === 'tablet';
  
  return (
    <div className="relative">
      {/* Timeline Dot */}
      <div
        className={cn(
          "absolute w-4 h-4 rounded-full border-2 bg-background z-10 transition-all duration-300",
          categoryColor,
          // Mobile positioning: left-aligned
          isMobile && "left-6 transform -translate-x-1/2 top-6",
          // Tablet positioning: aligned to left timeline
          isTablet && "left-1/3 transform -translate-x-1/2 top-6",
          // Desktop positioning: centered with content
          layoutMode === 'desktop' && position === 'left' && "right-0 transform translate-x-1/2 top-6",
          layoutMode === 'desktop' && position === 'right' && "left-0 transform -translate-x-1/2 top-6",
          layoutMode === 'wide-desktop' && position === 'left' && "right-0 transform translate-x-1/2 top-8",
          layoutMode === 'wide-desktop' && position === 'right' && "left-0 transform -translate-x-1/2 top-8"
        )}
      />
      
      {/* Connecting Line to Content */}
      {!isMobile && (
        <div
          className={cn(
            "absolute bg-border transition-all duration-300",
            // Tablet: Horizontal line from timeline to content
            isTablet && "h-0.5 top-6 left-1/3 transform -translate-y-1/2",
            isTablet && position === 'left' && "w-8",
            isTablet && position === 'right' && "w-8",
            // Desktop: Horizontal connecting lines
            layoutMode === 'desktop' && "h-0.5 top-6 transform -translate-y-1/2",
            layoutMode === 'desktop' && position === 'left' && "right-0 w-8",
            layoutMode === 'desktop' && position === 'right' && "left-0 w-8",
            layoutMode === 'wide-desktop' && "h-0.5 top-8 transform -translate-y-1/2",
            layoutMode === 'wide-desktop' && position === 'left' && "right-0 w-12",
            layoutMode === 'wide-desktop' && position === 'right' && "left-0 w-12"
          )}
        />
      )}
    </div>
  );
};