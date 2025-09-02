# Unused Code Analysis

## Currently Used UI Components:
- **badge** - Used in TimelineEntry.tsx for tags
- **button** - Used in CVTimeline.tsx for social links and ThemeToggle.tsx
- **toaster** - Used in App.tsx for notifications
- **sonner** - Used in App.tsx for toast notifications
- **tooltip** - Used in App.tsx via TooltipProvider

## Potentially Unused UI Components (Can be removed):

### High Confidence - Safe to Remove:
- **accordion** - Not used anywhere
- **alert-dialog** - Not used anywhere  
- **alert** - Not used anywhere
- **aspect-ratio** - Not used anywhere
- **avatar** - Not used anywhere
- **breadcrumb** - Not used anywhere
- **calendar** - Not used anywhere
- **card** - Not used anywhere (timeline uses custom div structure)
- **carousel** - Not used anywhere
- **chart** - Not used anywhere
- **checkbox** - Not used anywhere
- **collapsible** - Not used anywhere
- **command** - Not used anywhere
- **context-menu** - Not used anywhere
- **drawer** - Not used anywhere
- **dropdown-menu** - Not used anywhere
- **form** - Not used anywhere
- **hover-card** - Not used anywhere
- **input-otp** - Not used anywhere
- **input** - Not used anywhere
- **label** - Not used anywhere
- **menubar** - Not used anywhere
- **navigation-menu** - Not used anywhere
- **pagination** - Not used anywhere
- **popover** - Not used anywhere
- **progress** - Not used anywhere
- **radio-group** - Not used anywhere
- **resizable** - Not used anywhere
- **scroll-area** - Not used anywhere
- **select** - Not used anywhere
- **separator** - Not used anywhere
- **sheet** - Not used anywhere
- **sidebar** - Not used anywhere
- **skeleton** - Not used anywhere
- **slider** - Not used anywhere
- **switch** - Not used anywhere
- **table** - Not used anywhere
- **tabs** - Not used anywhere
- **textarea** - Not used anywhere
- **toast** - Not used anywhere (using sonner instead)
- **toggle-group** - Not used anywhere
- **toggle** - Not used anywhere

### Limited Function Components:
- **dialog** - Only referenced in command.tsx but command isn't used
- **use-toast** - Hook exists but not used (using sonner instead)

## Other Potentially Unused Files:
- **NotFound.tsx** - Used as catch-all route but may never be reached with HashRouter
- **hooks/use-mobile.tsx** - Only used in sidebar.tsx which is unused

## Estimated Cleanup Impact:
Removing unused components could reduce bundle size by approximately 60-70% and significantly clean up the repository. This would leave only the essential components: badge, button, toaster, sonner, and tooltip.