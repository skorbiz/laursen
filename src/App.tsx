// Core UI components for toast notifications and tooltips
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// React Router for client-side routing (SPA navigation)
import { HashRouter, Routes, Route } from "react-router-dom";

// Custom theme provider for dark/light mode switching
import { ThemeProvider } from "@/components/ThemeProvider";

// Edit mode provider
import { EditModeProvider } from "@/components/EditModeProvider";

// Page components
import Index from "./pages/Index";
import EditPost from "./pages/EditPost";

/**
 * Main App component that sets up the application's core providers and routing.
 * 
 * Provider hierarchy (outer to inner):
 * 1. ThemeProvider - Custom theme management (dark/light mode)
 * 2. EditModeProvider - Edit mode state management
 * 3. TooltipProvider - Radix UI tooltip context
 * 4. HashRouter - Client-side routing using hash-based URLs (GitHub Pages compatible)
 */
const App = () => (
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
);

export default App;
