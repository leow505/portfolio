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
        "A frontend application to help users report and find lost pets. Features include AI-generated posters using the ChatGPT API and location-based sightings using Leaflet map integration.",
      tech: ["React", "Bootstrap", "ChatGPT API", "Leaflet Map API"],
    },
    {
      title: "Club Event Organizer",
      image: csclub,
      description:
        "A web platform for managing and promoting club events with live updates and club officer organization",
      tech: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
      live: "https://mern-site-8den.onrender.com/",
    },
    {
      title: "Personal Portfolio",
      image: "",
      description:
        "My personal website showcasing projects, skills, and experience using modern frontend tools.",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
        title: "Build Your Own World (CS61B)",
        image: byow,
        description:
          "A tile-based exploration game built in Java using procedural world generation, player movement, and save/load functionality. Developed as part of UC Berkeley's CS61B Data Structures course.",
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
          "A turn-based tower defense game implemented in Python. Features object-oriented programming, inheritance, and game state management. Built as part of UC Berkeley's CS61A Structure and Interpretation of Computer Programs course.",
        tech: ["Python", "OOP", "Inheritance", "Game Logic"],
      },
  ];