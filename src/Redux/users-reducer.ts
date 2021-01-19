import {Dispatch} from "redux";
import {apiRequest, UserType} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_VALUE_PAGE = 'CHANGE_VALUE_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

type ActionType =
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof changeValuePage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleFetching>
    | ReturnType<typeof toggleFollowingProgress>




export type UserReducerType = {
    user: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: UserReducerType = {
    user: [],
    pageSize: 20,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default :
            return state;
    }
}

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const changeValuePage = (value: number) => ({type: CHANGE_VALUE_PAGE, value} as const);
export const setTotalCount= (num: number) => ({type: SET_TOTAL_COUNT, num} as const);
export const toggleFetching  = (isFetching: boolean) => ({type: TOGGLE_FETCHING, isFetching} as const);
export const toggleFollowingProgress  = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const);

export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {

    dispatch(toggleFetching(true));
    apiRequest.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    })
};

export const unfollow = (userId: number) => (dispatch: Dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
        apiRequest.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
};

export const follow = (userId: number) => (dispatch: Dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    apiRequest.follow(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
           dispatch(toggleFollowingProgress(false, userId));
        })
};