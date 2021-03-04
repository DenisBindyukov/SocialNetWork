import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const SET_INITIALIZED = 'app/SET-INITIALIZED-SUCCESS';

type ActionsTypes =
    | ReturnType<typeof initializedSuccess>


export type appReducerType = {
    initialized: boolean
}
const initialState: appReducerType = {
    initialized: false
}


export const appReducer = (state: appReducerType = initialState, action: ActionsTypes): appReducerType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_INITIALIZED} as const);

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const initialize = (): ThunkType => (dispatch) => {
    const promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}