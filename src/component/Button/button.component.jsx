import React from "react";

import {ReactComponent as ArrowLogo} from "./arrow.svg";

import "./button.styles.scss"

const Button = ({text, white}) => {
    return (
      <button className={`button-design ${white ? "white" : "gradient"}`}>
        {text} <ArrowLogo />
      </button>
    );
}

export default Button