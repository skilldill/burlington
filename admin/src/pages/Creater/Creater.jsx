import React, { useCallback, useState } from "react";
import { PageHeader } from "antd";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { MapRedactor, Stuffer } from "./components";
import { mapCreater } from "../../store/mapCreater";

export const Creater = () => {
    const [currentStuff, setCurrentStuff] = useState(null);

    const dispatch = useDispatch();

    // SELECTORS
    const { area } = useSelector((state) => state.mapCreater);

    const handleSetStuff = useCallback((cell) => {
        if (!!currentStuff) {
            const cellStuff = { ...currentStuff, ...cell };
            dispatch(mapCreater.actions.setStuff(cellStuff));
        }
    }, [currentStuff, dispatch])

    return (
        <div className="creater">
            <PageHeader
                className="site-page-header"
                title="Редактор"
                subTitle="This is a subtitle"
            />
            <Stuffer onChange={setCurrentStuff} />
            <MapRedactor onSet={handleSetStuff} area={area} />
        </div>
    )
}