import React, { useCallback } from "react";
import { Tooltip } from "antd";

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
                    {row.map((cell, j) => (
                        <Tooltip 
                            title={!!cell.name && !!cell.description ? `Тип: ${cell.name} \nОписание: ${cell.description}` : null} 
                            key={`${i}_${j}`}
                        >
                            <div 
                                className="map-cell"
                                onClick={() => handleSet(cell)}
                                style={{ backgroundColor: cell.color }} 
                            ></div>
                        </Tooltip>
                    ))}
                </div>
            )}
        </div>
    )
}