import {Dispatch} from "redux";
import {authRequest, securityAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATE = 'auth/SET-USER-DATE';
const SET_ERROR = 'auth/SET-ERROR';
const GET_CAPTCHA_URL = 'auth/GET-CAPTCHA-URL';
const LOGOUT = 'auth/LOGOUT';

type ActionsTypes =
    | ReturnType<typeof setAuthUserDate>
    | ReturnType<typeof setAppError>
    | SetLogoutActionCreator

export type SetLogoutActionCreator = ReturnType<typeof logoutActionCreator>


export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    error: null | string,
    captchaUrl: null | string
}
const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: null,
    captchaUrl: null

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
        case LOGOUT: {
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
export const setAppError = (error: null | string) => ({type: SET_ERROR, payload: {error}} as const)
export const logoutActionCreator = () => ({type: LOGOUT, payload: {isAuth: false}} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await authRequest.auth()

    try {
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserDate(id, email, login, true));
        }
    } catch {

    }
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const response = await authRequest.login(email, password, rememberMe)
    try {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            dispatch(setAppError(response.data.messages.length ? response.data.messages[0] : 'Some error occurred'))
        }
    } catch {

    }
}

export const logout = () => async (dispatch: Dispatch<SetLogoutActionCreator>) => {
    const response = await authRequest.logout()
    try {
        if (response.data.resultCode === 0) {
            dispatch(logoutActionCreator())
        }
    } catch {

    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    try {

    } catch {

    }
}


