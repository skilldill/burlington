import React, { useState } from 'react';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { PANELS } from "./shared/constants";
import { LibraryList, LibraryMap, Auhtorization } from './panels/';

const App = () => {
	const [activePanel, setActivePanel] = useState(PANELS.authorization);

	return (
		<View activePanel={activePanel}>
			<Auhtorization id={PANELS.authorization} go={setActivePanel} />
			<LibraryList id={PANELS.libraryList} go={setActivePanel} />
			<LibraryMap id={PANELS.libraryMap} go={setActivePanel} />
		</View>
	);
}

export default App;