import React from "react";

import {ReactComponent as ArrowLogo} from "./arrow.svg";

import "./button.styles.scss"

const Button = ({text}) => {
    return (
      <button className="button-design gradient">
        {text} <ArrowLogo />
      </button>
    );
}

export default Button