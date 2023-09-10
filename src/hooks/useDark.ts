import { useEffect } from "react";

import useLocalStorage from "./useLocalStorage";

const useDark = () => {
    const [mode, setMode] = useLocalStorage("darkMode");

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (!mode) setMode("light");

        const root = document.documentElement;

        if (mode === "light") {
            root.style.setProperty("--color-bg", "#213556");
            root.style.setProperty("--color-box", "#f0f0f0");
            root.style.setProperty("--color-text", "#f0f0f0");
        } else {
            root.style.setProperty("--color-bg", "#f0f0f0");
            root.style.setProperty("--color-box", "#213556");
            root.style.setProperty("--color-text", "#000000");
        }
    }, [mode]);

    return { mode, toggleMode };
};

export default useDark;
