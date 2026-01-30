# Professional Timeline

This is a modern, interactive timeline showcasing my professional journey in robotics and software development. Built as my introduction to AI-agent-based programming using Lovable, this project demonstrates both my career progression and modern web development practices.

**🌐 Live Site:** [https://skorbiz.github.io/laursen/](https://skorbiz.github.io/laursen/)

**🔧 Lovable Project:** [https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461](https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461)

**📄 Site analytics:** [https://dashboard.simpleanalytics.com/skorbiz.github.io](https://dashboard.simpleanalytics.com/skorbiz.github.io) (requires login)

---

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
