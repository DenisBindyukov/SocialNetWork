const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_VALUE_PAGE = 'CHANGE_VALUE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


type ActionType =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeValuePage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleFetching>


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
    isFetching: boolean
}

const initialState = {
    user: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
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
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default :
            return state;
    }
}

export const follow = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const changeValuePage = (value: number) => ({type: CHANGE_VALUE_PAGE, value} as const);
export const setTotalCount= (num: number) => ({type: SET_TOTAL_COUNT, num} as const);
export const toggleFetching  = (isFetching: boolean) => ({type: TOGGLE_FETCHING, isFetching} as const);

