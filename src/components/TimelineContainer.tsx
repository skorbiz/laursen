import { ReactNode, useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export type LayoutMode = 'narrow-mobile' | 'wide-mobile' | 'tablet' | 'desktop' | 'wide-desktop';

interface TimelineContainerProps {
  children: ReactNode;
  onLayoutChange?: (mode: LayoutMode) => void;
}

export const TimelineContainer = ({ children, onLayoutChange }: TimelineContainerProps) => {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('narrow-mobile');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      let newMode: LayoutMode;
      
      if (containerWidth < 480) {
        newMode = 'narrow-mobile';
      } else if (containerWidth < 640) {
        newMode = 'wide-mobile';
      } else if (containerWidth < 900) {
        newMode = 'tablet';
      } else if (containerWidth < 1200) {
        newMode = 'desktop';
      } else {
        newMode = 'wide-desktop';
      }
      
      if (newMode !== layoutMode) {
        setLayoutMode(newMode);
        onLayoutChange?.(newMode);
      }
    };

    // Initial layout calculation
    updateLayout();

    // Use ResizeObserver for more precise container size tracking
    const resizeObserver = new ResizeObserver(updateLayout);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [layoutMode, onLayoutChange]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full mx-auto transition-all duration-300 ease-in-out",
        // Dynamic max-width based on layout mode
        layoutMode === 'narrow-mobile' && "max-w-sm px-4",
        layoutMode === 'wide-mobile' && "max-w-md px-6",
        layoutMode === 'tablet' && "max-w-2xl px-8",
        layoutMode === 'desktop' && "max-w-4xl px-8",
        layoutMode === 'wide-desktop' && "max-w-6xl px-12"
      )}
      data-layout-mode={layoutMode}
    >
      {children}
    </div>
  );
};