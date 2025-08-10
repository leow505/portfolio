import petrack from "@/assets/img/petrack.jpg"
import csclub from "@/assets/img/csclub.jpg"
import byow from "@/assets/img/byow.jpg"
import ngram from "@/assets/img/ngram.jpg"
import ants from "@/assets/img/ants.jpg"

export const projectList = [
    {
      title: "PeTrack",
      image: petrack,
      description:
        "Frontend application to help users report and find lost pets, featuring AI-generated posters (ChatGPT API) and interactive, location-based sightings (Leaflet.js). Designed with a planned Python backend for image matching and data storage.",
      tech: ["React", "Bootstrap", "ChatGPT API", "Leaflet Map API"],
    },
    {
      title: "Club Event Organizer",
      image: csclub,
      description:
        "MERN-based platform for managing and promoting club events with live updates and officer-only event controls. Built responsive UI from Figma designs and deployed on Render for 24/7 availability.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
      live: "https://mern-site-8den.onrender.com/",
    },
    {
      title: "Personal Portfolio",
      image: "",
      description:
        "Personal portfolio showcasing projects, skills, and experience. Built with React, Tailwind CSS, and Vite for fast, responsive performance.",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
        title: "Build Your Own World (CS61B)",
        image: byow,
        description:
          "Java-based tile exploration game with procedural world generation, interactive player mechanics, and persistent save/load features. Applied OOP and data structures from CS61B.",
        tech: ["Java", "OOP", "Procedural Generation"],
      },
      {
        title: "NGordnet (CS61B)",
        image: ngram, 
        description:
          "A word trends analysis tool built with Java, allowing users to visualize the frequency of word usage over time based on Google Ngram data. Implemented core data structures, graph traversal, and REST API logic as part of UC Berkeley's CS61B course.",
        tech: ["Java", "REST API", "Data Structures", "Graphs"],
      },
      {
        title: "Ants vs. SomeBees (CS61A)",
        image: ants,
        description:
          "Python-based tower defense game inspired by Plants vs. Zombies. Applied OOP, inheritance, and game state management to create engaging turn-based gameplay.",
        tech: ["Python", "OOP", "Inheritance", "Game Logic"],
      },
  ];