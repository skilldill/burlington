import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import { PANELS } from "./shared/constants";
import { LibraryList, LibraryMap, Auhtorization } from './panels/';

const App = () => {
	const [activePanel, setActivePanel] = useState(PANELS.authorization);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	return (
		<View activePanel={activePanel}>
			<Auhtorization id={PANELS.authorization} go={setActivePanel} />
			<LibraryList id={PANELS.libraryList} go={setActivePanel} />
			<LibraryMap id={PANELS.libraryMap} go={setActivePanel} />
		</View>
	);
}

export default App;

// FOR EXAMPLE FATCH USER
/**
 * useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	
 */