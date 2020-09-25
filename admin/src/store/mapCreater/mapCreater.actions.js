import { createAction } from "redux-actions";

export const MAP_CREATER_ACTION_TYPES = {
    SET_STUFF: "MAP_CREATER_ACTIONS.SET_STUFF",
    SET_LOAD: "MAP_CREATER_ACTIONS.SET_LOAD",
}

export const mapCreaterActions = {
    setStuff: createAction(MAP_CREATER_ACTION_TYPES.SET_STUFF),
    setLoad: createAction(MAP_CREATER_ACTION_TYPES.SET_LOAD),

    // ASYNC ACTION
    sendMap: () => async (dispatch) => {
        dispatch(mapCreaterActions.setLoad(true));

        try {

        } catch (error) {

        } finally {
            dispatch(mapCreaterActions.setLoad(false));
        }
    }
}