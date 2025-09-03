/**
 * Application constants and configuration
 */

export const APP_CONFIG = {
  title: "Professional Timeline",
  description: "Professional journey in robotics and software development",
  author: "Professional Developer",
  url: "https://skorbiz.github.io/laursen/",
  version: "1.0.0"
} as const;

export const TIMELINE_CONFIG = {
  entriesPerPage: 50, // For future pagination if needed
  imageAspectRatio: "16:9",
  fallbackImage: "robot-wall.jpg"
} as const;

export const THEME_STORAGE_KEY = "vite-ui-theme" as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/skorbiz",
  linkedin: "https://linkedin.com/in/johan-sund-laursen",
  lovable: "https://lovable.dev/projects/fd7da10e-2ae3-463f-8dec-551df21e6461"
} as const;