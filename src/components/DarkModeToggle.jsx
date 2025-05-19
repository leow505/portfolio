import { useDarkMode } from '@/context/ThemeContest';
import { CiLight,CiDark  } from "react-icons/ci";

export const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        
        <button onClick={() => setDarkMode(!darkMode)} className="p-1 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow hover:shadow-md transition-all duration-300 ease-in-out">
            { darkMode ? <CiLight className="text-yellow-400 rotate-0 transition-transform duration-300"/> : <CiDark className="text-gray-800 dark:text-white rotate-180 transition-transform duration-300"/>}</button>
    );
}