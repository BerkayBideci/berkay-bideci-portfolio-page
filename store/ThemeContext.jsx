import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    isDarkTheme: true,
    toggleThemeHandler: () => { },
});

export function ThemeContextProvider(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => initialThemeHandler());

    function isLocalStorageEmpty() {
        return !localStorage.getItem("isDarkTheme");
    }

    function initialThemeHandler() {
        if (isLocalStorageEmpty()) {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (prefersDarkScheme) {
                localStorage.setItem("isDarkTheme", `true`);
                document.querySelector("body").classList.add("dark");
                setIsDarkTheme(true);
            } else {
                localStorage.setItem("isDarkTheme", `false`);
                document.querySelector("body").classList.remove("dark");
                setIsDarkTheme(false);
            }
        } else {
            const localIsDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
            if (localIsDarkTheme) {
                document.querySelector("body").classList.add("dark");
            } else {
                document.querySelector("body").classList.remove("dark");
            }
            setIsDarkTheme(localIsDarkTheme);
        }
    }

    function toggleThemeHandler() {
        const localIsDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
        setIsDarkTheme(!localIsDarkTheme);
        toggleDarkClassToBody();
        setValueToLocalStorage();
    }

    function toggleDarkClassToBody() {
        document.querySelector("body").classList.toggle("dark");
    }

    function setValueToLocalStorage() {
        localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
