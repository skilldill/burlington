import React, { useCallback } from 'react';
import { Panel, PanelHeader, Group, Div, Banner } from '@vkontakte/vkui';

import { PANELS } from "../../shared/constants";

export const LibraryList = (props) => {
	const { id, go } = props;

	const handleClick = useCallback((panel) => {
		!!go && go(panel)
	}, [go])

	return (
		<Panel id={id}>
			<PanelHeader>Библиотеки</PanelHeader>
			<Group>
				<Div>
					<Banner
						header="Облостная библиотека"
						subheader="Улица Пушкина"
						asideMode="expand"
						onClick={() => handleClick(PANELS.libraryMap)}
					/>
					<Banner
						header="Районная библиотека"
						subheader="ул. Рижская"
						asideMode="expand"
						onClick={() => handleClick(PANELS.libraryMap)}
					/>
					<Banner
						header="Частная библиотека им. Онегина"
						subheader="Улица Ленина"
						asideMode="expand"
						onClick={() => handleClick(PANELS.libraryMap)}
					/>
					<Banner
						header="Президентская библиотека"
						subheader="Улица Менделеева"
						asideMode="expand"
						onClick={() => handleClick(PANELS.libraryMap)}
					/>
				</Div>
			</Group>
		</Panel>
	)
};

