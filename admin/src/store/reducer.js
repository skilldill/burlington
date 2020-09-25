import { combineReducers } from "redux";

import { mapCreater } from "./mapCreater";

export const reducer = combineReducers({
    mapCreater: mapCreater.reducer
});