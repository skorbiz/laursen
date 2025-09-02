# What is it?
This is an addition to my CV, which adds more project info and showcases my professional journey in a semi-interactive format.
This timeline serves as my introduction to AI-agent-based programming, as I experiment with Lovable.

**Where to view it:**
The webpage is hosted using GitHub Pages [here](https://skorbiz.github.io/laursen/)

**Loveable:**
Project is available here: [project](https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461)

# Todo list
This list represents the work that is still needed, that is, approved to-dos written by me. Suggestions for improvements by the AI agent. And work completed by the agent.

## Approved todo list:
- [x] Mobile-friendly page.
- [x] Dark mode.
- [x] Labels update: job, project, community.
- [x] Update links
- [x] Hide posts option
- [x] Style guide for centent
- [x] Updated description
- [x] website name
- [x] Easy image adding
- [x] **Unused code** - Remove unused code. There is a lot of code for things like tool tips and other UI elements. Are all the components used? - or can we remove some of them for a cleaner repo. Make a list of things that could be removed or cleaned. If they have a limited function, write that as well.
- [x] **Comments** - Make more comments in the code, to make it more understandable and readable to somebody with skills in backend code but limited knowledge of webdevelopmeent like typescript, react and tailwind.
- [x] **Serverless** - Make a todo and comment on the complexity and consequences of getting rid of the server to run the site. E.g.  do we really need the  SPA routing and how will the site still load static assests like images probably when they are hosted on github.
- [ ] **Unused code part 2** - Implement the suggestions made in unused-code-analysis.md
- [ ] **Local development** - I would like a flow where i can participate more in the development locally. My workflow is often i VS-code, so i would like a dev container with tools i need for it. Plus make changes on how to build and view the site in this readme. If you have other suggestion or tools i should use or do put them in the todos. Remember im normally a backend developer with little experience in web development.
- [ ] **Expanded images** - Make it so that when you click an image it shows the entire image. Focus on doing it so that it adds the least amount of complexity to the TimelineEntry.tsx and CVTimeline.tsx code.

## Suggested todos: (unapproved)
- [ ] placeholder
- [ ] placeholder 

## Rejected todos
- [ ] Add search/filter functionality to timeline entries by category, tags, or date range
- [ ] Implement smooth scrolling animations when navigating through the timeline
- [ ] Add a "back to top" button for more straightforward navigation on long timelines
- [ ] Include a skills/technologies section with visual progress bars or cloud tags
- [ ] Add export functionality to generate PDF version of the CV
- [ ] Implement lazy loading for images to improve page load performance
- [ ] Add hover animations and micro-interactions for better user engagement
- [ ] Include contact form or modal for potential employers/collaborators
- [ ] Add reading time estimates for each timeline entry
- [ ] Implement keyboard navigation support for accessibility

# Local development
(Link on deploying locally and on github pages)[https://dev.to/coderatul/host-lovabledev-project-on-github-pages-1c61]

```
npm install       # Install all dependencies
npm run build
npm run dev
```

Open the link shown in chrome.

# What is this page

## Features Overview
This is a professional timeline application built with React, TypeScript, and Tailwind CSS that showcases my career journey in robotics and software development. Key features include:

**Core Functionality:**
- **Interactive Timeline**: Chronological display of career milestones with alternating left/right layout on desktop, stacked on mobile
- **Category System**: Three distinct categories (work, project, community) with color-coded visual indicators and icons
- **Content Management**: Rich timeline entries with titles, dates, descriptions, tags, and external links
- **Image Support**: Comprehensive image handling with fallback mechanism for missing assets
- **Hide/Show Posts**: Optional visibility control for timeline entries via `hidden` field

**Technical Features:**
- **Responsive Design**: Mobile-first approach with adaptive layouts across all screen sizes
- **Dark/Light Theme**: Complete theme switching with proper contrast and semantic color tokens
- **SEO Optimized**: Proper meta tags, semantic HTML structure, and accessibility features
- **Performance**: Optimized image loading with error handling and fallback images
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions

**Design System:**
- **Semantic Tokens**: Consistent color system using HSL values and CSS custom properties
- **Component Architecture**: Modular, reusable components following design system principles
- **Visual Hierarchy**: Clear typography scale, spacing system, and visual emphasis patterns
- **Interactive Elements**: Hover states, transitions, and micro-interactions for enhanced UX

The application serves as both a professional portfolio and a demonstration of modern web development practices, combining clean design with robust functionality.