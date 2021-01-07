const SET_USER_DATE = 'SET-USER-DATE';

type ActionsTypes = ReturnType<typeof setAuthUserDate>


export type authReducerType = {
    id: number | null
    email: string | null
    login: string | null
}
const initialState: authReducerType = {
    id: null,
    email: null,
    login: null,
};


export const authReducer = (state: authReducerType = initialState, action: ActionsTypes): authReducerType => {

    switch (action.type) {

        case SET_USER_DATE: {
            return {
                ...state,
                ...action.date
            }
        }
        default:
            return state;
    }
}

export const setAuthUserDate = (userId: number, email: string, login: string) => ({type: SET_USER_DATE, date: {id:userId, email, login}} as const);


