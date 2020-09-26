import React, { useCallback } from "react";
import { 
    Panel, 
    Button, 
    Group, 
    Div, 
    FormLayout, 
    Input, 
    FormLayoutGroup 
} from "@vkontakte/vkui";

import "./style.scss";
import { PANELS } from "../../shared/constants";

export const Auhtorization = (props) => {
    const { id, go } = props;

    const handleClick = useCallback(() => {
        !!go && go(PANELS.libraryList);
    }, [go])

    return (
        <Panel id={id}>
            <Group>
                <Div>
                    <h3 className="auth-title">Вход</h3>
                    <FormLayout>
                        <FormLayoutGroup top="Имя посетителя">
                            <Input placeholder="Введите имя" />
                        </FormLayoutGroup>
                        <Button size="xl" onClick={handleClick}>Войти</Button>
                    </FormLayout>
                </Div>
            </Group>
        </Panel>
    )
}