const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAc>


type PhotosType = {
    small: any,
    large: any
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: any,
    photos: PhotosType
    status: any,
    followed: boolean
}

export type UserReducerType = {
    user: Array<UserType>
}

const initialState = {
    user: []
};

export const UserReducer = (state: UserReducerType = initialState, action: ActionType) => {

    switch (action.type) {

        case FOLLOW :
            debugger
            return {
                ...state,
                user: state.user.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                user: state.user.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state,
                user: [...state.user, ...action.users]
            }

        default :
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAc = (users: Array<UserType>) => ({type: SET_USERS, users} as const);

