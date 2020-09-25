import React, { useCallback } from "react";
import { Button, Radio } from "antd";

import "./style.scss";
import { STUFFS } from "../../../../shared/constants";

export const Stuffer = (props) => {
    const { onChange } = props;
    
    const handleChange = useCallback(({ target }) => {
        console.log(123);
        const { value } = target;
        !!onChange && onChange(value);
    }, [onChange])

    return (
        <div className="stuffer">
            <Radio.Group onChange={handleChange}>
                {STUFFS.map((stuff, i) =>
                    <Radio.Button 
                        value={stuff}
                        key={i}
                    >{stuff.name}</Radio.Button>
                )}
            </Radio.Group>
            <Button type="default" onClick={() => handleChange({ target: { value: { type: -1 } } })} danger>Удалить</Button>
        </div>
    )
}