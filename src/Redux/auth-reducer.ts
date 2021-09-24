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
    | ReturnType<typeof getCaptcha>
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
        case GET_CAPTCHA_URL: {
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
export const getCaptcha = (captchaUrl: null | string) => ({type: GET_CAPTCHA_URL, payload: {captchaUrl}} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {

    try {
        const response = await authRequest.auth()
        debugger
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserDate(id, email, login, true));
        }
    } catch(error) {
        dispatch(setAppError(error.messages))
    }
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string): ThunkType => async (dispatch) => {

    try {
        const response = await authRequest.login(email, password, rememberMe, captchaUrl)
        if (response.data.resultCode === 0) {
            dispatch(getCaptcha(null))
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            dispatch(setAppError(response.data.messages.length ? response.data.messages[0] : 'Some error occurred'))
        }
    } catch(error) {
        dispatch(setAppError(error.messages))
    }
}

export const logout = () => async (dispatch: Dispatch) => {

    try {
        const response = await authRequest.logout()
        if (response.data.resultCode === 0) {
            dispatch(logoutActionCreator())
        }
    } catch(error) {
        dispatch(setAppError(error.messages))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptcha(captchaUrl))
}


