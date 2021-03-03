import {Dispatch} from "redux";
import {authRequest} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATE = 'SET-USER-DATE';
const SET_ERROR = 'SET-ERROR'

type ActionsTypes =
    | ReturnType<typeof setAuthUserDate>
    | ReturnType<typeof setAppError>


export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    error: null | string,
}
const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,

};


export const authReducer = (state: authReducerType = initialState, action: ActionsTypes): authReducerType => {

    switch (action.type) {

        case SET_USER_DATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserDate = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATE,
    payload: {id: userId, email, login, isAuth}
} as const);
export const setAppError = (error:  null | string) => ({type: SET_ERROR,  payload: {error}} as const)

export const getAuthUserData = () => (dispatch: Dispatch<ActionsTypes>) => {
    return authRequest.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setAuthUserDate(id, email, login, true));
            }
        });
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => (dispatch) => {
    authRequest.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else  {
                dispatch(setAppError(response.data.messages.length ? response.data.messages[0] : 'Some error occurred'))
            }
        })
        .catch(error => {

        })
}

export const logout = () => (dispatch: Dispatch) => {
    authRequest.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDate(null, null, null, false))
            }
        })
}

