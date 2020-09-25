import React from 'react';
import { RouteRoullete } from "./router";
import { Provider } from "react-redux";

import { store } from "./store";

export const App = () => (
    <Provider store={store}>
        <RouteRoullete />
    </Provider>
)
