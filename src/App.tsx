// Core UI components for toast notifications and tooltips
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// React Query for data fetching and caching (future-proofing)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for client-side routing (SPA navigation)
import { HashRouter, Routes, Route } from "react-router-dom";

// Custom theme provider for dark/light mode switching
import { ThemeProvider } from "@/components/ThemeProvider";

// Page components
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Initialize React Query client for data management
const queryClient = new QueryClient();

/**
 * Main App component that sets up the application's core providers and routing.
 * 
 * Provider hierarchy (outer to inner):
 * 1. QueryClientProvider - React Query for server state management
 * 2. ThemeProvider - Custom theme management (dark/light mode)
 * 3. TooltipProvider - Radix UI tooltip context
 * 4. HashRouter - Client-side routing using hash-based URLs (GitHub Pages compatible)
 * 
 * Routing:
 * - "/" - Main timeline page (Index component)
 * - "*" - Catch-all for unknown routes (NotFound component)
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="laursen-theme">
      <TooltipProvider>
        {/* Toast notifications - dual setup for flexibility */}
        <Toaster />
        <Sonner />
        
        {/* Hash-based routing for static hosting compatibility */}
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
