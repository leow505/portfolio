import { DarkModeToggle } from "./DarkModeToggle";

export const Navbar = () => {
    return (
            <nav className="fixed top-0 left-0 right-0 bg-white shadow z-10 dark:bg-gray-900 dark:text-white">
                <ul className="flex justify-center space-x-6 p-4 font-medium">
                <li><a href="#about" className="hover:text-blue-500">About</a></li>
                <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                <li><a href="#more" className="hover:text-blue-500">Etc</a></li>
                <li><DarkModeToggle /></li>
                </ul>
            </nav>
    )
}