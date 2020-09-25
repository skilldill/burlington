import { handleActions } from "redux-actions";

import { createArea } from "../../shared/utils";
import { MAP_CREATER_ACTION_TYPES } from "./mapCreater.actions";

const area = createArea(20, 20);

const initialState = {
    area,
    load: false,
}

const setLoad = (state, action) => ({
    ...state,
    load: action.payload
})

const setStuff = (state, action) => {
    const { x, y } = action.payload;
    const prepareArea = [...state.area];
    prepareArea[y][x] = action.payload;

    return {
        ...state,
        area: prepareArea
    }
}

const mapState = {
    [MAP_CREATER_ACTION_TYPES.SET_LOAD]: setLoad,
    [MAP_CREATER_ACTION_TYPES.SET_STUFF]: setStuff
}

export const mapCreaterReducer = handleActions(mapState, initialState);