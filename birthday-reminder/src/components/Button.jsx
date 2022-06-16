import React from "react";

const Button = (props) => {
    return <button 
    onClick={props.clearAll}>
    {props.clicked ? "Add all" : "Clear all"}
    </button>
}

export default Button;