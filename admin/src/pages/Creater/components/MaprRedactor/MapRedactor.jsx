import React, { useCallback } from "react";

import "./style.scss";

export const MapRedactor = (props) => {
    const { onSet, area } = props;
    
    const handleSet = useCallback((cell) => {
        !!onSet && onSet(cell);
    }, [onSet])

    return (
        <div className="map-redactor">
            {area.map((row, i) => 
                <div className="map-row"key={i}>
                    {row.map((cell, j) => 
                        <div 
                            className="map-cell"
                            key={`${i}_${j}`}
                            onClick={() => handleSet(cell)}
                            style={{ backgroundColor: cell.color }} 
                        ></div>
                    )}
                </div>
            )}
        </div>
    )
}