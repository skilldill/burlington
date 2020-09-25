import React, { useCallback } from "react";

import "./style.scss";

const MapCell = (props) => {
    const { onClick } = props;

    const handleClick = useCallback(() => {

    }, [onClick])

    return (
        <div className="map-cell" onClick={handleClick}>

        </div>
    )
}

export const MapRedactor = (props) => {
    const {} = props;

    return (
        <div className="map-redactor">

        </div>
    )
}