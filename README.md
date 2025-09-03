# Johan Sund Laursen - Professional Timeline

This is a modern, interactive timeline showcasing my professional journey in robotics and software development. Built as my introduction to AI-agent-based programming using Lovable, this project demonstrates both my career progression and modern web development practices.

**🌐 Live Site:** [https://skorbiz.github.io/laursen/](https://skorbiz.github.io/laursen/)

**🔧 Lovable Project:** [https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461](https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461)

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