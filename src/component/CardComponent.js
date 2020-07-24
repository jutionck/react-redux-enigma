import React from "react";
import ButtonTwoComponent from "./ButtonTwoComponent";
import ThemeNowComponent from "./ThemeNowComponent";

const CardComponent = (props) => {
    return (
        <div>
            <ThemeNowComponent />
            <ButtonTwoComponent/>
        </div>
    )
}


export default CardComponent;