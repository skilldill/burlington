import React, { useCallback } from "react";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import {Panel, PanelHeader, Group, PanelHeaderBack, Div, Button} from '@vkontakte/vkui';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';

import { PANELS } from "../../shared/constants";
import { MapControl } from "./components";

export const LibraryMap = (props) => {
    const [code, setCode] = useState('');

    const { id, go } = props;

    const handleBack = useCallback(() => {
        !!go && go(PANELS.libraryList);
    }, [go])

    const openBarCode = useCallback(async () => {
        const data = await BarcodeScanner.scan();
        setCode(`Barcode data: ${data.text}`);
    }, [setCode])

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={handleBack} />}
            >Карта библиотеки</PanelHeader>
            <Group>
                <Div>
                    <MapControl />
                    <Button 
                        size="xl" 
                        before={<Icon24Qr />}
                        onClick={openBarCode}
                    >Занять место</Button>
                </Div>
            </Group>
        </Panel>
    )
}