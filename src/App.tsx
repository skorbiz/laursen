// Core UI components for toast notifications and tooltips
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// React Query for data fetching and caching (future-proofing)
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for client-side routing (SPA navigation)
import { HashRouter, Routes, Route } from "react-router-dom";

// Custom theme provider for dark/light mode switching
import { ThemeProvider } from "@/components/ThemeProvider";

// Edit mode provider
import { EditModeProvider } from "@/components/EditModeProvider";

// Page components
import Index from "./pages/Index";
import EditPost from "./pages/EditPost";

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
 * - All routes lead to the Index component (single page application)
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="laursen-theme">
      <EditModeProvider>
        <TooltipProvider>
          {/* Toast notifications using Sonner */}
          <Sonner />
          
          {/* Hash-based routing for static hosting compatibility */}
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/edit/:id" element={<EditPost />} />
              {/* Single page application - all routes go to Index */}
              <Route path="*" element={<Index />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </EditModeProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
