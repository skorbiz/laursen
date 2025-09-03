# Contributing to Professional Timeline

## Project Overview
This is a personal portfolio project showcasing a professional journey in robotics and software development. The project serves as both a career timeline and a learning exercise in modern web development practices.

## Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Development**: VS Code Dev Container

## Getting Started

### Prerequisites
- VS Code with Dev Containers extension
- Docker (for dev container)
- OR Node.js 18+ (for manual setup)

### Development Setup

#### Option 1: VS Code Dev Container (Recommended)
1. Clone the repository
2. Open in VS Code
3. When prompted, click "Reopen in Container"
4. Start development: `npm run dev`

#### Option 2: Manual Setup
```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── CVTimeline.tsx  # Main timeline component
│   ├── TimelineEntry.tsx # Individual timeline entries
│   └── ImageModal.tsx  # Image modal for expanded views
├── data/               # Data and configuration
│   └── cv-timeline.ts  # Timeline entry definitions
├── assets/            # Images and static assets
└── pages/             # Page components
```

## Code Style Guidelines

### Component Architecture
- Create small, focused components
- Use TypeScript for all components
- Follow React functional component patterns
- Implement proper error boundaries

### Styling Guidelines
- Use semantic design tokens from `index.css`
- Leverage Tailwind CSS utility classes
- Maintain dark/light theme compatibility
- Follow mobile-first responsive design

### Timeline Content Guidelines
When adding timeline entries, follow these principles:
- Use precise, technical language
- Avoid excessive promotional language
- Focus on specific technologies and accomplishments
- Include quantifiable results when possible
- Use active voice and specific action verbs

## Adding Timeline Entries

Timeline entries are defined in `src/data/cv-timeline.ts`. Each entry follows this structure:

```typescript
{
  title: "Project Title",
  date: "2024",
  startDate?: "2023", // Optional for date ranges
  image: "image-filename.jpg", // Must exist in src/assets/
  text: "Detailed description following style guide",
  tags: ["Technology", "Skill", "Tool"],
  links?: [
    { url: "https://...", label: "Demo", type: "website" }
  ],
  category: "work" | "project" | "community",
  hidden?: false // Set to true to hide from display
}
```

## Image Management
- Place images in `src/assets/`
- Use descriptive filenames
- Optimize images for web (recommended: < 500KB)
- Provide fallback handling for missing images

## Build and Deployment
- Development: `npm run dev`
- Production build: `npm run build`
- Deployment: Automatic via GitHub Actions on push to main

## Code Quality
- ESLint configuration enforces consistent code style
- Prettier handles code formatting
- TypeScript ensures type safety
- All components should have proper error handling

## Performance Considerations
- Images are dynamically imported using Vite's glob imports
- Components use React.memo where appropriate
- Minimal bundle size through unused code removal
- Optimized for GitHub Pages static hosting

## Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast design system
- Screen reader compatibility

## Contributing Process
1. Fork the repository
2. Create a feature branch
3. Follow code style guidelines
4. Test across devices and themes
5. Submit a pull request with clear description

This project prioritizes clean, maintainable code that demonstrates modern web development best practices while serving as an effective professional portfolio.