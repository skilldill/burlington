import React, { useCallback, useState } from "react";
import { PageHeader, Modal, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { MapRedactor, Stuffer } from "./components";
import { mapCreater } from "../../store/mapCreater";

export const Creater = () => {
    const [showModal, setShowModal] = useState(false);

    // STUFF STATE
    const [currentStuff, setCurrentStuff] = useState(null);
    const [currentPosition, setCurrentPosition] = useState(null);

    const [form] = Form.useForm();
    const dispatch = useDispatch();

    // SELECTORS
    const { area } = useSelector((state) => state.mapCreater);

    const handleOk = useCallback(() => {
        const description = form.getFieldValue('description');
        if (!!description && !!description.length) {
            const cellStuff = { 
                description,
                ...currentStuff, 
                ...currentPosition 
            };
            dispatch(mapCreater.actions.setStuff(cellStuff));
            setShowModal(false);
            form.resetFields();
        }
    }, [currentStuff, currentPosition, dispatch])

    const handleSetStuff = useCallback((cell) => {
        if (!!currentStuff) {
            // Если тип объекта стена или очистить
            if (currentStuff.type === 0 || currentStuff.type === -1) {
                let cellStuff;

                if (currentStuff.type === 0) {
                    cellStuff = { ...currentStuff, ...cell };
                }

                if (currentStuff.type === -1) {
                    const { x, y } = cell;
                    cellStuff = { x, y };
                }

                dispatch(mapCreater.actions.setStuff(cellStuff));
            } else {
                setShowModal(true);
                setCurrentPosition(cell);
            }
        }
    }, [currentStuff, currentPosition, setShowModal, dispatch])

    return (
        <>
            <div className="creater">
                <PageHeader
                    className="site-page-header"
                    title="Редактор"
                />
                <Stuffer onChange={setCurrentStuff} />
                <MapRedactor onSet={handleSetStuff} area={area} />
                
            </div>
            <Modal 
                title="Описание объекта"
                visible={showModal}
                onOk={handleOk}
                onCancel={() => setShowModal(false)}
            >
                <Form form={form}>
                    <Form.Item name="description">
                        <Input placeholder="описание" autoComplete="off"/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}