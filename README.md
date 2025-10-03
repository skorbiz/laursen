# Professional Timeline

This is a modern, interactive timeline showcasing my professional journey in robotics and software development. Built as my introduction to AI-agent-based programming using Lovable, this project demonstrates both my career progression and modern web development practices.

**🌐 Live Site:** [https://skorbiz.github.io/laursen/](https://skorbiz.github.io/laursen/)

**🔧 Lovable Project:** [https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461](https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461)

**📄 Site analytics:** [https://dashboard.simpleanalytics.com/skorbiz.github.io](https://dashboard.simpleanalytics.com/skorbiz.github.io) (requires login)

---

## Project Status: ✅ Complete

All core features have been implemented and the project is ready for production use.

## Development Log
### ✅ Completed Features:
- [x] **Mobile-responsive design** - Fully responsive layout working across all devices
- [x] **Dark/Light theme** - Complete theme system with user preference storage
- [x] **Category system** - Visual categorization (work, project, community) with icons
- [x] **Interactive timeline** - Alternating desktop layout, stacked mobile layout
- [x] **Content management** - Easy addition of timeline entries with rich metadata
- [x] **External links** - Support for GitHub, video, website, and demo links
- [x] **Hide/show posts** - Optional visibility control for timeline entries
- [x] **Style guide** - Comprehensive content guidelines for consistent tone
- [x] **Image system** - Dynamic asset loading with fallback handling
- [x] **Code cleanup** - Removed 40+ unused UI components for leaner codebase
- [x] **Documentation** - Comprehensive code comments for backend developers
- [x] **Serverless architecture** - Optimized for GitHub Pages hosting
- [x] **Dev container** - Complete VS Code development environment setup
- [x] **Expandable images** - Click-to-view full-size image modal

### 🔮 Future Enhancement Ideas:
- [ ] **Analytics integration** - Add privacy-focused analytics (e.g., Plausible) to track visitor engagement
- [ ] **Search/filter functionality** - Allow filtering timeline entries by category, tags, or date range
- [ ] **Timeline navigation** - Add quick-jump navigation for different time periods
- [ ] **Print-friendly view** - CSS print styles for generating PDF versions
- [ ] **Performance optimization** - Implement lazy loading for images and content
- [ ] **Accessibility enhancements** - Add keyboard navigation and screen reader improvements
- [ ] **Internationalization** - Multi-language support for broader audience reach
- [ ] **Content management** - Admin interface for easier timeline entry management
- [ ] **Social sharing** - Add sharing buttons for individual timeline entries
- [ ] **Progressive Web App** - Service worker for offline functionality

### 🎯 PRIORITY TODO: Responsive Layout Engine Redesign

**Issue**: Current timeline layout has scaling problems, overlapping content, and disconnected visual elements at various screen sizes.

**Goal**: Create a fluid, container-query-based layout system that adapts smoothly to any viewport size.

**Implementation Steps**:

1. **Analysis Phase**
   - [ ] Audit current breakpoint behavior across device sizes (320px - 2560px)
   - [ ] Identify specific failure points where layout breaks
   - [ ] Document content width requirements vs. available space

2. **Design New Layout System**
   - [ ] Replace fixed breakpoint system with container queries
   - [ ] Design fluid grid system that adapts to content + available space
   - [ ] Create progressive layout modes: mobile → tablet → desktop → wide
   - [ ] Plan smooth transitions between layout states

3. **Timeline Architecture Refactor**
   - [ ] **Create `TimelineContainer.tsx`**: Smart container that measures available space
   - [ ] **Create `TimelineLayout.tsx`**: Layout strategy component that chooses optimal arrangement
   - [ ] **Refactor `TimelineEntry.tsx`**: Make positioning props-driven instead of self-calculating
   - [ ] **Create `TimelineConnector.tsx`**: Dedicated component for visual connections

4. **Layout Strategy Implementation**
   - [ ] **Narrow Mobile (< 480px)**: Single column, minimal padding, compact cards
   - [ ] **Wide Mobile (480px - 640px)**: Single column with more breathing room
   - [ ] **Tablet Portrait (640px - 900px)**: Consider asymmetric layout or wider cards
   - [ ] **Tablet Landscape/Small Desktop (900px - 1200px)**: Introduce alternating layout
   - [ ] **Desktop (1200px+)**: Full alternating with optimal spacing

5. **Smart Spacing System**
   - [ ] Replace fixed margins with calculated spacing based on available width
   - [ ] Implement dynamic card width that fills available space optimally
   - [ ] Create adaptive typography scaling for different card sizes
   - [ ] Ensure minimum touch targets on all devices

6. **Connection System Redesign**
   - [ ] Replace absolute positioning with CSS Grid or Flexbox for timeline dots
   - [ ] Create adaptive connector lines that adjust to actual content positioning
   - [ ] Implement visual connection system that never disconnects
   - [ ] Add smooth animations for layout transitions

7. **Testing & Refinement**
   - [ ] Test on real devices: phones, tablets, laptops, desktops
   - [ ] Verify no overlapping content at any screen size
   - [ ] Ensure smooth transitions when resizing browser
   - [ ] Validate accessibility across all layout modes

**AI Implementation Prompt for Future Use**:
```
"Redesign the timeline layout system with these requirements:
1. Replace the current alternating desktop layout with a container-query-based system
2. Create smooth scaling from mobile (320px) to ultrawide (2560px+) displays
3. Eliminate all content overlapping and disconnected visual elements
4. Use CSS Grid or Flexbox for robust positioning instead of absolute positioning
5. Make the layout adapt fluidly to content width needs vs. available space
6. Create dedicated components for layout logic, timeline connections, and container management
7. Implement progressive layout modes that transition smoothly
8. Ensure the timeline dots and connecting lines always align perfectly with content cards"
```

### 🚫 Considered but Rejected:
- Search/filter functionality (complexity vs. benefit for personal CV)
- Smooth scrolling animations (performance vs. visual impact)
- Back to top button (timeline is manageable length)
- Skills/technologies section (redundant with timeline tags)
- Export functionality (GitHub Pages serves this purpose)
- Contact form (prefer direct contact methods)
- Reading time estimates (entries are brief)
- Hover animations (current interactions are sufficient)

# Local development

## Using VS Code Dev Container (Recommended for Backend Developers)
This project includes a complete VS Code Dev Container setup that provides all the tools you need for web development:

1. **Open in Dev Container:**
   - Install the "Dev Containers" extension in VS Code
   - Open this project in VS Code
   - When prompted, click "Reopen in Container" (or use Ctrl+Shift+P → "Dev Containers: Reopen in Container")
   - The container will automatically install Node.js, dependencies, and useful VS Code extensions

2. **Start Development:**
   ```bash
   npm run dev        # Start the development server
   ```
   - The dev server will be automatically forwarded to your local machine (usually port 5173)
   - Live reload will update the page as you make changes

3. **Build for Production:**
   ```bash
   npm run build      # Build for production
   npm run preview    # Preview the production build locally
   ```

## Manual Local Setup (Alternative)
If you prefer not to use the dev container:

```bash
npm install       # Install all dependencies
npm run dev       # Start development server
npm run build     # Build for production
```

## Deployment
GitHub Pages deployment is handled automatically via GitHub Actions when you push to the main branch.

Reference: [Deploy Lovable.dev project on GitHub Pages](https://dev.to/coderatul/host-lovabledev-project-on-github-pages-1c61)

---

## 🏗️ Layout Architecture

### Component Hierarchy
The timeline layout system consists of several interconnected components:

**CVTimeline.tsx** (Main Container)
- Root component managing the overall page layout
- Fixed max-width container (`max-w-6xl`) with centered alignment
- Handles header, legend, timeline container, and footer sections
- Manages the central timeline line positioning (dual lines for mobile/desktop)

**TimelineEntry.tsx** (Individual Timeline Items)
- Renders each timeline entry with responsive positioning
- Implements alternating left/right layout on desktop (`index % 2`)
- Uses complex positioning with absolute/relative layouts for timeline dots
- Manages connecting lines between timeline dots and content cards

### Current Layout Mechanics
1. **Desktop Layout**: Alternating left/right positioning with centered timeline
   - Even indices (0, 2, 4...) appear on the left side
   - Odd indices (1, 3, 5...) appear on the right side
   - Timeline dots positioned at 50% with transforms
   - Connecting lines use conditional positioning based on entry side

2. **Mobile Layout**: Stacked vertical layout with left-aligned timeline
   - All entries stack vertically with consistent left padding
   - Timeline line positioned at fixed left offset
   - Timeline dots aligned to the left timeline

### Known Layout Issues
- **Overlapping on Small Screens**: Content cards can overlap when viewport is too narrow
- **Disconnected Arrows**: Connecting lines between timeline dots and cards sometimes have gaps
- **Scaling Problems**: Layout breaks at intermediate screen sizes between mobile/desktop breakpoints
- **Fixed Breakpoints**: Hard transitions at `md:` breakpoint (768px) don't account for content needs

---

## 🎯 Project Features
### 🖥️ **Professional Timeline Application**
Built with modern web technologies (React, TypeScript, Tailwind CSS) to showcase career journey in robotics and software development.

### 🎨 **Core Functionality**
- **📱 Interactive Timeline**: Chronological display with alternating desktop layout, stacked mobile design
- **🏷️ Smart Categories**: Work, project, and community activities with distinct visual styling
- **🔗 Rich Content**: Timeline entries support titles, descriptions, tags, external links, and images
- **🖼️ Image Gallery**: Dynamic asset loading with click-to-expand modal views
- **👁️ Visibility Control**: Optional hiding of timeline entries for content curation

### ⚡ **Technical Excellence**
- **📱 Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **🌓 Theme System**: Complete dark/light mode with user preference persistence
- **🎯 SEO Optimized**: Semantic HTML, proper meta tags, and accessibility features
- **⚡ High Performance**: Optimized image loading, error handling, and efficient asset management
- **🔒 Type Safety**: Full TypeScript implementation with comprehensive type definitions

### 🎨 **Design System**
- **🎨 Semantic Tokens**: Consistent HSL color system with CSS custom properties
- **🧩 Modular Components**: Reusable, focused components following design principles
- **📐 Visual Hierarchy**: Thoughtful typography, spacing, and emphasis patterns
- **✨ Interactive Elements**: Smooth hover states, transitions, and user feedback

### 🏗️ **Architecture**
- **☁️ Serverless**: Optimized for GitHub Pages with static asset delivery
- **🔧 Modern Tooling**: Vite build system, ESLint, Prettier, and dev container support
- **📦 Lean Codebase**: Minimal dependencies with 40+ unused components removed
- **📚 Well Documented**: Comprehensive comments for backend developers entering web development

---
