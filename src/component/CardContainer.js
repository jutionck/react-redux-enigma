import React, { Component } from "react";
import CardComponent from "./CardComponent";
import { ThemeContext, themes } from "../context/ThemeContext";

class CardContainer extends Component {
    state = {
        theme: themes.dark,
        toggleTheme: () => {
            this.setState({
                theme: this.state.theme === themes.dark ? themes.light : themes.dark,
            });
        },
    };

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <CardComponent />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default CardContainer;