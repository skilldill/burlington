import React, { useCallback, useState } from "react";
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

    const [name, setName] = useState('');

    const handleClick = useCallback(() => {
        if (!!name.length) {
            !!go && go(PANELS.libraryList);
        }
    }, [go])

    const handleInput = useCallback(({ currentTarget }) => {
        const { value } = currentTarget;
        setName(value);
    }, [setName])

    return (
        <Panel id={id}>
            <Group>
                <Div>
                    <h3 className="auth-title">Вход</h3>
                    <FormLayout>
                        <FormLayoutGroup top="Имя посетителя">
                            <Input placeholder="Введите имя" onChange={handleInput} />
                        </FormLayoutGroup>
                        <Button size="xl" onClick={handleClick}>Войти</Button>
                    </FormLayout>
                </Div>
            </Group>
        </Panel>
    )
}