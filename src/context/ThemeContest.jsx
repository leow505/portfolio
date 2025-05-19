import { createContext, useContext, useEffect, useState } from "react";

const ThemeContest = createContext('light');

export const ThemeProvider = ({children}) => {
    const [ darkMode, setDarkMode ] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect( () => {
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [darkMode])

    return (
        <ThemeContest.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContest.Provider>
    )
}

export const useDarkMode = () => useContext(ThemeContest);