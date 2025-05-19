import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { LoadingIntro } from "@/components/LoadingIntro";
import { TechStack } from "./TechStack";

export const About = () => {
    return (
        <section id="about" className="pt-20 px-6 min-h-screen dark:bg-gray-700 dark:text-white">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* left side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src=""
                        alt="Profile"
                        className="w-50 h-50 rounded-full object-cover mb-4"
                    />
                    <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-300 mx-auto">
                        <a
                        href="https://github.com/leow505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                        >
                        <FaGithub />
                        </a>
                        <a
                        href="https://linkedin.com/in/leow505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                        >
                        <FaLinkedin />
                        </a>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <LoadingIntro />
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        I'm a recent graduate from UC Berkeley with a background in Electrical Engineering and Computer Sciences,
                        focusing on software development. I enjoy building full-stack applications that solve real-world problems—
                        from organizing club events to helping lost pets find their homes.
                        <br /><br />
                        My experience spans React, Java, Spring Boot, and working with APIs and databases. I love taking on new
                        challenges, learning quickly, and turning ideas into polished, user-friendly products.
                        <br /><br />
                        When I'm not coding, you'll probably find me snowboarding during the winter season or enjoying some casual
                        gaming to unwind. I value a good balance between creativity, problem-solving, and having fun along the way.
                    </p>
                </div>
            </div>
            <TechStack />
        </section>
        
    )
}