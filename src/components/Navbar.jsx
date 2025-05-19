import { DarkModeToggle } from "./DarkModeToggle";
import { Link as ScrollLink } from "react-scroll";

export const Navbar = () => {
    return (
            <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10 dark:bg-gray-900 dark:text-white">
                <ul className="flex justify-center space-x-6 p-4 font-medium">
                <li>
                    <ScrollLink to="about" smooth={true} duration={200} offset={-80} className="cursor-pointer hover:text-blue-500">
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="projects" smooth={true} duration={200} offset={-80} className="cursor-pointer hover:text-blue-500">
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink to="more" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-500">
                        Etc
                    </ScrollLink>
                </li>
                <li><DarkModeToggle /></li>
                </ul>
            </nav>
    )
}