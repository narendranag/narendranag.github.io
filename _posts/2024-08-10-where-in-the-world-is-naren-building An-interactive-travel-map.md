---
layout: post
title: "Where in the World is Naren – Building An Interactive Travel Map"
date: 2024-08-10
# categories: [project, development, build-notes]
---
As someone who loves to travel and has lived in various places around the world, I wanted to create a fun and interactive way to showcase all the locations I’ve visited or lived in. The idea was simple: build a map that allows me to pin every place I've been to, highlight my current location, and share it with friends and family. 

## The Inspiration

Mapping out my travels on a physical map has always been satisfying, but I wanted something more dynamic, something that could grow with every new adventure. That's when I turned to Leaflet.js, a powerful open-source library that allows you to create interactive maps with ease. By leveraging this tool, I could create a personalized map that not only marks my past travels but also keeps my current location up to date.

## The Technology Stack

To build this project, I chose a simple yet effective tech stack:
- **Leaflet.js:** This is the core of the project, enabling the interactive map functionality.
- **HTML/CSS/JavaScript:** These are the foundational web technologies that structure, style, and add interactivity to the project.
- **GitHub Pages:** A quick and free way to host and share the map online.

## Building the Map

### Setting Up Leaflet.js

Leaflet.js made it incredibly easy to set up an interactive map. With just a few lines of code, I had a world map rendered on the screen. From there, I started adding markers for each location I’ve visited. Each marker includes a popup that displays the name of the place when clicked.

### Handling Data with JSON

All the locations are stored in a `places.json` file, which is loaded dynamically into the map. This approach makes it easy to add or update locations without touching the core HTML or JavaScript. Each entry in the JSON file includes the name of the place and its geographic coordinates.

### Highlighting the Current Location

One of the cool features I added was the ability to automatically highlight the last place in the list as the current location. This is done by dynamically selecting the last entry in the JSON file and styling it differently from the other markers.

### Zoom Restrictions

To ensure a smooth user experience, I added a restriction to prevent users from zooming out beyond the world map. This small tweak keeps the focus on the world and the locations that matter.

### Deployment on GitHub Pages

Deploying the project on GitHub Pages was straightforward. With GitHub’s built-in support for static site hosting, all I had to do was push the project to a repository and enable GitHub Pages in the settings. Now, the map is live and accessible from anywhere!

## Challenges and Learnings

While the project was relatively simple to build, it wasn’t without its challenges. One issue I faced was handling large numbers of markers, which can cause performance issues on some devices. To mitigate this, I considered using clustering techniques, although it wasn’t necessary for the initial version of the project.

Another learning point was dealing with JSON file formatting and ensuring the data was loaded correctly. Even small syntax errors in JSON can cause the entire script to fail, so validating the file was crucial.

## Future Enhancements

As with any project, there are always ways to improve and expand. Here are a few ideas I’m considering for the future:
- **Marker Clustering:** For better performance and visualization when the map contains many close-together markers.
- **Search Functionality:** Allowing users to search for specific places within the map.
- **Travel Log:** Adding a feature to attach a small journal entry or photo gallery to each marker.

## Conclusion

"Where in the World is Naren" is more than just a project—it’s a visual representation of my journey through life, and I’m excited to share it with others. Whether you’re an avid traveler like me or just looking for a fun way to document your adventures, I hope this inspires you to create your own interactive map.

Feel free to check out the project on GitHub and even deploy your own version if you’d like. I’m always open to feedback, so don’t hesitate to reach out if you have any suggestions or ideas for improvement.

**Live Project**: [Where in the World is Naren](https://narendranag,com/where-in-the-world-is-naren)

**GitHub Repository**: [GitHub - Where in the World is Naren](https://github.com/narendranag/where-in-the-world-is-naren)

Happy mapping!