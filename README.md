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
- [ ] I edited some of the content for the timeline in the data. Make the appropriate updates.
- [ ] Add a style guide (probably as a comment in the cv-timeline.ts) for how to go from the draft text to the AI-corrected text. A key point is to avoid excessive positive words like 'advanced' and 'pioneering', as they can make it look like a sales pitch. Here, the focus is on prices and exact descriptions of the tasks. Technology keywords and tasks are more critical.
- [ ] I uploaded a new image for the Weed Removal Robot - Navigation & Control post but it dosnt show. Fix it - and make it so that images load more genneric next time. And show a dummy image if it fails to load the image. Probably because the loader in the content is a bit wired with redundant typing of image names. Make the flow more smooth.
- [ ] Add your ai magic to the image o-robotics so that it fits well with the narrow horizontal layout, and other things if you have ideas.
- [ ] I would like a flow where i can participate more in the development locally. My workflow is often i VS-code, so i would like a dev container with tools i need for it. Plus make changes on how to build and view the site in this readme. If you have other suggestion put them in the todos.
- [ ] Remove unused code. There is a lot of code for things like tool tips and other UI elements. Are all the components used? - or can we remove some of them for a cleaner repo. Make a list of things that could be removed or cleaned. If they have a limited function, write that as well.
- [ ] Make more comments in the code, to make it more understandable and readable to somebody with skills in backend code but limited knowledge of webdevelopmeent like typescript, react and tailwind.  

## Suggested todos: (unapproved)
- [ ] placeholder
- [ ] placeholder 

## Done tasks:
- [x] Mobile-friendly page. Post overlaps on a narrow screen.
- [x] Option to switch to dark mode.
- [x] Mobile-friendly page. Post overlaps on a narrow screen.
- [x] In cv-timeline.ts and possibly other places in the code, the 'research' and 'job' labels are still used. I would like to change it to workplace and project so that it aligns with the legend.

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