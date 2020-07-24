import React, { createContext } from "react";

const themes = {
    light: {
        backgroundColor: "#ffffff",
        color: "#121212",
        borderRadius: "7px",
        border: "1px solid #121212",
    },
    dark: {
        backgroundColor: "#121212",
        color: "#ffffff",
        borderRadius: "7px",
        border: "1px solid #ffffff",
    },
};

const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

export { ThemeContext, themes };