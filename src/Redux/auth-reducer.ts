const SET_USER_DATE = 'SET-USER-DATE';
const LOG_OFF_AUTH = 'LOG-OFF-AUTH';

type ActionsTypes =
    | ReturnType<typeof setAuthUserDate>
    | ReturnType<typeof logOffAuthAC>


export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

};


export const authReducer = (state: authReducerType = initialState, action: ActionsTypes): authReducerType => {

    switch (action.type) {

        case SET_USER_DATE: {
            return {
                ...state,
                ...action.date,
                isAuth: true
            }
        }
        case LOG_OFF_AUTH: {
            return {
                ...state,
                isAuth: !action.value
            }
        }
        default:
            return state;
    }
}

export const setAuthUserDate = (userId: number, email: string, login: string) => ({type: SET_USER_DATE, date: {id:userId, email, login}} as const);
export const logOffAuthAC = (value: boolean) => ( {type: LOG_OFF_AUTH, value} as const);

