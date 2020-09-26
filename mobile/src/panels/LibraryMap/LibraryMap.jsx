import React, { useCallback } from "react";
import {Panel, PanelHeader, Group, PanelHeaderBack} from '@vkontakte/vkui';

import { PANELS } from "../../shared/constants";

export const LibraryMap = (props) => {
    const { id, go } = props;

    const handleBack = useCallback(() => {
        !!go && go(PANELS.libraryList);
    }, [go])

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={handleBack} />}
            >Карта библиотеки</PanelHeader>
            <Group>

            </Group>
        </Panel>
    )
}