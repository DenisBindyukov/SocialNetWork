const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_VALUE_PAGE = 'CHANGE_VALUE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';


type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAc>
    | ReturnType<typeof changeValuePagesAC>
    | ReturnType<typeof setTotalCountAC>


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
    pageSize: number
    totalCount: number
    currentPage: number
}

const initialState = {
    user: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1
};

export const UserReducer = (state: UserReducerType = initialState, action: ActionType): UserReducerType => {

    switch (action.type) {

        case FOLLOW :
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
                user: [...state.user = action.users]
            }
        case CHANGE_VALUE_PAGE: {
            return {
                ...state,
                currentPage: action.value
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.num
            }
        }

        default :
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAc = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const changeValuePagesAC = (value: number) => ({type: CHANGE_VALUE_PAGE, value} as const);
export const setTotalCountAC  = (num: number) => ({type: SET_TOTAL_COUNT, num} as const);

