import React, { useMemo } from "react";

import "./style.scss";
import { createArea } from "../../../../shared/utils";

export const MapControl = () => {
    const area = useMemo(() => createArea(30, 30), []);
    return (
        <div className="map-control">
            <div className="map-container">
                {area.map((row, i) => 
                    <div className="map-row"key={i}>
                        {row.map((cell, j) => (
                            <div 
                                key={`${i}_${j}`}
                                className="map-cell"
                                style={{ backgroundColor: cell.color }} 
                            ></div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}