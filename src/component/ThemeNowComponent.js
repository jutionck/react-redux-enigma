import React from "react";
import { ThemeContext, themes } from "../context/ThemeContext";

const ThemeNowComponent = () => {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => {
                return (
                    <div
                        style={{
                            margin: "0 25vh 0 25vh",
                            ...theme,
                        }}
                    >
                        <h1>{theme === themes.dark ? "Dark" : "Light"}</h1>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
};

export default ThemeNowComponent;