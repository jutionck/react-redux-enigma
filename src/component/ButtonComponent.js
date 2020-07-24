import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class ButtonComponent extends Component {
    render() {
        const { theme, toggleTheme } = this.context;

        return (
            <div>
                <button
                    style={{
                        height: 50,
                        width: 80,
                        ...theme,
                    }}
                    onClick={toggleTheme}
                >
                    Dark
                </button>
            </div>
        );
    }
}

export default ButtonComponent;

ButtonComponent.contextType = ThemeContext;