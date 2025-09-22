import { ReactNode } from 'react';
import { LayoutMode } from './TimelineContainer';
import { cn } from '@/lib/utils';

interface TimelineLayoutProps {
  layoutMode: LayoutMode;
  children: ReactNode;
}

export const TimelineLayout = ({ layoutMode, children }: TimelineLayoutProps) => {
  const isMobile = layoutMode === 'narrow-mobile' || layoutMode === 'wide-mobile';
  const isTablet = layoutMode === 'tablet';
  const isDesktop = layoutMode === 'desktop' || layoutMode === 'wide-desktop';

  return (
    <div className="relative">
      {/* Timeline Central Line */}
      <div
        className={cn(
          "absolute top-0 bottom-0 bg-border transition-all duration-300",
          // Mobile: Left-aligned timeline
          isMobile && "left-6 w-0.5",
          // Tablet: Slightly left of center for asymmetric layout
          isTablet && "left-1/3 w-0.5",
          // Desktop: Centered timeline
          isDesktop && "left-1/2 w-0.5 transform -translate-x-px"
        )}
      />
      
      {/* Timeline Content Grid */}
      <div
        className={cn(
          "relative",
          // Mobile: Simple vertical stack
          isMobile && "space-y-8",
          // Tablet: Asymmetric grid with more space on right
          isTablet && "grid grid-cols-[1fr_2fr] gap-8",
          // Desktop: Alternating layout with CSS Grid
          isDesktop && "grid grid-cols-2 gap-8"
        )}
      >
        {children}
      </div>
    </div>
  );
};