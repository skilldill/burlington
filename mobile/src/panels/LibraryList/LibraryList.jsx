import React, { useCallback } from 'react';
import { Panel, PanelHeader, Group, Div, Banner, PanelHeaderButton } from '@vkontakte/vkui';

import { PANELS } from "../../shared/constants";

export const LibraryList = (props) => {
	const { id, go } = props;

	const handleGo = useCallback((panel) => {
		!!go && go(panel)
	}, [go])

	return (
		<Panel id={id}>
			<PanelHeader
				right={(
					<PanelHeaderButton 
						onClick={() => handleGo(PANELS.authorization)}
					>Выход</PanelHeaderButton>
				)}
			>Библиотеки</PanelHeader>
			<Group>
				<Div>
					<Banner
						header="Облостная библиотека"
						subheader="Улица Пушкина"
						asideMode="expand"
						onClick={() => handleGo(PANELS.libraryMap)}
					/>
					<Banner
						header="Районная библиотека"
						subheader="ул. Рижская"
						asideMode="expand"
						onClick={() => handleGo(PANELS.libraryMap)}
					/>
					<Banner
						header="Частная библиотека им. Онегина"
						subheader="Улица Ленина"
						asideMode="expand"
						onClick={() => handleGo(PANELS.libraryMap)}
					/>
					<Banner
						header="Президентская библиотека"
						subheader="Улица Менделеева"
						asideMode="expand"
						onClick={() => handleGo(PANELS.libraryMap)}
					/>
				</Div>
			</Group>
		</Panel>
	)
};

