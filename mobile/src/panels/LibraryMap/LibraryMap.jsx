import React, { useCallback } from "react";
import {Panel, PanelHeader, Group, PanelHeaderBack, Div, Button} from '@vkontakte/vkui';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

import { PANELS } from "../../shared/constants";
import { MapControl } from "./components";

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
                <Div>
                    <MapControl />
                    <Button size="xl" before={<Icon24Qr />}>Занять место</Button>
                </Div>
            </Group>
        </Panel>
    )
}