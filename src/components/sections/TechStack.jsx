import {
  SiReact, SiJavascript, SiPython, SiSpringboot, SiMongodb,
  SiNodedotjs, SiExpress, SiTailwindcss, SiBootstrap,
  SiGit, SiVite, SiMysql, SiLeaflet, SiOpenai, SiHtml5,
  SiCss3
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const techList = [
    { name: "Java", icon: FaJava },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Git", icon: SiGit },
    { name: "Vite", icon: SiVite },
    { name: "SQL", icon: SiMysql },
    { name: "Leaflet", icon: SiLeaflet },
    { name: "ChatGPT API", icon: SiOpenai },
];

export const TechStack = () => {
  return (
      <div className="mt-10 max-w-5xl mx-auto text-center px-6">
        <div className="overflow-hidden">
          <div className="flex animate-scroll-slide gap-8 w-max">
            {[...techList, ...techList].map(({ name, icon: Icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center min-w-[80px]"
              >
                <Icon className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                <span className="text-xs text-gray-800 dark:text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};