import React from "react"

import "./benefit.styles.scss";

const Benefit = ({logo, benefit}) => {
    return(
        <p className="benefit-block">
            {logo}
            {benefit}
        </p>
    )
}

export default Benefit